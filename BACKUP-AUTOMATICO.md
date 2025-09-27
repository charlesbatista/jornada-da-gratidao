# 🕐 Configuração de Backup Automático a Cada 2 Dias

Este guia mostra como configurar backup automático a cada 2 dias usando diferentes métodos.

## 🏆 **Método Recomendado: GitHub Actions**

### ✅ Vantagens:
- ✅ Totalmente gratuito
- ✅ Roda na nuvem (não depende do seu PC)
- ✅ Histórico completo de execuções
- ✅ Notificações automáticas de falhas
- ✅ Armazena backups como artifacts

### 📋 Como Configurar:

1. **O arquivo já está criado** em `.github/workflows/backup.yml`

2. **Configure as variáveis de ambiente** no GitHub:
   - Vá em: `Settings` → `Secrets and variables` → `Actions`
   - Adicione estas secrets:
     ```
     PRISMA_DATABASE_URL=sua_url_do_banco
     POSTGRES_URL=sua_url_postgres_direta
     BACKUP_WEBHOOK_URL=url_webhook_opcional
     ```

3. **Ative GitHub Actions** no seu repositório:
   - Vá em `Actions` → `I understand my workflows`

4. **Teste manualmente**:
   - Vá em `Actions` → `🗄️ Backup Automático` → `Run workflow`

### 📅 **Cronograma Atual:**
- **Frequência:** A cada 2 dias
- **Horário:** 03:00 UTC (00:00 BRT)
- **Dias:** 1°, 3°, 5°, 7°, etc. de cada mês

---

## 🖥️ **Método 2: Windows Task Scheduler**

### 📋 Como Configurar:

1. **Abra o Task Scheduler** (`taskschd.msc`)

2. **Crie Nova Tarefa**:
   - Nome: `Jornada Backup`
   - Descrição: `Backup automático a cada 2 dias`
   - ✅ Executar mesmo se usuário não estiver logado

3. **Configure Gatilho (Trigger)**:
   - Tipo: `Diariamente`
   - Repetir a cada: `2 dias`
   - Hora: `03:00`

4. **Configure Ação**:
   - Programa: `C:\Projetos\jornada-da-liberdade\backup-windows.bat`
   - Iniciar em: `C:\Projetos\jornada-da-liberdade`

5. **Teste**:
   ```bash
   # Execute manualmente para testar
   .\backup-windows.bat
   ```

---

## 🐧 **Método 3: Cron (Linux/Mac)**

### 📋 Como Configurar:

1. **Edite o arquivo de script**:
   ```bash
   nano backup-cron.sh
   ```
   
2. **Altere o caminho do projeto**:
   ```bash
   PROJECT_DIR="/seu/caminho/para/jornada-da-liberdade"
   ```

3. **Torne executável**:
   ```bash
   chmod +x backup-cron.sh
   ```

4. **Configure no cron**:
   ```bash
   crontab -e
   ```
   
   Adicione esta linha:
   ```bash
   # Backup a cada 2 dias às 3:00 AM
   0 3 */2 * * /caminho/completo/para/backup-cron.sh
   ```

5. **Verifique se foi adicionado**:
   ```bash
   crontab -l
   ```

---

## 🤖 **Método 4: Node.js Scheduler (Servidor)**

### 📋 Como Configurar:

1. **Instale dependência**:
   ```bash
   npm run backup:install-cron
   ```

2. **Execute o scheduler**:
   ```bash
   npm run backup:scheduler
   ```

3. **Para produção** (com PM2):
   ```bash
   # Instalar PM2
   npm install -g pm2
   
   # Iniciar scheduler
   pm2 start backup-scheduler.js --name "backup-scheduler"
   
   # Salvar configuração
   pm2 save
   pm2 startup
   ```

---

## 📊 **Comparação dos Métodos**

| Método | Gratuito | Confiabilidade | Facilidade | Observações |
|--------|----------|---------------|------------|-------------|
| **GitHub Actions** | ✅ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | **Recomendado** |
| Windows Task | ✅ | ⭐⭐⭐⭐ | ⭐⭐⭐ | PC deve estar ligado |
| Cron | ✅ | ⭐⭐⭐⭐⭐ | ⭐⭐ | Servidor deve estar ativo |
| Node Scheduler | ✅ | ⭐⭐⭐ | ⭐⭐ | Processo deve ficar rodando |

---

## 🔧 **Configuração de Notificações**

### Slack/Discord Webhook:

1. **Crie um webhook** no Slack/Discord
2. **Configure a variável**:
   ```bash
   BACKUP_WEBHOOK_URL=https://hooks.slack.com/services/...
   ```

### Email (Linux/Cron):

Descomente esta linha no `backup-cron.sh`:
```bash
echo "Erro no backup" | mail -s "ERRO: Backup" seu-email@exemplo.com
```

---

## 📅 **Cronograma de Execução**

Para backup **a cada 2 dias às 3:00**:

```
Setembro 2025:
27 (sex) - 03:00 ✅
29 (dom) - 03:00
Outubro:
01 (ter) - 03:00
03 (qui) - 03:00
05 (sáb) - 03:00
...
```

---

## 🚨 **Troubleshooting**

### "Backup não executou"
1. Verificar se variáveis de ambiente estão configuradas
2. Testar backup manual: `npm run backup`
3. Verificar logs do sistema escolhido

### "Erro de conexão"
1. Verificar URLs do banco no `.env`
2. Testar conexão: `npx prisma db pull`

### "Arquivos não aparecem"
1. Verificar permissões de escrita
2. Verificar espaço em disco
3. Verificar path do projeto

---

## 📝 **Logs e Monitoramento**

Cada método gera logs:

- **GitHub Actions**: Ver na aba Actions
- **Windows**: `backup.log` na pasta do projeto
- **Cron**: `backup-cron.log` na pasta do projeto  
- **Node Scheduler**: Console do processo

---

## 🎯 **Próximos Passos**

1. **Escolha um método** (recomendo GitHub Actions)
2. **Configure as variáveis** necessárias
3. **Teste manualmente** primeiro
4. **Aguarde a primeira execução** automática
5. **Monitore os logs** para verificar sucesso