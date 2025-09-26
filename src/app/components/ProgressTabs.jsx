import { useState, useEffect } from 'react';
import DaysGrid from './DaysGrid.jsx';

export default function ProgressTabs({ completedDays, days, handleDayClick, startDate, totalDays = 90 }) {
    const [activeTab, setActiveTab] = useState('daily');
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Detectar scroll para mostrar/esconder botão de voltar ao topo
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Função para rolar ao topo suavemente
    const scrollToTop = () => {
        window.scrollTo({ 
            top: 0, 
            behavior: 'smooth' 
        });
    };

    const tabs = [
        { id: 'daily', label: `Seus ${totalDays} Dias`, icon: '📅' },
        { id: 'achievements', label: 'Trilha das Conquistas', icon: '🏆' }
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
                                            ? 'bg-white text-gray-900 shadow-xl shadow-white/20'
                                            : 'text-gray-200 hover:bg-white/5 hover:text-white'
                                    }`}
                                >
                                    {/* Ícone */}
                                    <div className={`text-xl transition-all duration-300 ${
                                        activeTab === tab.id ? 'scale-110' : 'group-hover:scale-105'
                                    }`}>
                                        {tab.icon}
                                    </div>
                                    
                                    {/* Textos */}
                                    <div className="flex flex-col items-start">
                                        <span className={`text-sm font-semibold leading-none ${
                                            activeTab === tab.id ? 'text-gray-900' : 'text-white'
                                        }`}>
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
                {activeTab === 'daily' && (
                    <DailyProgressPanel 
                        completedDays={completedDays} 
                        days={days} 
                        handleDayClick={handleDayClick} 
                        startDate={startDate}
                        totalDays={totalDays}
                    />
                )}
                {activeTab === 'achievements' && (
                    <AchievementsPanel completedDays={completedDays} totalDays={totalDays} />
                )}
            </div>

            {/* Botão Flutuante para Voltar ao Topo */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className={`
                        fixed bottom-8 right-8 z-50 p-4 rounded-full
                        bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500
                        hover:from-purple-500 hover:via-blue-500 hover:to-cyan-400
                        text-white font-bold shadow-2xl shadow-purple-500/30
                        hover:shadow-purple-400/40 hover:shadow-2xl
                        transform hover:scale-110 transition-all duration-300
                        border border-white/20 hover:border-white/30
                        backdrop-blur-xl
                        animate-bounce hover:animate-none
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
    );
}

