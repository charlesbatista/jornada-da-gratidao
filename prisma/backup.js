import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'

if (!process.env.PRISMA_DATABASE_URL) {
  process.env.PRISMA_DATABASE_URL = process.env.POSTGRES_URL || ''
}

if (!process.env.PRISMA_DATABASE_URL) {
  console.error('❌ PRISMA_DATABASE_URL está vazio. Configure PRISMA_DATABASE_URL (ou POSTGRES_URL como fallback).')
  process.exit(1)
}

const prisma = new PrismaClient()

/**
 * 🗄️ Script de Backup Automático do Banco Prisma
 * 
 * Este script exporta todos os dados do banco em formato seed.js
 * Ideal para plano gratuito do Prisma que não tem backup automático
 * 
 * Uso: npm run backup
 */

async function createBackup() {
  try {
    console.log('🔄 Iniciando backup do banco de dados...')
    
    // Buscar todos os dados
    const journeys = await prisma.journey.findMany({
      include: {
        days: {
          orderBy: {
            dayNumber: 'asc'
          }
        }
      },
      orderBy: {
        createdAt: 'asc'
      }
    })

    console.log(`📊 Encontradas ${journeys.length} jornadas`)
    
    const totalDays = journeys.reduce((sum, journey) => sum + journey.days.length, 0)
    console.log(`📅 Total de ${totalDays} dias`)

    // Criar nome do arquivo com timestamp
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5)
    const backupDir = path.join(process.cwd(), 'prisma', 'backups')
    const backupFile = path.join(backupDir, `backup_${timestamp}.js`)

    // Criar diretório se não existir
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true })
      console.log('📁 Diretório de backups criado')
    }

    // Gerar conteúdo do backup
    const backupContent = generateBackupContent(journeys, timestamp)

    // Salvar arquivo
    fs.writeFileSync(backupFile, backupContent, 'utf8')

    console.log(`✅ Backup criado com sucesso!`)
    console.log(`📄 Arquivo: ${backupFile}`)
    console.log(`📊 Dados salvos: ${journeys.length} jornadas, ${totalDays} dias`)
    
    // Criar também um backup "latest" para facilitar restore
    const latestFile = path.join(backupDir, 'backup_latest.js')
    fs.writeFileSync(latestFile, backupContent, 'utf8')
    console.log(`🔄 Backup latest atualizado: ${latestFile}`)

    return {
      file: backupFile,
      journeys: journeys.length,
      days: totalDays,
      timestamp
    }

  } catch (error) {
    console.error('❌ Erro durante o backup:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

function generateBackupContent(journeys, timestamp) {
  const imports = `import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/**
 * 🗄️ BACKUP AUTOMÁTICO - ${timestamp}
 * 
 * Este arquivo foi gerado automaticamente pelo script de backup
 * Contém todos os dados do banco no momento do backup
 * 
 * Para restaurar: npm run restore
 */`

  const journeysData = journeys.map(journey => {
    const daysData = journey.days.map(day => ({
      dayNumber: day.dayNumber,
      isCompleted: day.isCompleted,
      reflectionCharles: day.reflectionCharles,
      reflectionWelder: day.reflectionWelder,
      difficulty: day.difficulty,
      completedAt: day.completedAt
    }))

    return {
      id: journey.id,
      startDate: journey.startDate,
      totalDays: journey.totalDays,
      createdAt: journey.createdAt.toISOString(),
      updatedAt: journey.updatedAt.toISOString(),
      days: daysData
    }
  })

  const mainFunction = `
async function restoreBackup() {
  try {
    console.log('🔄 Restaurando backup de ${timestamp}...')
    
    // Limpar dados existentes
    console.log('🗑️  Limpando dados existentes...')
    await prisma.day.deleteMany({})
    await prisma.journey.deleteMany({})
    
    const journeysData = ${JSON.stringify(journeysData, null, 2)}
    
    console.log(\`📊 Restaurando \${journeysData.length} jornadas...\`)
    
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
      
      console.log(\`📅 Jornada \${journey.id} restaurada (\${days.length} dias)\`)
      
      // Criar dias da jornada
      if (days.length > 0) {
        await prisma.day.createMany({
          data: days.map(day => ({
            journeyId: journey.id,
            dayNumber: day.dayNumber,
            isCompleted: day.isCompleted,
            reflectionCharles: day.reflectionCharles ?? (day.reflection ? day.reflection : null),
            reflectionWelder: day.reflectionWelder ?? null,
            difficulty: day.difficulty,
            completedAt: day.completedAt
          }))
        })
      }
    }
    
    const totalDays = journeysData.reduce((sum, j) => sum + j.days.length, 0)
    console.log(\`✅ Backup restaurado com sucesso!\`)
    console.log(\`📊 Dados restaurados: \${journeysData.length} jornadas, \${totalDays} dias\`)
    
  } catch (error) {
    console.error('❌ Erro durante a restauração:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

// Executar se chamado diretamente
if (import.meta.url === \`file://\${process.argv[1]}\`) {
  restoreBackup()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
}

export { restoreBackup }`

  return imports + mainFunction
}

// Executar se chamado diretamente
const isMainModule = process.argv[1].endsWith('backup.js')

if (isMainModule) {
  createBackup()
    .then((result) => {
      console.log(`\n🎉 Backup concluído!`)
      console.log(`📊 Estatísticas:`)
      console.log(`   - ${result.journeys} jornadas`)
      console.log(`   - ${result.days} dias`)
      console.log(`   - ${result.timestamp}`)
      process.exit(0)
    })
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
}

export { createBackup }