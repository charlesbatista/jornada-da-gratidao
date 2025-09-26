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

  const getCardClasses = (isCompleted, isFutureDay, isToday) => {
    const base =
      "relative w-full aspect-square rounded-3xl overflow-hidden transition-all duration-300 focus:outline-none border-2";

    if (isFutureDay) {
      return `${base} bg-gray-800/50 border-gray-600/30 opacity-40 cursor-not-allowed`;
    }

    // Dia atual que já foi concluído - verde com borda dourada pulsante
    if (isToday && isCompleted) {
      return `${base} bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 border-emerald-400/50 shadow-lg shadow-emerald-500/30 ring-4 ring-amber-400/30 ring-offset-2 ring-offset-transparent`;
    }

    if (isToday) {
      return `${base} bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 border-orange-400/50 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50`;
    }

    if (isCompleted) {
      return `${base} bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 border-emerald-400/50 shadow-lg shadow-emerald-500/30`;
    }

    return `${base} bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 border-gray-600/50 hover:border-gray-500/70 hover:shadow-lg`;
  };

  // Auto scroll para o dia de hoje
  useEffect(() => {
    if (todayCardRef.current) {
      setTimeout(() => {
        todayCardRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
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
      <div className="grid grid-cols-1 min-[425px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-8">
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

          const isCompleted = day.isComplete || day.isCompleted;

          return (
            <div
              key={day.id ? `old-${day.id}` : `new-${day.dayNumber}`}
              className="group relative"
              ref={isToday ? todayCardRef : null}
              data-day-number={dayNumber}
            >
              {/* Card do dia */}
              <button
                onClick={() => !isFutureDay && handleDayClick(day)}
                disabled={isFutureDay}
                className={`${getCardClasses(
                  isCompleted,
                  isFutureDay,
                  isToday
                )} ${
                  !isFutureDay ? "cursor-pointer" : ""
                } p-4 flex flex-col justify-between`}
              >
                {/* Header com dia da semana */}
                <div className="w-full flex justify-start">
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider ${
                      isFutureDay ? "text-gray-500" : "text-white/90"
                    }`}
                  >
                    {getWeekdayPtBR(dayDate)}
                  </span>
                </div>

                {/* Centro com número do dia */}
                <div className="flex-1 flex items-center justify-center">
                  <span
                    className={`text-6xl font-black leading-none ${
                      isFutureDay ? "text-gray-500" : "text-white"
                    }`}
                  >
                    {String(dayNumber).padStart(2, "0")}
                  </span>
                </div>

                {/* Footer com data e check */}
                <div className="w-full flex justify-between items-end">
                  <span
                    className={`text-xs ${
                      isFutureDay ? "text-gray-500" : "text-white/70"
                    }`}
                  >
                    {dayDate.getDate().toString().padStart(2, "0")}/
                    {(dayDate.getMonth() + 1).toString().padStart(2, "0")}
                  </span>

                  {/* Ícone de check para dias concluídos */}
                  {isCompleted && (
                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-emerald-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                    </div>
                  )}
                </div>
              </button>
            </div>
          );
        })}
      </div>

      {/* Legenda */}
      <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 rounded-lg border-2 border-emerald-400/50"></div>
          <span className="text-gray-300 font-medium">Completo</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-lg border-2 border-gray-600/50"></div>
          <span className="text-gray-300 font-medium">Pendente</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-lg border-2 border-orange-400/50"></div>
          <span className="text-gray-300 font-medium">Hoje</span>
        </div>
      </div>
    </div>
  );
}
