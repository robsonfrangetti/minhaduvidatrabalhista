# 📧 Configurar Emails em Português - Passo a Passo

## 🎯 Como personalizar os emails do Supabase para português

Os emails vêm em inglês por padrão. Vamos configurá-los em português brasileiro!

---

## 📝 Passo 1: Acessar Templates de Email

1. Acesse: https://supabase.com/dashboard
2. Selecione seu projeto: **minhaduvidatrabalhista**
3. No menu lateral, clique em: **Authentication**
4. Clique em: **Email Templates**

Você verá 4 templates:
- ✅ **Confirm signup** (Confirmar cadastro)
- 🔑 **Invite user** (Convidar usuário)
- 🔐 **Magic Link** (Link mágico)
- 🔄 **Change Email Address** (Mudar email)
- 🔓 **Reset Password** (Recuperar senha)

---

## ✅ Template 1: Confirmar Cadastro (PRINCIPAL)

Clique em **"Confirm signup"** e substitua todo o conteúdo por:

### Subject (Assunto):
```
Confirme seu cadastro - Minha Dúvida Trabalhista
```

### HTML Body (Corpo do Email):
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Confirme seu cadastro</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f7fa;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f7fa; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">
                ⚖️ Minha Dúvida Trabalhista
              </h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="color: #1e293b; font-size: 24px; margin: 0 0 20px 0; font-weight: 600;">
                🎉 Cadastro realizado com sucesso!
              </h2>
              
              <p style="color: #475569; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                Olá! Estamos felizes em ter você conosco.
              </p>
              
              <p style="color: #475569; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
                Para começar a usar a plataforma e ter acesso a todas as informações sobre legislação trabalhista, você precisa confirmar seu endereço de email.
              </p>
              
              <!-- Button -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 10px 0;">
                    <a href="{{ .ConfirmationURL }}" style="display: inline-block; padding: 16px 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px;">
                      ✅ Confirmar meu email
                    </a>
                  </td>
                </tr>
              </table>
              
              <p style="color: #64748b; font-size: 14px; line-height: 1.6; margin: 30px 0 0 0; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                <strong>Ou copie e cole este link no seu navegador:</strong><br>
                <a href="{{ .ConfirmationURL }}" style="color: #667eea; word-break: break-all;">{{ .ConfirmationURL }}</a>
              </p>
              
              <p style="color: #94a3b8; font-size: 13px; line-height: 1.6; margin: 20px 0 0 0;">
                ⏰ Este link é válido por 24 horas.
              </p>
              
              <p style="color: #94a3b8; font-size: 13px; line-height: 1.6; margin: 10px 0 0 0;">
                Se você não criou esta conta, pode ignorar este email com segurança.
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 14px; margin: 0 0 10px 0;">
                <strong>Minha Dúvida Trabalhista</strong>
              </p>
              <p style="color: #94a3b8; font-size: 12px; margin: 0;">
                Esclarecendo suas dúvidas trabalhistas de forma simples e prática
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

Clique em **Save** no canto superior direito!

---

## 🔓 Template 2: Recuperar Senha

Clique em **"Reset Password"** e substitua:

### Subject (Assunto):
```
Recuperação de senha - Minha Dúvida Trabalhista
```

### HTML Body:
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Recuperar senha</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f7fa;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f7fa; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">
                ⚖️ Minha Dúvida Trabalhista
              </h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="color: #1e293b; font-size: 24px; margin: 0 0 20px 0; font-weight: 600;">
                🔐 Recuperação de senha
              </h2>
              
              <p style="color: #475569; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                Olá! Recebemos uma solicitação para redefinir a senha da sua conta.
              </p>
              
              <p style="color: #475569; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
                Clique no botão abaixo para criar uma nova senha:
              </p>
              
              <!-- Button -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 10px 0;">
                    <a href="{{ .ConfirmationURL }}" style="display: inline-block; padding: 16px 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px;">
                      🔄 Redefinir minha senha
                    </a>
                  </td>
                </tr>
              </table>
              
              <p style="color: #64748b; font-size: 14px; line-height: 1.6; margin: 30px 0 0 0; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                <strong>Ou copie e cole este link no seu navegador:</strong><br>
                <a href="{{ .ConfirmationURL }}" style="color: #667eea; word-break: break-all;">{{ .ConfirmationURL }}</a>
              </p>
              
              <p style="color: #94a3b8; font-size: 13px; line-height: 1.6; margin: 20px 0 0 0;">
                ⏰ Este link é válido por 1 hora.
              </p>
              
              <p style="color: #ef4444; font-size: 14px; line-height: 1.6; margin: 20px 0 0 0; padding: 15px; background-color: #fef2f2; border-left: 4px solid #ef4444; border-radius: 4px;">
                <strong>⚠️ Atenção:</strong> Se você não solicitou esta recuperação de senha, ignore este email. Sua senha permanecerá segura.
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 14px; margin: 0 0 10px 0;">
                <strong>Minha Dúvida Trabalhista</strong>
              </p>
              <p style="color: #94a3b8; font-size: 12px; margin: 0;">
                Esclarecendo suas dúvidas trabalhistas de forma simples e prática
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

Clique em **Save**!

---

## 🔑 Template 3: Magic Link (Opcional)

Se for usar Magic Link (login sem senha), clique em **"Magic Link"**:

### Subject:
```
Seu link de acesso - Minha Dúvida Trabalhista
```

### HTML Body:
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Link de acesso</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f7fa;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f7fa; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
          
          <tr>
            <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">
                ⚖️ Minha Dúvida Trabalhista
              </h1>
            </td>
          </tr>
          
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="color: #1e293b; font-size: 24px; margin: 0 0 20px 0; font-weight: 600;">
                🔑 Seu link de acesso
              </h2>
              
              <p style="color: #475569; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
                Clique no botão abaixo para fazer login na sua conta:
              </p>
              
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 10px 0;">
                    <a href="{{ .ConfirmationURL }}" style="display: inline-block; padding: 16px 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px;">
                      🚀 Acessar plataforma
                    </a>
                  </td>
                </tr>
              </table>
              
              <p style="color: #94a3b8; font-size: 13px; line-height: 1.6; margin: 30px 0 0 0;">
                ⏰ Este link é válido por 1 hora.
              </p>
            </td>
          </tr>
          
          <tr>
            <td style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 14px; margin: 0 0 10px 0;">
                <strong>Minha Dúvida Trabalhista</strong>
              </p>
              <p style="color: #94a3b8; font-size: 12px; margin: 0;">
                Esclarecendo suas dúvidas trabalhistas de forma simples e prática
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

---

## ✅ Pronto!

Agora todos os emails estarão em **português brasileiro** com um design profissional! 🎉

### Teste os emails:

1. Crie uma nova conta
2. Solicite recuperação de senha
3. Verifique se os emails chegam em português

---

## 💡 Dica Extra: Email Sender

Para um toque mais profissional, você pode configurar um domínio customizado:

1. **Authentication** → **Settings** → **SMTP Settings**
2. Configure com SendGrid, Mailgun, ou outro provedor
3. Use um email como: `noreply@minhaduvidatrabalhista.com.br`

---

**Pronto! Emails 100% profissionais e em português! 🚀**

