# 📧 Como Configurar Recebimento de Sugestões por Email

## 🎯 O Formulário de Sugestões

Quando um usuário não encontra o tema que procura, ele pode sugerir um novo tema. A sugestão é enviada para seu email!

---

## 🔧 Configuração (5 minutos - GRÁTIS)

### PASSO 1: Criar conta no Web3Forms

1. **Acesse:** https://web3forms.com
2. **Clique** em "Get Started Free"
3. **Digite seu email:** (onde quer receber as sugestões)
4. **Verifique** seu email e confirme
5. ✅ Conta criada!

---

### PASSO 2: Obter Access Key

1. **Faça login** no Web3Forms
2. Você verá seu **Access Key**
3. **Copie** a chave (parece com: `a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6`)

---

### PASSO 3: Adicionar no Projeto

1. **Abra** o arquivo: `components/SearchBar.tsx`

2. **Procure** a linha 54:
```typescript
access_key: 'YOUR_WEB3FORMS_KEY',
```

3. **Substitua** `YOUR_WEB3FORMS_KEY` pela sua chave:
```typescript
access_key: 'a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6',
```

4. **Salve** o arquivo

---

### PASSO 4: Enviar para o GitHub

Abra o **Git Bash** na pasta do projeto e cole:

```bash
git add .
git commit -m "Configurado Web3Forms para receber sugestões"
git push
```

Aguarde 2 minutos e **pronto!** ✅

---

## 📧 Como Funcionará

### Quando usuário sugerir um tema:

1. **Busca** por "horas extras" (e não encontra)
2. **Clica** em "Sugerir este tema"
3. **Preenche** formulário:
   - Nome
   - Email dele
   - Sugestão
4. **Envia**
5. **VOCÊ recebe** um email assim:

```
De: Web3Forms
Assunto: Nova Sugestão de Tema: Horas extras

Nome: João Silva
Email: joao@email.com

Sugestão de Tema:
Gostaria de ver informações sobre horas extras, 
como calcular, quando pagar 50% ou 100%.

Termo buscado: horas extras
```

---

## 💰 Custos

**100% GRATUITO!**

- ✅ Até 250 envios por mês grátis
- ✅ Sem anúncios
- ✅ Sem marca d'água
- ✅ Entrega instantânea

Se precisar de mais, tem planos pagos (mas 250 é muito!)

---

## 🎯 Alternativas (se preferir)

### Opção 2: EmailJS (também grátis)
- Site: https://www.emailjs.com
- Limite: 200 emails/mês grátis

### Opção 3: Formspree
- Site: https://formspree.io
- Limite: 50 envios/mês grátis

### Opção 4: Google Forms (mais simples)
- Criar Google Form
- Embedar no site
- Recebe notificação no Gmail

---

## ✅ Teste

Depois de configurar:

1. Acesse seu site
2. Busque por algo que não existe (ex: "unicórnio")
3. Clique em "Sugerir tema"
4. Preencha e envie
5. Verifique seu email! 📧

---

## 🔒 Segurança

**⚠️ Importante:**

A Access Key ficará **visível** no código fonte do site (é normal, Web3Forms foi feito assim).

Para proteger:

1. **Ative Captcha** no painel do Web3Forms (anti-spam)
2. **Configure** domínios permitidos
3. **Limite** de envios por IP

---

## 📊 Acompanhar Envios

No painel do Web3Forms você vê:

- 📈 Quantas sugestões recebeu
- 📧 Histórico de emails
- 📊 Estatísticas
- 🚫 Bloquear IPs de spam

---

## 🆘 Problemas?

### Email não chega
- Verifique spam/lixo eletrônico
- Confirme o email no Web3Forms
- Teste a Access Key

### Formulário não envia
- Verifique Access Key no código
- Veja console do navegador (F12)
- Teste conexão com internet

---

## 💡 Dica

Configure **notificações** no seu email para receber alertas toda vez que alguém sugerir um tema!

---

**Pronto! Agora você vai receber todas as sugestões dos usuários!** 📬