// Painel de Progresso Diário
function DailyProgressPanel({ completedDays, days, handleDayClick, startDate, totalDays = 90 }) {
    const progressPercentage = (completedDays / totalDays) * 100;
    const remainingDays = totalDays - completedDays;
    
    const stats = {
        completed: completedDays,
        remaining: remainingDays,
        percentage: Math.round(progressPercentage)
    };

    return (
        <div className="max-w-6xl mx-auto relative">
            {/* Imagem de Fundo - Amor que dá força */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-15"
                    style={{ backgroundImage: 'url(/images/amor-jornada.jpg)' }}
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
                    Acompanhe seu progresso diário e veja o quão consistente você tem sido na sua jornada.
                </p>
            </div>

            {/* Estatísticas Detalhadas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 px-4">
                {/* Dias Completados */}
                <div className="group relative cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                        <div className="text-4xl mb-3 filter drop-shadow-lg">✅</div>
                        <div className="text-3xl font-bold text-emerald-400 mb-2">{stats.completed}</div>
                        <div className="text-sm text-gray-400 uppercase tracking-wide font-medium">Dias Completos</div>
                    </div>
                </div>

                {/* Dias Restantes */}
                <div className="group relative cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                        <div className="text-4xl mb-3 filter drop-shadow-lg">🎯</div>
                        <div className="text-3xl font-bold text-blue-400 mb-2">{stats.remaining}</div>
                        <div className="text-sm text-gray-400 uppercase tracking-wide font-medium">Dias Restantes</div>
                    </div>
                </div>

                {/* Consistência */}
                <div className="group relative cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                        <div className="text-4xl mb-3 filter drop-shadow-lg">🔥</div>
                        <div className="text-3xl font-bold text-orange-400 mb-2">{stats.percentage}%</div>
                        <div className="text-sm text-gray-400 uppercase tracking-wide font-medium">Consistência</div>
                    </div>
                </div>
            </div>

            {/* Calendário de Dias - Integrado na aba diária */}
            <div className="mt-12 px-4">
                <DaysGrid days={days} handleDayClick={handleDayClick} startDate={startDate} totalDays={totalDays} />
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
        import('../utils/achievements.js').then(module => {
            setAchievementsData(module);
        });
    }, [totalDays]);
    
    if (!achievementsData) {
        return <div className="text-center text-gray-400">Carregando conquistas...</div>;
    }
    
    const { generateAchievements, getAllAchievedMilestones } = achievementsData;
    const milestones = generateAchievements(totalDays);
    const achievedMilestones = getAllAchievedMilestones ? getAllAchievedMilestones(completedDays, totalDays) : milestones.filter(m => completedDays >= m.days);
    
    const stats = {
        milestonesAchieved: achievedMilestones.length,
        totalMilestones: milestones.length,
        completionRate: Math.round((achievedMilestones.length / milestones.length) * 100)
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
                    Cada marco é uma celebração. Veja suas conquistas e o que está por vir.
                </p>
            </div>

            {/* Estatísticas de Conquistas */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
                <div className="text-center p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                    <div className="text-3xl mb-2">🎖️</div>
                    <div className="text-2xl font-bold text-purple-400">{stats.milestonesAchieved}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">Conquistados</div>
                </div>
                
                <div className="text-center p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                    <div className="text-3xl mb-2">🎯</div>
                    <div className="text-2xl font-bold text-pink-400">{stats.totalMilestones}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">Total</div>
                </div>
                
                <div className="text-center p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                    <div className="text-3xl mb-2">📊</div>
                    <div className="text-2xl font-bold text-red-400">{stats.completionRate}%</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">Taxa</div>
                </div>
            </div>

            {/* Grid de Conquistas - Design Moderno e Limpo */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {milestones.map((milestone, index) => {
                    const isAchieved = achievedMilestones.some(achieved => achieved.days === milestone.days);
                    
                    return (
                        <div key={`milestone-${milestone.days}-${index}`} className="group relative">
                            {/* Card da conquista */}
                            <div className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] ${
                                isAchieved 
                                    ? 'bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 shadow-lg shadow-emerald-100/50' 
                                    : 'bg-gray-50 border-2 border-gray-200 hover:border-gray-300'
                            }`}>
                                
                                {/* Status indicator no canto */}
                                <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${
                                    isAchieved ? 'bg-amber-500 shadow-sm shadow-amber-300' : 'bg-gray-300'
                                }`} />
                                
                                {/* Ícone */}
                                <div className={`text-4xl mb-4 transition-transform duration-300 ${
                                    isAchieved 
                                        ? 'scale-110 filter drop-shadow-sm' 
                                        : 'opacity-60 grayscale group-hover:opacity-80'
                                }`}>
                                    {milestone.icon}
                                </div>
                                
                                {/* Conteúdo */}
                                <div>
                                    <h4 className={`text-lg font-bold mb-2 ${
                                        isAchieved ? 'text-emerald-900' : 'text-gray-600'
                                    }`}>
                                        {milestone.title}
                                    </h4>
                                    <p className={`text-sm mb-4 leading-relaxed ${
                                        isAchieved ? 'text-emerald-700' : 'text-gray-500'
                                    }`}>
                                        {milestone.description}
                                    </p>
                                    
                                    {/* Badge de status */}
                                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${
                                        isAchieved 
                                            ? 'bg-gradient-to-r from-amber-100 via-yellow-50 to-amber-100 text-amber-800 border border-amber-300 shadow-sm' 
                                            : 'bg-gray-100 text-gray-600 border border-gray-200'
                                    }`}>
                                        <span className="text-sm">
                                            {isAchieved ? '🏅' : '○'}
                                        </span>
                                        <span className={isAchieved ? 'font-semibold' : ''}>
                                            {isAchieved ? 'Conquistado!' : `Dia ${milestone.days}`}
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