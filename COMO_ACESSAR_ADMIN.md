# 🔐 Como Acessar o Painel Admin

## 📍 Configurar seu email como Administrador

### Passo 1: Editar o arquivo

Abra o arquivo: `app/admin/page.tsx`

Na **linha 6**, você vai ver:

```typescript
const ADMIN_EMAIL = 'seu@email.com' // <<< COLOQUE SEU EMAIL AQUI!
```

**Altere para o SEU email**, exemplo:

```typescript
const ADMIN_EMAIL = 'robson@exemplo.com' // <<< COLOQUE SEU EMAIL AQUI!
```

Salve o arquivo.

---

### Passo 2: Acessar o painel

1. Certifique-se de que está **logado** com esse email
2. Acesse: http://localhost:3000/admin

**Pronto!** Você verá:
- 📊 Estatísticas dos usuários
- 👥 Lista completa com TODOS os dados
- 📋 Nome, email, telefone, endereço
- ✅ Status de confirmação
- 📅 Datas de cadastro

---

## 🎯 O que o Painel Admin mostra:

### Estatísticas (Cards no topo):
- **Total de Usuários** - Quantos se cadastraram
- **Emails Confirmados** - Quantos confirmaram o email
- **Pendentes** - Quantos ainda não confirmaram
- **Novos (7 dias)** - Cadastros recentes

### Tabela de Usuários:
Cada linha mostra:
- ✅ Status (Confirmado ou Pendente)
- 👤 Nome completo
- 📧 Email
- 📱 Telefone
- 🏠 Endereço completo
- 📅 Data e hora do cadastro
- ✅ Data e hora da confirmação

---

## 📥 Como Exportar os Dados

### Opção 1: Via Supabase (Recomendado)
1. Acesse: https://supabase.com/dashboard
2. Vá em: **Authentication** → **Users**
3. Clique em: **Export CSV**
4. Baixe o arquivo com TODOS os dados!

### Opção 2: Copiar da Tabela
- Use Ctrl+C / Cmd+C para copiar células
- Cole no Excel ou Google Sheets

---

## 🔒 Segurança

**IMPORTANTE:**
- Apenas o email configurado pode acessar `/admin`
- Outros usuários verão "Acesso Negado"
- **NUNCA** compartilhe o acesso admin
- Em produção, use variável de ambiente:

```env
ADMIN_EMAIL=seu@email.com
```

E no código:
```typescript
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'seu@email.com'
```

---

## 💡 Melhorias Futuras (Opcional)

### 1. Adicionar mais admins:
```typescript
const ADMIN_EMAILS = [
  'admin1@exemplo.com',
  'admin2@exemplo.com'
]

if (!ADMIN_EMAILS.includes(user.email)) {
  // acesso negado
}
```

### 2. Exportar dados direto do painel:
- Adicionar botão "Exportar CSV"
- Gerar arquivo automaticamente

### 3. Filtros e busca:
- Buscar por nome/email
- Filtrar por data
- Ordenar colunas

### 4. Estatísticas avançadas:
- Gráficos de crescimento
- Usuários mais ativos
- Taxa de conversão

---

## ❓ Problemas?

### Não consigo acessar o /admin?
1. ✅ Alterou o ADMIN_EMAIL no arquivo?
2. ✅ Salvou o arquivo?
3. ✅ Está logado com esse email?
4. ✅ Reiniciou o servidor? (Ctrl+C e `npm run dev`)

### Dá erro ao carregar usuários?
- Isso é normal se você não tiver nenhum usuário ainda
- Crie pelo menos 1 conta de teste

### Como adicionar outro admin?
- Edite o arquivo `app/admin/page.tsx`
- Mude a verificação para aceitar múltiplos emails

---

## 🎉 Pronto!

Agora você tem um **painel administrativo completo** para ver todos os seus usuários cadastrados! 📊

**Acesse:** http://localhost:3000/admin

