# 🤝 Contribuindo para Minha Dúvida Trabalhista

Obrigado por considerar contribuir com este projeto! Aqui estão algumas orientações.

## 📝 Como Adicionar Novos Temas

### Passo 1: Editar o arquivo de dados

Abra o arquivo `data/topics.ts` e adicione um novo objeto ao objeto `topics`:

```typescript
"novo-tema": {
  id: "novo-tema",
  title: "Título do Novo Tema",
  description: "Descrição breve e clara",
  keywords: ["palavra-chave1", "palavra-chave2", "palavra-chave3"],
  legislation: [
    {
      title: "Nome da Lei/Artigo",
      reference: "Referência completa",
      content: "Texto da legislação"
    }
  ],
  ordinances: [
    {
      title: "Portaria XYZ",
      reference: "Referência completa",
      content: "Conteúdo da portaria"
    }
  ],
  summaries: [
    {
      number: "Súmula XXX",
      court: "Tribunal",
      content: "Conteúdo da súmula"
    }
  ],
  jurisprudence: [
    {
      title: "Título da jurisprudência",
      content: "Explicação da jurisprudência"
    }
  ],
  recentDecisions: [
    {
      id: "1",
      court: "Nome do Tribunal",
      number: "Número do processo",
      date: "DD/MM/AAAA",
      summary: "Resumo da decisão"
    }
  ]
}
```

### Passo 2: Teste localmente

```bash
npm run dev
```

Acesse `http://localhost:3000` e verifique se o novo tema aparece e funciona corretamente.

## 🔍 Fontes Recomendadas

### Para Legislação:
- [Planalto - Legislação](http://www.planalto.gov.br/ccivil_03/leis/)
- [CLT - Consolidação das Leis do Trabalho](http://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm)

### Para Súmulas:
- [TST - Súmulas](https://www.tst.jus.br/sumulas)
- [STF - Súmulas](https://portal.stf.jus.br/jurisprudencia/sumariosumulas.asp)

### Para Jurisprudências:
- [JusBrasil](https://www.jusbrasil.com.br/)
- [Consulta Processual - TST](https://www.tst.jus.br/consulta-processual)
- [PJe - Tribunais Regionais do Trabalho](https://www.trt2.jus.br/pje/)

## ✅ Checklist antes de adicionar

- [ ] Verifiquei a legislação em fontes oficiais
- [ ] Testei localmente o tema
- [ ] Adicionei pelo menos 3 palavras-chave
- [ ] Incluí legislação pertinente
- [ ] Adicionei súmulas relevantes
- [ ] Busquei decisões recentes (idealmente dos últimos 6 meses)
- [ ] Revisei ortografia e gramática

## 📋 Padrões de Código

- Use TypeScript para novos arquivos
- Siga a estrutura existente de dados
- Mantenha descrições claras e objetivas
- Use português brasileiro correto
- Cite sempre as fontes das informações jurídicas

## 🚀 Melhorias Futuras

Ideias para contribuir:

1. **Integração com APIs de Tribunais**
   - Busca automática de decisões recentes
   - Atualização automática de dados

2. **Sistema de Busca**
   - Busca por palavras-chave
   - Filtros avançados

3. **Exportação**
   - Gerar PDF com as informações
   - Compartilhamento

4. **Acessibilidade**
   - Melhorar navegação por teclado
   - Leitores de tela

5. **Novos Temas**
   - Horas extras
   - Aviso prévio
   - FGTS
   - Rescisão contratual
   - Estabilidade
   - E muito mais!

## 📞 Dúvidas?

Abra uma issue descrevendo sua dúvida ou sugestão!

---

**Lembre-se**: Este é um projeto educacional. Todas as informações devem ser precisas e baseadas em fontes oficiais.

