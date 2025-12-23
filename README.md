# 🚀 Jornada da Gratidão

Uma aplicação de acompanhamento pessoal para jornadas de transformação de 1 a 365 dias.

## ✨ Funcionalidades

- **Configuração Flexível**: Configure jornadas de 1 a 365 dias
- **Banco de Dados**: Persistência com SQLite e Prisma
- **Reflexões Diárias**: Registre seus pensamentos e dificuldades
- **Sistema de Conquistas**: Marcos dinâmicos baseados na duração da jornada
- **Sons de Celebração**: Feedback auditivo ao completar dias
- **Tema Personalizado**: Design moderno com glassmorphism
- **Reset Seguro**: Sistema de triple-confirmação para reiniciar
- **Deploy Vercel**: Pronto para produção

## 🛠️ Tecnologias

- **Next.js 15** - Framework React
- **Tailwind CSS** - Estilização
- **Prisma** - ORM para banco de dados
- **SQLite** - Banco de dados local
- **Web Audio API** - Sons de celebração

## 🚀 Instalação e Uso

### 1. Clone o repositório
```bash
git clone <seu-repositorio>
cd jornada-da-liberdade
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure o banco de dados
```bash
# Gerar cliente Prisma
npx prisma generate

# Executar migrações
npx prisma migrate dev --name init
```

### 4. Execute em desenvolvimento
```bash
npm run dev
```

Acesse http://localhost:3000

### 5. Deploy no Vercel

1. Faça push para o GitHub
2. Importe no Vercel
3. Configure as variáveis de ambiente:
   - `DATABASE_URL="file:./prisma/prod.db"`
4. Deploy automático

## 📁 Estrutura do Projeto

```
├── src/
│   ├── app/
│   │   ├── api/           # APIs REST
│   │   ├── components/    # Componentes React
│   │   ├── data/         # Dados estáticos
│   │   └── utils/        # Utilitários
│   └── lib/              # Configurações
├── prisma/
│   ├── schema.prisma     # Schema do banco
│   └── migrations/       # Migrações
└── public/               # Arquivos estáticos
```

## 🎯 Como Usar

1. **Configuração Inicial**: Configure data de início e duração (1-365 dias)
2. **Progresso Diário**: Clique nos dias para abrir reflexões
3. **Conquistas**: Acompanhe marcos na aba "Trilha das Conquistas"
4. **Reset**: Use o botão "Reiniciar Jornada" com triple-confirmação

## 🌟 Funcionalidades Detalhadas

### Sistema de Conquistas Dinâmico
- Marcos automáticos: 7, 14, 21, 30 dias
- Marcos condicionais: 45, 60, 75, 90+ dias
- Marco da metade da jornada
- Marco final personalizado

### Persistência de Dados
- API REST para CRUD de jornadas
- Migração automática do localStorage
- Backup seguro no banco SQLite

### Som e Feedback
- Sons de clique nos botões
- Melodia de celebração ao completar dias
- Confetti visual para conquistas

## 🔧 Scripts Disponíveis

- `npm run dev` - Desenvolvimento
- `npm run build` - Build para produção
- `npm run start` - Iniciar produção
- `npx prisma studio` - Interface visual do banco

## 🎨 Personalização

### Cores e Temas
Edite `tailwind.config.js` para personalizar cores e gradientes.

### Sons
Modifique as frequências em `JourneyBoard.jsx` para diferentes melodias.

### Conquistas
Ajuste marcos em `utils/achievements.js` conforme necessário.

## 📱 Responsividade

- Design mobile-first
- Funcional em tablets e desktops
- Interface adaptável

## 🔒 Segurança

- Validação de entrada nos APIs
- Sanitização de dados
- Triple-confirmação para reset

## 📄 Licença

MIT License - veja LICENSE para detalhes.

---

**Desenvolvido com ❤️ para transformações pessoais**
