// components/ReflectionModal.jsx
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { XIcon } from "./icons.js";
import { reflectionThemes } from "../data/reflectionThemes.js";

const ReflectionTextArea = memo(function ReflectionTextArea({
  label,
  initialValue,
  placeholder,
  readOnly,
  onValueChange,
}) {
  const [text, setText] = useState(initialValue || "");

  useEffect(() => {
    setText(initialValue || "");
  }, [initialValue]);

  const handleChange = useCallback(
    (event) => {
      const nextValue = event.target.value;
      setText(nextValue);
      onValueChange(nextValue);
    },
    [onValueChange]
  );

  return (
    <div className="relative">
      <div className="mb-2 text-sm font-semibold text-white/80">
        {label}
      </div>
      <textarea
        value={text}
        onChange={readOnly ? undefined : handleChange}
        rows="7"
        placeholder={placeholder}
        readOnly={readOnly}
        className={`w-full p-4 pr-16 bg-white/5 sm:backdrop-blur-xl border border-white/10 rounded-2xl text-gray-300 placeholder-gray-500 transition-colors duration-150 resize-none sm:resize-y min-h-[170px] sm:min-h-[140px] max-h-[55dvh] sm:max-h-[420px] ${
          readOnly
            ? "cursor-default resize-none"
            : "focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50"
        }`}
      />
      <div className="absolute bottom-3 right-3 text-xs text-gray-500">
        {text.length} caracteres
      </div>
    </div>
  );
});

