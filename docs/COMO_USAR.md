# 📖 Como Usar - Guia Completo

Este guia explica como usar e personalizar o projeto **Minha Dúvida Trabalhista**.

## 🎯 Visão Geral

O projeto é uma aplicação web que funciona em 3 etapas:

1. **Página Inicial**: Usuário escolhe um tema
2. **Confirmação**: Sistema pergunta se é o tema correto
3. **Resultado**: Exibe todas as informações jurídicas

---

## 🖥️ Interface do Usuário

### Página Inicial

```
┌─────────────────────────────────────────┐
│  Minha Dúvida Trabalhista               │
│  Esclarecendo dúvidas trabalhistas...   │
└─────────────────────────────────────────┘

Escolha seu tema:

┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│  Contrato de │ │   Férias     │ │ 13º Salário  │
│  Experiência │ │ Trabalhistas │ │              │
│              │ │              │ │              │
│ [keywords]   │ │ [keywords]   │ │ [keywords]   │
└──────────────┘ └──────────────┘ └──────────────┘
```

### Fluxo de Navegação

```
Início
  ↓ (clique em tema)
Confirmação
  ↓ (Sim, continuar)
Resultados
  ↓ (Voltar)
Início
```

---

## 🔧 Personalização

### 1. Alterar Cores do Tema

Edite `app/globals.css`:

```css
:root {
  --primary: #2563eb;        /* Cor principal */
  --primary-dark: #1e40af;   /* Cor principal escura */
  --secondary: #64748b;      /* Cor secundária */
  --success: #10b981;        /* Cor de sucesso */
  --background: #f8fafc;     /* Fundo */
  --surface: #ffffff;        /* Superfície dos cards */
  --text-primary: #1e293b;   /* Texto principal */
  --text-secondary: #475569; /* Texto secundário */
  --border: #e2e8f0;        /* Bordas */
}
```

### 2. Adicionar Novo Tema

Edite `data/topics.ts` e adicione:

```typescript
"seu-tema": {
  id: "seu-tema",
  title: "Título do Seu Tema",
  description: "Descrição breve e clara do tema",
  keywords: ["palavra1", "palavra2", "palavra3"],
  legislation: [
    {
      title: "CLT - Art. XXX",
      reference: "Consolidação das Leis do Trabalho - Artigo XXX",
      content: "Texto da lei..."
    }
  ],
  ordinances: [
    {
      title: "Portaria XYZ",
      reference: "Referência completa",
      content: "Conteúdo..."
    }
  ],
  summaries: [
    {
      number: "Súmula XXX",
      court: "TST",
      content: "Conteúdo da súmula..."
    }
  ],
  jurisprudence: [
    {
      title: "Título",
      content: "Explicação..."
    }
  ],
  recentDecisions: [
    {
      id: "1",
      court: "TRT-X",
      number: "Processo nº XXXXX",
      date: "DD/MM/AAAA",
      summary: "Resumo da decisão..."
    },
    // Adicione 3 decisões
  ]
}
```

### 3. Alterar Textos do Site

#### Header Principal
Edite `app/page.tsx`:

```typescript
<h1>Minha Dúvida Trabalhista</h1>
<p>Esclarecendo suas dúvidas trabalhistas...</p>
```

#### Título da Página
Edite `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Minha Dúvida Trabalhista',
  description: 'Esclarecendo dúvidas trabalhistas...',
}
```

### 4. Adicionar Logo

1. Coloque sua logo em `public/logo.png`
2. Edite `app/layout.tsx` ou `app/page.tsx`:

```typescript
import Image from 'next/image'

// No header:
<Image src="/logo.png" alt="Logo" width={200} height={50} />
```

---

## 📊 Estrutura de Dados

### TopicData (Interface)

```typescript
{
  id: string,              // Identificador único (URL friendly)
  title: string,           // Título completo
  description: string,     // Descrição breve
  keywords: string[],      // Palavras-chave para busca
  legislation: Array<{
    title: string,         // Nome da lei/artigo
    reference: string,     // Referência completa
    content: string        // Texto da lei
  }>,
  ordinances: Array<{
    title: string,
    reference: string,
    content: string
  }>,
  summaries: Array<{
    number: string,        // Número da súmula
    court: string,         // Tribunal
    content: string
  }>,
  jurisprudence: Array<{
    title: string,
    content: string
  }>,
  recentDecisions: Array<{
    id: string,
    court: string,         // Ex: "TRT-2 (São Paulo)"
    number: string,        // Número do processo
    date: string,          // Formato: DD/MM/AAAA
    summary: string        // Resumo da decisão
  }>
}
```

