# 🚀 Guia Completo: Deploy na Vercel

Guia passo a passo para colocar seu projeto no ar **GRÁTIS** usando Vercel!

---

## 📋 O que você vai fazer

1. ✅ Criar conta no GitHub (se não tiver)
2. ✅ Enviar o projeto para o GitHub
3. ✅ Criar conta na Vercel
4. ✅ Conectar Vercel com GitHub
5. ✅ Fazer deploy (publicar)
6. ✅ Configurar domínio customizado

**Tempo estimado:** 15-20 minutos

---

## 🎯 PASSO 1: Criar Conta no GitHub

### O que é GitHub?
Um lugar na internet para guardar seu código (como um Google Drive para programadores).

### Como fazer:

1. Acesse: **https://github.com**

2. Clique em **"Sign up"** (Cadastrar)

3. Preencha:
   - Email
   - Senha (forte!)
   - Nome de usuário

4. Confirme seu email

5. ✅ Pronto! Conta criada.

---

## 🎯 PASSO 2: Instalar Git no seu Computador

### Windows:

1. Baixe: **https://git-scm.com/download/windows**
2. Instale (pode clicar "Next" em tudo)
3. Abra o **Git Bash** (foi instalado junto)

### Como testar se funcionou:

Abra o **terminal** (Git Bash) e digite:
```bash
git --version
```

Se aparecer algo como `git version 2.x.x`, funcionou! ✅

---

## 🎯 PASSO 3: Enviar Projeto para GitHub

### 3.1 - Abrir terminal na pasta do projeto

1. Abra a pasta: `minhaduvidatrabalhista`
2. Clique com botão direito dentro da pasta
3. Selecione **"Git Bash Here"** (ou "Open terminal here")

### 3.2 - Configurar Git (só primeira vez)

Cole esses comandos no terminal (substitua com SEU nome e email):

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@gmail.com"
```

### 3.3 - Iniciar repositório

Cole este comando:
```bash
git init
```

### 3.4 - Adicionar arquivos

```bash
git add .
```

### 3.5 - Fazer commit (salvar)

```bash
git commit -m "Projeto Minha Duvida Trabalhista - Versão Inicial"
```

### 3.6 - Criar repositório no GitHub

1. Vá para: **https://github.com/new**
2. Nome do repositório: `minhaduvidatrabalhista`
3. Deixe **PÚBLICO**
4. **NÃO** marque "Add README"
5. Clique em **"Create repository"**

### 3.7 - Conectar e enviar

O GitHub vai mostrar comandos. Use esses (substitua SEU-USUARIO pelo seu nome de usuário do GitHub):

```bash
git remote add origin https://github.com/SEU-USUARIO/minhaduvidatrabalhista.git
git branch -M main
git push -u origin main
```

**Pode pedir usuário e senha do GitHub - digite normalmente.**

### ✅ Como saber se funcionou?

Atualize a página do GitHub - você verá todos os arquivos lá! 🎉

---

## 🎯 PASSO 4: Criar Conta na Vercel

### 4.1 - Acessar Vercel

Vá para: **https://vercel.com**

### 4.2 - Cadastrar

1. Clique em **"Sign Up"** (Cadastrar)
2. Escolha: **"Continue with GitHub"** ⭐
3. Autorize a Vercel a acessar sua conta GitHub
4. ✅ Conta criada e já conectada!

**Dica:** Use o GitHub para cadastrar - fica tudo integrado automaticamente!

---

## 🎯 PASSO 5: Fazer Deploy (Publicar!)

### 5.1 - Importar Projeto

1. No dashboard da Vercel, clique: **"Add New Project"** ou **"Import Project"**

2. Você verá seus repositórios do GitHub

3. Encontre: **minhaduvidatrabalhista**

4. Clique em **"Import"**

### 5.2 - Configurar Projeto

A Vercel detecta automaticamente que é Next.js! ✨

**Configure assim:**

```
Project Name: minhaduvidatrabalhista
Framework Preset: Next.js (já detectado)
Root Directory: ./
Build Command: npm run build (já preenchido)
Output Directory: .next (já preenchido)
Install Command: npm install (já preenchido)
```

**Variáveis de Ambiente:** Deixe em branco (não precisa por enquanto)

### 5.3 - Deploy!

1. Clique no botão grande: **"Deploy"** 🚀

2. Aguarde 2-3 minutos (pode tomar um café ☕)

3. Você verá:
   - Building... (compilando)
   - Deploying... (publicando)
   - ✅ **Success!** (Sucesso!)

### 5.4 - Ver seu site!

Depois do deploy, você verá:

```
🎉 Congratulations!

