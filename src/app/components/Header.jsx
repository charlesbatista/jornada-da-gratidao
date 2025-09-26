import { getMotivationalMessage } from '../utils/achievements.js';
import { formatPtBR } from '../utils/date.js';

// Estilos CSS customizados para animações
const customStyles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes titleGlow {
    0%, 100% { filter: brightness(1); }
    50% { filter: brightness(1.2) drop-shadow(0 0 20px rgba(147, 51, 234, 0.3)); }
  }
  
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-50px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(50px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes slideInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes textShine {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  @keyframes numberGlow {
    0%, 100% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.3); }
    50% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(147, 51, 234, 0.3); }
  }
  
  @keyframes meteor {
    0% { opacity: 0; transform: translateX(-20px) translateY(-20px); }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { opacity: 0; transform: translateX(40px) translateY(40px); }
  }
  
  @keyframes orbitSlow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @keyframes orbitFast {
    from { transform: rotate(360deg); }
    to { transform: rotate(0deg); }
  }
  
  @keyframes floatUp {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    25% { transform: translateY(-8px) rotate(2deg); }
    50% { transform: translateY(-15px) rotate(0deg); }
    75% { transform: translateY(-8px) rotate(-2deg); }
  }
  
  @keyframes sparkle {
    0%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
    50% { transform: scale(1.3) rotate(180deg); opacity: 0.8; }
  }
  
  /* Otimizações para performance mobile */
  .cosmic-bg {
    will-change: transform;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
  
  @media (max-width: 768px) {
    /* Reduzir animações em mobile */
    .animate-pulse {
      animation-duration: 4s !important;
    }
    .animate-sparkle {
      animation-duration: 3s !important;
    }
    /* Desabilitar algumas animações pesadas em mobile */
    .blur-3xl {
      filter: blur(8px) !important;
    }
  }
`;

export default function Header({ completedDays, totalDays = 90, startDate }) {
    const progressPercentage = (completedDays / totalDays) * 100;
    const motivationalMessage = getMotivationalMessage(completedDays, totalDays);
    
    // Detectar se é mobile para otimizar animações
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    
    return (
        <>
            {/* Inject custom CSS styles */}
            <style dangerouslySetInnerHTML={{ __html: customStyles }} />
            
            {/* Background INCRÍVEL que ocupa toda a tela - PRIMEIRO para evitar cortes */}
                        {/* Fundo cósmico animado que cobre toda a tela */}
            <div className="fixed inset-0 w-full h-screen overflow-hidden -z-10 cosmic-bg" style={{
                margin: 0,
                padding: 0,
                border: 'none',
                outline: 'none',
                boxShadow: 'none'
            }}>
                {/* Base sólida para garantir cobertura total */}
                <div className="absolute -inset-40 bg-gradient-to-br from-slate-900 via-gray-900 to-black" />
                
                {/* Animações condicionais - versão mobile otimizada */}
                {isMobile ? (
                    /* Versão Mobile - Apenas 3 nebulosas, sem blur pesado */
                    <>
                        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-400/8 via-purple-500/6 to-cyan-600/4 rounded-full blur-2xl opacity-60" />
                        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-purple-500/8 via-pink-500/6 to-purple-600/4 rounded-full blur-2xl opacity-50" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-br from-amber-400/6 via-orange-500/4 to-yellow-600/3 rounded-full blur-xl opacity-40" />
                    </>
                ) : (
                    /* Versão Desktop - Animações completas */
                    <>
                        {/* Nebulosas cósmicas que ocupam toda a tela */}
                        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-400/12 via-cyan-500/8 to-blue-600/6 rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s'}} />
                        <div className="absolute -top-20 -right-40 w-120 h-120 bg-gradient-to-br from-purple-500/12 via-pink-500/8 to-purple-600/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s', animationDuration: '8s'}} />
                        <div className="absolute -bottom-40 left-1/4 w-104 h-104 bg-gradient-to-br from-amber-400/12 via-orange-500/8 to-yellow-600/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s', animationDuration: '7s'}} />
                        <div className="absolute top-1/2 -right-28 w-80 h-80 bg-gradient-to-br from-emerald-400/12 via-teal-500/8 to-green-600/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s', animationDuration: '5s'}} />
                        
                        {/* Galáxias que se estendem muito além das bordas */}
                        <div className="absolute -top-20 -left-20 w-60 h-60 bg-gradient-to-br from-indigo-400/10 via-blue-500/6 to-cyan-600/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s', animationDuration: '9s'}} />
                        <div className="absolute -bottom-30 -right-30 w-88 h-88 bg-gradient-to-br from-pink-400/10 via-purple-500/6 to-indigo-600/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3.5s', animationDuration: '10s'}} />
                        <div className="absolute top-1/3 -left-24 w-72 h-72 bg-gradient-to-br from-yellow-400/12 via-orange-500/8 to-red-600/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2.2s', animationDuration: '6s'}} />
                        <div className="absolute bottom-1/3 -right-24 w-76 h-76 bg-gradient-to-br from-emerald-400/10 via-teal-500/6 to-blue-600/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.8s', animationDuration: '8.5s'}} />
                    </>
                )}
                
                {/* Estrelas condicionais - otimizadas para mobile */}
                {!isMobile && (
                    <>
                        {/* Estrelas dispersas - apenas no desktop */}
                        <div className="absolute -top-8 -left-12 w-1 h-1 bg-white rounded-full shadow-white shadow-sm animate-pulse" style={{animationDelay: '0.5s'}} />
                        <div className="absolute top-1/4 -left-16 w-0.5 h-0.5 bg-blue-200 rounded-full shadow-blue-200 shadow-sm animate-pulse" style={{animationDelay: '1.2s'}} />
                        <div className="absolute top-1/2 -left-8 w-1 h-1 bg-cyan-200 rounded-full shadow-cyan-200 shadow-sm animate-pulse" style={{animationDelay: '2.1s'}} />
                        <div className="absolute -top-12 -right-20 w-0.5 h-0.5 bg-white rounded-full shadow-white shadow-sm animate-pulse" style={{animationDelay: '0.8s'}} />
                        <div className="absolute top-1/3 -right-24 w-1 h-1 bg-purple-200 rounded-full shadow-purple-200 shadow-sm animate-pulse" style={{animationDelay: '1.8s'}} />
                        <div className="absolute top-2/3 -right-16 w-0.5 h-0.5 bg-pink-200 rounded-full shadow-pink-200 shadow-sm animate-pulse" style={{animationDelay: '2.5s'}} />
                        <div className="absolute -bottom-16 -left-24 w-1 h-1 bg-yellow-200 rounded-full shadow-yellow-200 shadow-sm animate-pulse" style={{animationDelay: '1.1s'}} />
                        <div className="absolute -bottom-8 -left-12 w-0.5 h-0.5 bg-white rounded-full shadow-white shadow-sm animate-pulse" style={{animationDelay: '3.2s'}} />
                        <div className="absolute -bottom-20 -right-28 w-1 h-1 bg-emerald-200 rounded-full shadow-emerald-200 shadow-sm animate-pulse" style={{animationDelay: '0.3s'}} />
                        <div className="absolute -bottom-4 -right-8 w-0.5 h-0.5 bg-indigo-200 rounded-full shadow-indigo-200 shadow-sm animate-pulse" style={{animationDelay: '2.8s'}} />
                        
                        {/* Estrelas adicionais para preencher completamente */}
                        <div className="absolute top-1/5 -left-20 w-0.5 h-0.5 bg-white/80 rounded-full animate-sparkle" style={{animationDelay: '4s'}} />
                        <div className="absolute top-4/5 -right-12 w-1 h-1 bg-cyan-300/70 rounded-full animate-sparkle" style={{animationDelay: '1.5s'}} />
                        <div className="absolute bottom-1/5 -left-28 w-0.5 h-0.5 bg-purple-300/60 rounded-full animate-sparkle" style={{animationDelay: '3.8s'}} />
                        <div className="absolute bottom-2/5 -right-32 w-1 h-1 bg-yellow-300/80 rounded-full animate-sparkle" style={{animationDelay: '0.7s'}} />
                    </>
                )}
                
                {/* Partículas extras nos cantos */}
                <div className="absolute top-1/4 left-1/4 w-36 h-36 bg-gradient-to-br from-violet-400/10 via-purple-500/7 to-pink-600/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '5s', animationDuration: '12s'}} />
                <div className="absolute bottom-1/4 right-1/4 w-44 h-44 bg-gradient-to-br from-cyan-400/10 via-blue-500/7 to-indigo-600/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '6s', animationDuration: '11s'}} />
                
                {/* Constelações de estrelas cobrindo toda a tela */}
                <div className="absolute top-1/6 left-1/5 w-2 h-2 bg-yellow-300 rounded-full shadow-lg shadow-yellow-300/50 animate-ping" style={{animationDelay: '0.5s', animationDuration: '3s'}} />
                <div className="absolute top-1/3 right-1/5 w-1.5 h-1.5 bg-blue-300 rounded-full shadow-lg shadow-blue-300/50 animate-ping" style={{animationDelay: '1.8s', animationDuration: '4s'}} />
                <div className="absolute top-1/2 left-2/3 w-2 h-2 bg-purple-300 rounded-full shadow-lg shadow-purple-300/50 animate-ping" style={{animationDelay: '2.5s', animationDuration: '3.5s'}} />
                <div className="absolute bottom-1/4 left-1/6 w-1.5 h-1.5 bg-pink-300 rounded-full shadow-lg shadow-pink-300/50 animate-ping" style={{animationDelay: '3.2s', animationDuration: '4.2s'}} />
                <div className="absolute top-1/5 right-1/3 w-2 h-2 bg-emerald-300 rounded-full shadow-lg shadow-emerald-300/50 animate-ping" style={{animationDelay: '2s', animationDuration: '3.8s'}} />
                <div className="absolute bottom-1/6 right-1/6 w-1.5 h-1.5 bg-cyan-300 rounded-full shadow-lg shadow-cyan-300/50 animate-ping" style={{animationDelay: '4s', animationDuration: '3.2s'}} />
                <div className="absolute top-2/3 left-1/4 w-2 h-2 bg-amber-300 rounded-full shadow-lg shadow-amber-300/50 animate-ping" style={{animationDelay: '1.5s', animationDuration: '4.5s'}} />
                <div className="absolute bottom-1/3 right-2/3 w-1.5 h-1.5 bg-rose-300 rounded-full shadow-lg shadow-rose-300/50 animate-ping" style={{animationDelay: '3.8s', animationDuration: '3.7s'}} />
                
                {/* Meteoros cruzando além de toda a tela */}
                <div className="absolute -top-10 -left-32 w-64 h-0.5 bg-gradient-to-r from-white via-blue-300 to-transparent rounded-full opacity-60" style={{
                    animation: 'meteor 4s ease-in-out infinite',
                    animationDelay: '1s'
                }} />
                <div className="absolute -bottom-16 -right-40 w-72 h-0.5 bg-gradient-to-r from-white via-purple-300 to-transparent rounded-full opacity-50 rotate-45" style={{
                    animation: 'meteor 5s ease-in-out infinite',
                    animationDelay: '2.5s'
                }} />
                <div className="absolute -top-8 -right-36 w-56 h-0.5 bg-gradient-to-r from-white via-yellow-300 to-transparent rounded-full opacity-70 -rotate-12" style={{
                    animation: 'meteor 3.5s ease-in-out infinite',
                    animationDelay: '0.3s'
                }} />
                <div className="absolute -bottom-12 -left-28 w-48 h-0.5 bg-gradient-to-r from-white via-emerald-300 to-transparent rounded-full opacity-55 rotate-12" style={{
                    animation: 'meteor 6s ease-in-out infinite',
                    animationDelay: '4s'
                }} />
                <div className="absolute top-2/3 -left-32 w-60 h-0.5 bg-gradient-to-r from-white via-pink-300 to-transparent rounded-full opacity-65 -rotate-45" style={{
                    animation: 'meteor 4.5s ease-in-out infinite',
                    animationDelay: '1.8s'
                }} />
                {/* Meteoros adicionais para mais movimento */}
                <div className="absolute top-1/6 -right-44 w-80 h-0.5 bg-gradient-to-r from-white via-cyan-300 to-transparent rounded-full opacity-40 rotate-30" style={{
                    animation: 'meteor 7s ease-in-out infinite',
                    animationDelay: '3.2s'
                }} />
                <div className="absolute bottom-2/5 -left-36 w-68 h-0.5 bg-gradient-to-r from-white via-indigo-300 to-transparent rounded-full opacity-50 -rotate-30" style={{
                    animation: 'meteor 5.5s ease-in-out infinite',
                    animationDelay: '2.1s'
                }} />
            </div>
            
            
            {/* Header com conteúdo */}
            <header className="relative text-center my-12 z-10">
                <div className="relative px-4">
                {/* ÍCONE CENTRAL INCRÍVEL - Portal da Transformação */}
                <div className="mb-16 relative flex justify-center">
                    <div className="relative w-40 h-40">
                        {/* Anéis de energia cósmica */}
                        <div className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-blue-400/40 via-purple-500/60 to-pink-500/40 animate-spin" style={{animationDuration: '15s', animation: 'orbitSlow 15s linear infinite'}} />
                        <div className="absolute inset-2 rounded-full border border-gradient-to-r from-purple-500/50 via-pink-500/70 to-orange-500/50" style={{animation: 'orbitFast 12s linear infinite'}} />
                        <div className="absolute inset-4 rounded-full border border-dashed border-gradient-to-r from-orange-500/60 via-yellow-400/80 to-amber-500/60" style={{animation: 'orbitSlow 18s linear infinite'}} />
                        
                        {/* Portal central com efeito de profundidade */}
                        <div className="absolute inset-8 rounded-full bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 shadow-2xl border-2 border-white/20 flex items-center justify-center group cursor-pointer hover:scale-110 transition-all duration-700 overflow-hidden">
                            {/* Energia interna pulsante */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 via-purple-500/40 to-pink-500/30 animate-pulse" style={{animationDuration: '3s'}} />
                            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-purple-500/20 via-pink-500/30 to-orange-500/20 animate-pulse" style={{animationDuration: '2s', animationDelay: '0.5s'}} />
                            
                            {/* Reflexos realistas */}
                            <div className="absolute top-2 left-2 right-6 bottom-6 rounded-full bg-gradient-to-br from-white/30 via-white/10 to-transparent" />
                            <div className="absolute bottom-2 right-2 top-6 left-6 rounded-full bg-gradient-to-br from-transparent via-black/10 to-black/30" />
                            
                            {/* Constelação de ícones da transformação */}
                            <div className="relative z-10 flex flex-col items-center">
                                {/* Estrela principal */}
                                <span className="text-3xl mb-2 transform group-hover:rotate-45 transition-all duration-500" style={{
                                    animation: 'sparkle 4s ease-in-out infinite'
                                }}>⭐</span>
                                
                                {/* Linha de conexão energética */}
                                <div className="w-6 h-1 bg-gradient-to-r from-yellow-400 via-white to-orange-500 rounded-full mb-2 shadow-lg shadow-yellow-400/50" style={{
                                    animation: 'sparkle 2s ease-in-out infinite',
                                    animationDelay: '1s'
                                }} />
                                
                                {/* Foguete da jornada */}
                                <span className="text-2xl transform group-hover:-rotate-12 transition-all duration-500" style={{
                                    animation: 'floatUp 3.5s ease-in-out infinite',
                                    animationDelay: '0.8s'
                                }}>🚀</span>
                            </div>
                            
                            {/* Partículas de luz orbitais */}
                            <div className="absolute inset-0 rounded-full overflow-hidden">
                                <div className="absolute w-1.5 h-1.5 bg-white rounded-full top-2 left-1/2 transform -translate-x-1/2 animate-ping" style={{animationDelay: '0s'}} />
                                <div className="absolute w-1 h-1 bg-blue-300 rounded-full top-1/2 right-2 transform -translate-y-1/2 animate-ping" style={{animationDelay: '0.7s'}} />
                                <div className="absolute w-1.5 h-1.5 bg-purple-300 rounded-full bottom-2 left-1/2 transform -translate-x-1/2 animate-ping" style={{animationDelay: '1.4s'}} />
                                <div className="absolute w-1 h-1 bg-pink-300 rounded-full top-1/2 left-2 transform -translate-y-1/2 animate-ping" style={{animationDelay: '2.1s'}} />
                            </div>
                        </div>
                        
                        {/* Satélites orbitais - Planetas da transformação */}
                        <div className="absolute inset-0" style={{animation: 'orbitSlow 25s linear infinite'}}>
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg shadow-yellow-400/60 border border-white/30">
                                <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-white/40 to-transparent" />
                                <span className="absolute inset-0 flex items-center justify-center text-xs">💫</span>
                            </div>
                            <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 w-5 h-5 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full shadow-lg shadow-blue-400/60 border border-white/30">
                                <span className="absolute inset-0 flex items-center justify-center text-xs">✨</span>
                            </div>
                        </div>
                        
                        <div className="absolute inset-0" style={{animation: 'orbitFast 20s linear infinite'}}>
                            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg shadow-purple-400/60 border border-white/30">
                                <span className="absolute inset-0 flex items-center justify-center text-xs">💎</span>
                            </div>
                            <div className="absolute top-1/2 -left-3 transform -translate-y-1/2 w-5 h-5 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full shadow-lg shadow-emerald-400/60 border border-white/30">
                                <span className="absolute inset-0 flex items-center justify-center text-xs">🌟</span>
                            </div>
                        </div>
                        
                        {/* Campo de força invisível */}
                        <div className="absolute -inset-4 rounded-full border border-white/5" style={{animation: 'orbitSlow 30s linear infinite'}} />
                        <div className="absolute -inset-6 rounded-full border border-dashed border-white/3" style={{animation: 'orbitFast 35s linear infinite'}} />
                    </div>
                </div>

                {/* Título principal com efeitos dramáticos */}
                <div className="mb-8 relative">
                    {/* Glow de fundo */}
                    <div className="absolute inset-0 blur-3xl opacity-30">
                        <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                            Jornada da Transformação
                        </h1>
                    </div>
                    
                    {/* Título principal */}
                    <h1 className="relative text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-6 tracking-tight leading-tight" style={{
                        animation: 'titleGlow 4s ease-in-out infinite alternate'
                    }}>
                        <span className="inline-block" style={{animationDelay: '0s', animation: 'slideInLeft 1s ease-out'}}>
                            Jornada
                        </span>
                        <span className="inline-block mx-4" style={{animationDelay: '0.3s', animation: 'slideInUp 1s ease-out'}}>
                            da
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent inline-block" style={{
                            animationDelay: '0.6s', 
                            animation: 'slideInRight 1s ease-out, textShine 3s ease-in-out infinite'
                        }}>
                            Transformação
                        </span>
                    </h1>
                </div>
                
                {/* Subtítulo integrado e elegante */}
                <div className="mb-12 relative">
                    <div className="max-w-3xl mx-auto">
                        {/* Card do subtítulo */}
                        <div className="relative bg-gradient-to-br from-slate-900/40 via-slate-800/30 to-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                            {/* Brilho sutil */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/10 to-pink-500/5 rounded-2xl" />
                            
                            <div className="relative text-center">
                                {/* Título principal do card */}
                                <div className="inline-flex items-center gap-3 mb-4" style={{
                                    animation: 'fadeInUp 2s ease-out 1s both'
                                }}>
                                    <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 font-black text-3xl md:text-4xl">
                                        {totalDays} DIAS
                                    </span>
                                    <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
                                </div>
                                
                                {/* Descrição principal */}
                                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-4" style={{
                                    animation: 'fadeInUp 2s ease-out 1.3s both'
                                }}>
                                    na libertação do vício em apostas online!
                                </p>
                                
                                {/* Frase motivacional */}
                                <div className="flex items-center justify-center gap-2 text-base md:text-lg text-gray-400 italic" style={{
                                    animation: 'fadeInUp 2s ease-out 1.6s both'
                                }}>
                                    <span className="text-yellow-400">✨</span>
                                    <span>Um dia de cada vez, um passo de cada vez</span>
                                    <span className="text-yellow-400">✨</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card de progresso dinâmico e interativo */}
                <div className="max-w-3xl mx-auto">
                    <div className="group relative" style={{animation: 'fadeInUp 2s ease-out 2s both'}}>
                        {/* Múltiplas camadas de brilho */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 via-blue-500/20 to-purple-600/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400/20 via-orange-500/15 to-red-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
                        
                        <div className="relative bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-[1.02]">
                            
                            {/* Header do progresso */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="text-left">
                                    <div className="text-emerald-400 text-sm font-bold mb-1 uppercase tracking-wider flex items-center gap-2">
                                        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                                        Progresso da Jornada
                                    </div>
                                    {startDate && (
                                        <div className="text-gray-400 text-xs">
                                            Iniciada em {formatPtBR(startDate)}
                                        </div>
                                    )}
                                </div>
                                
                                {/* Badge de conquista */}
                                <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-3 py-2 rounded-full border border-yellow-400/30">
                                    <span className="text-lg">🏆</span>
                                    <span className="text-yellow-400 font-bold text-sm">
                                        {Math.round(progressPercentage)}%
                                    </span>
                                </div>
                            </div>
                            
                            {/* Contador principal com animação */}
                            <div className="text-center mb-6">
                                <div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white mb-2" style={{
                                    animation: 'numberGlow 3s ease-in-out infinite'
                                }}>
                                    {completedDays}
                                    <span className="text-3xl md:text-4xl text-gray-400 font-light">
                                        /{totalDays}
                                    </span>
                                </div>
                                <div className="text-gray-300 text-sm font-medium">
                                    dias conquistados
                                </div>
                            </div>
                            
                            {/* Barra de progresso avançada */}
                            <div className="relative mb-6">
                                {/* Trilha da barra */}
                                <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-full h-6 overflow-hidden border border-gray-600/50 shadow-inner">
                                    {/* Progresso principal */}
                                    <div 
                                        className="h-full bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 transition-all duration-3000 ease-out relative overflow-hidden shadow-lg"
                                        style={{ width: `${progressPercentage}%` }}
                                    >
                                        {/* Brilho animado */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                                        
                                        {/* Reflexo superior */}
                                        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-white/20 to-transparent" />
                                        
                                        {/* Partículas em movimento */}
                                        <div className="absolute inset-0 overflow-hidden">
                                            <div className="absolute top-1/2 w-1 h-1 bg-white rounded-full animate-ping" style={{left: '20%', animationDelay: '0s'}} />
                                            <div className="absolute top-1/2 w-1 h-1 bg-white rounded-full animate-ping" style={{left: '60%', animationDelay: '1s'}} />
                                            <div className="absolute top-1/2 w-1 h-1 bg-white rounded-full animate-ping" style={{left: '80%', animationDelay: '2s'}} />
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Texto da porcentagem */}
                                <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                                    <span className="text-white font-bold text-sm drop-shadow-lg">
                                        {Math.round(progressPercentage)}%
                                    </span>
                                </div>
                            </div>
                            
                            {/* Mensagem motivacional com ícone */}
                            <div className="text-center">
                                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-3 rounded-2xl border border-blue-400/20">
                                    <span className="text-2xl animate-bounce">💫</span>
                                    <div className="text-gray-300 text-sm font-medium">
                                        {motivationalMessage}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </header>
        </>
    );
}
