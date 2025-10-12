# 🎯 COMECE AQUI!

Bem-vindo ao projeto **Minha Dúvida Trabalhista**! 

Este é o seu ponto de partida. Siga os passos abaixo:

---

## ⚡ Instalação Rápida (2 minutos)

Abra o terminal **nesta pasta** e execute:

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor
npm run dev
```

Aguarde e abra no navegador:
```
http://localhost:3000
```

**Pronto!** ✅ O site já está funcionando!

---

## 📚 O que você vai ver?

1. **Página inicial** com 3 temas:
   - Contrato de Experiência
   - Férias Trabalhistas  
   - 13º Salário

2. **Ao clicar** em um tema:
   - Confirmação do tema

3. **Ao confirmar**:
   - 📋 Legislação (CLT)
   - 📄 Portarias
   - ⚖️ Súmulas
   - 📚 Jurisprudências
   - 🔥 3 Decisões mais recentes

---

## 🎨 Quer Personalizar?

### Adicionar Novos Temas

1. Abra: `data/topics.ts`
2. Copie um tema existente
3. Modifique os dados
4. Salve
5. Recarregue o navegador

**Tem 30+ sugestões** em: `docs/TEMAS_SUGERIDOS.md`

### Mudar Cores

1. Abra: `app/globals.css`
2. Edite as variáveis em `:root`
3. Salve e veja as mudanças!

---

## 📖 Documentação Completa

| Arquivo | Descrição |
|---------|-----------|
| 📄 `README.md` | **Comece por aqui** - Visão geral |
| ⚡ `QUICK_START.md` | Início super rápido |
| 📊 `ESTRUTURA_PROJETO.txt` | Estrutura visual do projeto |
| 📚 `docs/COMO_USAR.md` | Guia completo de uso |
| 💡 `docs/TEMAS_SUGERIDOS.md` | 30+ temas para adicionar |
| 🔌 `docs/API_INTEGRATION.md` | Como integrar APIs |
| 🚀 `docs/DEPLOY.md` | Como publicar online |
| 🤝 `CONTRIBUTING.md` | Como contribuir |

---

## 🗂️ Arquivos Principais

```
📦 Seu Projeto/
│
├── 📂 app/
│   ├── page.tsx              ← Página inicial
│   ├── tema/[slug]/          ← Confirmação
│   └── resultado/[slug]/     ← Resultados
│
├── 📂 data/
│   └── topics.ts             ← ⭐ EDITE AQUI! (dados dos temas)
│
└── 📂 docs/                  ← Documentação completa
```

---

## ✅ Checklist para Começar

- [ ] Instalei as dependências (`npm install`)
- [ ] Iniciei o servidor (`npm run dev`)
- [ ] Abri no navegador (`http://localhost:3000`)
- [ ] Explorei os 3 temas existentes
- [ ] Li o `README.md`
- [ ] Entendi a estrutura em `ESTRUTURA_PROJETO.txt`
- [ ] Vou adicionar novos temas!

---

## 🎯 Próximos Passos

1. **Explore** - Teste todas as funcionalidades
2. **Leia** - `README.md` e `QUICK_START.md`
3. **Adicione** - Novos temas (use `docs/TEMAS_SUGERIDOS.md`)
4. **Personalize** - Cores, textos, logo
5. **Publique** - Veja `docs/DEPLOY.md`

---

## 🆘 Problemas?

### Comando não encontrado
```bash
# Instale o Node.js primeiro:
# https://nodejs.org/
```

### Erro ao instalar
```bash
npm cache clean --force
npm install
```

### Porta 3000 ocupada
```bash
# Use outra porta:
PORT=3001 npm run dev
```

### Página em branco
- Abra console do navegador (F12)
- Veja erros no terminal
- Reinicie: Ctrl+C e `npm run dev` novamente

---

## 💡 Dicas Importantes

1. **Dados dos temas** estão em `data/topics.ts`
2. **Cores** estão em `app/globals.css`
3. **Páginas** estão em `app/`
4. **Documentação** está em `docs/`

---

## 📞 Precisa de Ajuda?

1. Leia a documentação em `/docs`
2. Veja exemplos em `data/topics.ts`
3. Abra issue no GitHub
4. Leia `CONTRIBUTING.md`

---

## 🎉 Pronto para Começar?

```bash
npm install
npm run dev
```

Abra: http://localhost:3000

---

**Boa sorte com seu projeto!** 🚀

Lembre-se: Este é um projeto para ajudar trabalhadores brasileiros.
Use-o com responsabilidade e sempre cite fontes oficiais! ⚖️

