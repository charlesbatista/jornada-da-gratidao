# 🗄️ Sistema de Backup Prisma

Sistema de backup personalizado para o projeto Jornada da Liberdade, ideal para o plano gratuito do Prisma que não oferece backups automáticos.

## 📋 Como Usar

### 🔄 Criar Backup

```bash
# Criar um novo backup
npm run backup
```

Isso irá:
- Exportar todos os dados do banco (jornadas e dias)
- Criar um arquivo timestampado em `prisma/backups/`
- Criar também um arquivo `backup_latest.js` (sempre o mais recente)

### 🔙 Restaurar Backup

```bash
# Restaurar o backup mais recente
npm run restore

# Restaurar um backup específico
npm run restore backup_2025-09-27T10-30-45.js
```

### 📋 Listar Backups

```bash
# Ver todos os backups disponíveis
npm run restore:list
```

## 📁 Estrutura dos Arquivos

```
prisma/
├── backups/
│   ├── backup_2025-09-27T10-30-45.js  # Backup com timestamp
│   ├── backup_2025-09-27T14-15-20.js  # Outro backup
│   └── backup_latest.js                # Sempre o mais recente
├── backup.js                           # Script de backup
├── restore.js                          # Script de restore
└── seed.js                            # Seed original
```

## 🚀 Fluxo de Trabalho Recomendado

### Antes de Mudanças Importantes
```bash
npm run backup
```

### Deploy/Produção
```bash
# 1. Fazer backup antes
npm run backup

# 2. Fazer mudanças (migrations, etc.)
npm run build

# 3. Se algo der errado, restaurar
npm run restore
```

### Desenvolvimento
```bash
# Backup diário/semanal
npm run backup

# Testar novas features
# ...desenvolver...

# Se precisar voltar ao estado anterior
npm run restore
```

## 📊 O que é Salvo no Backup

- ✅ Todas as jornadas com metadados completos
- ✅ Todos os dias com reflexões, dificuldades e status
- ✅ Timestamps de criação e atualização
- ✅ IDs originais (mantém integridade)

## 🔒 Segurança

- Os backups são arquivos JavaScript executáveis
- Mantenha os backups em local seguro
- Considere fazer backup dos arquivos de backup também
- Para ambientes de produção, considere armazenamento externo

## 🐛 Troubleshooting

### "Nenhum backup encontrado"
```bash
npm run backup  # Criar primeiro backup
```

### "Erro durante o backup"
- Verificar conexão com banco
- Verificar permissões de escrita
- Verificar se Prisma Client está funcionando

### "Erro durante o restore"
- Verificar se arquivo de backup existe
- Verificar se banco está acessível
- Backup pode estar corrompido - usar outro

## 🎯 Casos de Uso

1. **Backup antes de migrations**
2. **Backup antes de deploy**
3. **Backup de dados de desenvolvimento**
4. **Migração entre ambientes**
5. **Recuperação de dados deletados**

## 💡 Dicas

- Faça backups regulares (diário/semanal)
- Teste o restore periodicamente
- Mantenha múltiplos backups (não apenas o latest)
- Considere automatizar backups via cron/GitHub Actions
- Para produção, considere também backup do arquivo .env