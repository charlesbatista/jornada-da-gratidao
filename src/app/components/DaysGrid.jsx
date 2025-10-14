import { formatPtBR, parseYmdLocal, getWeekdayPtBR } from "@/app/utils/date";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function DaysGrid({
  days,
  handleDayClick,
  startDate,
  totalDays = 90,
}) {
  const todayCardRef = useRef(null);
  const { isEditMode } = useAuth();
  
  // Data de hoje (inicializada no cliente para evitar erro de hidratação)
  const [today, setToday] = useState(null);
  
  // Detectar mobile para otimizações
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  
  // Inicializar a data de hoje apenas no cliente
  useEffect(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    setToday(now);
  }, []);

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

    // Modo de visualização - mesmo visual mas sem cursor pointer
    const cursorClass = isEditMode ? "cursor-pointer" : "cursor-default";

    // Dia atual que já foi concluído - verde com borda dourada pulsante
    if (isToday && isCompleted) {
      return `${base} bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 border-emerald-400/50 shadow-lg shadow-emerald-500/30 ring-4 ring-amber-400/30 ring-offset-2 ring-offset-transparent`;
    }

    if (isToday) {
      const hoverClass = isEditMode ? "hover:shadow-orange-500/50" : "";
      return `${base} bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 border-orange-400/50 shadow-lg shadow-orange-500/30 ${hoverClass} ${cursorClass}`;
    }

    if (isCompleted) {
      return `${base} bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 border-emerald-400/50 shadow-lg shadow-emerald-500/30 ${cursorClass}`;
    }

    const hoverClass = isEditMode ? "hover:border-gray-500/70 hover:shadow-lg" : "";
    return `${base} bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 border-gray-600/50 ${hoverClass} ${cursorClass}`;
  };

  // Auto scroll para o dia de hoje (otimizado para mobile)
  useEffect(() => {
    // Aguardar today ser inicializado antes de fazer scroll
    if (todayCardRef.current && today) {
      const delay = isMobile ? 200 : 500; // Delay menor no mobile
      const behavior = isMobile ? "auto" : "smooth"; // Scroll instantâneo no mobile
      
      setTimeout(() => {
        if (todayCardRef.current) {
          todayCardRef.current.scrollIntoView({
            behavior,
            block: "center",
          });
        }
      }, delay);
    }
  }, [days, isMobile, today]);

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
          
          // Se today ainda não foi inicializado, assumir valores padrão (não é hoje, não é futuro)
          const dayDateWithoutTime = new Date(dayDate);
          dayDateWithoutTime.setHours(0, 0, 0, 0);

          const isToday = today ? dayDateWithoutTime.getTime() === today.getTime() : false;
          const isFutureDay = today ? dayDateWithoutTime > today : false;

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
                )} p-4 flex flex-col justify-between ${
                  !isEditMode && !isFutureDay ? "relative" : ""
                } ${!isFutureDay ? "cursor-pointer" : "cursor-default"}`}
              >
                {/* Overlay para modo visualização */}
                {!isEditMode && !isFutureDay && (
                  <div className="absolute inset-0 bg-transparent rounded-3xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/20">
                      <span className="text-white text-xs font-medium flex items-center gap-1">
                        <span>👁️</span>
                        <span>Modo Visualização</span>
                      </span>
                    </div>
                  </div>
                )}
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

                {/* Footer com data e letra de dificuldade */}
                <div className="w-full flex justify-between items-end">
                  <span
                    className={`text-xs ${
                      isFutureDay ? "text-gray-500" : "text-white/70"
                    }`}
                  >
                    {dayDate.getDate().toString().padStart(2, "0")}/
                    {(dayDate.getMonth() + 1).toString().padStart(2, "0")}
                  </span>

                  {/* Letra de dificuldade para dias concluídos */}
                  {isCompleted && day.difficulty && (
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center font-black text-sm ${
                      day.difficulty === 'muito_dificil' ? 'bg-red-500 text-white' :
                      day.difficulty === 'dificil' ? 'bg-orange-500 text-white' :
                      day.difficulty === 'medio' ? 'bg-yellow-500 text-white' :
                      'bg-green-500 text-white'
                    }`}>
                      {day.difficulty === 'muito_dificil' ? 'E' :
                       day.difficulty === 'dificil' ? 'D' :
                       day.difficulty === 'medio' ? 'M' : 'F'}
                    </div>
                  )}
                  
                  {/* Check padrão se não tiver dificuldade */}
                  {isCompleted && !day.difficulty && (
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
      <div className="mt-8 space-y-4">
        <div className="flex flex-wrap justify-center gap-6 text-sm">
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
        
        {/* Info do modo atual */}
        <div className="text-center">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium ${
            isEditMode 
              ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
              : 'bg-blue-500/10 border border-blue-500/20 text-blue-400'
          }`}>
            <span className="text-lg">
              {isEditMode ? '✏️' : '👁️'}
            </span>
            <span>
              {isEditMode 
                ? 'Clique nos dias para marcar como concluídos' 
                : 'Visualização apenas - sem edição de progresso'
              }
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
