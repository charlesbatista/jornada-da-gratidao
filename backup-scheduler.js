import cron from 'node-cron'
import { autoBackup } from './prisma/auto-backup.js'

/**
 * 🕐 Scheduler de Backup Automático
 * 
 * Este script mantém um processo rodando que executa backup a cada 2 dias
 * Ideal para servidores que ficam sempre ligados
 * 
 * Para instalar a dependência: npm install node-cron
 * Para executar: node backup-scheduler.js
 */

console.log('🤖 Iniciando scheduler de backup...')
console.log('📅 Backup configurado para a cada 2 dias às 03:00')

// Backup a cada 2 dias às 03:00
cron.schedule('0 3 */2 * *', async () => {
    try {
        console.log('\n⏰ Horário de backup automático!')
        await autoBackup()
        console.log('✅ Backup programado concluído\n')
    } catch (error) {
        console.error('❌ Erro no backup programado:', error)
    }
}, {
    scheduled: true,
    timezone: "America/Sao_Paulo"
})

// Backup manual via endpoint (opcional)
// Descomente se quiser um servidor HTTP para trigger manual
/*
import express from 'express'
const app = express()

app.get('/backup', async (req, res) => {
    try {
        console.log('🔧 Backup manual solicitado via HTTP')
        const result = await autoBackup()
        res.json({ 
            success: true, 
            message: 'Backup realizado com sucesso',
            data: result 
        })
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: 'Erro no backup',
            error: error.message 
        })
    }
})

const PORT = process.env.BACKUP_PORT || 3001
app.listen(PORT, () => {
    console.log(`🌐 Servidor de backup rodando na porta ${PORT}`)
    console.log(`📡 Acesse http://localhost:${PORT}/backup para backup manual`)
})
*/

// Manter o processo vivo
console.log('🚀 Scheduler ativo! Pressione Ctrl+C para parar')
console.log('📊 Próximos backups programados:')

// Mostrar próximas execuções
const nextRuns = []
const now = new Date()
for (let i = 0; i < 5; i++) {
    const next = new Date(now)
    next.setDate(now.getDate() + (i * 2))
    next.setHours(3, 0, 0, 0)
    
    if (next > now) {
        nextRuns.push(next.toLocaleString('pt-BR'))
    }
}

nextRuns.forEach((date, index) => {
    console.log(`   ${index + 1}. ${date}`)
})

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n🛑 Parando scheduler de backup...')
    process.exit(0)
})

process.on('SIGTERM', () => {
    console.log('\n🛑 Scheduler finalizado pelo sistema')
    process.exit(0)
})