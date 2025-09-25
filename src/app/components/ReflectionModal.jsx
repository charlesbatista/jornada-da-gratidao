// components/ReflectionModal.jsx
import React, { useState } from 'react';
import { XIcon } from './icons.js';
import { formatMoney, getDailySavings } from '../utils/achievements.js';
import { reflectionThemes } from '../data/reflectionThemes.js';

export default function ReflectionModal({ 
    isOpen, 
    onClose, 
    selectedDay, 
    getDayDate, 
    handleReflectionChange,
    handleDifficultyChange, 
    handleCompleteDay 
}) {
    const [isSaving, setIsSaving] = useState(false);
    const [showSaveSuccess, setShowSaveSuccess] = useState(false);
    
    if (!isOpen || !selectedDay) return null;

    // Função para salvar reflexão com feedback visual
    const handleSaveReflection = async () => {
        setIsSaving(true);
        setShowSaveSuccess(false);
        
        try {
            // Simular tempo de salvamento para mostrar loading
            await new Promise(resolve => setTimeout(resolve, 800));
            
            // Chama o onClose que já salva os dados
            await onClose();
            
            // Não mostra sucesso pois o modal já fecha
            setIsSaving(false);
        } catch (error) {
            console.error('Erro ao salvar reflexão:', error);
            setIsSaving(false);
            // Em caso de erro, mostrar feedback
            alert('Erro ao salvar reflexão. Tente novamente.');
        }
    };

    const getGradientClass = () => {
        // Padronizado para roxo/púrpura sempre
        return 'from-purple-500 to-purple-700';
    };

    return (
        <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in cursor-pointer"
            onClick={onClose}
        >
            {/* Background com luzes */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}} />
            </div>

            <div 
                className="relative bg-slate-900/95 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] animate-slide-up cursor-default overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header do modal */}
                <div className={`relative bg-gradient-to-r ${getGradientClass(selectedDay.dayNumber || selectedDay.id)} p-8 rounded-t-3xl`}>
                    {/* Botão fechar */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300 cursor-pointer"
                        aria-label="Fechar modal"
                    >
                        <XIcon className="w-5 h-5" />
                    </button>
                    
                    {/* Conteúdo do header */}
                    <div className="text-center text-white">
                        {/* Ícone do dia */}
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                            <span className="text-2xl">
                                {(selectedDay.isComplete || selectedDay.isCompleted) ? '🎉' : '📝'}
                            </span>
                        </div>
                        
                        <h2 className="text-3xl font-black mb-2">
                            Dia {selectedDay.dayNumber || selectedDay.id}
                        </h2>
                        <p className="text-white/80 text-lg">
                            {getDayDate(selectedDay.dayNumber || selectedDay.id)}
                        </p>
                        
                        {(selectedDay.isComplete || selectedDay.isCompleted) && (
                            <div className="mt-4 flex flex-col items-center gap-2">
                                <div className="inline-flex items-center gap-2 bg-emerald-500/20 rounded-full px-4 py-2">
                                    <span className="text-sm">✅</span>
                                    <span className="text-sm font-medium text-emerald-300">Dia Concluído</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Conteúdo scrollável */}
                <div className="overflow-y-auto max-h-[calc(90vh-200px)] scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                    <div className="p-8">
                    {/* Tema de reflexão */}
                    <div className="mb-8">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-lg" />
                            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                                <h3 className="font-bold text-lg mb-3 text-purple-300 flex items-center gap-2">
                                    🎯 Tema de Reflexão
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {selectedDay.theme || reflectionThemes[((selectedDay.dayNumber || selectedDay.id) - 1) % reflectionThemes.length]}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Área de anotações */}
                    <div className="mb-8">
                        <h3 className="font-bold text-lg mb-4 text-blue-300 flex items-center gap-2">
                            ✍️ Suas Reflexões
                        </h3>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur-lg" />
                            <div className="relative">
                                <textarea
                                    value={selectedDay.reflection || ''}
                                    onChange={handleReflectionChange}
                                    rows="6"
                                    placeholder="Como foi seu dia? Quais foram seus desafios? O que você aprendeu? Escreva aqui seus pensamentos e sentimentos..."
                                    className="w-full p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 resize-none"
                                />
                                
                                {/* Contador de caracteres */}
                                <div className="absolute bottom-3 right-3 text-xs text-gray-500">
                                    {(selectedDay.reflection || '').length} caracteres
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Campo de dificuldade */}
                    <div className="mb-8">
                        <h3 className="font-bold text-lg mb-4 text-orange-300 flex items-center gap-2">
                            💪 Qual foi a dificuldade para vencer hoje?
                        </h3>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl blur-lg" />
                            <div className="relative grid grid-cols-2 gap-3">
                                {['moleza', 'pouco', 'médio', 'muito'].map((level) => (
                                    <button
                                        key={level}
                                        onClick={() => handleDifficultyChange(level)}
                                        className={`p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                                            selectedDay.difficulty === level
                                                ? 'border-orange-400 bg-orange-500/20 text-orange-300'
                                                : 'border-white/10 bg-white/5 text-gray-400 hover:border-orange-400/50 hover:bg-orange-500/10'
                                        }`}
                                    >
                                        <div className="text-center">
                                            <div className="text-2xl mb-2">
                                                {level === 'moleza' && '😎'}
                                                {level === 'pouco' && '😌'}
                                                {level === 'médio' && '😤'}
                                                {level === 'muito' && '😰'}
                                            </div>
                                            <div className="font-medium capitalize">{level}</div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>



                    {/* Botões de ação */}
                    <div className="flex gap-4">
                        {/* Botão salvar (sempre disponível) */}
                        <button
                            onClick={handleSaveReflection}
                            disabled={isSaving}
                            className={`flex-1 py-4 px-6 rounded-2xl border transition-all duration-300 font-medium relative overflow-hidden ${
                                isSaving 
                                    ? 'bg-blue-500/20 border-blue-400/50 text-blue-300 cursor-wait' 
                                    : showSaveSuccess
                                        ? 'bg-green-500/20 border-green-400/50 text-green-300'
                                        : 'bg-white/10 hover:bg-white/20 text-white border-white/20 hover:scale-105 cursor-pointer'
                            }`}
                        >
                            {isSaving ? (
                                <span className="flex items-center justify-center gap-2">
                                    <div className="w-4 h-4 border-2 border-blue-300 border-t-transparent rounded-full animate-spin"></div>
                                    Salvando...
                                </span>
                            ) : showSaveSuccess ? (
                                <span className="flex items-center justify-center gap-2">
                                    ✅ Salvo com Sucesso!
                                </span>
                            ) : (
                                '💾 Salvar Reflexão'
                            )}
                        </button>

                        {/* Botão completar dia - Dourado com super brilho */}
                        {!(selectedDay.isComplete || selectedDay.isCompleted) && (
                            <button
                                onClick={handleCompleteDay}
                                className="flex-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-yellow-900 font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-yellow-400/60 cursor-pointer relative overflow-hidden animate-pulse"
                                style={{
                                    animation: 'pulse 2s infinite, glow 2s ease-in-out infinite alternate',
                                    boxShadow: '0 0 20px rgba(234, 179, 8, 0.6), 0 0 40px rgba(234, 179, 8, 0.4), 0 0 60px rgba(234, 179, 8, 0.2)'
                                }}
                            >
                                {/* Efeito brilho dourado animado */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" 
                                     style={{
                                         animation: 'shimmer 1.5s ease-in-out infinite',
                                         background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                                         transform: 'translateX(-100%)'
                                     }} />
                                
                                {/* Partículas brilhantes */}
                                <div className="absolute inset-0 opacity-30">
                                    <div className="absolute top-2 left-4 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '0s'}} />
                                    <div className="absolute top-4 right-6 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '0.5s'}} />
                                    <div className="absolute bottom-3 left-8 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '1s'}} />
                                    <div className="absolute bottom-2 right-4 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '1.5s'}} />
                                </div>
                                
                                <span className="relative flex items-center justify-center gap-2 font-black text-lg">
                                    <span className="animate-bounce">👑</span>
                                    <span>CONCLUIR DIA</span>
                                    {selectedDay.difficulty && (
                                        <span className="animate-bounce text-xl" style={{animationDelay: '0.1s'}}>
                                            {selectedDay.difficulty === 'moleza' && '😎'}
                                            {selectedDay.difficulty === 'pouco' && '😌'}
                                            {selectedDay.difficulty === 'médio' && '😤'}
                                            {selectedDay.difficulty === 'muito' && '😰'}
                                        </span>
                                    )}
                                    {!selectedDay.difficulty && (
                                        <span className="animate-bounce" style={{animationDelay: '0.1s'}}>🏆</span>
                                    )}
                                </span>
                            </button>
                        )}
                    </div>

                    {/* Dicas motivacionais */}
                    <div className="mt-6 text-center">
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                            (selectedDay.isComplete || selectedDay.isCompleted)
                                ? 'bg-green-400/10 text-green-300'
                                : selectedDay.difficulty
                                    ? 'bg-blue-400/10 text-blue-300'
                                    : 'bg-orange-400/10 text-orange-300 animate-pulse'
                        }`}>
                            <span>
                                {(selectedDay.isComplete || selectedDay.isCompleted)
                                    ? '🎉'
                                    : selectedDay.difficulty
                                        ? '💡'
                                        : '⚠️'
                                }
                            </span>
                            <span>
                                {(selectedDay.isComplete || selectedDay.isCompleted)
                                    ? "Parabéns! Você concluiu mais um dia da sua jornada!"
                                    : selectedDay.difficulty
                                        ? "Tudo pronto! Clique em 'Concluir Dia' para finalizar"
                                        : "⚠️ Selecione o nível de dificuldade para poder concluir o dia"
                                }
                            </span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

