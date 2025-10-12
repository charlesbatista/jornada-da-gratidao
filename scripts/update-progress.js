import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Função para adicionar dias a uma data
function addDays(dateString, days) {
  const date = new Date(dateString + 'T00:00:00')
  date.setDate(date.getDate() + days)
  return date.toISOString().split('T')[0]
}

async function updateProgress() {
  try {
    console.log('🚀 Atualizando progresso da jornada...')

    // Buscar a jornada ativa
    const journey = await prisma.journey.findFirst({
      orderBy: { createdAt: 'desc' },
      include: {
        days: {
          orderBy: { dayNumber: 'asc' }
        }
      }
    })

    if (!journey) {
      console.log('❌ Nenhuma jornada encontrada. Criando uma nova jornada...')
      
      // Data de início: 29 de agosto de 2025
      const startDate = '2025-08-29'
      const totalDays = 90
      
      // Criar nova jornada
      const newJourney = await prisma.journey.create({
        data: {
          startDate,
          totalDays,
          days: {
            create: Array.from({ length: totalDays }, (_, i) => ({
              dayNumber: i + 1,
              isCompleted: false,
            })),
          },
        },
        include: {
          days: { orderBy: { dayNumber: 'asc' } },
        },
      })
      
      console.log(`✅ Nova jornada criada com ID: ${newJourney.id}`)
      console.log(`📅 Data de início: ${startDate}`)
      console.log(`📊 Total de dias: ${totalDays}`)
      
      // Atualizar os primeiros 45 dias como completos
      await updateDaysAsCompleted(newJourney.id, newJourney.startDate, 45)
      
    } else {
      console.log(`✅ Jornada encontrada - ID: ${journey.id}`)
      console.log(`📅 Data de início: ${journey.startDate}`)
      console.log(`📊 Total de dias: ${journey.totalDays}`)
      
      // Atualizar os primeiros 45 dias como completos
      await updateDaysAsCompleted(journey.id, journey.startDate, 45)
    }

    console.log('✨ Atualização concluída com sucesso!')
    
  } catch (error) {
    console.error('❌ Erro ao atualizar progresso:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

async function updateDaysAsCompleted(journeyId, startDate, numberOfDays) {
  console.log(`\n📝 Marcando os primeiros ${numberOfDays} dias como completados...`)
  
  let updatedCount = 0
  
  for (let dayNum = 1; dayNum <= numberOfDays; dayNum++) {
    // Calcular a data de conclusão (startDate + dayNum - 1)
    const completedAt = addDays(startDate, dayNum - 1)
    
    // Atualizar o dia
    const updated = await prisma.day.updateMany({
      where: {
        journeyId: journeyId,
        dayNumber: dayNum
      },
      data: {
        isCompleted: true,
        completedAt: completedAt,
        difficulty: getDifficulty(dayNum)
      }
    })
    
    if (updated.count > 0) {
      updatedCount++
      if (dayNum % 10 === 0 || dayNum === numberOfDays) {
        console.log(`   ✓ Dia ${dayNum} completado em ${completedAt}`)
      }
    }
  }
  
  console.log(`\n🎉 ${updatedCount} dias marcados como completados!`)
  
  // Mostrar estatísticas
  const totalCompleted = await prisma.day.count({
    where: {
      journeyId: journeyId,
      isCompleted: true
    }
  })
  
  const totalDays = await prisma.day.count({
    where: {
      journeyId: journeyId
    }
  })
  
  const percentage = Math.round((totalCompleted / totalDays) * 100)
  
  console.log(`\n📊 Estatísticas:`)
  console.log(`   - Dias completados: ${totalCompleted}/${totalDays}`)
  console.log(`   - Progresso: ${percentage}%`)
  console.log(`   - Dias restantes: ${totalDays - totalCompleted}`)
}

// Função para determinar a dificuldade baseada no dia
function getDifficulty(dayNumber) {
  if (dayNumber <= 3) return 'muito_dificil'
  if (dayNumber <= 7) return 'dificil'
  if (dayNumber <= 21) return 'medio'
  if (dayNumber <= 30) return 'facil'
  if (dayNumber <= 60) return 'medio'
  if (dayNumber <= 75) return 'medio'
  return 'dificil' // Dias finais podem ser emocionalmente intensos
}

// Executar o script
updateProgress()
  .then(() => {
    console.log('\n✅ Script finalizado!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('\n❌ Erro fatal:', error)
    process.exit(1)
  })
