# ⚡ Quick Start - Início Rápido

Comece a usar o projeto em menos de 5 minutos!

## 🚀 3 Passos Simples

### 1️⃣ Instalar Dependências

```bash
npm install
```

### 2️⃣ Iniciar Servidor

```bash
npm run dev
```

### 3️⃣ Abrir no Navegador

```
http://localhost:3000
```

**Pronto! 🎉** O site já está funcionando!

---

## 📁 Arquivos Importantes

```
📦 minhaduvidatrabalhista/
├── 📂 app/
│   ├── page.tsx              ← Página inicial
│   ├── tema/[slug]/          ← Confirmação
│   └── resultado/[slug]/     ← Resultados
├── 📂 data/
│   └── topics.ts             ← DADOS DOS TEMAS (EDITE AQUI!)
├── 📂 docs/                  ← Documentação completa
└── README.md                 ← Leia primeiro
```

---

## ✏️ Como Adicionar um Tema

Edite `data/topics.ts` e adicione:

```typescript
"seu-tema": {
  id: "seu-tema",
  title: "Título",
  description: "Descrição",
  keywords: ["palavra1", "palavra2"],
  legislation: [/* ... */],
  ordinances: [/* ... */],
  summaries: [/* ... */],
  jurisprudence: [/* ... */],
  recentDecisions: [/* ... */]
}
```

Veja os exemplos existentes para entender a estrutura!

---

## 🎨 Como Personalizar

### Mudar Cores
Edite `app/globals.css` → seção `:root`

### Mudar Textos
Edite `app/page.tsx` e `app/layout.tsx`

### Adicionar Logo
Coloque em `public/logo.png` e importe no código

---

## 📚 Documentação Completa

- **README.md** - Visão geral do projeto
- **docs/COMO_USAR.md** - Guia completo de uso
- **docs/TEMAS_SUGERIDOS.md** - 30+ temas para adicionar
- **docs/API_INTEGRATION.md** - Integração com APIs
- **docs/DEPLOY.md** - Como fazer deploy
- **CONTRIBUTING.md** - Como contribuir

---

## 🆘 Problemas?

### Erro ao instalar
```bash
# Tente:
npm cache clean --force
npm install
```

### Porta 3000 em uso
```bash
# Use outra porta:
PORT=3001 npm run dev
```

### Página em branco
- Abra console (F12)
- Verifique erros
- Reinicie o servidor

---

## 🎯 Próximos Passos

1. ✅ **Explore o site** - Teste todas as funcionalidades
2. ✅ **Adicione temas** - Use `docs/TEMAS_SUGERIDOS.md`
3. ✅ **Personalize** - Cores, textos, logo
4. ✅ **Deploy** - Veja `docs/DEPLOY.md`

---

## 📞 Ajuda

- Leia a documentação em `/docs`
- Veja exemplos em `data/topics.ts`
- Abra uma issue no GitHub

---

**Divirta-se! 🚀**

