import { useState, useEffect } from "react";
import DaysGrid from "./DaysGrid.jsx";

export default function ProgressTabs({
  completedDays,
  days,
  handleDayClick,
  startDate,
  totalDays = 90,
}) {
  const [activeTab, setActiveTab] = useState("daily");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Detectar scroll para mostrar/esconder botão de voltar ao topo (com throttling para mobile)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setShowScrollTop(window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Usar passive listener para melhor performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função para rolar ao topo suavemente
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Função para navegar para o dia de hoje
  const scrollToToday = () => {
    // Primeiro, garantir que estamos na aba diária
    if (activeTab !== "daily") {
      setActiveTab("daily");
      // Aguardar a aba mudar antes de fazer o scroll
      setTimeout(() => {
        executeScrollToToday();
      }, 300);
    } else {
      executeScrollToToday();
    }
  };

  const executeScrollToToday = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Calcular qual dia é hoje baseado na data de início
    if (startDate && days.length > 0) {
      const startDateObj = new Date(startDate);
      startDateObj.setHours(0, 0, 0, 0);

      const daysDiff = Math.floor(
        (today - startDateObj) / (1000 * 60 * 60 * 24)
      );
      const todayDayNumber = daysDiff + 1;

      // Verificar se o dia de hoje está dentro do período da jornada
      if (todayDayNumber >= 1 && todayDayNumber <= totalDays) {
        // Procurar pelo elemento do dia de hoje e fazer scroll
        const todayElement = document.querySelector(
          `[data-day-number="${todayDayNumber}"]`
        );
        if (todayElement) {
          todayElement.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        } else {
          // Fallback: tentar novamente após um delay
          setTimeout(() => {
            const retryElement = document.querySelector(
              `[data-day-number="${todayDayNumber}"]`
            );
            if (retryElement) {
              retryElement.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }
          }, 500);
        }
      }
    }
  };

  const tabs = [
    { id: "daily", label: `Seus ${totalDays} Dias`, icon: "📅" },
    { id: "achievements", label: "Trilha das Conquistas", icon: "🏆" },
    { id: "analytics", label: "Análise da Jornada", icon: "📊" },
  ];

  return (
    <div className="mb-12">
      {/* Navigation Tabs - Design Premium */}
      <div className="flex justify-center mb-12 w-full">
        <div className="relative max-w-6xl">
          {/* Background com blur sutil */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-2xl"></div>

          {/* Container das abas */}
          <div className="w-full relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-1 mx-auto">
            <div className="flex max-sm:flex-col justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 min-w-[180px] justify-center group cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-white text-gray-900 shadow-xl shadow-white/20"
                      : "text-gray-200 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {/* Ícone */}
                  <div
                    className={`text-xl transition-all duration-300 ${
                      activeTab === tab.id
                        ? "scale-110"
                        : "group-hover:scale-105"
                    }`}
                  >
                    {tab.icon}
                  </div>

                  {/* Textos */}
                  <div className="flex flex-col items-start">
                    <span
                      className={`text-sm font-semibold leading-none ${
                        activeTab === tab.id ? "text-gray-900" : "text-white"
                      }`}
                    >
                      {tab.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="content-transition">
        {activeTab === "daily" && (
          <DailyProgressPanel
            completedDays={completedDays}
            days={days}
            handleDayClick={handleDayClick}
            startDate={startDate}
            totalDays={totalDays}
          />
        )}
        {activeTab === "achievements" && (
          <AchievementsPanel
            completedDays={completedDays}
            totalDays={totalDays}
          />
        )}
        {activeTab === "analytics" && (
          <AnalyticsPanel
            days={days}
            completedDays={completedDays}
            totalDays={totalDays}
          />
        )}
      </div>

      {/* Botões Flutuantes */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
        {/* Botão Ir para Hoje - SEMPRE VISÍVEL */}
        <button
          onClick={scrollToToday}
          className={`
                        p-4 rounded-full
                        bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600
                        hover:from-emerald-500 hover:via-teal-500 hover:to-cyan-500
                        text-white font-bold shadow-2xl shadow-emerald-500/30
                        hover:shadow-emerald-400/40 hover:shadow-2xl
                        transform hover:scale-110 transition-all duration-300
                        border border-white/20 hover:border-white/30
                        backdrop-blur-xl
                        animate-pulse hover:animate-none
                        group
                    `}
          title="Ir para hoje"
        >
          {/* Ícone de calendário/alvo */}
          <svg
            className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
            {/* Ponto para indicar "hoje" */}
            <circle cx="12" cy="15" r="2" fill="currentColor" />
          </svg>

          {/* Brilho de fundo */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>

        {/* Botão Voltar ao Topo - APENAS APÓS SCROLL */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className={`
                            p-4 rounded-full
                            bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500
                            hover:from-purple-500 hover:via-blue-500 hover:to-cyan-400
                            text-white font-bold shadow-2xl shadow-purple-500/30
                            hover:shadow-purple-400/40 hover:shadow-2xl
                            transform hover:scale-110 transition-all duration-300
                            border border-white/20 hover:border-white/30
                            backdrop-blur-xl
                            group
                        `}
            title="Voltar ao topo"
          >
            {/* Ícone de seta para cima */}
            <svg
              className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>

            {/* Brilho de fundo */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        )}
      </div>
    </div>
  );
}

// Painel de Progresso Diário
function DailyProgressPanel({
  completedDays,
  days,
  handleDayClick,
  startDate,
  totalDays = 90,
}) {
  const progressPercentage = (completedDays / totalDays) * 100;
  const remainingDays = totalDays - completedDays;

  const stats = {
    completed: completedDays,
    remaining: remainingDays,
    percentage: Math.round(progressPercentage),
  };

  return (
    <div className="max-w-6xl mx-auto relative">
      {/* Imagem de Fundo - Amor que dá força */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url(/images/amor-jornada.jpg)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl mb-4">
            <span className="text-3xl">📈</span>
          </div>
          <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 mb-3">
            Seus {totalDays} Dias
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Acompanhe seu progresso diário e veja o quão consistente você tem
            sido na sua jornada.
          </p>
        </div>

        {/* Estatísticas Detalhadas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 px-4">
          {/* Dias Completados */}
          <div className="group relative cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl mb-3 filter drop-shadow-lg">✅</div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">
                {stats.completed}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wide font-medium">
                Dias Completos
              </div>
            </div>
          </div>

          {/* Dias Restantes */}
          <div className="group relative cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl mb-3 filter drop-shadow-lg">🎯</div>
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {stats.remaining}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wide font-medium">
                Dias Restantes
              </div>
            </div>
          </div>

          {/* Consistência */}
          <div className="group relative cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl mb-3 filter drop-shadow-lg">🔥</div>
              <div className="text-3xl font-bold text-orange-400 mb-2">
                {stats.percentage}%
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wide font-medium">
                Consistência
              </div>
            </div>
          </div>
        </div>

        {/* Calendário de Dias - Integrado na aba diária */}
        <div className="mt-12 px-4">
          <DaysGrid
            days={days}
            handleDayClick={handleDayClick}
            startDate={startDate}
            totalDays={totalDays}
          />
        </div>
      </div>
    </div>
  );
}

// Painel de Conquistas (reutilizando o componente existente)
function AchievementsPanel({ completedDays, totalDays = 90 }) {
  // Import dinâmico para o lado cliente
  const [achievementsData, setAchievementsData] = useState(null);

  useEffect(() => {
    import("../utils/achievements.js").then((module) => {
      setAchievementsData(module);
    });
  }, [totalDays]);

  if (!achievementsData) {
    return (
      <div className="text-center text-gray-400">Carregando conquistas...</div>
    );
  }

  const { generateAchievements, getAllAchievedMilestones } = achievementsData;
  const milestones = generateAchievements(totalDays);
  const achievedMilestones = getAllAchievedMilestones
    ? getAllAchievedMilestones(completedDays, totalDays)
    : milestones.filter((m) => completedDays >= m.days);

  const stats = {
    milestonesAchieved: achievedMilestones.length,
    totalMilestones: milestones.length,
    completionRate: Math.round(
      (achievedMilestones.length / milestones.length) * 100
    ),
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl mb-4">
          <span className="text-3xl">🏆</span>
        </div>
        <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-3">
          Trilha das Conquistas
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Cada marco é uma celebração. Veja suas conquistas e o que está por
          vir.
        </p>
      </div>

      {/* Estatísticas de Conquistas */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
        <div className="text-center p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
          <div className="text-3xl mb-2">🎖️</div>
          <div className="text-2xl font-bold text-purple-400">
            {stats.milestonesAchieved}
          </div>
          <div className="text-xs text-gray-400 uppercase tracking-wide">
            Conquistados
          </div>
        </div>

        <div className="text-center p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
          <div className="text-3xl mb-2">🎯</div>
          <div className="text-2xl font-bold text-pink-400">
            {stats.totalMilestones}
          </div>
          <div className="text-xs text-gray-400 uppercase tracking-wide">
            Total
          </div>
        </div>

        <div className="text-center p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
          <div className="text-3xl mb-2">📊</div>
          <div className="text-2xl font-bold text-red-400">
            {stats.completionRate}%
          </div>
          <div className="text-xs text-gray-400 uppercase tracking-wide">
            Taxa
          </div>
        </div>
      </div>

      {/* Grid de Conquistas - Design Moderno e Limpo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {milestones.map((milestone, index) => {
          const isAchieved = achievedMilestones.some(
            (achieved) => achieved.days === milestone.days
          );

          return (
            <div
              key={`milestone-${milestone.days}-${index}`}
              className="group relative"
            >
              {/* Card da conquista */}
              <div
                className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] ${
                  isAchieved
                    ? "bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 shadow-lg shadow-emerald-100/50"
                    : "bg-gray-50 border-2 border-gray-200 hover:border-gray-300"
                }`}
              >
                {/* Status indicator no canto */}
                <div
                  className={`absolute top-4 right-4 w-3 h-3 rounded-full ${
                    isAchieved
                      ? "bg-amber-500 shadow-sm shadow-amber-300"
                      : "bg-gray-300"
                  }`}
                />

                {/* Ícone */}
                <div
                  className={`text-4xl mb-4 transition-transform duration-300 ${
                    isAchieved
                      ? "scale-110 filter drop-shadow-sm"
                      : "opacity-60 grayscale group-hover:opacity-80"
                  }`}
                >
                  {milestone.icon}
                </div>

                {/* Conteúdo */}
                <div>
                  <h4
                    className={`text-lg font-bold mb-2 ${
                      isAchieved ? "text-emerald-900" : "text-gray-600"
                    }`}
                  >
                    {milestone.title}
                  </h4>
                  <p
                    className={`text-sm mb-4 leading-relaxed ${
                      isAchieved ? "text-emerald-700" : "text-gray-500"
                    }`}
                  >
                    {milestone.description}
                  </p>

                  {/* Badge de status */}
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${
                      isAchieved
                        ? "bg-gradient-to-r from-amber-100 via-yellow-50 to-amber-100 text-amber-800 border border-amber-300 shadow-sm"
                        : "bg-gray-100 text-gray-600 border border-gray-200"
                    }`}
                  >
                    <span className="text-sm">{isAchieved ? "🏅" : "○"}</span>
                    <span className={isAchieved ? "font-semibold" : ""}>
                      {isAchieved ? "Conquistado!" : `Dia ${milestone.days}`}
                    </span>
                  </div>
                </div>

                {/* Brilho sutil dourado para conquistas */}
                {isAchieved && (
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-yellow-300/5 to-amber-400/10 pointer-events-none" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mensagem de Motivação */}
      {achievedMilestones.length > 0 && (
        <div className="mt-16 text-center">
          <div className="group relative max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-pink-500/20 to-cyan-500/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-emerald-400/30 rounded-3xl p-8">
              <div className="text-6xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Você está brilhando!
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {achievedMilestones.length === 1
                  ? "Sua primeira conquista é só o começo de uma jornada incrível!"
                  : `${achievedMilestones.length} marcos conquistados! Cada passo te torna mais forte e resiliente.`}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Painel de Análise e Gráficos
function AnalyticsPanel({ days, completedDays, totalDays = 90 }) {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Carregar dados de analytics da API
  useEffect(() => {
    async function fetchAnalytics() {
      try {
        setLoading(true);
        const response = await fetch('/api/journey/analytics');
        
        if (!response.ok) {
          throw new Error('Erro ao carregar analytics');
        }
        
        const data = await response.json();
        setAnalytics(data.analytics);
        setError(null);
      } catch (err) {
        console.error('Erro ao buscar analytics:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchAnalytics();
  }, [days, completedDays]); // Recarregar quando days ou completedDays mudarem

  // Loading state
  if (loading) {
    return (
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-gray-400">Carregando análise...</p>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !analytics) {
    return (
      <div className="max-w-6xl mx-auto">
        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 text-center">
          <div className="text-4xl mb-4">⚠️</div>
          <h3 className="text-xl font-bold text-red-400 mb-2">Erro ao carregar dados</h3>
          <p className="text-gray-300">{error || 'Não foi possível carregar os dados de analytics'}</p>
        </div>
      </div>
    );
  }

  // Mapear dificuldade do banco para número (1-10)
  const difficultyToNumber = (difficulty) => {
    const map = {
      'facil': 3,
      'medio': 5,
      'dificil': 7,
      'muito_dificil': 9
    };
    return map[difficulty] || 5;
  };

  // Usar dados da API
  const chartData = analytics.dailyData.map(day => ({
    day: day.day,
    difficulty: difficultyToNumber(day.difficulty),
    completed: day.completed,
    phase: day.phase,
    completedAt: day.completedAt
  }));

  const weeklyData = analytics.weeklyStats;
  const stats = analytics.stats;

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4">
          <span className="text-3xl">📊</span>
        </div>
        <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-3">
          Análise da Sua Jornada
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Visualize a dificuldade de cada fase e seu progresso ao longo do tempo
        </p>
      </div>

      {/* Estatísticas Rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-xl border border-red-500/20 rounded-2xl p-6 text-center">
          <div className="text-4xl mb-3">🔥</div>
          <div className="text-3xl font-bold text-red-400">{stats.hardDaysCompleted}</div>
          <div className="text-sm text-gray-400 uppercase tracking-wide mt-2">Dias Difíceis Vencidos</div>
          <div className="text-xs text-gray-500 mt-1">Dificuldade 7-10</div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6 text-center">
          <div className="text-4xl mb-3">📈</div>
          <div className="text-3xl font-bold text-blue-400">{stats.averageDifficulty}/10</div>
          <div className="text-sm text-gray-400 uppercase tracking-wide mt-2">Dificuldade Média</div>
          <div className="text-xs text-gray-500 mt-1">Dos dias completados</div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 text-center">
          <div className="text-4xl mb-3">🎯</div>
          <div className="text-3xl font-bold text-purple-400">Semana {stats.hardestWeek.week}</div>
          <div className="text-sm text-gray-400 uppercase tracking-wide mt-2">Mais Desafiadora</div>
          <div className="text-xs text-gray-500 mt-1">Dificuldade {stats.hardestWeek.avgDifficulty}/10</div>
        </div>
      </div>

      {/* Gráfico de Dificuldade por Dia */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-8">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span>📉</span>
          Curva de Dificuldade da Jornada
        </h3>
        
        <div className="relative h-64 mb-4">
          {/* Grid de fundo */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {[10, 7.5, 5, 2.5, 0].map((level) => (
              <div key={level} className="flex items-center gap-2">
                <span className="text-xs text-gray-500 w-8">{level}</span>
                <div className="flex-1 border-t border-gray-700/50"></div>
              </div>
            ))}
          </div>

          {/* Barras do gráfico */}
          <div className="absolute inset-0 flex items-end gap-[2px] pl-10 pt-4">
            {chartData.map((data, index) => {
              const height = (data.difficulty / 10) * 100;
              const isCompleted = data.completed;
              
              return (
                <div
                  key={index}
                  className="flex-1 flex flex-col justify-end group relative"
                  style={{ height: '100%' }}
                >
                  {/* Barra */}
                  <div
                    className={`w-full rounded-t transition-all duration-300 ${
                      isCompleted
                        ? data.difficulty >= 7
                          ? 'bg-gradient-to-t from-red-600 to-red-400 shadow-lg shadow-red-500/50'
                          : data.difficulty >= 5
                          ? 'bg-gradient-to-t from-orange-600 to-orange-400'
                          : 'bg-gradient-to-t from-green-600 to-green-400'
                        : 'bg-gradient-to-t from-gray-700 to-gray-600 opacity-40'
                    } hover:opacity-100`}
                    style={{ height: `${height}%` }}
                  >
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                      <div className="bg-gray-900 text-white text-xs rounded-lg py-2 px-3 whitespace-nowrap shadow-xl border border-white/10">
                        <div className="font-bold">Dia {data.day}</div>
                        <div className="text-gray-300">Dificuldade: {data.difficulty}/10</div>
                        <div className={isCompleted ? 'text-green-400' : 'text-gray-500'}>
                          {isCompleted ? '✓ Completo' : '○ Pendente'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Legenda */}
        <div className="flex flex-wrap gap-4 justify-center text-sm mt-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gradient-to-t from-red-600 to-red-400"></div>
            <span className="text-gray-300">🔥 Alta dificuldade vencida (7-10)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gradient-to-t from-orange-600 to-orange-400"></div>
            <span className="text-gray-300">⚠️ Média dificuldade vencida (5-7)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gradient-to-t from-green-600 to-green-400"></div>
            <span className="text-gray-300">✅ Baixa dificuldade vencida (1-5)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gradient-to-t from-gray-700 to-gray-600 opacity-40"></div>
            <span className="text-gray-300">○ Pendente</span>
          </div>
        </div>
      </div>

      {/* Análise por Semana */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span>📅</span>
          Progresso Semanal
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {weeklyData.map((week) => {
            const isCurrentWeek = completedDays >= (week.week - 1) * 7 && completedDays < week.week * 7;
            
            // Calcular datas da semana
            const startDate = new Date(analytics.journey.startDate + 'T00:00:00');
            const weekStartDate = new Date(startDate);
            weekStartDate.setDate(startDate.getDate() + ((week.week - 1) * 7));
            
            const weekEndDate = new Date(weekStartDate);
            weekEndDate.setDate(weekStartDate.getDate() + 6);
            
            // Formatar datas
            const formatDate = (date) => {
              const day = String(date.getDate()).padStart(2, '0');
              const month = String(date.getMonth() + 1).padStart(2, '0');
              const year = date.getFullYear();
              return `${day}/${month}/${year}`;
            };
            
            const dateRange = `${formatDate(weekStartDate)} - ${formatDate(weekEndDate)}`;
            
            return (
              <div
                key={week.week}
                className={`relative overflow-hidden rounded-xl p-5 transition-all duration-300 ${
                  isCurrentWeek
                    ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-400 shadow-lg shadow-blue-500/20'
                    : week.completionRate === 100
                    ? 'bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30'
                    : 'bg-gray-800/50 border border-gray-700'
                }`}
              >
                {/* Badge de status */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-gray-300">Semana {week.week}</span>
                  {isCurrentWeek && (
                    <span className="px-2 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                      Atual
                    </span>
                  )}
                  {week.completionRate === 100 && !isCurrentWeek && (
                    <span className="text-emerald-400 text-xl">✓</span>
                  )}
                </div>
                
                {/* Datas da semana */}
                <div className="mb-3">
                  <span className="text-xs text-gray-500">{dateRange}</span>
                </div>

                {/* Progresso */}
                <div className="mb-3">
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Progresso</span>
                    <span className="font-bold">{week.completed}/{week.total}</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        week.completionRate === 100
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
                          : 'bg-gradient-to-r from-blue-500 to-purple-500'
                      }`}
                      style={{ width: `${week.completionRate}%` }}
                    ></div>
                  </div>
                </div>

                {/* Dificuldade */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Dificuldade Média:</span>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-orange-400">{week.avgDifficulty}</span>
                    <span className="text-xs text-gray-500">/10</span>
                  </div>
                </div>

                {/* Indicador de dificuldade visual */}
                <div className="flex gap-1 mt-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => (
                    <div
                      key={level}
                      className={`flex-1 h-1 rounded-full ${
                        level <= week.avgDifficulty
                          ? week.avgDifficulty >= 7
                            ? 'bg-red-500'
                            : week.avgDifficulty >= 5
                            ? 'bg-orange-500'
                            : 'bg-yellow-500'
                          : 'bg-gray-700'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Insights */}
      <div className="mt-8 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-xl border border-indigo-500/20 rounded-3xl p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span>💡</span>
          Insights da Sua Jornada
        </h3>
        
        <div className="space-y-4 text-gray-300">
          <p className="leading-relaxed">
            <strong className="text-white">Fase Atual:</strong> Você está na fase de{' '}
            {analytics.journey.currentPhase === 'Início Intenso' ? (
              <span className="text-red-400 font-semibold">Início Intenso</span>
            ) : analytics.journey.currentPhase === 'Consolidação' ? (
              <span className="text-blue-400 font-semibold">Consolidação</span>
            ) : (
              <span className="text-purple-400 font-semibold">Finalização</span>
            )}
            . {analytics.journey.currentPhase === 'Início Intenso' && 'Os primeiros dias são os mais desafiadores, mas cada dia vencido te torna mais forte.'}
            {analytics.journey.currentPhase === 'Consolidação' && 'Continue firme! Você está construindo hábitos sólidos.'}
            {analytics.journey.currentPhase === 'Finalização' && 'A reta final! Cada dia é uma vitória significativa rumo à transformação completa.'}
          </p>
          
          {stats.hardDaysCompleted > 0 && (
            <p className="leading-relaxed">
              <strong className="text-red-400">🔥 Você venceu {stats.hardDaysCompleted} dias de alta dificuldade!</strong> 
              {' '}Isso mostra uma força de vontade excepcional. Continue assim!
            </p>
          )}

          {stats.maxStreak >= 7 && (
            <p className="leading-relaxed">
              <strong className="text-green-400">⚡ Sua maior sequência foi de {stats.maxStreak} dias consecutivos!</strong>
              {' '}Você já provou que tem o que é preciso para vencer!
            </p>
          )}
          
          {analytics.journey.completionPercentage >= 50 && (
            <p className="leading-relaxed">
              <strong className="text-purple-400">🎯 Você já completou {analytics.journey.completionPercentage}% da jornada!</strong>
              {' '}Mais da metade do caminho percorrido. Continue firme!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

