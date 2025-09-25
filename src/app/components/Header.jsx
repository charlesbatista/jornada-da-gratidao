import { getMotivationalMessage } from '../utils/achievements.js';
import { formatPtBR } from '../utils/date.js';

export default function Header({ completedDays, totalDays = 90, startDate }) {
    const progressPercentage = (completedDays / totalDays) * 100;
    const motivationalMessage = getMotivationalMessage(completedDays, totalDays);
    
    return (
        <header className="relative text-center mb-16">
            <div className="absolute inset-0 -mx-4 overflow-hidden">
                <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
                <div className="absolute top-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}} />
                <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '0.5s'}} />
            </div>
            
            <div className="relative z-10">
                <div className="mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 shadow-xl shadow-yellow-500/25 mb-4 transform hover:scale-110 transition-transform duration-300">
                        <span className="text-3xl animate-bounce">🚀</span>
                    </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-6 tracking-tight">
                    Jornada da
                    <br />
                    <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                        Transformação
                    </span>
                </h1>
                
                <p className="text-xl text-gray-300 font-light max-w-xl mx-auto mb-12 leading-relaxed">
                    <span className="text-yellow-400 font-semibold">{totalDays} dias</span> de autodescoberta
                    <br />
                    Um dia de cada vez, um passo de cada vez
                </p>

                <div className="max-w-2xl mx-auto mb-8">
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-purple-600/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300" />
                        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
                            <div className="text-emerald-400 text-sm font-medium mb-2 uppercase tracking-wider">
                                Progresso da Jornada{startDate ? ` iniciada em ${formatPtBR(startDate)}` : ''}
                            </div>
                            <div className="text-5xl font-black text-white mb-4">
                                {completedDays}<span className="text-2xl text-gray-400 font-normal">/{totalDays}</span>
                            </div>
                            
                            <div className="relative mb-4">
                                <div className="bg-gray-800/50 rounded-full h-4 overflow-hidden">
                                    <div 
                                        className="h-full bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 transition-all duration-2000 ease-out relative overflow-hidden"
                                        style={{ width: `${progressPercentage}%` }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="text-gray-400 text-sm">
                                {motivationalMessage}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
