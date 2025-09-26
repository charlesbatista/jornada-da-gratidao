import { formatPtBR, parseYmdLocal, getWeekdayPtBR } from "@/app/utils/date";
import { useEffect, useRef } from "react";

export default function DaysGrid({
  days,
  handleDayClick,
  startDate,
  totalDays = 90,
}) {
  const todayCardRef = useRef(null);
  const getDayDate = (dayIndex) => {
    if (!startDate) return null;

    let baseDate;

    if (typeof startDate === "string") {
      baseDate = parseYmdLocal(startDate); // já cria a data local sem UTC
    } else if (startDate instanceof Date) {
      baseDate = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate()
      );
    } else {
      baseDate = new Date();
    }

    const resultDate = new Date(baseDate);
    resultDate.setDate(baseDate.getDate() + dayIndex - 1);
    return resultDate;
  };

  const getGradientClass = (dayId, isComplete, isFutureDay, isToday) => {
    if (isComplete) {
      return "bg-slate-800/90 backdrop-blur-sm border-2 border-emerald-400 shadow-lg shadow-emerald-400/20";
    }
    if (isFutureDay) {
      return "bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 cursor-not-allowed opacity-50";
    }
    if (isToday) {
      return "bg-white/10 backdrop-blur-sm border-2 border-yellow-400 hover:bg-white/20 shadow-lg shadow-yellow-400/30";
    }
    return "bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20";
  };

  // Função para obter configuração da tag de dificuldade
  const getDifficultyTag = (difficulty) => {
    const tagConfig = {
      moleza: { 
        label: "FÁCIL", 
        bg: "bg-green-500", 
        text: "text-white", 
        border: "border-green-400",
        glow: "shadow-green-500/50"
      },
      pouco: { 
        label: "MODERADO", 
        bg: "bg-blue-500", 
        text: "text-white", 
        border: "border-blue-400",
        glow: "shadow-blue-500/50"
      },
      médio: { 
        label: "MÉDIO", 
        bg: "bg-orange-500", 
        text: "text-white", 
        border: "border-orange-400",
        glow: "shadow-orange-500/50"
      },
      muito: { 
        label: "DIFÍCIL", 
        bg: "bg-red-500", 
        text: "text-white", 
        border: "border-red-400",
        glow: "shadow-red-500/50"
      },
    };
    return tagConfig[difficulty] || { 
      label: "COMPLETO", 
      bg: "bg-emerald-500", 
      text: "text-white", 
      border: "border-emerald-400",
      glow: "shadow-emerald-500/50"
    };
  };

  // Auto scroll para o dia de hoje
  useEffect(() => {
    if (todayCardRef.current) {
      setTimeout(() => {
        todayCardRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }, 500);
    }
  }, [days]);

  return (
    <div className="relative">
      {/* Título da seção */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-black text-white mb-2">
          Seus {totalDays} Dias
        </h2>
        <p className="text-gray-300 mb-6">
          Registre cada dia vencido e sua reflexão.
        </p>
      </div>

      {/* Grid de dias */}
      <div className="grid grid-cols-2 min-[480px]:grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-10 gap-3 min-[480px]:gap-4 sm:gap-4 md:gap-5 lg:gap-6 mb-8">
        {days.map((day) => {
          // Usar dayNumber se existir (dados do banco), senão day.id (dados antigos)
          const dayNumber = day.dayNumber || day.id;
          const dayDate = getDayDate(dayNumber);
          const today = new Date();
          today.setHours(0, 0, 0, 0); // Zerar horas para comparar apenas a data
          const dayDateWithoutTime = new Date(dayDate);
          dayDateWithoutTime.setHours(0, 0, 0, 0);

          const isToday = dayDateWithoutTime.getTime() === today.getTime();
          const isFutureDay = dayDateWithoutTime > today;
          // Dia de hoje mantém borda dourada até amanhã, mesmo que completo
          const isTodayOrComplete = isToday || (day.isComplete || day.isCompleted);

          return (
            <div
              key={day.id ? `old-${day.id}` : `new-${day.dayNumber}`}
              className="group relative"
              ref={isToday ? todayCardRef : null}
            >
              {/* Glow effect para dias completos - corrigido para seguir border-radius */}
              {(day.isComplete || day.isCompleted) && (
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-600/30 rounded-2xl blur-lg" />
              )}

              {/* Card do dia */}
              <button
                onClick={() => !isFutureDay && handleDayClick(day)}
                disabled={isFutureDay}
                className={`relative w-full aspect-square flex flex-col items-center justify-center font-bold rounded-2xl transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:ring-offset-transparent p-2 overflow-hidden
                                    ${getGradientClass(
                                      dayNumber,
                                      day.isComplete || day.isCompleted,
                                      isFutureDay,
                                      isToday
                                    )}
                                    ${
                                      isToday && !(day.isComplete || day.isCompleted)
                                        ? "animate-pulse"
                                        : ""
                                    }
                                    ${
                                      !isFutureDay &&
                                      !(day.isComplete || day.isCompleted)
                                        ? "hover:scale-105 cursor-pointer"
                                        : ""
                                    }
                                    ${
                                      isFutureDay
                                        ? "cursor-not-allowed"
                                        : "cursor-pointer"
                                    }
                                `}
              >
                {/* Número do dia - Principal e centralizado */}
                <div
                  className={`text-xl sm:text-2xl md:text-3xl font-black mb-1 ${
                    day.isComplete || day.isCompleted
                      ? "text-white drop-shadow-lg"
                      : isToday
                      ? "text-yellow-300 drop-shadow-lg"
                      : "text-white"
                  }`}
                >
                  {dayNumber}
                </div>

                {/* Data compacta */}
                <div
                  className={`text-xs font-medium mb-0.5 ${
                    day.isComplete || day.isCompleted
                      ? "text-emerald-200"
                      : isToday
                      ? "text-yellow-200"
                      : "text-gray-300"
                  }`}
                >
                  {formatPtBR(dayDate)}
                </div>

                {/* Dia da semana */}
                <div
                  className={`text-xs font-bold uppercase tracking-wider ${
                    day.isComplete || day.isCompleted
                      ? "text-white/80"
                      : isToday
                      ? "text-yellow-100"
                      : "text-gray-400"
                  }`}
                >
                  {getWeekdayPtBR(dayDate)}
                </div>

                {/* Tag de dificuldade - Posição absoluta elegante */}
                {(day.isComplete || day.isCompleted) && day.difficulty && (
                  <div className="absolute top-1 right-1">
                    {(() => {
                      const tagConfig = getDifficultyTag(day.difficulty);
                      return (
                        <div className={`
                          ${tagConfig.bg} w-3 h-3 rounded-full border border-white/30 shadow-lg
                          flex items-center justify-center group-hover:scale-110 transition-transform duration-200
                        `} title={tagConfig.label}>
                        </div>
                      );
                    })()}
                  </div>
                )}



                {/* Efeito hover */}
                <div className="absolute inset-0 rounded-2xl bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
              </button>
            </div>
          );
        })}
      </div>

      {/* Legenda */}
      <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
        <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
          <div className="w-4 h-4 bg-emerald-500 rounded"></div>
          <span className="text-gray-300">Completo</span>
        </div>
        <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
          <div className="w-4 h-4 bg-white/20 border border-white/30 rounded"></div>
          <span className="text-gray-300">Pendente</span>
        </div>
        <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
          <div className="w-4 h-4 bg-white/20 border-2 border-yellow-400 rounded animate-pulse"></div>
          <span className="text-gray-300">Hoje</span>
        </div>
      </div>
    </div>
  );
}
