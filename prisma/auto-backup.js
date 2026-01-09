import { createBackup } from './backup.js'
import fs from 'fs'
import path from 'path'

/**
 * 🤖 Script de Backup Automático
 * 
 * Este script é ideal para execução automática (cron, GitHub Actions, etc.)
 * Gerencia a quantidade de backups mantidos e envia notificações
 */

const MAX_BACKUPS = 30 // Manter até 30 backups
const NOTIFY_WEBHOOK = process.env.BACKUP_WEBHOOK_URL // Opcional: webhook para notificações

async function autoBackup() {
  try {
    console.log('🤖 Iniciando backup automático...')
    
    // Criar backup
    const result = await createBackup()
    
    // Limpar backups antigos
    await cleanOldBackups()
    
    // Enviar notificação se configurada
    if (NOTIFY_WEBHOOK) {
      await sendNotification(result)
    }
    
    console.log('✅ Backup automático concluído com sucesso!')
    
    return result
    
  } catch (error) {
    console.error('❌ Erro no backup automático:', error)
    
    // Enviar notificação de erro se configurada
    if (NOTIFY_WEBHOOK) {
      await sendErrorNotification(error)
    }
    
    throw error
  }
}

async function cleanOldBackups() {
  try {
    const backupDir = path.join(process.cwd(), 'prisma', 'backups')
    
    if (!fs.existsSync(backupDir)) return
    
    // Listar arquivos de backup (exceto README e latest)
    const files = fs.readdirSync(backupDir)
      .filter(file => 
        file.startsWith('backup_') && 
        file.endsWith('.js') && 
        !file.includes('latest')
      )
      .map(file => ({
        name: file,
        path: path.join(backupDir, file),
        stat: fs.statSync(path.join(backupDir, file))
      }))
      .sort((a, b) => b.stat.mtime.getTime() - a.stat.mtime.getTime()) // Mais recente primeiro

    // Remover backups excedentes
    if (files.length > MAX_BACKUPS) {
      const filesToRemove = files.slice(MAX_BACKUPS)
      
      console.log(`🗑️  Removendo ${filesToRemove.length} backups antigos...`)
      
      for (const file of filesToRemove) {
        fs.unlinkSync(file.path)
        console.log(`   ❌ ${file.name}`)
      }
    }
    
    console.log(`📊 Mantendo ${Math.min(files.length, MAX_BACKUPS)} backups`)
    
  } catch (error) {
    console.error('⚠️  Erro ao limpar backups antigos:', error)
  }
}

async function sendNotification(result) {
  try {
    const payload = {
      text: `✅ Backup automático realizado com sucesso!`,
      attachments: [{
        color: 'good',
        fields: [
          { title: 'Jornadas', value: result.journeys.toString(), short: true },
          { title: 'Dias', value: result.days.toString(), short: true },
          { title: 'Timestamp', value: result.timestamp, short: false }
        ]
      }]
    }
    
    await fetch(NOTIFY_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    
  } catch (error) {
    console.error('⚠️  Erro ao enviar notificação:', error)
  }
}

async function sendErrorNotification(error) {
  try {
    const payload = {
      text: `❌ Erro no backup automático!`,
      attachments: [{
        color: 'danger',
        fields: [
          { title: 'Erro', value: error.message, short: false },
          { title: 'Timestamp', value: new Date().toISOString(), short: true }
        ]
      }]
    }
    
    await fetch(NOTIFY_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    
  } catch (err) {
    console.error('⚠️  Erro ao enviar notificação de erro:', err)
  }
}

// Executar se chamado diretamente
const isMainModule = process.argv[1].endsWith('auto-backup.js')

if (isMainModule) {
  autoBackup()
    .then(() => {
      console.log('\n🎉 Backup automático finalizado!')
      process.exit(0)
    })
    .catch(() => {
      console.error('\n💥 Backup automático falhou!')
      process.exit(1)
    })
}

export { autoBackup }