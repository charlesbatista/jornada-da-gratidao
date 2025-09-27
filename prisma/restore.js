import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'

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
    
    // Importar e executar o backup
    const backupModule = await import(`file://${backupFile}`)
    await backupModule.restoreBackup()
    
    console.log('✅ Restore concluído com sucesso!')

  } catch (error) {
    console.error('❌ Erro durante o restore:', error.message)
    throw error
  } finally {
    await prisma.$disconnect()
  }
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