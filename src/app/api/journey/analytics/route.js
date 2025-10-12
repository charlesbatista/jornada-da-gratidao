import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET - Buscar análise completa da jornada
export async function GET() {
  try {
    // Buscar a jornada ativa com todos os dias
    const journey = await prisma.journey.findFirst({
      orderBy: { createdAt: 'desc' },
      include: {
        days: {
          orderBy: { dayNumber: 'asc' }
        }
      }
    })

    if (!journey) {
      return NextResponse.json({ 
        error: 'Nenhuma jornada encontrada' 
      }, { status: 404 })
    }

    // Calcular estatísticas
    const totalDays = journey.totalDays
    const completedDays = journey.days.filter(d => d.isCompleted).length
    const pendingDays = totalDays - completedDays

    // Dias completados por dificuldade
    const completedByDifficulty = {
      muito_dificil: journey.days.filter(d => d.isCompleted && d.difficulty === 'muito_dificil').length,
      dificil: journey.days.filter(d => d.isCompleted && d.difficulty === 'dificil').length,
      medio: journey.days.filter(d => d.isCompleted && d.difficulty === 'medio').length,
      facil: journey.days.filter(d => d.isCompleted && d.difficulty === 'facil').length,
    }

    // Calcular sequência atual (streak)
    let currentStreak = 0
    for (let i = journey.days.length - 1; i >= 0; i--) {
      if (journey.days[i].isCompleted) {
        currentStreak++
      } else {
        break
      }
    }

    // Calcular maior sequência de todos os tempos
    let maxStreak = 0
    let tempStreak = 0
    journey.days.forEach(day => {
      if (day.isCompleted) {
        tempStreak++
        if (tempStreak > maxStreak) maxStreak = tempStreak
      } else {
        tempStreak = 0
      }
    })

    // Agrupar por semana
    const weeklyStats = []
    const weeksCount = Math.ceil(totalDays / 7)
    
    for (let week = 0; week < weeksCount; week++) {
      const weekDays = journey.days.slice(week * 7, (week + 1) * 7)
      const weekCompleted = weekDays.filter(d => d.isCompleted).length
      const weekTotal = weekDays.length
      
      // Calcular dificuldade média da semana (baseado nos dias completados)
      const completedWeekDays = weekDays.filter(d => d.isCompleted && d.difficulty)
      let avgDifficulty = 0
      
      if (completedWeekDays.length > 0) {
        const difficultyMap = {
          'facil': 3,
          'medio': 5,
          'dificil': 7,
          'muito_dificil': 9
        }
        
        const totalDifficulty = completedWeekDays.reduce((sum, day) => {
          return sum + (difficultyMap[day.difficulty] || 5)
        }, 0)
        
        avgDifficulty = Math.round((totalDifficulty / completedWeekDays.length) * 10) / 10
      }
      
      weeklyStats.push({
        week: week + 1,
        completed: weekCompleted,
        total: weekTotal,
        avgDifficulty,
        completionRate: Math.round((weekCompleted / weekTotal) * 100),
        days: weekDays.map(d => ({
          dayNumber: d.dayNumber,
          isCompleted: d.isCompleted,
          difficulty: d.difficulty,
          completedAt: d.completedAt
        }))
      })
    }

    // Preparar dados de cada dia para o gráfico
    const dailyData = journey.days.map(day => ({
      day: day.dayNumber,
      completed: day.isCompleted,
      difficulty: day.difficulty,
      completedAt: day.completedAt,
      reflection: day.reflection ? day.reflection.substring(0, 100) : null,
      // Determinar fase baseada no dia
      phase: day.dayNumber <= 21 ? 'Início' : 
             day.dayNumber <= 60 ? 'Consolidação' : 
             'Finalização'
    }))

    // Calcular dias difíceis vencidos (dificuldade >= dificil)
    const hardDaysCompleted = journey.days.filter(d => 
      d.isCompleted && (d.difficulty === 'dificil' || d.difficulty === 'muito_dificil')
    ).length

    // Encontrar semana mais desafiadora
    const hardestWeek = weeklyStats.reduce((max, week) => 
      week.avgDifficulty > max.avgDifficulty ? week : max, 
      weeklyStats[0]
    )

    // Dificuldade média geral
    const completedDaysWithDifficulty = journey.days.filter(d => d.isCompleted && d.difficulty)
    let overallAvgDifficulty = 5
    
    if (completedDaysWithDifficulty.length > 0) {
      const difficultyMap = {
        'facil': 3,
        'medio': 5,
        'dificil': 7,
        'muito_dificil': 9
      }
      
      const totalDifficulty = completedDaysWithDifficulty.reduce((sum, day) => {
        return sum + (difficultyMap[day.difficulty] || 5)
      }, 0)
      
      overallAvgDifficulty = Math.round((totalDifficulty / completedDaysWithDifficulty.length) * 10) / 10
    }

    // Calcular fase atual
    let currentPhase = 'Início Intenso'
    if (completedDays > 21 && completedDays <= 60) {
      currentPhase = 'Consolidação'
    } else if (completedDays > 60) {
      currentPhase = 'Finalização'
    }

    // Resposta final
    const analytics = {
      journey: {
        id: journey.id,
        startDate: journey.startDate,
        totalDays: journey.totalDays,
        completedDays,
        pendingDays,
        completionPercentage: Math.round((completedDays / totalDays) * 100),
        currentPhase
      },
      stats: {
        hardDaysCompleted,
        currentStreak,
        maxStreak,
        averageDifficulty: overallAvgDifficulty,
        hardestWeek: {
          week: hardestWeek.week,
          avgDifficulty: hardestWeek.avgDifficulty
        },
        completedByDifficulty
      },
      dailyData,
      weeklyStats
    }

    return NextResponse.json({ analytics })
    
  } catch (error) {
    console.error('Erro ao buscar analytics:', error)
    return NextResponse.json({ 
      error: 'Erro interno do servidor',
      details: error.message 
    }, { status: 500 })
  }
}

export const runtime = 'nodejs'
