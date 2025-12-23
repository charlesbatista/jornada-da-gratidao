"use client";

import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function AuthModal() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, enterViewMode, isAuthenticated } = useAuth();

  // Limpar senha por segurança quando o modal é exibido
  useEffect(() => {
    if (!isAuthenticated) {
      setPassword('');
      setShowPassword(false);
      setError('');
    }
  }, [isAuthenticated]);

  if (isAuthenticated) return null;

  const handleLogin = async () => {
    if (!password.trim()) {
      setError('Digite a senha para continuar');
      return;
    }

    setIsLoading(true);
    setError('');

    // Simular delay de autenticação
    await new Promise(resolve => setTimeout(resolve, 800));

    if (login(password)) {
      console.log('✅ Modo de edição ativado!');
    } else {
      setError('Senha incorreta. Tente novamente.');
    }

    setIsLoading(false);
  };

  const handleViewMode = () => {
    enterViewMode();
    console.log('👁️ Modo de visualização ativado!');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      {/* Background com efeitos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-cyan-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute top-3/4 left-1/3 w-28 h-28 bg-emerald-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      {/* Modal */}
      <div className="relative bg-slate-900/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl w-full max-w-md p-8 animate-slide-up">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-4xl mb-4 animate-bounce">🔐</div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Jornada da Gratidão
          </h2>
          <p className="text-gray-300 text-sm">
            Escolha como deseja acessar a aplicação
          </p>
        </div>

        {/* Botões de Modo */}
        <div className="space-y-4 mb-6">
          
          {/* Modo Visualização */}
          <button
            onClick={handleViewMode}
            className="w-full p-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl border border-blue-400/30 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 group cursor-pointer"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="text-xl group-hover:animate-bounce">👁️</span>
              <div className="text-left">
                <div className="font-semibold">Modo Visualização</div>
                <div className="text-xs opacity-80">Apenas visualizar o progresso</div>
              </div>
            </div>
          </button>

          {/* Separador */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <span className="text-gray-400 text-sm">ou</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>

          {/* Modo Edição */}
          <div className="space-y-3">
            <div className="text-white font-medium flex items-center gap-2">
              <span>✏️</span>
              <span>Modo Edição</span>
            </div>
            
            {/* Campo de Senha */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Digite a senha..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 transition-all duration-300 pr-12"
                disabled={isLoading}
                autoFocus
              />
              
              {/* Botão de mostrar/ocultar senha */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>

            {/* Erro */}
            {error && (
              <div className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg p-3 animate-shake">
                ⚠️ {error}
              </div>
            )}

            {/* Botão de Login */}
            <button
              onClick={handleLogin}
              disabled={isLoading || !password.trim()}
              className={`w-full p-4 rounded-xl font-semibold transition-all duration-300 ${
                isLoading || !password.trim()
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500 hover:shadow-lg hover:scale-[1.02] cursor-pointer'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Verificando...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <span>🚀</span>
                  <span>Entrar no Modo Edição</span>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="text-center text-gray-400 text-xs">
          <p>💡 No modo visualização você pode ver todo o progresso</p>
          <p>✏️ No modo edição você pode marcar dias como concluídos</p>
        </div>
      </div>
    </div>
  );
}