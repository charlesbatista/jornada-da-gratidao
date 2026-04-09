import fs from 'fs'
import path from 'path'

import { PrismaClient } from '@prisma/client'

if (!process.env.PRISMA_DATABASE_URL) {
  // Tentar carregar .env manualmente caso não esteja pré-carregado
  try {
    const envPath = path.join(process.cwd(), '.env')
    if (fs.existsSync(envPath)) {
      const envContent = fs.readFileSync(envPath, 'utf8')
      envContent.split(/\r?\n/).forEach((line) => {
        const l = line.trim()
        if (!l || l.startsWith('#')) return
        const idx = l.indexOf('=')
        if (idx === -1) return
        const key = l.slice(0, idx).trim()
        let val = l.slice(idx + 1).trim()
        if ((val.startsWith("'") && val.endsWith("'")) || (val.startsWith('"') && val.endsWith('"'))) {
          val = val.slice(1, -1)
        }
        if (!(key in process.env)) process.env[key] = val
      })
    }
  } catch (e) {
    // não fatal — seguimos para a verificação abaixo
  }

  process.env.PRISMA_DATABASE_URL = process.env.PRISMA_DATABASE_URL || process.env.POSTGRES_URL || ''
}

if (!process.env.PRISMA_DATABASE_URL) {
  console.error('❌ PRISMA_DATABASE_URL está vazio. Configure PRISMA_DATABASE_URL (ou POSTGRES_URL como fallback).')
  process.exit(1)
}

const prisma = new PrismaClient()

/**
 * 🔄 Script de Restore do Backup
 * 
 * Restaura o último backup criado ou um backup específico
 * 
 * Uso: 
 * - npm run restore (usa o backup mais recente)
 * - npm run restore backup_2025-09-27T10-30-45.js (arquivo específico)
 */

async function restoreFromBackup(backupFileName = null) {
  try {
    console.log('🔄 Iniciando restore do backup...')
    
    const backupDir = path.join(process.cwd(), 'prisma', 'backups')
    
    // Verificar se diretório existe
    if (!fs.existsSync(backupDir)) {
      throw new Error('❌ Diretório de backups não encontrado. Execute npm run backup primeiro.')
    }

    let backupFile
    
    if (backupFileName) {
      // Arquivo específico
      backupFile = path.join(backupDir, backupFileName)
      if (!fs.existsSync(backupFile)) {
        throw new Error(`❌ Arquivo de backup não encontrado: ${backupFileName}`)
      }
    } else {
      // Usar backup mais recente
      backupFile = path.join(backupDir, 'backup_latest.js')
      if (!fs.existsSync(backupFile)) {
        throw new Error('❌ Nenhum backup encontrado. Execute npm run backup primeiro.')
      }
    }

    console.log(`📄 Usando backup: ${path.basename(backupFile)}`)

    // Preferir restaurar por parsing do conteúdo (mais robusto entre mudanças de schema)
    const raw = fs.readFileSync(backupFile, 'utf8')
    const journeysData = extractJourneysData(raw)

    if (journeysData) {
      await restoreFromJourneysData(journeysData)
    } else {
      // Fallback: importar e executar o restore do módulo
      const backupModule = await import(`file://${backupFile}`)
      if (typeof backupModule.restoreBackup !== 'function') {
        throw new Error('❌ Backup inválido: não foi possível extrair journeysData nem encontrar restoreBackup().')
      }
      await backupModule.restoreBackup()
    }
    
    console.log('✅ Restore concluído com sucesso!')

  } catch (error) {
    console.error('❌ Erro durante o restore:', error.message)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

function extractJourneysData(fileContent) {
  try {
    const match = fileContent.match(/const\s+journeysData\s*=\s*(\[[\s\S]*?\n\s*\])\s*\n\s*console\.log\(/m)
    if (!match) return null
    return JSON.parse(match[1])
  } catch {
    return null
  }
}

async function restoreFromJourneysData(journeysData) {
  console.log(`📊 Restaurando ${journeysData.length} jornadas (modo parse)...`)

  // Limpar dados existentes
  console.log('🗑️  Limpando dados existentes...')
  await prisma.day.deleteMany({})
  await prisma.journey.deleteMany({})

  for (const journeyData of journeysData) {
    const { days, ...journeyInfo } = journeyData

    const journey = await prisma.journey.create({
      data: {
        id: journeyInfo.id,
        startDate: journeyInfo.startDate,
        totalDays: journeyInfo.totalDays,
        createdAt: new Date(journeyInfo.createdAt),
        updatedAt: new Date(journeyInfo.updatedAt)
      }
    })

    if (Array.isArray(days) && days.length > 0) {
      await prisma.day.createMany({
        data: days.map((day) => ({
          journeyId: journey.id,
          dayNumber: day.dayNumber,
          isCompleted: day.isCompleted,
          reflectionCharles: day.reflectionCharles ?? (day.reflection ? day.reflection : null),
          reflectionWelder: day.reflectionWelder ?? null,
          difficulty: day.difficulty ?? null,
          completedAt: day.completedAt ?? null,
        }))
      })
    }
  }

  const totalDays = journeysData.reduce((sum, j) => sum + (Array.isArray(j.days) ? j.days.length : 0), 0)
  console.log(`✅ Backup restaurado com sucesso! (${journeysData.length} jornadas, ${totalDays} dias)`) 
}

// Listar backups disponíveis
async function listBackups() {
  try {
    const backupDir = path.join(process.cwd(), 'prisma', 'backups')
    
    if (!fs.existsSync(backupDir)) {
      console.log('📁 Nenhum backup encontrado. Execute npm run backup primeiro.')
      return []
    }

    const files = fs.readdirSync(backupDir)
      .filter(file => file.endsWith('.js') && file.startsWith('backup_'))
      .sort()
      .reverse() // Mais recente primeiro

    if (files.length === 0) {
      console.log('📁 Nenhum backup encontrado.')
      return []
    }

    console.log('📋 Backups disponíveis:')
    files.forEach((file, index) => {
      const filePath = path.join(backupDir, file)
      const stats = fs.statSync(filePath)
      const size = (stats.size / 1024).toFixed(2)
      const date = stats.mtime.toLocaleDateString('pt-BR')
      const time = stats.mtime.toLocaleTimeString('pt-BR')
      
      console.log(`   ${index + 1}. ${file}`)
      console.log(`      📅 ${date} às ${time} (${size} KB)`)
    })

    return files

  } catch (error) {
    console.error('❌ Erro ao listar backups:', error.message)
    return []
  }
}

// Verificar argumentos da linha de comando
const args = process.argv.slice(2)
const command = args[0]

const isMainModule = process.argv[1].endsWith('restore.js')

if (isMainModule) {
  if (command === 'list') {
    listBackups()
      .then(() => process.exit(0))
      .catch(() => process.exit(1))
  } else {
    const backupFile = command
    restoreFromBackup(backupFile)
      .then(() => process.exit(0))
      .catch(() => process.exit(1))
  }
}

export { restoreFromBackup, listBackups }