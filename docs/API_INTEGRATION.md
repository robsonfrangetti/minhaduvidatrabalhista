# 🔌 Integração com APIs de Tribunais

Este documento explica como integrar o projeto com APIs de tribunais para buscar decisões automaticamente.

## 📚 APIs Disponíveis

### 1. API do CNJ (Conselho Nacional de Justiça)

O CNJ disponibiliza APIs para consulta de processos judiciais.

**Documentação**: https://www.cnj.jus.br/sistemas/datajud/

**Exemplo de uso futuro**:

```typescript
// lib/api/cnj.ts
export async function fetchRecentDecisions(topic: string) {
  const response = await fetch(`https://api.cnj.jus.br/processos?tema=${topic}`, {
    headers: {
      'Authorization': `Bearer ${process.env.CNJ_API_KEY}`
    }
  });
  
  return response.json();
}
```

### 2. JusBrasil API

O JusBrasil oferece uma API para busca de jurisprudências e decisões.

**Site**: https://www.jusbrasil.com.br/

**Exemplo**:

```typescript
// lib/api/jusbrasil.ts
export async function searchJurisprudence(query: string) {
  const response = await fetch(
    `https://api.jusbrasil.com.br/search?q=${encodeURIComponent(query)}`,
    {
      headers: {
        'Authorization': `Bearer ${process.env.JUSBRASIL_API_KEY}`
      }
    }
  );
  
  return response.json();
}
```

### 3. API dos Tribunais Regionais do Trabalho

Cada TRT possui seu próprio sistema de consulta processual.

**Exemplo - TRT2 (São Paulo)**:

```typescript
// lib/api/trt.ts
export async function fetchTRT2Decisions(keyword: string) {
  // Implementação específica para cada TRT
  const response = await fetch(
    `https://api.trt2.jus.br/decisoes?palavra_chave=${keyword}`
  );
  
  return response.json();
}
```

## 🔧 Implementação Sugerida

### Estrutura de Pastas

```
lib/
├── api/
│   ├── cnj.ts
│   ├── jusbrasil.ts
│   ├── trt.ts
│   └── index.ts
└── utils/
    └── formatters.ts
```

### Exemplo de Componente Dinâmico

```typescript
// app/resultado/[slug]/page.tsx

import { fetchRecentDecisions } from '@/lib/api'

export default async function ResultPage({ params }: { params: { slug: string } }) {
  const topic = topics[params.slug]
  
  // Buscar decisões em tempo real
  const liveDecisions = await fetchRecentDecisions(topic.keywords)
  
  // Mesclar com decisões estáticas
  const allDecisions = [...topic.recentDecisions, ...liveDecisions]
  
  // ... resto do código
}
```

## 🔒 Segurança

### Variáveis de Ambiente

Crie um arquivo `.env.local`:

```env
CNJ_API_KEY=sua_chave_aqui
JUSBRASIL_API_KEY=sua_chave_aqui
TRT_API_KEY=sua_chave_aqui
```

### Proteção de Rotas API

```typescript
// app/api/decisions/route.ts

import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const topic = searchParams.get('topic')
  
  if (!topic) {
    return NextResponse.json({ error: 'Topic required' }, { status: 400 })
  }
  
  try {
    const decisions = await fetchRecentDecisions(topic)
    return NextResponse.json(decisions)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 })
  }
}
```

## 📊 Cache e Otimização

Para evitar muitas requisições às APIs:

```typescript
// lib/cache.ts

const cache = new Map()
const CACHE_DURATION = 1000 * 60 * 60 // 1 hora

export function getCached(key: string) {
  const cached = cache.get(key)
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data
  }
  return null
}

export function setCache(key: string, data: any) {
  cache.set(key, {
    data,
    timestamp: Date.now()
  })
}
```

## 🔄 Atualização Automática

Crie um job que roda periodicamente:

```typescript
// scripts/update-decisions.ts

import { topics } from '@/data/topics'
import { fetchRecentDecisions } from '@/lib/api'
import fs from 'fs'

async function updateDecisions() {
  for (const topic of Object.values(topics)) {
    const decisions = await fetchRecentDecisions(topic.keywords)
    topic.recentDecisions = decisions.slice(0, 3) // Apenas as 3 mais recentes
  }
  
  // Salvar de volta no arquivo
  fs.writeFileSync(
    'data/topics.ts',
    `export const topics = ${JSON.stringify(topics, null, 2)}`
  )
}

updateDecisions()
```

Adicione ao `package.json`:

```json
{
  "scripts": {
    "update-decisions": "ts-node scripts/update-decisions.ts"
  }
}
```

## ⚠️ Observações Importantes

1. **Limitação de Taxa**: Muitas APIs têm limites de requisições. Implemente cache e rate limiting.

2. **Autenticação**: A maioria das APIs requer autenticação. Nunca exponha suas chaves no frontend.

3. **Custos**: Algumas APIs são pagas. Verifique os custos antes de implementar.

4. **Termos de Uso**: Sempre respeite os termos de uso das APIs.

5. **Fallback**: Mantenha dados estáticos como fallback caso a API esteja indisponível.

## 🎯 Próximos Passos

1. Obter credenciais de API dos serviços desejados
2. Implementar a camada de API (`lib/api/`)
3. Adicionar cache para otimizar requisições
4. Criar job de atualização periódica
5. Adicionar tratamento de erros robusto
6. Implementar testes para as integrações

---

**Nota**: Este é um guia conceitual. As APIs mencionadas podem ter mudado ou exigir processos específicos de acesso.

