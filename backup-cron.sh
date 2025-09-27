#!/bin/bash

# 🤖 Script de Backup Automático para Cron
# 
# Para configurar no cron, execute:
# crontab -e
# 
# Adicione esta linha para backup a cada 2 dias às 3:00 AM:
# 0 3 */2 * * /caminho/para/este/script/backup-cron.sh

# Configurações
PROJECT_DIR="/caminho/para/jornada-da-liberdade"  # ⚠️ ALTERE ESTE CAMINHO
LOG_FILE="$PROJECT_DIR/backup-cron.log"
MAX_LOG_LINES=1000

# Função de log
log_message() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> "$LOG_FILE"
}

# Navegar para o diretório do projeto
cd "$PROJECT_DIR" || {
    log_message "ERRO: Não foi possível acessar o diretório $PROJECT_DIR"
    exit 1
}

log_message "🤖 Iniciando backup automático via cron"

# Carregar variáveis de ambiente se necessário
if [ -f .env ]; then
    export $(cat .env | xargs)
fi

# Executar backup
if npm run backup:auto >> "$LOG_FILE" 2>&1; then
    log_message "✅ Backup concluído com sucesso"
    
    # Contar arquivos de backup
    BACKUP_COUNT=$(ls -1 prisma/backups/backup_*.js 2>/dev/null | wc -l)
    log_message "📊 Total de $BACKUP_COUNT arquivos de backup"
    
else
    log_message "❌ ERRO: Falha no backup automático"
    
    # Opcional: Enviar notificação de erro (descomente se necessário)
    # echo "Erro no backup da Jornada da Liberdade em $(date)" | mail -s "ERRO: Backup Falhou" seu-email@exemplo.com
    
    exit 1
fi

# Limpeza do log (manter apenas as últimas linhas)
if [ $(wc -l < "$LOG_FILE") -gt $MAX_LOG_LINES ]; then
    tail -n $MAX_LOG_LINES "$LOG_FILE" > "$LOG_FILE.tmp"
    mv "$LOG_FILE.tmp" "$LOG_FILE"
    log_message "🧹 Log limpo - mantendo últimas $MAX_LOG_LINES linhas"
fi

log_message "🎉 Backup automático finalizado"