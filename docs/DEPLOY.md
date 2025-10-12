# 🚀 Guia de Deploy

Este documento explica como fazer o deploy da aplicação em diferentes plataformas.

## Vercel (Recomendado)

A forma mais simples de fazer deploy de uma aplicação Next.js é usando a Vercel.

### Passo a passo:

1. **Crie uma conta no Vercel**
   - Acesse: https://vercel.com
   - Cadastre-se com GitHub, GitLab ou Bitbucket

2. **Faça push do código para o GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/minhaduvidatrabalhista.git
   git push -u origin main
   ```

3. **Importe o projeto no Vercel**
   - Clique em "New Project"
   - Selecione o repositório
   - Clique em "Deploy"

4. **Pronto!** 🎉
   - Sua aplicação estará disponível em `https://seu-projeto.vercel.app`

### Configurações Avançadas (Vercel)

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

---

## Netlify

### Passo a passo:

1. **Crie uma conta no Netlify**
   - Acesse: https://netlify.com

2. **Adicione arquivo de configuração**
   Crie `netlify.toml`:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

3. **Deploy via Git**
   - Conecte seu repositório
   - Configure as variáveis de ambiente
   - Deploy automático

---

## AWS (EC2)

### Requisitos:
- Instância EC2 Ubuntu/Amazon Linux
- Node.js 18+
- PM2 para gerenciamento de processo

### Passos:

1. **Conecte à sua instância EC2**
   ```bash
   ssh -i sua-chave.pem ubuntu@seu-ip
   ```

2. **Instale Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/minhaduvidatrabalhista.git
   cd minhaduvidatrabalhista
   ```

4. **Instale dependências**
   ```bash
   npm install
   npm run build
   ```

5. **Instale PM2**
   ```bash
   sudo npm install -g pm2
   ```

6. **Inicie a aplicação**
   ```bash
   pm2 start npm --name "minhaduvidatrabalhista" -- start
   pm2 save
   pm2 startup
   ```

7. **Configure Nginx (opcional)**
   ```nginx
   server {
       listen 80;
       server_name seu-dominio.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

---

## Docker

### Dockerfile:

```dockerfile
FROM node:18-alpine AS base

# Dependências
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Builder
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Runner
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### docker-compose.yml:

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: always
```

### Comandos:

```bash
# Build
docker build -t minhaduvidatrabalhista .

# Run
docker run -p 3000:3000 minhaduvidatrabalhista

# Com Docker Compose
docker-compose up -d
```

---

## Hospedagem Compartilhada (cPanel)

⚠️ **Não recomendado** para Next.js devido aos requisitos de Node.js

Se necessário:

1. Use hospedagem com Node.js habilitado
2. Configure o Node.js para versão 18+
3. Deploy via FTP/SSH
4. Configure o processo para rodar continuamente

---

## Variáveis de Ambiente

Para produção, configure:

```env
NODE_ENV=production
NEXT_PUBLIC_BASE_URL=https://seu-dominio.com

# APIs futuras
API_KEY=sua_chave
```

### No Vercel:
- Settings → Environment Variables

### No Netlify:
- Site settings → Environment → Environment variables

### No Docker:
```bash
docker run -e NODE_ENV=production -e API_KEY=sua_chave ...
```

---

## Performance e Otimização

### 1. Habilitar Cache

```javascript
// next.config.js
module.exports = {
  poweredByHeader: false,
  compress: true,
  images: {
    domains: ['seu-dominio.com'],
  },
}
```

### 2. CDN

Use CDN para assets estáticos:
- Vercel Edge Network (automático)
- CloudFlare
- AWS CloudFront

### 3. Monitoramento

- Vercel Analytics
- Google Analytics
- Sentry para erros

---

## Domínio Customizado

### Vercel:
1. Settings → Domains
2. Adicione seu domínio
3. Configure DNS conforme instruções

### Cloudflare (recomendado):
1. Adicione site no Cloudflare
2. Configure nameservers
3. Adicione registro CNAME apontando para deploy

---

## SSL/HTTPS

- **Vercel/Netlify**: Automático
- **AWS/EC2**: Use Let's Encrypt
  ```bash
  sudo certbot --nginx -d seu-dominio.com
  ```

---

## Backup e Segurança

1. **Backups regulares** do código via Git
2. **Variáveis de ambiente** seguras
3. **Atualizações** de dependências
   ```bash
   npm audit
   npm update
   ```
4. **Rate limiting** se necessário
5. **CORS** configurado adequadamente

---

## Checklist Pré-Deploy

- [ ] Teste local completo
- [ ] Build sem erros (`npm run build`)
- [ ] Variáveis de ambiente configuradas
- [ ] Domínio configurado (se aplicável)
- [ ] SSL configurado
- [ ] Analytics configurado (opcional)
- [ ] Backup do código
- [ ] Documentação atualizada

---

## Suporte

Para problemas específicos de deploy:

- **Vercel**: https://vercel.com/docs
- **Netlify**: https://docs.netlify.com
- **AWS**: https://docs.aws.amazon.com
- **Docker**: https://docs.docker.com

---

**Dica**: Comece com Vercel para deploy mais simples e escalável!

