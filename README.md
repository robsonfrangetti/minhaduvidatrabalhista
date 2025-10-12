# 📋 Minha Dúvida Trabalhista

Plataforma web para esclarecer dúvidas trabalhistas de forma simples e prática, apresentando legislação, portarias, súmulas, jurisprudências e as decisões judiciais mais recentes.

## 🎯 Funcionalidades

- **Seleção de Temas**: Interface intuitiva com cards para escolha rápida do assunto
- **Confirmação**: Sistema de confirmação antes de exibir as informações completas
- **Informações Completas**:
  - 📋 Legislação pertinente (CLT, leis específicas)
  - 📄 Portarias do Ministério do Trabalho
  - ⚖️ Súmulas dos tribunais
  - 📚 Jurisprudências consolidadas
  - 🔥 As 3 decisões judiciais mais recentes
- **💡 Interpretações em Linguagem Simples**: Cada lei, súmula e portaria vem acompanhada de uma explicação clara e acessível, ajudando qualquer pessoa a entender seus direitos sem precisar de conhecimento jurídico

## 🚀 Como executar

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. Instale as dependências:
```bash
npm install
```

2. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

3. Abra o navegador em [http://localhost:3000](http://localhost:3000)

## 📂 Estrutura do Projeto

```
minhaduvidatrabalhista/
├── app/                          # Páginas e rotas (Next.js 14 App Router)
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Página inicial com lista de temas
│   ├── globals.css              # Estilos globais
│   ├── tema/
│   │   └── [slug]/
│   │       └── page.tsx         # Página de confirmação do tema
│   └── resultado/
│       └── [slug]/
│           └── page.tsx         # Página de resultados completos
├── data/
│   └── topics.ts                # Dados dos temas (legislação, súmulas, etc)
├── package.json
└── README.md
```

## 🎨 Temas Disponíveis

Atualmente a plataforma possui os seguintes temas:

1. **Contrato de Experiência**
   - Legislação sobre contratos de experiência
   - Limites de duração e prorrogação
   - Direitos do trabalhador

2. **Férias Trabalhistas**
   - Direito a férias e períodos
   - Cálculo e proporções
   - Férias em dobro

3. **13º Salário**
   - Gratificação natalina
   - Forma de cálculo
   - Prazos de pagamento

## 📝 Adicionando Novos Temas

Para adicionar um novo tema, edite o arquivo `data/topics.ts` e adicione um novo objeto seguindo a estrutura:

```typescript
{
  id: "nome-do-tema",
  title: "Título do Tema",
  description: "Descrição breve",
  keywords: ["palavra1", "palavra2"],
  legislation: [...],
  ordinances: [...],
  summaries: [...],
  jurisprudence: [...],
  recentDecisions: [...]
}
```

## 🛠️ Tecnologias Utilizadas

- **Next.js 14**: Framework React com App Router
- **TypeScript**: Tipagem estática
- **CSS Modules**: Estilização moderna e responsiva
- **React 18**: Biblioteca de interface

## 📱 Design Responsivo

A aplicação é totalmente responsiva e funciona perfeitamente em:
- 💻 Desktop
- 📱 Tablets
- 📱 Smartphones

## 🔄 Próximas Melhorias

- [ ] Integração com APIs de tribunais para busca automática de decisões
- [ ] Sistema de busca por palavras-chave
- [ ] Filtros avançados por tribunal, data, etc
- [ ] Exportação de informações em PDF
- [ ] Sistema de favoritos
- [ ] Compartilhamento em redes sociais

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e informativos. As informações jurídicas são de caráter geral e não substituem consulta a um advogado especializado.

## 👨‍💻 Desenvolvimento

Desenvolvido com ❤️ para ajudar trabalhadores brasileiros a entenderem seus direitos.

---

**Importante**: As informações apresentadas nesta plataforma são de caráter informativo. Para questões jurídicas específicas, sempre consulte um advogado trabalhista.