export default function ReflectionModal({
  isOpen,
  onClose,
  selectedDay,
  getDayDate,
  handleCompleteDay,
  isViewMode = false,
  onPreviousDay,
  onNextDay,
  canGoPrevious = false,
  canGoNext = false,
}) {
  const [isSaving, setIsSaving] = useState(false);
  const [showSaveSuccess, setShowSaveSuccess] = useState(false);
  const [isCompleting, setIsCompleting] = useState(false);
  const [draftDifficulty, setDraftDifficulty] = useState("");
  const modalContentRef = useRef(null);
  const draftDayRef = useRef(null);
  // Guardar os valores no momento em que o modal abre, para detectar alterações
  const initialValuesRef = useRef(null);

  useEffect(() => {
    if (!isOpen || !selectedDay) {
      draftDayRef.current = null;
      initialValuesRef.current = null;
      return;
    }

    const normalizedDay = {
      ...selectedDay,
      reflectionCharles: selectedDay.reflectionCharles || "",
      reflectionWelder: selectedDay.reflectionWelder || "",
      difficulty: selectedDay.difficulty || "",
    };

    draftDayRef.current = normalizedDay;
    initialValuesRef.current = {
      reflectionCharles: normalizedDay.reflectionCharles,
      reflectionWelder: normalizedDay.reflectionWelder,
      difficulty: normalizedDay.difficulty,
    };
    setDraftDifficulty(normalizedDay.difficulty);
    setIsSaving(false);
    setShowSaveSuccess(false);
    setIsCompleting(false);
  }, [isOpen, selectedDay]);

  // Effect para capturar scroll e redirecionar para o modal
  useEffect(() => {
    if (!isOpen) return;

    const handleWheel = (e) => {
      // Permitir scroll natural em textareas e outros elementos com scroll
      const target = e.target;
      const isScrollable =
        target.tagName === "TEXTAREA" ||
        target.classList.contains("overflow-y-auto") ||
        target.closest("textarea") ||
        target.closest(".overflow-y-auto");

      if (isScrollable) {
        return; // Não interceptar o scroll em elementos que têm scroll próprio
      }

      e.preventDefault();
      if (modalContentRef.current) {
        modalContentRef.current.scrollTop += e.deltaY;
      }
    };

    const previousBodyOverflow = document.body.style.overflow;
    const previousBodyOverscroll = document.body.style.overscrollBehavior;

    // Bloquear scroll da página de fundo e redirecionar para o modal
    document.body.style.overflow = "hidden";
    document.body.style.overscrollBehavior = "contain";
    document.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.overscrollBehavior = previousBodyOverscroll;
      document.removeEventListener("wheel", handleWheel);
    };
  }, [isOpen]);

  if (!isOpen || !selectedDay) return null;

  const selectedDayNumber = selectedDay.dayNumber || selectedDay.id;
  const selectedDifficulty = draftDifficulty || selectedDay.difficulty;

  const getDraftDay = () => {
    const draftDay = draftDayRef.current || selectedDay;

    return {
      ...selectedDay,
      ...draftDay,
      difficulty: draftDifficulty || null,
    };
  };

  const getHasUnsavedChanges = () => {
    const initial = initialValuesRef.current;
    const current = getDraftDay();
    if (!initial) return false;
    const currentCharles = current.reflectionCharles || "";
    const currentWelder = current.reflectionWelder || "";
    const currentDifficulty = current.difficulty || "";

    return (
      currentCharles !== initial.reflectionCharles ||
      currentWelder !== initial.reflectionWelder ||
      currentDifficulty !== initial.difficulty
    );
  };

  const confirmDiscardChanges = () => {
    if (!getHasUnsavedChanges()) return true;
    return window.confirm(
      "Você tem alterações não salvas. Deseja continuar sem salvar?"
    );
  };

  // Função para fechar modal sem salvar
  const handleCloseModal = () => {
    if (!confirmDiscardChanges()) return;
    onClose(false); // Passa false para indicar que não deve salvar
  };

  const handlePreviousClick = () => {
    if (!confirmDiscardChanges()) return;
    onPreviousDay?.();
  };

  const handleNextClick = () => {
    if (!confirmDiscardChanges()) return;
    onNextDay?.();
  };

  const handleDraftTextChange = (field, value) => {
    const baseDay = draftDayRef.current || selectedDay;
    draftDayRef.current = {
      ...baseDay,
      [field]: value,
    };
  };

  const handleDraftDifficultyChange = (difficulty) => {
    const baseDay = draftDayRef.current || selectedDay;
    draftDayRef.current = {
      ...baseDay,
      difficulty,
    };
    setDraftDifficulty(difficulty);
  };

  // Função para salvar reflexão com feedback visual
  const handleSaveReflection = async () => {
    setIsSaving(true);
    setShowSaveSuccess(false);

    try {
      // Chama o onClose que já salva os dados
      await onClose(true, getDraftDay()); // Passa true para salvar

      // Não mostra sucesso pois o modal já fecha
      setIsSaving(false);
    } catch (error) {
      console.error("Erro ao salvar reflexão:", error);
      setIsSaving(false);
      // Em caso de erro, mostrar feedback
      alert("Erro ao salvar reflexão. Tente novamente.");
    }
  };

  // Função para completar o dia com feedback visual
  const handleCompleteDayWithLoading = async () => {
    const draftDay = getDraftDay();

    if (!draftDay.difficulty) {
      alert(
        "⚠️ Por favor, selecione o nível de dificuldade antes de concluir o dia!"
      );
      return;
    }

    setIsCompleting(true);

    try {
      await handleCompleteDay(draftDay);
    } catch (error) {
      console.error("Erro ao completar dia:", error);
      alert("Erro ao completar o dia. Tente novamente.");
    } finally {
      setIsCompleting(false);
    }
  };

  const getGradientClass = () => {
    // Padronizado para roxo/púrpura sempre
    return "from-purple-500 to-purple-700";
  };

  return (
      <div
      className="fixed inset-0 bg-black/85 sm:bg-black/80 sm:backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 z-50 animate-fade-in cursor-pointer"
      onClick={handleCloseModal}
    >
      {/* Background com luzes */}
      <div className="absolute inset-0 overflow-hidden hidden sm:block">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div
        className="relative bg-slate-900 sm:bg-slate-900/95 sm:backdrop-blur-xl border border-white/20 rounded-t-2xl sm:rounded-lg shadow-2xl w-full max-w-2xl h-[100dvh] max-h-[100dvh] sm:h-auto sm:max-h-[95vh] animate-slide-up cursor-default flex flex-col min-h-0"
        onClick={(e) => e.stopPropagation()}
        style={{ overflow: "hidden" }}
      >
        {/* Header do modal */}
        <div
          className={`relative bg-gradient-to-r ${getGradientClass(
            selectedDayNumber
          )} p-5 sm:p-8 shrink-0`}
        >
          {/* Botão fechar */}
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300 cursor-pointer z-10"
            aria-label="Fechar modal"
          >
            <XIcon className="w-5 h-5" />
          </button>

          {/* Botões de navegação - SOMENTE QUANDO DISPONÍVEIS */}
          {(canGoPrevious || canGoNext) && (
            <div className="absolute left-4 top-4 flex gap-2 z-10">
              {canGoPrevious && (
                <button
                  onClick={handlePreviousClick}
                  className="text-white p-2 rounded-full transition-all duration-300 bg-white/10 hover:bg-white/20 cursor-pointer"
                  aria-label="Dia anterior"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {canGoNext && (
                <button
                  onClick={handleNextClick}
                  className="text-white p-2 rounded-full transition-all duration-300 bg-white/10 hover:bg-white/20 cursor-pointer"
                  aria-label="Próximo dia"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          )}

          {/* Conteúdo do header */}
          <div className="text-center text-white pt-8">
            <h2 className="text-2xl sm:text-3xl font-black mb-2">
              Dia {selectedDayNumber}
            </h2>
            <p className="text-white/80 text-sm sm:text-lg">
              {getDayDate(selectedDayNumber)}
            </p>

            {/* Indicadores de status */}
            <div className="mt-4 flex flex-col items-center gap-2">
              {(selectedDay.isComplete || selectedDay.isCompleted) && (
                <div className="inline-flex items-center gap-2 bg-emerald-500/20 rounded-full px-4 py-2">
                  <span className="text-sm">✅</span>
                  <span className="text-sm font-medium text-emerald-300">
                    Dia Concluído
                  </span>
                </div>
              )}

              {isViewMode && (
                <div className="inline-flex items-center gap-2 bg-blue-500/20 rounded-full px-4 py-2">
                  <span className="text-sm">👁️</span>
                  <span className="text-sm font-medium text-blue-300">
                    Modo Visualização
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Conteúdo scrollável - AJUSTADO PARA MOBILE E DESKTOP */}
        <div
          ref={modalContentRef}
          className="flex-1 min-h-0 overflow-y-auto overscroll-contain custom-scrollbar"
        >
          <div className="p-4 sm:p-8 pb-[calc(1rem+env(safe-area-inset-bottom))] sm:pb-8">
            {/* Tema de reflexão */}
            <div className="mb-6 sm:mb-8">
              <h3 className="font-bold text-lg mb-3 text-purple-300 flex items-center gap-2">
                🎯 Tema de Reflexão
              </h3>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-lg hidden sm:block" />
                <div className="relative bg-white/5 sm:backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6">
                  <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                    {selectedDay.theme ||
                      reflectionThemes[selectedDayNumber]}
                  </p>
                </div>
              </div>
            </div>

            {/* Área de anotações */}
            <div className="mb-6 sm:mb-8">
              <h3 className="font-bold text-lg mb-4 text-blue-300 flex items-center gap-2">
                ✍️ Suas Reflexões
              </h3>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur-lg hidden sm:block" />
                <div className="relative space-y-4">
                  {/* Charles */}
                  <ReflectionTextArea
                    key={`charles-${selectedDayNumber}`}
                    label="Texto do Charles"
                    initialValue={selectedDay.reflectionCharles || ""}
                    placeholder={
                      isViewMode
                        ? "Nenhum texto do Charles registrado ainda..."
                        : "Escreva aqui a reflexão do Charles..."
                    }
                    readOnly={isViewMode}
                    onValueChange={(value) =>
                      handleDraftTextChange("reflectionCharles", value)
                    }
                  />

                  {/* Welder */}
                  <ReflectionTextArea
                    key={`welder-${selectedDayNumber}`}
                    label="Texto do Welder"
                    initialValue={selectedDay.reflectionWelder || ""}
                    placeholder={
                      isViewMode
                        ? "Nenhum texto do Welder registrado ainda..."
                        : "Escreva aqui a reflexão do Welder..."
                    }
                    readOnly={isViewMode}
                    onValueChange={(value) =>
                      handleDraftTextChange("reflectionWelder", value)
                    }
                  />
                </div>
              </div>
            </div>

            {/* Campo de dificuldade */}
            <div className="mb-6 sm:mb-8">
              <h3 className="font-bold text-lg mb-4 text-orange-300 flex items-center gap-2">
                💪 Qual foi a dificuldade para vencer hoje?
              </h3>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl blur-lg hidden sm:block" />
                <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { key: "facil", label: "FÁCIL", color: "green" },
                    { key: "medio", label: "MODERADO", color: "blue" },
                    { key: "dificil", label: "DIFÍCIL", color: "orange" },
                    {
                      key: "muito_dificil",
                      label: "MUITO DIFÍCIL",
                      color: "red",
                    },
                  ].map((level) => {
                    const isSelected = selectedDifficulty === level.key;

                    // Classes CSS completas para garantir que o Tailwind as reconheça
                    const getSelectedClasses = () => {
                      switch (level.color) {
                        case "green":
                          return "border-green-400 bg-green-500/20 text-green-300";
                        case "blue":
                          return "border-blue-400 bg-blue-500/20 text-blue-300";
                        case "orange":
                          return "border-orange-400 bg-orange-500/20 text-orange-300";
                        case "red":
                          return "border-red-400 bg-red-500/20 text-red-300";
                        default:
                          return "border-gray-400 bg-gray-500/20 text-gray-300";
                      }
                    };

                    const getHoverClasses = () => {
                      switch (level.color) {
                        case "green":
                          return "hover:border-green-400/50 hover:bg-green-500/10";
                        case "blue":
                          return "hover:border-blue-400/50 hover:bg-blue-500/10";
                        case "orange":
                          return "hover:border-orange-400/50 hover:bg-orange-500/10";
                        case "red":
                          return "hover:border-red-400/50 hover:bg-red-500/10";
                        default:
                          return "hover:border-gray-400/50 hover:bg-gray-500/10";
                      }
                    };

                    return (
                      <button
                        key={level.key}
                        onClick={
                          isViewMode
                            ? undefined
                            : () => handleDraftDifficultyChange(level.key)
                        }
                        disabled={isViewMode}
                        className={`p-3 rounded-xl border-2 transition-all duration-300 text-sm font-bold ${
                          isViewMode ? "cursor-default" : "cursor-pointer"
                        } ${
                          isSelected
                            ? getSelectedClasses()
                            : `border-white/10 bg-white/5 text-gray-400 ${
                                isViewMode ? "" : getHoverClasses()
                              }`
                        }`}
                      >
                        {level.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Botões de ação - apenas no modo edição */}
            {!isViewMode && (
              <div className="sticky bottom-0 z-20 -mx-4 sm:mx-0 flex max-sm:flex-col gap-3 sm:gap-4 bg-slate-900/95 sm:bg-transparent backdrop-blur sm:backdrop-blur-0 p-4 sm:p-0 border-t border-white/10 sm:border-t-0">
                {/* Botão salvar (sempre disponível) */}
                <button
                  onClick={handleSaveReflection}
                  disabled={isSaving}
                  className={`flex-1 py-3.5 sm:py-4 px-6 rounded-2xl border transition-colors duration-150 font-medium relative overflow-hidden ${
                    isSaving
                      ? "bg-blue-500/20 border-blue-400/50 text-blue-300 cursor-wait"
                      : showSaveSuccess
                      ? "bg-green-500/20 border-green-400/50 text-green-300"
                      : "bg-white/10 hover:bg-white/20 text-white border-white/20 cursor-pointer"
                  }`}
                >
                  {isSaving ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-blue-300 border-t-transparent rounded-full animate-spin"></div>
                      Salvando...
                    </span>
                  ) : showSaveSuccess ? (
                    <span className="flex items-center justify-center gap-2">
                      ✅ Salvo com Sucesso!
                    </span>
                  ) : (
                    "💾 Salvar Reflexão"
                  )}
                </button>

                {/* Botão completar dia - Barra de Ouro Premium */}
                {!(selectedDay.isComplete || selectedDay.isCompleted) && (
                  <button
                    onClick={handleCompleteDayWithLoading}
                    disabled={isCompleting}
                    className={`flex-1 relative overflow-hidden rounded-xl transition-colors duration-150 focus:outline-none group ${
                      isCompleting
                        ? "cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                    style={{
                      background: isCompleting
                        ? "linear-gradient(135deg, #B8860B 0%, #8B7D6B 25%, #B8860B 50%, #6B6B47 75%, #B8860B 100%)"
                        : "linear-gradient(135deg, #FFD700 0%, #FFA500 25%, #FFD700 50%, #B8860B 75%, #FFD700 100%)",
                      boxShadow: isCompleting
                        ? "0 2px 10px rgba(184, 134, 11, 0.3), 0 0 0 1px rgba(184, 134, 11, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                        : "0 4px 20px rgba(255, 215, 0, 0.3), 0 0 0 1px rgba(255, 215, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    {/* Textura de ouro sutil */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        background:
                          "repeating-linear-gradient(45deg, transparent, transparent 1px, rgba(255,255,255,0.1) 1px, rgba(255,255,255,0.1) 2px)",
                      }}
                    />

                    {/* Brilho animado no hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background:
                          "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
                        animation: "sweep 1.5s ease-in-out",
                        transform: "translateX(-100%)",
                      }}
                    />

                    {/* Reflexo superior */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1/3 opacity-30"
                      style={{
                        background:
                          "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)",
                      }}
                    />

                    {/* Partículas douradas discretas */}
                    <div className="absolute inset-0 pointer-events-none opacity-60">
                      <div
                        className="absolute w-0.5 h-0.5 bg-white rounded-full animate-ping"
                        style={{
                          top: "20%",
                          left: "25%",
                          animationDelay: "0s",
                          animationDuration: "2s",
                        }}
                      />
                      <div
                        className="absolute w-0.5 h-0.5 bg-yellow-200 rounded-full animate-pulse"
                        style={{
                          top: "30%",
                          right: "20%",
                          animationDelay: "0.7s",
                          animationDuration: "1.5s",
                        }}
                      />
                      <div
                        className="absolute w-0.5 h-0.5 bg-white rounded-full animate-ping"
                        style={{
                          bottom: "25%",
                          left: "35%",
                          animationDelay: "1.4s",
                          animationDuration: "2.2s",
                        }}
                      />
                    </div>

                    {/* Conteúdo do botão */}
                    <div className="relative py-4 px-6 text-center">
                      {isCompleting ? (
                        <div className="flex items-center justify-center gap-3">
                          {/* Spinner dourado */}
                          <div className="relative">
                            <div className="w-5 h-5 border-2 border-yellow-800/30 rounded-full"></div>
                            <div className="absolute inset-0 border-2 border-t-yellow-800 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
                          </div>
                          <span
                            className="font-bold text-base tracking-wide text-yellow-900 animate-pulse"
                            style={{
                              textShadow: "0 1px 1px rgba(0,0,0,0.2)",
                            }}
                          >
                            FINALIZANDO...
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          <span
                            className="font-bold text-base tracking-wide text-yellow-900"
                            style={{
                              textShadow: "0 1px 1px rgba(0,0,0,0.2)",
                            }}
                          >
                            CONCLUIR DIA
                          </span>
                          <span
                            className="text-xl animate-bounce"
                            style={{
                              animationDuration: "2s",
                              animationDelay: "0.3s",
                            }}
                          >
                            🏆
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Borda interna sutil */}
                    <div className="absolute inset-0.5 rounded-lg border border-yellow-300/30 pointer-events-none" />
                  </button>
                )}
              </div>
            )}

            {/* Mensagem de status no final - design limpo */}
            <div className="mt-8 text-center">
              <div
                className={`inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedDay.isComplete || selectedDay.isCompleted
                    ? "bg-emerald-500/15 text-emerald-200 border border-emerald-400/25"
                    : selectedDifficulty
                    ? "bg-blue-500/15 text-blue-200 border border-blue-400/25"
                    : "bg-amber-500/15 text-amber-200 border border-amber-400/25 animate-pulse"
                }`}
              >
                <span className="text-base">
                  {selectedDay.isComplete || selectedDay.isCompleted
                    ? "🎉"
                    : selectedDifficulty
                    ? "💡"
                    : "⚠️"}
                </span>
                <span>
                  {selectedDay.isComplete || selectedDay.isCompleted
                    ? "Parabéns! Você concluiu mais um dia da sua jornada!"
                    : selectedDifficulty
                    ? "Tudo pronto! Clique em 'Concluir Dia' para finalizar"
                    : "Selecione o nível de dificuldade para poder concluir o dia"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
