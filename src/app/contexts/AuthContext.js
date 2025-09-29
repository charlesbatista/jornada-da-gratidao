"use client";

import { createContext, useContext, useState, useEffect } from 'react';

// Senha para modo edição (em produção, use variável de ambiente)
const EDIT_PASSWORD = process.env.NEXT_PUBLIC_EDIT_PASSWORD || "liberdade2025";

const AuthContext = createContext({
  isEditMode: false,
  isAuthenticated: false,
  login: (password) => false,
  logout: () => {},
  checkAuth: () => {},
});

export function AuthProvider({ children }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Verificar autenticação ao carregar
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    if (typeof window === 'undefined') return false;
    
    const authData = localStorage.getItem('jornada-auth');
    if (authData) {
      try {
        const { timestamp, mode } = JSON.parse(authData);
        const now = Date.now();
        const authAge = now - timestamp;
        
        // Sessão válida por 24 horas
        if (authAge < 24 * 60 * 60 * 1000) {
          setIsEditMode(mode === 'edit');
          setIsAuthenticated(true);
          return true;
        } else {
          // Sessão expirada
          localStorage.removeItem('jornada-auth');
        }
      } catch (error) {
        console.error('Erro ao verificar autenticação:', error);
        localStorage.removeItem('jornada-auth');
      }
    }
    
    setIsEditMode(false);
    setIsAuthenticated(false);
    return false;
  };

  const login = (password) => {
    if (password === EDIT_PASSWORD) {
      const authData = {
        timestamp: Date.now(),
        mode: 'edit'
      };
      localStorage.setItem('jornada-auth', JSON.stringify(authData));
      setIsEditMode(true);
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const enterViewMode = () => {
    const authData = {
      timestamp: Date.now(),
      mode: 'view'
    };
    localStorage.setItem('jornada-auth', JSON.stringify(authData));
    setIsEditMode(false);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('jornada-auth');
    setIsEditMode(false);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{
      isEditMode,
      isAuthenticated,
      login,
      logout,
      checkAuth,
      enterViewMode
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};