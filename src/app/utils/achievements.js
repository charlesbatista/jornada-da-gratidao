// Cálculos para marcos de conquistas e dinheiro poupado
export const WEEKLY_LOSS = 30000; // R$ 30,000 por semana em recaídas

export const generateAchievements = (totalDays) => {
  const achievements = [
    { days: 7, title: "Uma Semana", icon: "🌱", description: "Primeira semana completa!" },
    { days: 14, title: "Duas Semanas", icon: "🌿", description: "Duas semanas de progresso!" },
    { days: 21, title: "Três Semanas", icon: "🌳", description: "Três semanas de crescimento!" },
    { days: 30, title: "Um Mês", icon: "⭐", description: "Um mês inteiro de dedicação!" }
  ];

  // Adicionar marcos baseados no totalDays
  if (totalDays >= 45) {
    achievements.push({ days: 45, title: "45 Dias", icon: "💎", description: "Quase na metade da jornada!" });
  }
  
  if (totalDays >= 60) {
    achievements.push({ days: 60, title: "Dois Meses", icon: "🔥", description: "Dois meses de transformação!" });
  }
  
  if (totalDays >= 75) {
    achievements.push({ days: 75, title: "75 Dias", icon: "🚀", description: "Na reta final!" });
  }
  
  if (totalDays >= 90) {
    achievements.push({ days: 90, title: "90 Dias", icon: "🎯", description: "Marco incrível dos 90 dias!" });
  }

  // Marco da metade da jornada (só adicionar se não existe já um achievement para este dia)
  const halfPoint = Math.floor(totalDays / 2);
  if (halfPoint > 30 && !achievements.some(a => a.days === halfPoint)) {
    achievements.push({ 
      days: halfPoint, 
      title: "Metade da Jornada", 
      icon: "⚡", 
      description: `Você chegou à metade! ${halfPoint} dias completos!` 
    });
  }

  // Marco final
  achievements.push({ 
    days: totalDays, 
    title: "Jornada Completa", 
    icon: "👑", 
    description: `PARABÉNS! Você completou os ${totalDays} dias!` 
  });

  return achievements.sort((a, b) => a.days - b.days);
};

// Manter compatibilidade com código existente
export const achievements = generateAchievements(90);

export function calculateMoneySaved(completedDays) {
  const weeksCompleted = completedDays / 7;
  const moneySaved = Math.floor(weeksCompleted * WEEKLY_LOSS);
  return moneySaved;
}

export function formatMoney(amount) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

export function getCurrentMilestone(completedDays, totalDays = 90) {
  // Encontra o maior marco já alcançado
  const milestones = generateAchievements(totalDays);
  const achieved = milestones.filter(milestone => completedDays >= milestone.days);
  return achieved.length > 0 ? achieved[achieved.length - 1] : null;
}

export function getNextMilestone(completedDays, totalDays = 90) {
  // Encontra o próximo marco a ser alcançado
  const milestones = generateAchievements(totalDays);
  return milestones.find(milestone => completedDays < milestone.days);
}

export function getMilestoneProgress(completedDays, totalDays = 90) {
  const milestones = generateAchievements(totalDays);
  const nextMilestone = getNextMilestone(completedDays, totalDays);
  
  if (!nextMilestone) {
    return { progress: 100, daysToGo: 0, nextMilestone: null };
  }
  
  const previousMilestone = milestones.find(milestone => 
    milestone.days < nextMilestone.days && completedDays >= milestone.days
  );
  
  const startPoint = previousMilestone ? previousMilestone.days : 0;
  const daysBetweenMilestones = nextMilestone.days - startPoint;
  const completedFromStart = completedDays - startPoint;
  const progress = Math.min(100, Math.max(0, (completedFromStart / daysBetweenMilestones) * 100));
  
  return {
    progress,
    daysToGo: nextMilestone.days - completedDays,
    nextMilestone
  };
}

export function getAllAchievedMilestones(completedDays, totalDays = 90) {
  const milestones = generateAchievements(totalDays);
  return milestones.filter(milestone => completedDays >= milestone.days);
}

export function getMotivationalMessage(completedDays, totalDays = 90) {
  const moneySaved = calculateMoneySaved(completedDays);
  const currentMilestone = getCurrentMilestone(completedDays, totalDays);
  
  if (completedDays === 0) {
    return "Sua jornada começa agora! Cada dia é uma vitória!";
  }
  
  if (completedDays < 7) {
    return `${completedDays} dia${completedDays > 1 ? 's' : ''} de força! Continue assim!`;
  }
  
  if (currentMilestone) {
    return `${currentMilestone.icon} ${currentMilestone.title} conquistado! Você já poupou ${formatMoney(moneySaved)}!`;
  }
  
  return `${completedDays} dias de transformação! Você está poupando ${formatMoney(moneySaved)}!`;
}

export function getDailySavings() {
  return WEEKLY_LOSS / 7; // Economia diária
}