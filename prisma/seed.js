import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Função utilitária para adicionar dias a uma data no formato YYYY-MM-DD
function addDays(dateString, days) {
  const date = new Date(dateString + 'T00:00:00')
  date.setDate(date.getDate() + days)
  return date.toISOString().split('T')[0]
}

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...')

  // Limpar dados existentes
  await prisma.day.deleteMany({})
  await prisma.journey.deleteMany({})
  console.log('🗑️  Dados existentes removidos')

  // Data de início da jornada: 29/08/2025
  const startDate = '2025-08-29'
  
  // Dados das reflexões (baseado no seu arquivo YAML)
  const reflectionsData = [
    {
      dayNumber: 1,
      reflection: "Depressão, tristeza, prejuízos financeiros, não reconhecer a si mesmo.",
      difficulty: "muito_dificil"
    },
    {
      dayNumber: 2,
      reflection: "Morte. Destruição. Atrasos de sonhos. Continuar construindo patrimônio.",
      difficulty: "muito_dificil"
    },
    {
      dayNumber: 3,
      reflection: "Confiança em nós mesmos, dinheiro, saúde física, mental.",
      difficulty: "medio"
    },
    {
      dayNumber: 4,
      reflection: "Ansiedade, medo, tristeza, arrependimento.",
      difficulty: "medio"
    },
    {
      dayNumber: 5,
      reflection: "Falta de confiança, amor, admiração, parece que a gente se odeia.",
      difficulty: "medio"
    },
    {
      dayNumber: 6,
      reflection: "Fracasso, falta de palavra, falta de admiração, não ter vontade de viver. Não ter vontade de trabalhar. Sentir-se manipulável.",
      difficulty: "facil"
    },
    {
      dayNumber: 7,
      reflection: "Viver com mais tranquilidade, saber que conseguimos, somos capazes, recarregar as energias.",
      difficulty: "facil"
    },
    {
      dayNumber: 8,
      reflection: "ouvir e ficar em alerta mesmo que a gente queira ignorar.",
      difficulty: "facil"
    },
    {
      dayNumber: 9,
      reflection: "tentar recuperar o dinheiro que perdeu (principal).",
      difficulty: "facil"
    },
    {
      dayNumber: 10,
      reflection: "privação de sono, ansiedade, distorção de dopamina, cansaço mental.",
      difficulty: "facil"
    },
    {
      dayNumber: 11,
      reflection: "vergonha da minha palavra, de mim mesmo, deixar de ter a percepção real do dinheiro e sentir vergonha ao comparar-se com outras pessoas que suam ao ganhar dinheiro, sentimos vergonha da gente e também vergonha do que fizemos com o nosso dinheiro.",
      difficulty: "facil"
    },
    {
      dayNumber: 12,
      reflection: "Academia, fazer essas reuniões, videogames, autoanálise, terapia, amor próprio, gratidão e pensar no que ainda podemos perder.",
      difficulty: "facil"
    },
    {
      dayNumber: 13,
      reflection: "não acreditar que somos merecedores, dignos de confiança, depreciação própria.",
      difficulty: "facil"
    },
    {
      dayNumber: 14,
      reflection: "trabalho, investimentos, casas, barulhos.",
      difficulty: "facil"
    },
    {
      dayNumber: 15,
      reflection: "adrenalina, o dinheiro que eu tinha/deveria ter (recuperar). em suma, recuperar, e sabemos que jamais recuperaremos.",
      difficulty: "facil"
    },
    {
      dayNumber: 16,
      reflection: "não há.",
      difficulty: "facil"
    },
    {
      dayNumber: 17,
      reflection: "inteligentes, agraciados, prósperos, do bem, abençoados, ricos, alegres, engraçados, cheios de vida e de Deus.",
      difficulty: "facil"
    },
    {
      dayNumber: 18,
      reflection: "a raiva de lembrar do que perdemos faz a gente querer recair.",
      difficulty: "facil"
    },
    {
      dayNumber: 19,
      reflection: "tristeza, arrependimentos, decisões financeiras.",
      difficulty: "facil"
    },
    {
      dayNumber: 20,
      reflection: "se reconhecer vulneráveis nos faz mais fortes porque podemos traçar estratégias.",
      difficulty: "facil"
    },
    {
      dayNumber: 21,
      reflection: "não convidar, lembrar das perdas, zerar os dias vencidos, nos convencer de que em todos os cenários, jogar é péssimo.",
      difficulty: "medio"
    },
    {
      dayNumber: 22,
      reflection: "trabalho, vídeogame, valorizar o que temos, viajar, comer, sair, comprar coisas que a gente gosta.",
      difficulty: "medio"
    },
    {
      dayNumber: 23,
      reflection: "reuniões diárias, academias, horário pra dormir, trabalho, lazer (incluir mais).",
      difficulty: "medio"
    },
    {
      dayNumber: 24,
      reflection: "traz clareza a tona aos nossos verdadeiros pensamentos que nós queremos nos livrar dessa maldição.",
      difficulty: "muito_dificil"
    },
    {
      dayNumber: 25,
      reflection: "projetar o futuro, o que pode acontecer, lembrar do que aconteceu.",
      difficulty: "muito_dificil"
    },
    {
      dayNumber: 26,
      reflection: "foi importante criar barreiras porque elas nos faz lembrar de onde não queremos estar, do que não podemos fazer, faz pensar 2x ou mais antes de depositar.",
      difficulty: "muito_dificil"
    },
    {
      dayNumber: 27,
      reflection: "pequenas vitorias como dialogos para acalmar, dinheiro entrando e a gente resistindo e não perdendo mais.",
      difficulty: "muito_dificil"
    },
    {
      dayNumber: 28,
      reflection: "imaginar todos os cenários possíveis e lembrar de tudo que a gente já passou, lembrar constantemente faz com que a gente tenha consciências dos nossos atos, principalmente antes de depositar.",
      difficulty: "muito_dificil"
    }
  ]

  // Calcular total de dias (do início até hoje: 25/09/2025)
  const totalDays = 90

  console.log(`📅 Criando jornada de ${totalDays} dias (${startDate} até hoje)`)

  // Criar a jornada
  const journey = await prisma.journey.create({
    data: {
      startDate: startDate,
      totalDays: totalDays,
    }
  })

  console.log('🎯 Jornada criada:', journey)

  // Criar todos os dias
  for (let i = 1; i <= totalDays; i++) {
    const dayDate = addDays(startDate, i - 1)
    const reflectionData = reflectionsData.find(r => r.dayNumber === i)
    
    // Determinar se o dia está completo (se tem reflexão)
    const isCompleted = !!reflectionData
    
    const dayData = {
      journeyId: journey.id,
      dayNumber: i,
      isCompleted: isCompleted,
      reflection: reflectionData?.reflection || null,
      difficulty: reflectionData?.difficulty || null,
      completedAt: isCompleted ? dayDate : null
    }

    await prisma.day.create({
      data: dayData
    })

    console.log(`📝 Dia ${i} criado (${dayDate}) - ${isCompleted ? '✅ Completo' : '⏳ Pendente'}`)
  }

  console.log('🎉 Seed concluído com sucesso!')
  console.log(`📊 Resumo:`)
  console.log(`   - Jornada: ${startDate} (${totalDays} dias)`)
  console.log(`   - Dias completos: ${reflectionsData.length}`)
  console.log(`   - Dias pendentes: ${totalDays - reflectionsData.length}`)
}

main()
  .catch((e) => {
    console.error('❌ Erro durante o seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })