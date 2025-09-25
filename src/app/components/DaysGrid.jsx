import { formatPtBR, parseYmdLocal, getWeekdayPtBR } from "@/app/utils/date";

export default function DaysGrid({
  days,
  handleDayClick,
  startDate,
  totalDays = 90,
}) {
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

  const getGradientClass = (dayId, isComplete, isFutureDay) => {
    if (isComplete) {
      return "bg-gradient-to-br from-emerald-500/80 to-emerald-600/90 backdrop-blur-sm border-2 border-emerald-400 achievement-pulse green-border-glow";
    }
    if (isFutureDay) {
      return "bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 cursor-not-allowed opacity-50";
    }
    return "bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20";
  };

  // Função para obter emoji da dificuldade
  const getDifficultyEmoji = (difficulty) => {
    const emojiMap = {
      moleza: "😎",
      pouco: "😌",
      médio: "😤",
      muito: "😰",
    };
    return emojiMap[difficulty] || "🎯"; // Fallback se não houver dificuldade
  };

  return (
    <div className="relative">
      {/* Título da seção */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-black text-white mb-2">
          Seus {totalDays} Dias
        </h2>
        <p className="text-gray-300">
          Clique em um dia para registrar sua reflexão
        </p>
      </div>

      {/* Grid de dias */}
      <div className="grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-10 gap-4 md:gap-6 mb-8">
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

          return (
            <div
              key={day.id ? `old-${day.id}` : `new-${day.dayNumber}`}
              className="group relative"
            >
              {/* Glow effect para dias completos */}
              {(day.isComplete || day.isCompleted) && (
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-purple-600/30 rounded-2xl blur-lg animate-pulse" />
              )}

              {/* Card do dia */}
              <button
                onClick={() => !isFutureDay && handleDayClick(day)}
                disabled={isFutureDay}
                className={`relative w-full aspect-square flex flex-col items-center justify-center font-bold rounded-2xl transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:ring-offset-transparent p-2
                                    ${getGradientClass(
                                      dayNumber,
                                      day.isComplete || day.isCompleted,
                                      isFutureDay
                                    )}
                                    ${
                                      isToday
                                        ? "ring-2 ring-yellow-400 ring-opacity-90 animate-pulse shadow-lg shadow-yellow-400/50"
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
                {/* Número do dia */}
                <div
                  className={`text-xl md:text-2xl font-black mb-1 ${
                    day.isComplete || day.isCompleted
                      ? "golden-text"
                      : "text-white"
                  }`}
                >
                  {dayNumber}
                </div>

                {/* Data */}
                <div
                  className={`text-xs font-semibold mb-1 ${
                    day.isComplete || day.isCompleted
                      ? "text-white/95"
                      : "text-gray-300"
                  }`}
                >
                  {formatPtBR(dayDate)}
                </div>

                {/* Dia da semana */}
                <div
                  className={`text-xs font-bold uppercase tracking-wide ${
                    day.isComplete || day.isCompleted
                      ? "text-white/90"
                      : "text-gray-300"
                  }`}
                >
                  {getWeekdayPtBR(dayDate)}
                </div>

                {/* Emoji da dificuldade (substitui a bandeirinha) */}
                {(day.isComplete || day.isCompleted) && day.difficulty && (
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-white/20">
                      <span className="text-lg leading-none block">
                        {getDifficultyEmoji(day.difficulty)}
                      </span>
                    </div>
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
