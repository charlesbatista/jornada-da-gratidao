"use client";

import { useAuth } from '../contexts/AuthContext';

export default function AuthIndicator() {
  const { isEditMode, isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) return null;

  return (
    <div className="fixed top-4 right-4 z-40">
      <div className="bg-slate-900/95 backdrop-blur-xl border border-white/20 rounded-xl px-4 py-2 shadow-lg">
        <div className="flex items-center gap-3">
          
          {/* Indicador do Modo */}
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full animate-pulse ${
              isEditMode ? 'bg-emerald-400' : 'bg-blue-400'
            }`}></div>
            
            <span className="text-sm font-medium text-white">
              {isEditMode ? (
                <span className="flex items-center gap-1">
                  <span>✏️</span>
                  <span>Edição</span>
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <span>👁️</span>
                  <span>Visualização</span>
                </span>
              )}
            </span>
          </div>

          {/* Botão de Logout */}
          <button
            onClick={logout}
            className="text-gray-400 hover:text-red-400 transition-colors duration-200 p-1 rounded-lg hover:bg-white/5 cursor-pointer"
            title="Sair e trocar modo"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}