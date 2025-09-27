"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Header from "./Header.jsx";
import ReflectionModal from "./ReflectionModal.jsx";
import ProgressTabs from "./ProgressTabs.jsx";
import { parseYmdLocal, toYmd, normalizeToYmd } from "../utils/date.js";

export default function JourneyBoard() {
  const [days, setDays] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [startDate, setStartDate] = useState(toYmd(new Date()));
  const [isClient, setIsClient] = useState(false);
  const [isConfigured, setIsConfigured] = useState(false);
  const [totalDays, setTotalDays] = useState(90);
  const [isLoading, setIsLoading] = useState(true);

  // Efeito para carregar o estado para inicializar a jornada
  const loadJourney = async () => {
    try {
      console.log("Carregando jornada do banco de dados...");
      const response = await fetch("/api/journey");
      const data = await response.json();
      console.log("Resposta da API:", data);

      if (data.journey) {
        const { startDate, totalDays, days } = data.journey;
        setStartDate(startDate);
        setTotalDays(totalDays);
        setDays(days);
        setIsConfigured(true);
      }
    } catch (error) {
      console.error("Erro ao carregar jornada:", error);
      // Em caso de erro, mostrar tela de configuração
      setIsConfigured(false);
    } finally {
      // Sempre definir loading como false ao final
      setIsLoading(false);
    }
  };

  const createJourney = async (startDate, totalDays) => {
    try {
      const startDateYmd = normalizeToYmd(startDate);

      const response = await fetch("/api/journey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ startDateYmd, totalDays }),
      });

      const data = await response.json();

      // Verificar se houve erro na resposta
      if (!response.ok) {
        alert(`Erro: ${data.error || "Erro desconhecido"}`);
        return null;
      }

      if (data.journey) {
        setStartDate(data.journey.startDate);
        setTotalDays(data.journey.totalDays);

        const compatibleDays = data.journey.days.map((day) => ({
          ...day,
          isComplete: day.isCompleted,
        }));

        console.log("Dias com compatibilidade:", compatibleDays);
        setDays(compatibleDays);

        setIsConfigured(true);
      }
    } catch (error) {
      console.error("Erro ao criar jornada:", error);
    }
  };

  const updateDay = async (dayNumber, dayData) => {
    try {
      console.log("Atualizando dia:", dayNumber, "com dados:", dayData);

      const response = await fetch(`/api/journey/day/${dayNumber}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dayData),
      });

      const data = await response.json();
      console.log("Resposta da atualização:", data);

      // Verificar se a resposta foi bem-sucedida
      if (!response.ok) {
        throw new Error(data.error || `Erro HTTP: ${response.status}`);
      }

      // Verificar se retornou o dia atualizado
      if (data.day) {
        // Atualizar o estado local com os dados retornados pela API
        setDays((prevDays) => {
          const updatedDays = prevDays.map((day) => {
            if ((day.dayNumber || day.id) === dayNumber) {
              // Usar os dados do banco + manter compatibilidade
              return {
                ...day,
                ...data.day,
                isComplete: data.day.isCompleted, // Compatibilidade com dados antigos
                isCompleted: data.day.isCompleted, // Dados novos
                reflection: data.day.reflection,
                difficulty: data.day.difficulty,
                completedAt: data.day.completedAt,
              };
            }
            return day;
          });
          console.log(
            "Dia atualizado:",
            dayNumber,
            "Estado após atualização:",
            updatedDays.find((d) => (d.dayNumber || d.id) === dayNumber)
          );
          return updatedDays;
        });

        return data; // Retornar os dados para indicar sucesso
      } else {
        throw new Error("API não retornou o dia atualizado");
      }
    } catch (error) {
      console.error("Erro ao atualizar dia:", error);
      throw error; // Re-throw para que o handleCompleteDay possa tratar
    }
  };

  const resetJourney = async () => {
    try {
      const response = await fetch("/api/journey", { method: "DELETE" });

      if (response.ok) {
        // Resetar estados
        setDays([]);
        setStartDate(null);
        setTotalDays(90);
        setIsModalOpen(false);
        setSelectedDay(null);
        setIsConfigured(false);
      }
    } catch (error) {
      console.error("Erro ao resetar jornada:", error);
    }
  };

  useEffect(() => {
    setIsClient(true);
    // Adiciona o script do confetti ao head do documento
    if (
      !document.querySelector(
        'script[src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js"]'
      )
    ) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js";
      script.async = true;
      document.head.appendChild(script);
    }

    // Carregar jornada do banco de dados (sem aguardar para não bloquear renderização)
    loadJourney().catch(console.error);
  }, []);

  // Função para inicializar ou reiniciar a jornada
  const initializeJourney = async (
    customStartDate = null,
    customTotalDays = totalDays
  ) => {
    const newStartDateYmd =
      typeof customStartDate === "string"
        ? customStartDate
        : toYmd(customStartDate || new Date());

    console.log("data inicial: ", newStartDateYmd);

    await createJourney(newStartDateYmd, customTotalDays);
  };

  const handleResetJourney = async () => {
    const confirmationWord = "CITRINO";
    const userInput = window.prompt(
      `⚠️ ATENÇÃO: Esta ação é irreversível e apagará todo o seu progresso.\n\n` +
        `Para confirmar, digite a palavra secreta abaixo:`
    );

    if (userInput === confirmationWord) {
      console.log("Reiniciando jornada...");
      await resetJourney();
      console.log("Jornada resetada com sucesso.");
    } else if (userInput !== null) {
      // O usuário digitou algo, mas não a palavra correta
      alert("Palavra de confirmação incorreta. A jornada não foi reiniciada.");
    }
    // Se userInput for null, o usuário clicou em "Cancelar", então não fazemos nada.
  };

  // Função para tocar som de conquista melhorado
  const playAchievementSound = () => {
    if (typeof window !== "undefined") {
      try {
        const audioContext = new (window.AudioContext ||
          window.webkitAudioContext)();

        // Melodia de vitória inspirada em jogos
        const melody = [
          { freq: 523.25, time: 0.0, duration: 0.15 }, // C5
          { freq: 659.25, time: 0.15, duration: 0.15 }, // E5
          { freq: 783.99, time: 0.3, duration: 0.15 }, // G5
          { freq: 1046.5, time: 0.45, duration: 0.4 }, // C6 (mais longa)
        ];

        melody.forEach((note) => {
          // Oscilador principal
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();

          // Segundo oscilador para harmonia
          const harmony = audioContext.createOscillator();
          const harmonyGain = audioContext.createGain();

          // Conectar ao destino
          oscillator.connect(gainNode);
          harmony.connect(harmonyGain);
          gainNode.connect(audioContext.destination);
          harmonyGain.connect(audioContext.destination);

          // Configurar frequências
          oscillator.frequency.setValueAtTime(
            note.freq,
            audioContext.currentTime + note.time
          );
          harmony.frequency.setValueAtTime(
            note.freq * 1.5,
            audioContext.currentTime + note.time
          ); // Quinta acima

          // Tipo de onda para som mais suave
          oscillator.type = "triangle";
          harmony.type = "sine";

          // Envelope ADSR mais elaborado
          const startTime = audioContext.currentTime + note.time;
          const attackTime = 0.02;
          const decayTime = 0.05;
          const sustainLevel = 0.1;

          // Nota principal
          gainNode.gain.setValueAtTime(0, startTime);
          gainNode.gain.linearRampToValueAtTime(0.2, startTime + attackTime);
          gainNode.gain.linearRampToValueAtTime(
            sustainLevel,
            startTime + attackTime + decayTime
          );
          gainNode.gain.exponentialRampToValueAtTime(
            0.001,
            startTime + note.duration
          );

          // Harmonia mais suave
          harmonyGain.gain.setValueAtTime(0, startTime);
          harmonyGain.gain.linearRampToValueAtTime(
            0.08,
            startTime + attackTime
          );
          harmonyGain.gain.linearRampToValueAtTime(
            0.04,
            startTime + attackTime + decayTime
          );
          harmonyGain.gain.exponentialRampToValueAtTime(
            0.001,
            startTime + note.duration
          );

          // Tocar as notas
          oscillator.start(startTime);
          harmony.start(startTime);
          oscillator.stop(startTime + note.duration);
          harmony.stop(startTime + note.duration);
        });

        // Efeito de "ding" final
        setTimeout(() => {
          const ding = audioContext.createOscillator();
          const dingGain = audioContext.createGain();

          ding.connect(dingGain);
          dingGain.connect(audioContext.destination);

          ding.frequency.setValueAtTime(1318.51, audioContext.currentTime); // E6
          ding.type = "sine";

          dingGain.gain.setValueAtTime(0, audioContext.currentTime);
          dingGain.gain.linearRampToValueAtTime(
            0.15,
            audioContext.currentTime + 0.01
          );
          dingGain.gain.exponentialRampToValueAtTime(
            0.001,
            audioContext.currentTime + 0.5
          );

          ding.start(audioContext.currentTime);
          ding.stop(audioContext.currentTime + 0.5);
        }, 800);
      } catch (error) {
        console.log("Som não disponível neste navegador");
      }
    }
  };

  // Som suave de feedback para cliques
  const playClickSound = () => {
    if (typeof window !== "undefined") {
      try {
        const audioContext = new (window.AudioContext ||
          window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.type = "sine";

        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(
          0.05,
          audioContext.currentTime + 0.01
        );
        gainNode.gain.exponentialRampToValueAtTime(
          0.001,
          audioContext.currentTime + 0.1
        );

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
      } catch (error) {
        // Som silencioso se não suportado
      }
    }
  };

  // Animação de confete dourado
  const triggerConfetti = () => {
    if (typeof window.confetti === "function") {
      // Confetti dourado para celebrar
      window.confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ["#FFD700", "#FFA500", "#FFFF00", "#FFE55C", "#FFB347"],
        shapes: ["star", "circle"],
        scalar: 1.2,
      });

      // Segundo burst após um delay
      setTimeout(() => {
        window.confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ["#FFD700", "#FFA500"],
          shapes: ["star"],
        });
      }, 300);
    }
  };

  const handleDayClick = (day) => {
    // Verificar se o dia não é futuro (não permite abrir modal de dias futuros)
    if (!startDate) return;

    // Se startDate é uma string "YYYY-MM-DD", usar parseYmdLocal
    let baseDate;
    if (typeof startDate === "string") {
      baseDate = parseYmdLocal(startDate);
    } else {
      baseDate = new Date(startDate);
    }

    const dayDate = new Date(baseDate);
    dayDate.setDate(baseDate.getDate() + day.dayNumber - 1);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Zerar horas para comparar apenas a data
    dayDate.setHours(0, 0, 0, 0);

    // Se o dia é futuro (maior que hoje), não abre o modal
    if (dayDate > today) {
      return;
    }

    setSelectedDay(day);
    setIsModalOpen(true);
  };

  const handleCloseModal = async (shouldSave = false) => {
    // Salva as mudanças apenas se shouldSave for true
    if (shouldSave && selectedDay && (selectedDay.reflection || selectedDay.difficulty)) {
      const dayNumberToUpdate = selectedDay.dayNumber || selectedDay.id;
      await updateDay(dayNumberToUpdate, {
        isCompleted: selectedDay.isCompleted || selectedDay.isComplete,
        reflection: selectedDay.reflection,
        difficulty: selectedDay.difficulty,
      });
    }
    setIsModalOpen(false);
    setSelectedDay(null);
  };

  const handleReflectionChange = (e) => {
    if (selectedDay) {
      const updatedDay = { ...selectedDay, reflection: e.target.value };
      setSelectedDay(updatedDay);
    }
  };

  const handleDifficultyChange = (difficulty) => {
    if (selectedDay) {
      const updatedDay = { ...selectedDay, difficulty };
      setSelectedDay(updatedDay);
    }
  };

  const handleCompleteDay = async () => {
    if (selectedDay) {
      // Validar se dificuldade foi selecionada (obrigatória)
      if (!selectedDay.difficulty) {
        alert(
          "⚠️ Por favor, selecione o nível de dificuldade antes de concluir o dia!"
        );
        return;
      }

      // Som de feedback imediato
      playClickSound();

      const dayNumberToUpdate = selectedDay.dayNumber || selectedDay.id;

      // 1. Atualizar estado local IMEDIATAMENTE para feedback visual instantâneo
      const completedAtString = toYmd(new Date()); // Formato YYYY-MM-DD

      setDays((prevDays) =>
        prevDays.map((day) =>
          (day.dayNumber || day.id) === dayNumberToUpdate
            ? {
                ...day,
                isCompleted: true,
                isComplete: true, // Garantir ambos os campos para compatibilidade
                difficulty: selectedDay.difficulty,
                reflection: selectedDay.reflection,
                completedAt: completedAtString,
              }
            : day
        )
      );

      // 2. Atualizar selectedDay também
      const updatedSelectedDay = {
        ...selectedDay,
        isCompleted: true,
        isComplete: true,
        difficulty: selectedDay.difficulty,
        reflection: selectedDay.reflection,
        completedAt: completedAtString,
      };
      setSelectedDay(updatedSelectedDay);

      // 3. Salvar no banco de dados PRIMEIRO (aguardar para garantir que salvou)
      try {
        await updateDay(dayNumberToUpdate, {
          isCompleted: true,
          reflection: selectedDay.reflection,
          difficulty: selectedDay.difficulty,
        });

        console.log("Dia salvo com sucesso no banco!");
      } catch (error) {
        console.error("Erro ao salvar no banco:", error);

        // Se der erro, reverter o estado local
        setDays((prevDays) =>
          prevDays.map((day) =>
            (day.dayNumber || day.id) === dayNumberToUpdate
              ? {
                  ...day,
                  isCompleted: false,
                  isComplete: false,
                }
              : day
          )
        );

        // Mostrar erro ao usuário
        alert("❌ Erro ao salvar. Tente novamente.");
        return; // Não fechar modal nem celebrar se deu erro
      }

      // 4. DEPOIS de salvar com sucesso, fechar modal
      setIsModalOpen(false);
      setSelectedDay(null);

      // 5. Celebração com delay para melhor experiência
      setTimeout(() => {
        triggerConfetti();
        playAchievementSound();
      }, 300);
    }
  };

  const getDayDate = useCallback(
    (dayIndex) => {
      if (!startDate) return "";

      // Se startDate é uma string "YYYY-MM-DD", usar parseYmdLocal
      let baseDate;
      if (typeof startDate === "string") {
        baseDate = parseYmdLocal(startDate);
      } else {
        // Se for um Date object (compatibilidade)
        baseDate = new Date(
          startDate.getFullYear(),
          startDate.getMonth(),
          startDate.getDate()
        );
      }

      // Adicionar os dias (dayIndex já é 1-based, então subtraímos 1)
      const date = new Date(baseDate);
      date.setDate(baseDate.getDate() + dayIndex - 1);

      return date.toLocaleDateString("pt-BR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
    [startDate]
  );

  const completedDays = useMemo(() => {
    return days.filter((day) => day.isComplete || day.isCompleted).length;
  }, [days]);

  if (!isClient || isLoading) {
    // Renderiza uma bela tela de carregamento
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center relative overflow-hidden">
        {/* Background com efeitos animados */}
        <div className="absolute inset-0">
          {/* Partículas flutuantes */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400/60 rounded-full animate-ping" style={{animationDelay: '0s'}} />
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/60 rounded-full animate-ping" style={{animationDelay: '0.5s'}} />
          <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-ping" style={{animationDelay: '1s'}} />
          <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-pink-400/60 rounded-full animate-ping" style={{animationDelay: '1.5s'}} />
          <div className="absolute top-1/5 right-2/3 w-1 h-1 bg-yellow-400/60 rounded-full animate-ping" style={{animationDelay: '2s'}} />
          
          {/* Luzes de fundo suaves */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-500/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '0.7s'}} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1.4s'}} />
        </div>

        {/* Container principal */}
        <div className="relative z-10 text-center max-w-md mx-auto p-8">
          {/* Ícone principal animado */}
          <div className="relative mb-8">
            {/* Círculo externo rotativo */}
            <div className="w-24 h-24 mx-auto relative">
              <div className="absolute inset-0 border-4 border-emerald-400/30 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-t-emerald-400 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
              <div className="absolute inset-2 border-2 border-purple-400/30 rounded-full"></div>
              <div className="absolute inset-2 border-2 border-b-purple-400 border-l-transparent border-t-transparent border-r-transparent rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
              
              {/* Ícone central */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-3xl animate-bounce">
                  ⭐
                </div>
              </div>
            </div>
          </div>

          {/* Texto principal */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2 animate-pulse">
              Carregando sua jornada...
            </h3>
            <p className="text-gray-300 text-sm animate-fade-in">
              Preparando sua experiência de transformação
            </p>
          </div>

          {/* Barra de progresso animada */}
          <div className="w-full max-w-xs mx-auto mb-4">
            <div className="w-full h-2 bg-gray-700/50 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 rounded-full animate-pulse relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              </div>
            </div>
          </div>

          {/* Pontos de progresso */}
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
            <div className="w-2 h-2 bg-emerald-400/60 rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
            <div className="w-2 h-2 bg-emerald-400/40 rounded-full animate-ping" style={{animationDelay: '0.6s'}}></div>
          </div>
        </div>
      </div>
    );
  }

  // Tela de configuração inicial
  if (!isConfigured) {
    return <InitialConfigScreen onConfigComplete={initializeJourney} />;
  }

  return (
    <>
      <div className="min-h-screen relative overflow-x-hidden font-sans">
        {/* Background com luzes vibrantes animadas */}
        <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
          {/* Luzes de fundo animadas */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Luz principal roxa */}
            <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute top-10 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />

            {/* Luz ciano direita */}
            <div
              className="absolute top-40 right-32 w-80 h-80 bg-cyan-400/25 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="absolute top-20 right-20 w-64 h-64 bg-blue-400/15 rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: "1.5s" }}
            />

            {/* Luz rosa centro */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "0.7s" }}
            />

            {/* Luzes amarelas inferiores */}
            <div
              className="absolute bottom-32 left-40 w-72 h-72 bg-yellow-400/25 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "0.3s" }}
            />
            <div
              className="absolute bottom-20 right-40 w-80 h-80 bg-orange-400/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1.2s" }}
            />

            {/* Luzes verdes laterais */}
            <div
              className="absolute top-1/3 left-10 w-64 h-64 bg-emerald-400/20 rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: "0.9s" }}
            />
            <div
              className="absolute bottom-1/3 right-10 w-72 h-72 bg-teal-400/15 rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: "0.6s" }}
            />
          </div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                                 radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                                 radial-gradient(circle at 75% 25%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
                                 radial-gradient(circle at 25% 75%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
                                 radial-gradient(circle at 75% 75%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)
                               `,
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            <Header
              completedDays={completedDays}
              totalDays={totalDays}
              startDate={startDate}
            />
            <main>
              <ProgressTabs
                completedDays={completedDays}
                days={days}
                handleDayClick={handleDayClick}
                startDate={startDate}
                totalDays={totalDays}
              />

              {/* Botão de Reset - Posicionado discretamente no final */}
              <div className="mt-16 mb-8 flex justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={handleResetJourney}
                  className="text-xs text-gray-500 hover:text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/5 transition-all duration-300 cursor-pointer border border-gray-800/30 hover:border-red-400/30"
                >
                  🔄 Reiniciar Jornada
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>

      <ReflectionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedDay={selectedDay}
        getDayDate={getDayDate}
        handleReflectionChange={handleReflectionChange}
        handleDifficultyChange={handleDifficultyChange}
        handleCompleteDay={handleCompleteDay}
      />
    </>
  );
}

// Componente para configuração inicial da jornada
function InitialConfigScreen({ onConfigComplete }) {
  const [startDate, setStartDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [totalDays, setTotalDays] = useState(90);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStage, setLoadingStage] = useState(0);

  const loadingMessages = [
    { icon: "🚀", text: "Preparando foguetes..." },
    { icon: "⛽", text: "Abastecendo combustível..." },
    { icon: "🧭", text: "Calibrando navegação..." },
    { icon: "✨", text: "Sincronizando estrelas..." },
    { icon: "🌌", text: "Abrindo portal dimensional..." },
    { icon: "🎯", text: "Definindo coordenadas..." },
    { icon: "🔥", text: "Iniciando sua jornada!" }
  ];

  const handleStartJourney = async () => {
    setIsLoading(true);
    
    // Simular processo de carregamento com etapas
    for (let stage = 0; stage < loadingMessages.length; stage++) {
      setLoadingStage(stage);
      await new Promise(resolve => setTimeout(resolve, 800));
    }
    
    // Executar a função real de criação da jornada
    await onConfigComplete(startDate, totalDays);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background com luzes vibrantes */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
        {/* Luzes de fundo animadas */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-400/25 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
        </div>
      </div>

      {/* Conteúdo da configuração */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          {/* Card de configuração */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h1 className="text-4xl font-black text-white mb-4">
                Configure Sua Jornada
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Defina quando sua jornada começará e por quantos dias você quer
                se desafiar.
              </p>
            </div>

            {/* Formulário */}
            <div className="space-y-6">
              {/* Data de início */}
              <div>
                <label className="block text-lg font-medium text-white mb-3">
                  📅 Data de Início
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-white focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 transition-all duration-300"
                />
              </div>

              {/* Número de dias */}
              <div>
                <label className="block text-lg font-medium text-white mb-3">
                  🎯 Duração do Desafio
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  {[30, 60, 90, 120].map((days) => (
                    <button
                      key={days}
                      onClick={() => setTotalDays(days)}
                      className={`p-3 rounded-xl transition-all duration-300 cursor-pointer ${
                        totalDays === days
                          ? "bg-emerald-500/20 border-2 border-emerald-400 text-emerald-300"
                          : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10"
                      }`}
                    >
                      <div className="font-bold">{days}</div>
                      <div className="text-xs">dias</div>
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  min="1"
                  max="365"
                  value={totalDays}
                  onChange={(e) => setTotalDays(parseInt(e.target.value))}
                  placeholder="Ou digite um número personalizado..."
                  className="w-full p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 transition-all duration-300"
                />
              </div>
            </div>

            {/* Botão iniciar com animações de loading */}
            <div className="mt-8 text-center">
              {!isLoading ? (
                <button
                  onClick={handleStartJourney}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                >
                  <span className="text-2xl group-hover:animate-bounce">🎯</span>
                  <span>Iniciar Minha Jornada</span>
                </button>
              ) : (
                <div className="inline-block">
                  {/* Container de animação de carregamento */}
                  <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white font-bold py-6 px-10 rounded-3xl shadow-2xl border border-white/20 backdrop-blur-xl animate-pulse">
                    <div className="flex flex-col items-center gap-4">
                      {/* Ícone animado da etapa atual */}
                      <div className={`text-6xl ${loadingStage < 2 ? 'animate-bounce' : 'animate-spin'} transition-all duration-500`}>
                        {loadingMessages[loadingStage]?.icon}
                      </div>
                      
                      {/* Texto da etapa */}
                      <div className="text-xl font-bold animate-pulse">
                        {loadingMessages[loadingStage]?.text}
                      </div>
                      
                      {/* Barra de progresso cósmica */}
                      <div className="w-80 h-3 bg-white/20 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full transition-all duration-800 ease-in-out shadow-lg shadow-orange-400/50"
                          style={{ 
                            width: `${((loadingStage + 1) / loadingMessages.length) * 100}%`,
                            boxShadow: '0 0 20px rgba(251, 146, 60, 0.8)'
                          }}
                        />
                      </div>
                      
                      {/* Indicadores de progresso */}
                      <div className="flex gap-2 mt-2">
                        {loadingMessages.map((_, index) => (
                          <div
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              index <= loadingStage
                                ? 'bg-emerald-400 shadow-lg shadow-emerald-400/60 animate-pulse'
                                : 'bg-white/20'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Efeitos de partículas durante o carregamento */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-2 -left-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{animationDelay: '0s'}} />
                    <div className="absolute -top-3 -right-4 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}} />
                    <div className="absolute -bottom-2 -left-3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping" style={{animationDelay: '1s'}} />
                    <div className="absolute -bottom-1 -right-2 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1.5s'}} />
                  </div>
                </div>
              )}
            </div>

            {/* Info adicional */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                💡 Você poderá reiniciar sua jornada a qualquer momento
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
