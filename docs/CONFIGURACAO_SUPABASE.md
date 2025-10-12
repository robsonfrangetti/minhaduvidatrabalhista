# 🔐 Configuração do Supabase - Guia Completo

Este guia explica como configurar completamente o Supabase para seu projeto.

## ✅ Passo 1: Criar arquivo .env.local

1. Na raiz do projeto, crie um arquivo chamado `.env.local`

2. Adicione suas credenciais do Supabase:

```env
NEXT_PUBLIC_SUPABASE_URL=https://ynhgeqjdxftcanvypulh.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InluaGdlcWpkeGZ0Y2FudnlwdWxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAyNzE2OTMsImV4cCI6MjA3NTg0NzY5M30.RQwNDJKAXrhvFljmnNL3UKvFtyVmlxFI3ZXZJzdKE3U
```

> **Importante**: Nunca commite o arquivo `.env.local` para o Git! Ele já está no `.gitignore`.

## 📧 Passo 2: Configurar Emails no Supabase

### 2.1. Acessar Configurações de Email

1. Acesse seu projeto no Supabase: https://supabase.com/dashboard
2. Vá em **Authentication** no menu lateral
3. Clique em **Email Templates**

### 2.2. Habilitar Confirmação de Email

1. Vá em **Authentication** → **Providers**
2. Clique em **Email**
3. Certifique-se de que **Enable Email Confirmations** está **ATIVADO** ✅

### 2.3. Personalizar Templates de Email (Opcional)

Você pode personalizar os seguintes emails:

#### **Confirm Signup (Confirmação de Cadastro)**
```html
<h2>Bem-vindo ao Minha Dúvida Trabalhista!</h2>
<p>Clique no link abaixo para confirmar seu cadastro:</p>
<a href="{{ .ConfirmationURL }}">Confirmar Email</a>
```

#### **Reset Password (Recuperar Senha)**
```html
<h2>Recuperar Senha</h2>
<p>Clique no link abaixo para redefinir sua senha:</p>
<a href="{{ .ConfirmationURL }}">Redefinir Senha</a>
```

### 2.4. Configurar Redirect URLs

1. Vá em **Authentication** → **URL Configuration**
2. Adicione as URLs de redirecionamento:

**Para desenvolvimento local:**
```
http://localhost:3000/auth/callback
http://localhost:3000/auth/redefinir-senha
```

**Para produção:**
```
https://seudominio.com/auth/callback
https://seudominio.com/auth/redefinir-senha
```

## 🔒 Passo 3: Configurar Políticas de Segurança (RLS)

O Supabase usa Row Level Security (RLS) para proteger seus dados.

### 3.1. Políticas para Tabela de Usuários (se criar tabelas customizadas)

Se você criar tabelas adicionais no futuro, exemplo:

```sql
-- Habilitar RLS
ALTER TABLE user_favorites ENABLE ROW LEVEL SECURITY;

-- Política: Usuários podem ver apenas seus próprios favoritos
CREATE POLICY "Users can view own favorites"
ON user_favorites FOR SELECT
USING (auth.uid() = user_id);

-- Política: Usuários podem inserir apenas seus próprios favoritos
CREATE POLICY "Users can insert own favorites"
ON user_favorites FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Política: Usuários podem atualizar apenas seus próprios favoritos
CREATE POLICY "Users can update own favorites"
ON user_favorites FOR UPDATE
USING (auth.uid() = user_id);

-- Política: Usuários podem deletar apenas seus próprios favoritos
CREATE POLICY "Users can delete own favorites"
ON user_favorites FOR DELETE
USING (auth.uid() = user_id);
```

## 📊 Passo 4: Configurar Email SMTP (Opcional - Recomendado para Produção)

Por padrão, o Supabase usa um servidor SMTP próprio, mas tem limite de envios.

### Para produção, configure seu próprio SMTP:

1. Vá em **Project Settings** → **Authentication**
2. Role até **SMTP Settings**
3. Configure com um provedor como:
   - **SendGrid**
   - **Mailgun**
   - **Amazon SES**
   - **Resend**

Exemplo de configuração:
```
Host: smtp.sendgrid.net
Port: 587
Username: apikey
Password: [sua_api_key]
From: noreply@minhaduvidatrabalhista.com.br
```

## ⚙️ Passo 5: Configurações Adicionais

### 5.1. Tempo de Expiração do Token

1. Vá em **Authentication** → **Settings**
2. Configure **JWT Expiry Time**: `3600` (1 hora)

### 5.2. Senha Mínima

1. **Password Minimum Length**: `6` caracteres (já configurado no código)

### 5.3. Desabilitar Cadastros (Opcional)

Se quiser controlar quem se cadastra:
1. **Enable Signups**: Desative isso
2. Adicione usuários manualmente via Dashboard

## 🧪 Passo 6: Testar Tudo

### 6.1. Testar Cadastro

```bash
# Inicie o servidor
npm run dev
```

1. Acesse: `http://localhost:3000/auth/cadastro`
2. Preencha o formulário
3. Verifique se recebeu o email de confirmação
4. Clique no link do email
5. Faça login

### 6.2. Testar Recuperação de Senha

1. Acesse: `http://localhost:3000/auth/recuperar-senha`
2. Digite seu email
3. Verifique se recebeu o email
4. Clique no link
5. Redefina a senha

## 🚀 Passo 7: Deploy (Produção)

Quando fizer deploy (Vercel, Netlify, etc.):

### 7.1. Configurar Variáveis de Ambiente

No painel do seu provedor de hospedagem, adicione:

```
NEXT_PUBLIC_SUPABASE_URL=https://ynhgeqjdxftcanvypulh.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_aqui
```

### 7.2. Atualizar Redirect URLs no Supabase

Adicione a URL de produção em:
- **Authentication** → **URL Configuration** → **Redirect URLs**

```
https://seudominio.com/auth/callback
https://seudominio.com/auth/redefinir-senha
```

### 7.3. Site URL

Configure também:
- **Authentication** → **URL Configuration** → **Site URL**
```
https://seudominio.com
```

## 🔍 Monitoramento

### Visualizar Usuários Cadastrados

1. Vá em **Authentication** → **Users**
2. Veja todos os usuários, status de confirmação, etc.

### Ver Logs de Autenticação

1. **Authentication** → **Logs**
2. Monitore logins, cadastros, erros, etc.

## ❓ Troubleshooting

### Email não chegou?

1. ✅ Verifique a pasta de SPAM
2. ✅ Confirme que **Enable Email Confirmations** está ativado
3. ✅ Veja os logs em **Authentication** → **Logs**
4. ✅ Configure SMTP customizado (se muitos usuários)

### Erro ao fazer login?

1. ✅ Email foi confirmado?
2. ✅ Senha está correta?
3. ✅ Veja logs em **Authentication** → **Logs**

### Redirect não funciona?

1. ✅ Verifique se a URL está em **Redirect URLs**
2. ✅ Confirme que o `.env.local` está configurado
3. ✅ Reinicie o servidor: `npm run dev`

## 📚 Recursos Úteis

- [Documentação Oficial Supabase Auth](https://supabase.com/docs/guides/auth)
- [Email Templates](https://supabase.com/docs/guides/auth/auth-email-templates)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)

## 🎉 Pronto!

Seu sistema de autenticação está completo e profissional! 🚀

---

**Próximos passos:**
- Personalize os templates de email
- Configure um domínio customizado para emails
- Implemente funcionalidades extras (favoritos, histórico)
- Configure analytics

