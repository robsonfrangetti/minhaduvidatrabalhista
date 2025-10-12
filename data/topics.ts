export interface Decision {
  id: string;
  court: string;
  number: string;
  date: string;
  summary: string;
  link?: string;
}

export interface TopicData {
  id: string;
  title: string;
  description: string;
  keywords: string[];
  legislation: {
    title: string;
    reference: string;
    content: string;
    interpretation: string;
  }[];
  ordinances: {
    title: string;
    reference: string;
    content: string;
    interpretation: string;
  }[];
  summaries: {
    number: string;
    court: string;
    content: string;
    interpretation: string;
  }[];
  jurisprudence: {
    title: string;
    content: string;
    interpretation: string;
  }[];
  recentDecisions: Decision[];
}

export const topics: Record<string, TopicData> = {
  experiencia: {
    id: "experiencia",
    title: "Contrato de Experiência",
    description: "Informações completas sobre o contrato de trabalho de experiência",
    keywords: ["experiência", "contrato de experiência", "período de experiência"],
    legislation: [
      {
        title: "CLT - Art. 443",
        reference: "Consolidação das Leis do Trabalho - Artigo 443",
        content: "O contrato individual de trabalho poderá ser acordado tácita ou expressamente, verbalmente ou por escrito, por prazo determinado ou indeterminado, ou para prestação de trabalho intermitente. § 2º O contrato por prazo determinado só será válido em se tratando: a) de serviço cuja natureza ou transitoriedade justifique a predeterminação do prazo; b) de atividades empresariais de caráter transitório; c) de contrato de experiência.",
        interpretation: "Em linguagem simples: Este artigo define que o contrato de experiência é uma das formas válidas de contrato por prazo determinado. Significa que a empresa pode contratar você por um período específico para avaliar seu desempenho e adaptação ao trabalho antes de efetivar."
      },
      {
        title: "CLT - Art. 445",
        reference: "Consolidação das Leis do Trabalho - Artigo 445",
        content: "O contrato de experiência não poderá exceder de 90 (noventa) dias. Parágrafo único - O contrato de experiência poderá ser prorrogado uma única vez, desde que a soma dos dois períodos não exceda 90 dias.",
        interpretation: "Em linguagem simples: O contrato de experiência tem prazo máximo de 90 dias (3 meses). A empresa pode dividir esse período, por exemplo: 60 dias + 30 dias, ou 45 dias + 45 dias. Mas só pode fazer uma prorrogação, e o total nunca pode passar de 90 dias."
      },
      {
        title: "CLT - Art. 451",
        reference: "Consolidação das Leis do Trabalho - Artigo 451",
        content: "O contrato de experiência que, tácita ou expressamente, for prorrogado mais de uma vez passará a vigorar sem determinação de prazo.",
        interpretation: "Em linguagem simples: Se a empresa prorrogar seu contrato de experiência mais de uma vez, ele automaticamente vira contrato permanente (por prazo indeterminado). Isso é bom para você, pois garante mais estabilidade e direitos em caso de demissão."
      }
    ],
    ordinances: [
      {
        title: "Portaria MTE nº 671/2021",
        reference: "Ministério do Trabalho e Emprego - Portaria 671/2021",
        content: "Estabelece diretrizes sobre registros e anotações na Carteira de Trabalho Digital, incluindo contratos de experiência.",
        interpretation: "Em linguagem simples: Esta portaria define as regras de como a empresa deve registrar seu contrato de experiência na Carteira de Trabalho Digital. Garante que seu contrato seja devidamente documentado e acessível digitalmente."
      }
    ],
    summaries: [
      {
        number: "Súmula 188",
        court: "TST - Tribunal Superior do Trabalho",
        content: "O contrato de experiência pode ser prorrogado, respeitado o limite máximo de 90 (noventa) dias.",
        interpretation: "Em linguagem simples: O Tribunal Superior do Trabalho confirma que é permitido prorrogar o contrato de experiência, mas sempre respeitando o limite máximo de 90 dias no total. Exemplo: se você foi contratado por 60 dias, pode ser prorrogado por mais 30 dias."
      },
      {
        number: "Súmula 212",
        court: "TST - Tribunal Superior do Trabalho",
        content: "O ônus de provar o término do contrato de trabalho, quando negados a prestação de serviço e o despedimento, é do empregador, pois o princípio da continuidade da relação de emprego constitui presunção favorável ao empregado.",
        interpretation: "Em linguagem simples: Se houver dúvida sobre quando seu contrato terminou ou se você foi demitido, a empresa é quem precisa provar isso, não você. A justiça presume que o contrato continua valendo até que a empresa prove o contrário."
      }
    ],
    jurisprudence: [
      {
        title: "Prorrogação irregular do contrato de experiência",
        content: "A prorrogação do contrato de experiência por mais de uma vez, ou que ultrapasse o limite de 90 dias, converte automaticamente o contrato em prazo indeterminado, garantindo ao empregado todos os direitos decorrentes dessa modalidade contratual.",
        interpretation: "Em linguagem simples: Se a empresa prorrogar seu contrato mais de uma vez, ou se o total passar de 90 dias, você automaticamente se torna um funcionário efetivo. Isso significa que, se for demitido, tem direito a aviso prévio, multa de 40% do FGTS e outros direitos de quem tem contrato permanente."
      },
      {
        title: "Direitos durante o contrato de experiência",
        content: "Durante o contrato de experiência, o trabalhador tem direito a todos os benefícios trabalhistas: FGTS, férias proporcionais, 13º salário proporcional, vale-transporte, entre outros direitos previstos em lei ou convenção coletiva.",
        interpretation: "Em linguagem simples: Mesmo estando em experiência, você tem os mesmos direitos de qualquer trabalhador: a empresa deve depositar FGTS, pagar férias e 13º salário proporcionais, fornecer vale-transporte, e todos os outros benefícios normais. Não aceite menos direitos por estar 'só' em experiência!"
      }
    ],
    recentDecisions: [
      {
        id: "1",
        court: "TRT-2 (São Paulo)",
        number: "Processo nº 1000123-45.2024.5.02.0000",
        date: "15/09/2024",
        summary: "Reconhecida conversão em contrato por prazo indeterminado após prorrogação irregular de contrato de experiência. Empregador condenado ao pagamento de indenização por danos materiais e aviso prévio."
      },
      {
        id: "2",
        court: "TRT-1 (Rio de Janeiro)",
        number: "Processo nº 0100456-78.2024.5.01.0000",
        date: "08/09/2024",
        summary: "Contrato de experiência válido quando respeitado o prazo legal. Improcedente pedido de conversão em prazo indeterminado quando documentado corretamente o período de 60 dias + prorrogação de 30 dias."
      },
      {
        id: "3",
        court: "TRT-15 (Campinas)",
        number: "Processo nº 0010789-12.2024.5.15.0000",
        date: "02/09/2024",
        summary: "Dispensa sem justa causa durante contrato de experiência gera direito a indenização correspondente a 50% do período restante. Empresa condenada ao pagamento de saldo de salário, férias e 13º proporcionais."
      }
    ]
  },
  "ferias": {
    id: "ferias",
    title: "Férias Trabalhistas",
    description: "Tudo sobre direito a férias, cálculo e períodos",
    keywords: ["férias", "descanso", "férias proporcionais"],
    legislation: [
      {
        title: "CLT - Art. 129",
        reference: "Consolidação das Leis do Trabalho - Artigo 129",
        content: "Todo empregado terá direito anualmente ao gozo de um período de férias, sem prejuízo da remuneração.",
        interpretation: "Em linguagem simples: Todo trabalhador tem direito a férias uma vez por ano, e deve receber o salário normalmente durante esse período de descanso. É um direito garantido e não pode ser negado."
      },
      {
        title: "CLT - Art. 130",
        reference: "Consolidação das Leis do Trabalho - Artigo 130",
        content: "Após cada período de 12 (doze) meses de vigência do contrato de trabalho, o empregado terá direito a férias, na seguinte proporção: I - 30 (trinta) dias corridos, quando não houver faltado ao serviço mais de 5 (cinco) vezes...",
        interpretation: "Em linguagem simples: Depois de trabalhar 12 meses, você tem direito a 30 dias de férias, desde que não tenha faltado mais de 5 vezes sem justificativa. Quanto mais faltas injustificadas, menos dias de férias você terá direito."
      },
      {
        title: "CLT - Art. 134",
        reference: "Consolidação das Leis do Trabalho - Artigo 134",
        content: "As férias serão concedidas por ato do empregador, em um só período, nos 12 (doze) meses subsequentes à data em que o empregado tiver adquirido o direito.",
        interpretation: "Em linguagem simples: A empresa decide quando você vai tirar férias, mas tem até 12 meses após você completar o período para liberar seu descanso. Normalmente as férias são tiradas em um período único, mas podem ser divididas em alguns casos."
      }
    ],
    ordinances: [
      {
        title: "Portaria MTE nº 1.127/2017",
        reference: "Ministério do Trabalho e Emprego - Portaria 1.127/2017",
        content: "Dispõe sobre procedimentos relacionados às férias trabalhistas.",
        interpretation: "Em linguagem simples: Esta portaria estabelece as regras práticas de como a empresa deve controlar e conceder férias aos trabalhadores, garantindo que seus direitos sejam respeitados."
      }
    ],
    summaries: [
      {
        number: "Súmula 7",
        court: "TST - Tribunal Superior do Trabalho",
        content: "A indenização pelo não deferimento das férias no tempo oportuno será calculada com base na remuneração devida ao empregado na época da reclamação ou, se for o caso, na da extinção do contrato.",
        interpretation: "Em linguagem simples: Se a empresa não te der férias no prazo certo (dentro dos 12 meses), ela terá que te pagar uma indenização. O valor é calculado com base no seu salário atual (na hora que você reclamar) ou do momento em que saiu da empresa."
      }
    ],
    jurisprudence: [
      {
        title: "Férias em dobro",
        content: "O empregado que não usufruir férias dentro do período concessivo tem direito ao pagamento em dobro da remuneração correspondente.",
        interpretation: "Em linguagem simples: Se a empresa não liberar suas férias dentro do prazo de 12 meses após você ter adquirido o direito, ela terá que pagar em dobro. Ou seja, você recebe o valor das férias multiplicado por 2. É uma punição para a empresa que não respeita o prazo."
      }
    ],
    recentDecisions: [
      {
        id: "1",
        court: "TRT-3 (Minas Gerais)",
        number: "Processo nº 0100234-56.2024.5.03.0000",
        date: "20/09/2024",
        summary: "Empresa condenada a pagar férias em dobro por não ter concedido o descanso no período concessivo. Reconhecido dano moral por privação do direito ao descanso."
      },
      {
        id: "2",
        court: "TRT-4 (Rio Grande do Sul)",
        number: "Processo nº 0200345-67.2024.5.04.0000",
        date: "12/09/2024",
        summary: "Deferido pedido de conversão de férias em pecúnia apenas para período superior a 20 dias, conforme Reforma Trabalhista."
      },
      {
        id: "3",
        court: "TRT-9 (Paraná)",
        number: "Processo nº 0300456-78.2024.5.09.0000",
        date: "05/09/2024",
        summary: "Reconhecido direito a férias proporcionais em caso de dispensa sem justa causa, com pagamento do terço constitucional."
      }
    ]
  },
  "13-salario": {
    id: "13-salario",
    title: "13º Salário",
    description: "Informações sobre gratificação natalina e forma de cálculo",
    keywords: ["13º salário", "gratificação natalina", "décimo terceiro"],
    legislation: [
      {
        title: "Lei 4.090/1962",
        reference: "Lei nº 4.090 de 13 de julho de 1962",
        content: "Institui a gratificação de Natal para os trabalhadores. Art. 1º No mês de dezembro de cada ano, a todo empregado será paga, pelo empregador, uma gratificação salarial, independentemente da remuneração a que fizer jus.",
        interpretation: "Em linguagem simples: Esta lei criou o 13º salário (também chamado de gratificação de Natal). Todo trabalhador tem direito a receber essa gratificação em dezembro, além do salário normal. É um 'salário extra' que você recebe todo ano."
      },
      {
        title: "Lei 4.749/1965",
        reference: "Lei nº 4.749 de 12 de agosto de 1965",
        content: "Dispõe sobre o pagamento da Gratificação de Natal. Art. 1º A gratificação salarial instituída pela Lei número 4.090, de 13 de julho de 1962, será paga pelo empregador até o dia 20 de dezembro de cada ano.",
        interpretation: "Em linguagem simples: A empresa deve pagar o 13º salário até o dia 20 de dezembro. Na prática, pode ser pago em duas parcelas: a primeira entre fevereiro e novembro (geralmente em novembro) e a segunda até 20 de dezembro. Se atrasar, a empresa pode ser multada."
      }
    ],
    ordinances: [],
    summaries: [
      {
        number: "Súmula 157",
        court: "TST - Tribunal Superior do Trabalho",
        content: "A gratificação semestral não repercute no cálculo das horas extras, das férias e do aviso prévio, ainda que indenizados. Repercute, contudo, pelo seu duodécimo na indenização por antiguidade e na gratificação natalina.",
        interpretation: "Em linguagem simples: Esta súmula trata de outras gratificações que algumas empresas pagam. Ela diz que essas gratificações não aumentam o valor das horas extras ou férias, mas devem ser consideradas no cálculo do próprio 13º salário. Resumindo: gratificações extras entram no cálculo do 13º."
      }
    ],
    jurisprudence: [
      {
        title: "Cálculo proporcional",
        content: "O 13º salário deve ser calculado na proporção de 1/12 por mês de serviço, considerando-se mês integral a fração igual ou superior a 15 dias.",
        interpretation: "Em linguagem simples: O 13º é calculado dividindo seu salário por 12 e multiplicando pelos meses trabalhados. Se você trabalhou 15 dias ou mais em um mês, esse mês conta. Menos de 15 dias, não conta. Exemplo: trabalhou 7 meses completos = 7/12 do seu salário. Trabalhou o ano todo = salário integral."
      }
    ],
    recentDecisions: [
      {
        id: "1",
        court: "TRT-5 (Bahia)",
        number: "Processo nº 0100567-89.2024.5.05.0000",
        date: "18/09/2024",
        summary: "Empresa condenada por atraso no pagamento do 13º salário. Aplicada multa administrativa e correção monetária sobre o valor devido."
      },
      {
        id: "2",
        court: "TRT-10 (Brasília)",
        number: "Processo nº 0200678-90.2024.5.10.0000",
        date: "11/09/2024",
        summary: "Reconhecido direito ao 13º proporcional em caso de rescisão contratual, incluindo reflexos de horas extras habituais."
      },
      {
        id: "3",
        court: "TRT-7 (Ceará)",
        number: "Processo nº 0300789-01.2024.5.07.0000",
        date: "04/09/2024",
        summary: "Deferida integração de comissões variáveis no cálculo do 13º salário. Empresa deve recalcular e pagar diferenças dos últimos 5 anos."
      }
    ]
  }
};

export const topicsList = Object.values(topics);

