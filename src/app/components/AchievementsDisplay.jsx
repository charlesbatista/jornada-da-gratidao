import { getAllAchievedMilestones, generateAchievements } from '../utils/achievements.js';

export default function AchievementsDisplay({ completedDays, totalDays = 90 }) {
    const achievedMilestones = getAllAchievedMilestones(completedDays, totalDays);
    const allMilestones = generateAchievements(totalDays);
    
    // Estatísticas dinâmicas
    const stats = {
        totalDays: completedDays,
        streak: completedDays, // Simplificado - poderia ser mais complexo
        milestonesAchieved: achievedMilestones.length,
        progress: Math.round((completedDays / totalDays) * 100)
    };

    return (
        <div className="mt-12 mb-16">
            {/* Header da Jornada */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mb-4">
                    <span className="text-3xl">🏆</span>
                </div>
                <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-3">
                    Jornada de Conquistas
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    Cada passo é uma vitória. Celebre suas conquistas e veja o quão longe você chegou.
                </p>
            </div>

            {/* Dashboard de Estatísticas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
                <div className="stat-card group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
                    <div className="achievement-shine relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 cursor-pointer">
                        <div className="text-3xl mb-2 filter drop-shadow-lg">🔥</div>
                        <div className="text-2xl font-bold text-emerald-400">{stats.totalDays}</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wide font-medium">Dias Completos</div>
                    </div>
                </div>

                <div className="stat-card group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
                    <div className="achievement-shine relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 cursor-pointer">
                        <div className="text-3xl mb-2 filter drop-shadow-lg">⚡</div>
                        <div className="text-2xl font-bold text-orange-400">{stats.streak}</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wide font-medium">Sequência</div>
                    </div>
                </div>

                <div className="stat-card group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-600/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
                    <div className="achievement-shine relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 cursor-pointer">
                        <div className="text-3xl mb-2 filter drop-shadow-lg">🎖️</div>
                        <div className="text-2xl font-bold text-purple-400">{stats.milestonesAchieved}</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wide font-medium">Marcos</div>
                    </div>
                </div>

                <div className="stat-card group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
                    <div className="achievement-shine relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 cursor-pointer">
                        <div className="text-3xl mb-2 filter drop-shadow-lg">📊</div>
                        <div className="text-2xl font-bold text-blue-400">{stats.progress}%</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wide font-medium">Progresso</div>
                    </div>
                </div>
            </div>

            {/* Linha do Tempo de Conquistas */}
            <div className="max-w-6xl mx-auto">
                <h3 className="text-2xl font-bold text-center text-white mb-8">
                    🛤️ Trilha das Conquistas
                </h3>
                
                <div className="relative">
                    {/* Linha conectora animada */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 h-full rounded-full timeline-line"></div>
                    
                    <div className="space-y-8">
                        {allMilestones.map((milestone, index) => {
                            const isAchieved = achievedMilestones.some(achieved => achieved.days === milestone.days);
                            const isLeft = index % 2 === 0;
                            
                            return (
                                <div key={milestone.days} className={`relative flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                                    {/* Card da conquista */}
                                    <div className={`w-5/12 ${isLeft ? 'pr-8' : 'pl-8'}`}>
                                        <div className={`group relative ${isAchieved ? 'golden-glow achievement-pulse' : ''}`}>
                                            {isAchieved && (
                                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 via-orange-500/20 to-red-500/30 rounded-3xl blur-xl animate-pulse" />
                                            )}
                                            
                                            <div className={`relative backdrop-blur-xl border rounded-3xl p-6 transition-all duration-500 hover:scale-105 ${
                                                isAchieved 
                                                    ? 'bg-gradient-to-br from-yellow-500/15 via-orange-500/10 to-red-500/15 border-yellow-400/40 shadow-xl shadow-yellow-500/20' 
                                                    : 'bg-white/5 border-white/10 opacity-60 hover:opacity-80'
                                            }`}>
                                                <div className={`text-right ${isLeft ? 'text-left' : 'text-right'}`}>
                                                    <div className={`text-5xl mb-3 ${isAchieved ? 'animate-bounce filter drop-shadow-lg' : 'grayscale opacity-50'}`}>
                                                        {milestone.icon}
                                                    </div>
                                                    <h4 className={`text-xl font-bold mb-2 ${isAchieved ? 'text-yellow-200' : 'text-gray-400'}`}>
                                                        {milestone.title}
                                                    </h4>
                                                    <p className={`text-sm mb-4 leading-relaxed ${isAchieved ? 'text-yellow-300/80' : 'text-gray-500'}`}>
                                                        {milestone.description}
                                                    </p>
                                                    
                                                    {/* Badge de status */}
                                                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
                                                        isAchieved 
                                                            ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-200 border border-yellow-400/30' 
                                                            : 'bg-gray-500/10 text-gray-400 border border-gray-600/30'
                                                    }`}>
                                                        <span className="text-lg">
                                                            {isAchieved ? '🏆' : '⏳'}
                                                        </span>
                                                        {isAchieved ? 'Conquistado!' : `Dia ${milestone.days}`}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Indicador central */}
                                    <div className="w-2/12 flex justify-center">
                                        <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center relative z-10 transition-all duration-500 ${
                                            isAchieved 
                                                ? 'bg-gradient-to-br from-yellow-400 to-orange-500 border-yellow-300 shadow-lg shadow-yellow-500/50' 
                                                : 'bg-gray-700 border-gray-600'
                                        }`}>
                                            <span className="text-lg font-bold">
                                                {isAchieved ? '✨' : milestone.days}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Espaço vazio do outro lado */}
                                    <div className="w-5/12"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Seção de Motivação */}
            {achievedMilestones.length > 0 && (
                <div className="mt-16 text-center">
                    <div className="group relative max-w-2xl mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-pink-500/20 to-orange-500/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
                            <div className="text-6xl mb-4">🌟</div>
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-3">
                                Você está brilhando!
                            </h3>
                            <p className="text-gray-200 leading-relaxed">
                                {achievedMilestones.length === 1 
                                    ? "Sua primeira conquista é só o começo de uma jornada incrível!" 
                                    : `${achievedMilestones.length} marcos conquistados! Cada passo te torna mais forte e resiliente.`
                                }
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}