Your project is live at:
https://minhaduvidatrabalhista-abc123.vercel.app
```

**Clique no link** e veja seu site funcionando! 🎊

---

## 🎯 PASSO 6: Configurar Domínio Customizado

Agora vamos fazer funcionar em: `minhaduvidatrabalhista.com.br/duvidas`

### Opção A: Subdomínio (MAIS FÁCIL) ⭐ RECOMENDADO

Usar: `duvidas.minhaduvidatrabalhista.com.br`

#### 6.1 - Na Vercel

1. No projeto, vá em **"Settings"** (Configurações)
2. Clique em **"Domains"** (Domínios)
3. Digite: `duvidas.minhaduvidatrabalhista.com.br`
4. Clique **"Add"**

A Vercel mostrará algo assim:
```
Add the following record to your DNS:

Type: CNAME
Name: duvidas
Value: cname.vercel-dns.com
```

#### 6.2 - No Hostinger (seu domínio)

1. Acesse: **https://hpanel.hostinger.com**
2. Vá em **"Domínios"**
3. Clique no seu domínio: `minhaduvidatrabalhista.com.br`
4. Vá em **"DNS / Name Servers"**
5. Clique em **"Adicionar registro DNS"**

Configure:
```
Tipo: CNAME
Nome: duvidas
Aponta para: cname.vercel-dns.com
TTL: 14400 (ou deixe padrão)
```

6. **Salve**

#### 6.3 - Aguarde

- DNS leva de 5 minutos a 48 horas para propagar
- Geralmente funciona em 10-30 minutos

#### 6.4 - Teste

Depois de alguns minutos, acesse:
```
https://duvidas.minhaduvidatrabalhista.com.br
```

✅ **Funcionou!** Seu site está no ar! 🎉

---

### Opção B: Diretório `/duvidas` (MAIS COMPLEXO)

Isso é mais complicado e requer configurações avançadas no servidor principal.

**Recomendo usar o subdomínio (Opção A)** - é mais simples e profissional.

Mas se REALMENTE quer `/duvidas`, posso explicar depois.

---

## 🎊 PRONTO! Site no Ar!

### ✅ O que você conseguiu:

- ✅ Projeto publicado na internet
- ✅ HTTPS automático (seguro) 🔒
- ✅ Grátis para sempre
- ✅ Super rápido
- ✅ Domínio customizado

### 🔄 Como Atualizar o Site

Sempre que fizer mudanças:

```bash
# 1. Salve as mudanças
git add .

# 2. Faça commit
git commit -m "Descrição da mudança"

# 3. Envie para GitHub
git push
```

**A Vercel atualiza AUTOMATICAMENTE!** 🚀

Em 1-2 minutos, as mudanças estarão no ar!

---

## 🆘 Problemas Comuns

### Erro: "git: command not found"
**Solução:** Instale o Git (Passo 2)

### Erro ao fazer push
**Solução:** GitHub mudou autenticação. Use:
1. Vá em: https://github.com/settings/tokens
2. Generate new token (classic)
3. Dê todas as permissões
4. Copie o token
5. Use o token como senha

### Deploy falhou na Vercel
**Solução:** 
1. Veja os logs na Vercel
2. Geralmente é erro de instalação
3. Verifique se `package.json` está correto

### Domínio não funciona
**Solução:** 
1. Aguarde mais tempo (até 48h)
2. Verifique DNS no Hostinger
3. Use ferramenta: https://dnschecker.org

---

## 📞 Precisa de Ajuda?

1. **Logs da Vercel:** Veja erros detalhados no painel
2. **Documentação Vercel:** https://vercel.com/docs
3. **Suporte Vercel:** Muito rápido e eficiente

---

## 🎯 Links Importantes

- **Seu GitHub:** https://github.com/SEU-USUARIO
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Documentação Next.js:** https://nextjs.org/docs

---

## 🎉 Parabéns!

Você acabou de publicar uma aplicação profissional na internet!

Agora pode:
- ✅ Adicionar novos temas
- ✅ Personalizar design
- ✅ Compartilhar com amigos
- ✅ Ajudar trabalhadores brasileiros!

---

**Dica Final:** Salve este guia! Você vai precisar dele para futuras atualizações.

**Boa sorte com seu projeto!** 🚀⚖️