---

## 🎨 Componentes Principais

### Card de Tema

Localização: `components/TopicCard.tsx` (criado mas não usado ainda)

Para usar:
```typescript
import TopicCard from '@/components/TopicCard'

<TopicCard topic={topicData} />
```

### Classes CSS Disponíveis

```css
.container       /* Container principal */
.header          /* Cabeçalho */
.card            /* Card de tema */
.section         /* Seção de conteúdo */
.item            /* Item de lista */
.button          /* Botão */
.button-primary  /* Botão primário */
.button-secondary /* Botão secundário */
.decision-card   /* Card de decisão */
.keywords        /* Container de keywords */
.keyword         /* Keyword individual */
.badge           /* Badge */
.badge-recent    /* Badge de recente (animado) */
```

---

## 🔍 SEO e Meta Tags

### Melhorando SEO

Edite `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Minha Dúvida Trabalhista',
  description: 'Plataforma completa para esclarecer dúvidas...',
  keywords: ['direito trabalhista', 'CLT', 'dúvidas trabalhistas'],
  authors: [{ name: 'Seu Nome' }],
  openGraph: {
    title: 'Minha Dúvida Trabalhista',
    description: 'Esclarecendo dúvidas trabalhistas...',
    type: 'website',
  },
}
```

### Meta Tags por Página

Crie `app/tema/[slug]/page.tsx`:

```typescript
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const topic = topics[params.slug]
  
  return {
    title: `${topic.title} - Minha Dúvida Trabalhista`,
    description: topic.description,
  }
}
```

---

## 📱 Responsividade

O site já é responsivo! Mas você pode ajustar:

```css
/* Para tablets */
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Para celulares */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```

---

## 🔗 URLs e Rotas

```
/                           → Página inicial
/tema/[id]                  → Confirmação do tema
/resultado/[id]             → Resultados completos
```

Exemplos:
- `/tema/experiencia`
- `/resultado/ferias`
- `/resultado/13-salario`

---

## 🚀 Performance

### Otimizações Já Implementadas

1. **CSS puro** (sem bibliotecas pesadas)
2. **Next.js 14** com App Router
3. **Renderização estática** (SSG)
4. **Sem JavaScript desnecessário**

### Melhorias Futuras

1. **Image Optimization**
   ```typescript
   import Image from 'next/image'
   ```

2. **Font Optimization**
   ```typescript
   import { Inter } from 'next/font/google'
   ```

3. **Lazy Loading**
   ```typescript
   const Component = dynamic(() => import('./Component'))
   ```

---

## 📈 Analytics

### Google Analytics

1. Crie conta no Google Analytics
2. Obtenha o ID de medição
3. Edite `app/layout.tsx`:

```typescript
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

---

## 🐛 Debug

### Erros Comuns

1. **Tema não encontra**
   - Verifique se o ID está correto em `topics.ts`
   - IDs devem ser minúsculos e sem espaços

2. **Página em branco**
   - Verifique console do navegador (F12)
   - Verifique terminal onde o servidor está rodando

3. **Estilos não aplicados**
   - Certifique-se que `globals.css` está importado
   - Limpe cache do navegador (Ctrl + Shift + R)

---

## 💡 Dicas e Truques

### 1. Ícones Emoji

Use emojis para tornar o site mais visual:
```
📋 Legislação
📄 Portarias
⚖️ Súmulas
📚 Jurisprudências
🔥 Decisões Recentes
```

### 2. Destacar Informações

Use badges para informações importantes:
```html
<span className="badge badge-recent">Atualizado</span>
```

### 3. Links Externos

Para adicionar links a processos:
```typescript
recentDecisions: [{
  ...
  link: "https://www.trt2.jus.br/processo/xxx"
}]
```

E no componente:
```typescript
{decision.link && (
  <a href={decision.link} target="_blank" rel="noopener noreferrer">
    Ver processo completo →
  </a>
)}
```

---

## 📞 Suporte

- **Documentação**: Leia todos os arquivos em `/docs`
- **Issues**: GitHub Issues
- **Contribuir**: Veja `CONTRIBUTING.md`

---

## ✅ Checklist de Customização

- [ ] Alterei as cores do tema
- [ ] Adicionei minha logo
- [ ] Personalizei os textos
- [ ] Adicionei novos temas
- [ ] Configurei analytics
- [ ] Testei em mobile
- [ ] Configurei SEO
- [ ] Fiz deploy

---

**Pronto!** Seu site está personalizado e pronto para usar! 🎉

