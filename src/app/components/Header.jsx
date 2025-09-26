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
`;

export default function Header({ completedDays, totalDays = 90, startDate }) {
    const progressPercentage = (completedDays / totalDays) * 100;
    const motivationalMessage = getMotivationalMessage(completedDays, totalDays);
    
    return (
        <>
            {/* Inject custom CSS styles */}
            <style dangerouslySetInnerHTML={{ __html: customStyles }} />
            
            <header className="relative text-center mt-12">
            {/* Background INCRÍVEL que se estende além do container */}
            <div className="absolute -inset-20 overflow-hidden">
                {/* Nebulosas cósmicas flutuantes */}
                <div className="absolute top-24 left-8 w-40 h-40 bg-gradient-to-br from-blue-400/20 via-cyan-500/15 to-blue-600/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s'}} />
                <div className="absolute top-40 right-12 w-56 h-56 bg-gradient-to-br from-purple-500/20 via-pink-500/15 to-purple-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s', animationDuration: '8s'}} />
                <div className="absolute bottom-32 left-1/4 w-48 h-48 bg-gradient-to-br from-amber-400/20 via-orange-500/15 to-yellow-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s', animationDuration: '7s'}} />
                <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-br from-emerald-400/20 via-teal-500/15 to-green-600/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s', animationDuration: '5s'}} />
                
                {/* Galáxias distantes */}
                <div className="absolute top-16 -left-12 w-28 h-28 bg-gradient-to-br from-indigo-400/15 via-blue-500/10 to-cyan-600/8 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s', animationDuration: '9s'}} />
                <div className="absolute bottom-16 -right-16 w-44 h-44 bg-gradient-to-br from-pink-400/15 via-purple-500/10 to-indigo-600/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3.5s', animationDuration: '10s'}} />
                <div className="absolute top-1/3 -left-16 w-24 h-24 bg-gradient-to-br from-yellow-400/18 via-orange-500/12 to-red-600/8 rounded-full blur-xl animate-pulse" style={{animationDelay: '2.2s', animationDuration: '6s'}} />
                <div className="absolute bottom-1/3 -right-20 w-36 h-36 bg-gradient-to-br from-emerald-400/15 via-teal-500/10 to-blue-600/8 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.8s', animationDuration: '8.5s'}} />
                
                {/* Constelações de estrelas dinâmicas */}
                <div className="absolute top-32 left-1/5 w-2 h-2 bg-yellow-300 rounded-full shadow-lg shadow-yellow-300/50 animate-ping" style={{animationDelay: '0.5s', animationDuration: '3s'}} />
                <div className="absolute top-48 right-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full shadow-lg shadow-blue-300/50 animate-ping" style={{animationDelay: '1.8s', animationDuration: '4s'}} />
                <div className="absolute top-72 left-2/3 w-2 h-2 bg-purple-300 rounded-full shadow-lg shadow-purple-300/50 animate-ping" style={{animationDelay: '2.5s', animationDuration: '3.5s'}} />
                <div className="absolute bottom-48 left-1/6 w-1.5 h-1.5 bg-pink-300 rounded-full shadow-lg shadow-pink-300/50 animate-ping" style={{animationDelay: '3.2s', animationDuration: '4.2s'}} />
                <div className="absolute top-1/4 right-1/6 w-2 h-2 bg-emerald-300 rounded-full shadow-lg shadow-emerald-300/50 animate-ping" style={{animationDelay: '2s', animationDuration: '3.8s'}} />
                
                {/* Meteoros em movimento */}
                <div className="absolute top-20 left-10 w-16 h-0.5 bg-gradient-to-r from-white via-blue-300 to-transparent rounded-full opacity-60" style={{
                    animation: 'meteor 4s ease-in-out infinite',
                    animationDelay: '1s'
                }} />
                <div className="absolute bottom-24 right-16 w-20 h-0.5 bg-gradient-to-r from-white via-purple-300 to-transparent rounded-full opacity-50 rotate-45" style={{
                    animation: 'meteor 5s ease-in-out infinite',
                    animationDelay: '2.5s'
                }} />
                <div className="absolute top-1/3 right-8 w-12 h-0.5 bg-gradient-to-r from-white via-yellow-300 to-transparent rounded-full opacity-70 -rotate-12" style={{
                    animation: 'meteor 3.5s ease-in-out infinite',
                    animationDelay: '0.3s'
                }} />
            </div>
            
            {/* Container com padding para o conteúdo */}
            <div className="relative z-10 px-4">
            
            <div className="relative z-10">
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
                                    de autodescoberta e crescimento pessoal
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
                <div className="max-w-3xl mx-auto mb-8">
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
            </div>
        </header>
        </>
    );
}
