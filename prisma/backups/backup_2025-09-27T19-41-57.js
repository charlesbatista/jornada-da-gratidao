import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/**
 * 🗄️ BACKUP AUTOMÁTICO - 2025-09-27T19-41-57
 * 
 * Este arquivo foi gerado automaticamente pelo script de backup
 * Contém todos os dados do banco no momento do backup
 * 
 * Para restaurar: npm run restore
 */
async function restoreBackup() {
  try {
    console.log('🔄 Restaurando backup de 2025-09-27T19-41-57...')
    
    // Limpar dados existentes
    console.log('🗑️  Limpando dados existentes...')
    await prisma.day.deleteMany({})
    await prisma.journey.deleteMany({})
    
    const journeysData = [
  {
    "id": "cmg2k6mvp0000ktk4hwot1e3e",
    "startDate": "2025-08-29",
    "totalDays": 90,
    "createdAt": "2025-09-27T17:42:41.749Z",
    "updatedAt": "2025-09-27T17:42:41.749Z",
    "days": [
      {
        "dayNumber": 1,
        "isCompleted": true,
        "reflection": "Depressão, tristeza, prejuízos financeiros, não reconhecer a si mesmo.",
        "difficulty": "muito_dificil",
        "completedAt": "2025-08-29"
      },
      {
        "dayNumber": 2,
        "isCompleted": true,
        "reflection": "Morte. Destruição. Atrasos de sonhos. Continuar construindo patrimônio.",
        "difficulty": "muito_dificil",
        "completedAt": "2025-08-30"
      },
      {
        "dayNumber": 3,
        "isCompleted": true,
        "reflection": "Confiança em nós mesmos, dinheiro, saúde física, mental.",
        "difficulty": "medio",
        "completedAt": "2025-08-31"
      },
      {
        "dayNumber": 4,
        "isCompleted": true,
        "reflection": "Ansiedade, medo, tristeza, arrependimento.",
        "difficulty": "medio",
        "completedAt": "2025-09-01"
      },
      {
        "dayNumber": 5,
        "isCompleted": true,
        "reflection": "Falta de confiança, amor, admiração, parece que a gente se odeia.",
        "difficulty": "medio",
        "completedAt": "2025-09-02"
      },
      {
        "dayNumber": 6,
        "isCompleted": true,
        "reflection": "Fracasso, falta de palavra, falta de admiração, não ter vontade de viver. Não ter vontade de trabalhar. Sentir-se manipulável.",
        "difficulty": "facil",
        "completedAt": "2025-09-03"
      },
      {
        "dayNumber": 7,
        "isCompleted": true,
        "reflection": "Viver com mais tranquilidade, saber que conseguimos, somos capazes, recarregar as energias.",
        "difficulty": "facil",
        "completedAt": "2025-09-04"
      },
      {
        "dayNumber": 8,
        "isCompleted": true,
        "reflection": "ouvir e ficar em alerta mesmo que a gente queira ignorar.",
        "difficulty": "facil",
        "completedAt": "2025-09-05"
      },
      {
        "dayNumber": 9,
        "isCompleted": true,
        "reflection": "tentar recuperar o dinheiro que perdeu (principal).",
        "difficulty": "facil",
        "completedAt": "2025-09-06"
      },
      {
        "dayNumber": 10,
        "isCompleted": true,
        "reflection": "privação de sono, ansiedade, distorção de dopamina, cansaço mental.",
        "difficulty": "facil",
        "completedAt": "2025-09-07"
      },
      {
        "dayNumber": 11,
        "isCompleted": true,
        "reflection": "vergonha da minha palavra, de mim mesmo, deixar de ter a percepção real do dinheiro e sentir vergonha ao comparar-se com outras pessoas que suam ao ganhar dinheiro, sentimos vergonha da gente e também vergonha do que fizemos com o nosso dinheiro.",
        "difficulty": "facil",
        "completedAt": "2025-09-08"
      },
      {
        "dayNumber": 12,
        "isCompleted": true,
        "reflection": "Academia, fazer essas reuniões, videogames, autoanálise, terapia, amor próprio, gratidão e pensar no que ainda podemos perder.",
        "difficulty": "facil",
        "completedAt": "2025-09-09"
      },
      {
        "dayNumber": 13,
        "isCompleted": true,
        "reflection": "não acreditar que somos merecedores, dignos de confiança, depreciação própria.",
        "difficulty": "facil",
        "completedAt": "2025-09-10"
      },
      {
        "dayNumber": 14,
        "isCompleted": true,
        "reflection": "trabalho, investimentos, casas, barulhos.",
        "difficulty": "facil",
        "completedAt": "2025-09-11"
      },
      {
        "dayNumber": 15,
        "isCompleted": true,
        "reflection": "adrenalina, o dinheiro que eu tinha/deveria ter (recuperar). em suma, recuperar, e sabemos que jamais recuperaremos.",
        "difficulty": "facil",
        "completedAt": "2025-09-12"
      },
      {
        "dayNumber": 16,
        "isCompleted": true,
        "reflection": "não há.",
        "difficulty": "facil",
        "completedAt": "2025-09-13"
      },
      {
        "dayNumber": 17,
        "isCompleted": true,
        "reflection": "inteligentes, agraciados, prósperos, do bem, abençoados, ricos, alegres, engraçados, cheios de vida e de Deus.",
        "difficulty": "facil",
        "completedAt": "2025-09-14"
      },
      {
        "dayNumber": 18,
        "isCompleted": true,
        "reflection": "a raiva de lembrar do que perdemos faz a gente querer recair.",
        "difficulty": "facil",
        "completedAt": "2025-09-15"
      },
      {
        "dayNumber": 19,
        "isCompleted": true,
        "reflection": "tristeza, arrependimentos, decisões financeiras.",
        "difficulty": "facil",
        "completedAt": "2025-09-16"
      },
      {
        "dayNumber": 20,
        "isCompleted": true,
        "reflection": "se reconhecer vulneráveis nos faz mais fortes porque podemos traçar estratégias.",
        "difficulty": "facil",
        "completedAt": "2025-09-17"
      },
      {
        "dayNumber": 21,
        "isCompleted": true,
        "reflection": "não convidar, lembrar das perdas, zerar os dias vencidos, nos convencer de que em todos os cenários, jogar é péssimo.",
        "difficulty": "medio",
        "completedAt": "2025-09-18"
      },
      {
        "dayNumber": 22,
        "isCompleted": true,
        "reflection": "trabalho, vídeogame, valorizar o que temos, viajar, comer, sair, comprar coisas que a gente gosta.",
        "difficulty": "medio",
        "completedAt": "2025-09-19"
      },
      {
        "dayNumber": 23,
        "isCompleted": true,
        "reflection": "reuniões diárias, academias, horário pra dormir, trabalho, lazer (incluir mais).",
        "difficulty": "medio",
        "completedAt": "2025-09-20"
      },
      {
        "dayNumber": 24,
        "isCompleted": true,
        "reflection": "traz clareza a tona aos nossos verdadeiros pensamentos que nós queremos nos livrar dessa maldição.",
        "difficulty": "muito_dificil",
        "completedAt": "2025-09-21"
      },
      {
        "dayNumber": 25,
        "isCompleted": true,
        "reflection": "projetar o futuro, o que pode acontecer, lembrar do que aconteceu.",
        "difficulty": "muito_dificil",
        "completedAt": "2025-09-22"
      },
      {
        "dayNumber": 26,
        "isCompleted": true,
        "reflection": "foi importante criar barreiras porque elas nos faz lembrar de onde não queremos estar, do que não podemos fazer, faz pensar 2x ou mais antes de depositar.",
        "difficulty": "muito_dificil",
        "completedAt": "2025-09-23"
      },
      {
        "dayNumber": 27,
        "isCompleted": true,
        "reflection": "pequenas vitorias como dialogos para acalmar, dinheiro entrando e a gente resistindo e não perdendo mais.",
        "difficulty": "muito_dificil",
        "completedAt": "2025-09-24"
      },
      {
        "dayNumber": 28,
        "isCompleted": true,
        "reflection": "imaginar todos os cenários possíveis e lembrar de tudo que a gente já passou, lembrar constantemente faz com que a gente tenha consciências dos nossos atos, principalmente antes de depositar.",
        "difficulty": "muito_dificil",
        "completedAt": "2025-09-25"
      },
      {
        "dayNumber": 29,
        "isCompleted": true,
        "reflection": "Nos afastou da nossa casa, que era nosso grande sonho. Nos tirou possíveis viagens, uma tranquilidade maior de poder ajudar pessoas ao nosso redor, nos tirou uma tranquilidade financeira que estava muito próxima de acontecer, quase tirou nosso maior sonho: que é ter um casamento saudável e próspero, rodeado de pessoas maravilhosas e com possibilidade de alçar voos muito maiores do que cada um poderia conseguir sozinho. ",
        "difficulty": "facil",
        "completedAt": "2025-09-26"
      },
      {
        "dayNumber": 30,
        "isCompleted": false,
        "reflection": null,
        "difficulty": "",
        "completedAt": ""
      },
      {
        "dayNumber": 31,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 32,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 33,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 34,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 35,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 36,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 37,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 38,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 39,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 40,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 41,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 42,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 43,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 44,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 45,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 46,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 47,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 48,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 49,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 50,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 51,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 52,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 53,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 54,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 55,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 56,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 57,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 58,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 59,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 60,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 61,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 62,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 63,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 64,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 65,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 66,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 67,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 68,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 69,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 70,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 71,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 72,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 73,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 74,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 75,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 76,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 77,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 78,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 79,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 80,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 81,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 82,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 83,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 84,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 85,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 86,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 87,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 88,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 89,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 90,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      }
    ]
  }
]
    
    console.log(`📊 Restaurando ${journeysData.length} jornadas...`)
    
    // Restaurar cada jornada com seus dias
    for (const journeyData of journeysData) {
      const { days, ...journeyInfo } = journeyData
      
      // Criar jornada
      const journey = await prisma.journey.create({
        data: {
          id: journeyInfo.id,
          startDate: journeyInfo.startDate,
          totalDays: journeyInfo.totalDays,
          createdAt: new Date(journeyInfo.createdAt),
          updatedAt: new Date(journeyInfo.updatedAt)
        }
      })
      
      console.log(`📅 Jornada ${journey.id} restaurada (${days.length} dias)`)
      
      // Criar dias da jornada
      if (days.length > 0) {
        await prisma.day.createMany({
          data: days.map(day => ({
            journeyId: journey.id,
            dayNumber: day.dayNumber,
            isCompleted: day.isCompleted,
            reflection: day.reflection,
            difficulty: day.difficulty,
            completedAt: day.completedAt
          }))
        })
      }
    }
    
    const totalDays = journeysData.reduce((sum, j) => sum + j.days.length, 0)
    console.log(`✅ Backup restaurado com sucesso!`)
    console.log(`📊 Dados restaurados: ${journeysData.length} jornadas, ${totalDays} dias`)
    
  } catch (error) {
    console.error('❌ Erro durante a restauração:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

// Executar se chamado diretamente
if (import.meta.url === `file://${process.argv[1]}`) {
  restoreBackup()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
}

export { restoreBackup }