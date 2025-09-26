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
`;

export default function Header({ completedDays, totalDays = 90, startDate }) {
    const progressPercentage = (completedDays / totalDays) * 100;
    const motivationalMessage = getMotivationalMessage(completedDays, totalDays);
    
    return (
        <>
            {/* Inject custom CSS styles */}
            <style dangerouslySetInnerHTML={{ __html: customStyles }} />
            
            <header className="relative text-center mb-20">
            {/* Background dinâmico que se estende além do container */}
            <div className="absolute -inset-16 overflow-hidden">
                {/* Partículas flutuantes - posicionadas para não serem cortadas */}
                <div className="absolute top-16 left-4 w-32 h-32 bg-gradient-to-br from-blue-400/15 to-cyan-500/10 rounded-full blur-2xl animate-pulse" />
                <div className="absolute top-32 right-4 w-48 h-48 bg-gradient-to-br from-purple-500/15 to-pink-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1.5s'}} />
                <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-amber-400/15 to-orange-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.8s'}} />
                <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-emerald-400/15 to-teal-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2.2s'}} />
                
                {/* Partículas adicionais nas bordas para efeito mais natural */}
                <div className="absolute top-10 -left-8 w-24 h-24 bg-gradient-to-br from-cyan-400/10 to-blue-500/8 rounded-full blur-xl animate-pulse" style={{animationDelay: '3s'}} />
                <div className="absolute bottom-10 -right-8 w-36 h-36 bg-gradient-to-br from-pink-400/10 to-purple-500/8 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2.5s'}} />
                <div className="absolute top-1/3 -left-12 w-20 h-20 bg-gradient-to-br from-yellow-400/12 to-orange-500/8 rounded-full blur-xl animate-pulse" style={{animationDelay: '1.8s'}} />
                <div className="absolute bottom-1/3 -right-12 w-28 h-28 bg-gradient-to-br from-emerald-400/10 to-teal-500/8 rounded-full blur-xl animate-pulse" style={{animationDelay: '0.3s'}} />
                
                {/* Estrelas cintilantes */}
                <div className="absolute top-20 left-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}} />
                <div className="absolute top-40 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '1.2s'}} />
                <div className="absolute top-60 left-2/3 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '2s'}} />
                <div className="absolute bottom-40 left-1/5 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{animationDelay: '2.8s'}} />
                <div className="absolute top-1/4 right-1/5 w-1 h-1 bg-emerald-400 rounded-full animate-ping" style={{animationDelay: '1.7s'}} />
            </div>
            
            {/* Container com padding para o conteúdo */}
            <div className="relative z-10 px-4">
            
            <div className="relative z-10">
                {/* Desenho da Jornada - Conceito Moderno */}
                <div className="mb-12 relative flex justify-center">
                    <div className="relative w-32 h-32">
                        {/* Círculos concêntricos com gradientes */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/30 to-pink-500/20 animate-pulse" style={{animationDuration: '4s'}} />
                        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-500/30 via-pink-500/40 to-orange-500/30 animate-pulse" style={{animationDuration: '3s', animationDelay: '0.5s'}} />
                        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-orange-500/40 via-yellow-400/50 to-amber-400/40 animate-pulse" style={{animationDuration: '2s', animationDelay: '1s'}} />
                        
                        {/* Centro com ícone principal */}
                        <div className="absolute inset-6 rounded-full bg-gradient-to-br from-white via-yellow-100 to-amber-100 shadow-2xl flex items-center justify-center group cursor-pointer hover:scale-110 transition-all duration-500">
                            {/* Brilho interno */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-500/20 animate-ping" />
                            
                            {/* Reflexo superior realista */}
                            <div className="absolute top-1 left-1 right-4 bottom-4 rounded-full bg-gradient-to-br from-white/60 via-white/20 to-transparent" />
                            
                            {/* Ícone da jornada */}
                            <div className="relative z-10 flex flex-col items-center">
                                <span className="text-2xl mb-1 transform group-hover:rotate-12 transition-all duration-300" style={{
                                    animation: 'float 3s ease-in-out infinite'
                                }}>🌟</span>
                                <div className="w-4 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full" />
                                <span className="text-xl mt-1 transform group-hover:-rotate-6 transition-all duration-300" style={{
                                    animation: 'float 3s ease-in-out infinite',
                                    animationDelay: '0.5s'
                                }}>🚀</span>
                            </div>
                        </div>
                        
                        {/* Partículas orbitais */}
                        <div className="absolute inset-0 animate-spin" style={{animationDuration: '20s'}}>
                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50" />
                            <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50" />
                        </div>
                        
                        <div className="absolute inset-0 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}>
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50" />
                            <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-3 h-3 bg-pink-400 rounded-full shadow-lg shadow-pink-400/50" />
                        </div>
                        
                        {/* Trail de movimento */}
                        <div className="absolute inset-0 overflow-hidden rounded-full">
                            <div className="absolute top-8 left-8 w-16 h-16 border-2 border-dashed border-white/20 rounded-full animate-spin" style={{animationDuration: '8s'}} />
                            <div className="absolute top-6 left-6 w-20 h-20 border border-dotted border-white/10 rounded-full animate-spin" style={{animationDuration: '12s', animationDirection: 'reverse'}} />
                        </div>
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
