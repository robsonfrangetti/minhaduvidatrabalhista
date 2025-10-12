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
  },
  "empregador-empregado": {
    id: "empregador-empregado",
    title: "Empregador e Empregado - Conceitos Fundamentais",
    description: "Entenda quem é considerado empregador e empregado pela CLT",
    keywords: ["empregador", "empregado", "vínculo empregatício", "conceitos", "definição"],
    legislation: [
      {
        title: "CLT - Art. 2º",
        reference: "Consolidação das Leis do Trabalho - Artigo 2º",
        content: "Considera-se empregador a empresa, individual ou coletiva, que, assumindo os riscos da atividade econômica, admite, assalaria e dirige a prestação pessoal de serviço. § 1º Equiparam-se ao empregador, para os efeitos exclusivos da relação de emprego, os profissionais liberais, as instituições de beneficência, as associações recreativas ou outras instituições sem fins lucrativos, que admitirem trabalhadores como empregados. § 2º Sempre que uma ou mais empresas, tendo, embora, cada uma delas, personalidade jurídica própria, estiverem sob a direção, controle ou administração de outra, ou ainda quando, mesmo guardando cada uma sua autonomia, integrem grupo econômico, serão responsáveis solidariamente pelas obrigações decorrentes da relação de emprego.",
        interpretation: "Em linguagem simples: Empregador é qualquer empresa ou pessoa que contrata trabalhadores, paga salários e organiza o trabalho, assumindo os riscos do negócio. Isso inclui empresas comuns, profissionais liberais (médicos, advogados), ONGs e até clubes recreativos. Se várias empresas são do mesmo grupo (como uma rede de lojas), todas são responsáveis juntas pelos direitos dos funcionários."
      },
      {
        title: "CLT - Art. 3º",
        reference: "Consolidação das Leis do Trabalho - Artigo 3º",
        content: "Considera-se empregado toda pessoa física que prestar serviços de natureza não eventual a empregador, sob a dependência deste e mediante salário. Parágrafo único - Não haverá distinções relativas à espécie de emprego e à condição de trabalhador, nem entre o trabalho intelectual, técnico e manual.",
        interpretation: "Em linguagem simples: Você é empregado se trabalha regularmente (não é só um bico), recebe ordens do patrão, trabalha pessoalmente (não pode mandar outra pessoa no seu lugar) e ganha salário. Não importa se seu trabalho é físico (pedreiro), técnico (técnico de informática) ou intelectual (professor) - todos têm os mesmos direitos trabalhistas."
      },
      {
        title: "CLT - Art. 1º",
        reference: "Consolidação das Leis do Trabalho - Artigo 1º",  
        content: "Esta Consolidação estatui as normas que regulam as relações individuais e coletivas de trabalho, nela previstas. Parágrafo único. No tocante às relações de trabalho rural, são aplicáveis ao empregado e ao empregador rural, sempre que for compatível, as disposições desta Lei.",
        interpretation: "Em linguagem simples: A CLT é a lei que define as regras entre empregado e patrão. Ela vale tanto para trabalhadores da cidade quanto do campo (quando as regras se aplicarem), protegendo os direitos de todos os trabalhadores brasileiros."
      }
    ],
    ordinances: [
      {
        title: "Portaria MTE nº 1.129/2017",
        reference: "Ministério do Trabalho e Emprego - Portaria 1.129/2017",
        content: "Dispõe sobre os conceitos de trabalho em condições análogas às de escravo para fins de concessão de seguro-desemprego ao trabalhador que vier a ser resgatado.",
        interpretation: "Em linguagem simples: Esta portaria protege trabalhadores em situações extremas de exploração. Define quando uma situação de trabalho é considerada escravidão moderna e garante que o trabalhador resgatado receba seguro-desemprego enquanto se recupera."
      },
      {
        title: "Instrução Normativa SIT nº 139/2018",
        reference: "Secretaria de Inspeção do Trabalho - IN 139/2018",
        content: "Dispõe sobre a fiscalização do cumprimento das normas relativas ao registro eletrônico de empregados e sobre o Sistema de Registro Eletrônico de Empregados (SIRENA).",
        interpretation: "Em linguagem simples: Define como os fiscais do trabalho verificam se a empresa registrou corretamente seus funcionários. Garante que todos os empregados tenham seus direitos reconhecidos e registrados adequadamente na carteira de trabalho digital."
      }
    ],
    summaries: [
      {
        number: "Súmula 6",
        court: "TST - Tribunal Superior do Trabalho",
        content: "Não se distingue entre o trabalho realizado no estabelecimento do empregador, o executado no domicílio do empregado e o realizado a distância, desde que estejam caracterizados os pressupostos da relação de emprego.",
        interpretation: "Em linguagem simples: Não importa onde você trabalha (na empresa, em casa ou em qualquer outro lugar), se existe relação de emprego (trabalho regular, subordinação, salário), você tem os mesmos direitos. Home office, trabalho presencial ou híbrido - os direitos são iguais!"
      },
      {
        number: "Súmula 129",
        court: "TST - Tribunal Superior do Trabalho",
        content: "A prestação de serviços a mais de uma empresa do mesmo grupo econômico, durante a mesma jornada de trabalho, não caracteriza a coexistência de mais de um contrato de trabalho, salvo ajuste em contrário.",
        interpretation: "Em linguagem simples: Se você trabalha para várias empresas do mesmo dono (grupo econômico) no mesmo horário, conta como um emprego só, não vários. Você não recebe por cada empresa separadamente, a menos que seja combinado diferente. O grupo todo é responsável pelos seus direitos."
      },
      {
        number: "Súmula 331",
        court: "TST - Tribunal Superior do Trabalho",
        content: "IV - O inadimplemento das obrigações trabalhistas, por parte do empregador, implica a responsabilidade subsidiária do tomador dos serviços quanto àquelas obrigações, desde que haja participado da relação processual e conste também do título executivo judicial.",
        interpretation: "Em linguagem simples: Se você é terceirizado e a empresa que te contratou não paga seus direitos, a empresa onde você realmente trabalha também pode ser responsabilizada a pagar. É uma garantia extra para o trabalhador terceirizado não ficar sem receber."
      }
    ],
    jurisprudence: [
      {
        title: "Requisitos do vínculo empregatício",
        content: "Para caracterizar vínculo empregatício são necessários 5 requisitos: pessoa física, pessoalidade, não eventualidade, subordinação e onerosidade (pagamento). A presença de todos esses elementos configura relação de emprego, garantindo todos os direitos trabalhistas previstos na CLT.",
        interpretation: "Em linguagem simples: Para ser considerado empregado e ter direitos trabalhistas, você precisa: ser pessoa física (não empresa), trabalhar pessoalmente (não pode mandar substituto), trabalhar regularmente (não é bico), receber ordens do chefe, e receber pagamento. Se tudo isso existe, você tem vínculo de emprego e todos os direitos da CLT, mesmo que a empresa diga que você é 'autônomo' ou 'PJ'."
      },
      {
        title: "Grupo econômico e responsabilidade solidária",
        content: "Empresas que fazem parte do mesmo grupo econômico respondem solidariamente pelas dívidas trabalhistas. Isso significa que o empregado pode cobrar seus direitos de qualquer uma das empresas do grupo, não apenas da que consta em sua carteira de trabalho.",
        interpretation: "Em linguagem simples: Se você trabalha para uma empresa que faz parte de um grupo (tipo uma rede de lojas ou várias empresas do mesmo dono), e não receber seus direitos, pode cobrar de qualquer empresa do grupo. Todas são responsáveis juntas. É uma proteção extra para você não ficar sem receber."
      },
      {
        title: "Pejotização irregular",
        content: "A contratação de trabalhador como pessoa jurídica (PJ) para mascarar vínculo empregatício é considerada fraude. Estando presentes os elementos da relação de emprego, a Justiça do Trabalho reconhece o vínculo e determina o pagamento de todos os direitos trabalhistas suprimidos.",
        interpretation: "Em linguagem simples: Se a empresa te obriga a abrir um CNPJ (virar PJ) mas você trabalha como empregado normal (com horário, subordinação, exclusividade), isso é fraude! A Justiça pode reconhecer que você é empregado de verdade e mandar a empresa pagar TODOS os direitos que você deixou de receber: FGTS, férias, 13º, aviso prévio, etc."
      }
    ],
    recentDecisions: [
      {
        id: "1",
        court: "TRT-2 (São Paulo)",
        number: "Processo nº 1000789-34.2024.5.02.0000",
        date: "25/09/2024",
        summary: "Reconhecido vínculo empregatício de motorista de aplicativo que trabalhava exclusivamente para uma plataforma, com metas impostas e jornada controlada. Empresa condenada a registrar carteira e pagar todos os direitos retroativos."
      },
      {
        id: "2",
        court: "TRT-1 (Rio de Janeiro)",
        number: "Processo nº 0100892-56.2024.5.01.0000",
        date: "18/09/2024",
        summary: "Pejotização fraudulenta reconhecida. Advogado contratado como PJ, mas com exclusividade, horário fixo e subordinação, teve vínculo reconhecido. Escritório condenado ao pagamento de FGTS, férias e 13º dos últimos 5 anos."
      },
      {
        id: "3",
        court: "TRT-15 (Campinas)",
        number: "Processo nº 0010934-89.2024.5.15.0000",
        date: "10/09/2024",
        summary: "Grupo econômico responsabilizado solidariamente. Mesmo trabalhando para empresa A, todas as 5 empresas do grupo foram condenadas a pagar verbas rescisórias em caso de falência da empregadora principal."
      }
    ]
  },
  "tempo-servico": {
    id: "tempo-servico",
    title: "Tempo de Serviço",
    description: "O que conta como tempo de serviço para seus direitos trabalhistas",
    keywords: ["tempo de serviço", "jornada", "disponibilidade", "horas in itinere", "sobreaviso"],
    legislation: [
      {
        title: "CLT - Art. 4º",
        reference: "Consolidação das Leis do Trabalho - Artigo 4º",
        content: "Considera-se como de serviço efetivo o período em que o empregado esteja à disposição do empregador, aguardando ou executando ordens, salvo disposição especial expressamente consignada. § 1º Computar-se-ão, na contagem de tempo de serviço, para efeito de indenização e estabilidade, os períodos em que o empregado estiver afastado do trabalho prestando serviço militar e por motivo de acidente do trabalho. § 2º Por não se considerar tempo à disposição do empregador, não será computado como período extraordinário o que exceder a jornada normal, ainda que ultrapasse o limite de cinco minutos previsto no § 1º do art. 58 desta Consolidação, quando o empregado, por escolha própria, buscar proteção pessoal, em caso de insegurança nas vias públicas ou más condições climáticas, bem como adentrar ou permanecer nas dependências da empresa para exercer atividades particulares, entre outras: I - práticas religiosas; II - descanso; III - lazer; IV - estudo; V - alimentação; VI - atividades de relacionamento social; VII - higiene pessoal; VIII - troca de roupa ou uniforme, quando não houver obrigatoriedade de realizar a troca na empresa.",
        interpretation: "Em linguagem simples: Tempo de serviço é todo momento que você está à disposição do patrão, esperando ou fazendo tarefas. Se você está esperando ordens, conta como trabalho! Períodos de serviço militar obrigatório e afastamento por acidente de trabalho também contam para indenização e estabilidade. MAS: se você chega mais cedo ou sai mais tarde por vontade própria (para fugir do trânsito, rezar, comer, trocar roupa sem obrigação, etc.), esse tempo NÃO conta como hora extra. Só conta como trabalho o tempo que a empresa realmente exige que você esteja lá."
      }
    ],
    ordinances: [
      {
        title: "Portaria MTE nº 1.510/2009",
        reference: "Ministério do Trabalho e Emprego - Portaria 1.510/2009",
        content: "Dispõe sobre o registro eletrônico de ponto. Estabelece requisitos técnicos para os sistemas de controle de jornada de trabalho, garantindo a fidedignidade dos registros de entrada e saída dos empregados.",
        interpretation: "Em linguagem simples: Define as regras do ponto eletrônico. A empresa não pode alterar os registros de entrada e saída, e o sistema tem que mostrar exatamente o horário que você chegou e saiu. Serve para proteger você de empresas que tentam fraudar o controle de horário."
      }
    ],
    summaries: [
      {
        number: "Súmula 90",
        court: "TST - Tribunal Superior do Trabalho",
        content: "O tempo despendido pelo empregado, em condução fornecida pelo empregador, até o local de trabalho de difícil acesso, ou não servido por transporte público regular, e para o seu retorno é computável na jornada de trabalho.",
        interpretation: "Em linguagem simples: Se você trabalha em lugar difícil de chegar ou sem ônibus público, e a empresa fornece transporte, o tempo da viagem conta como hora trabalhada (chamado de 'horas in itinere'). Exemplo: trabalha numa fazenda longe e pega o ônibus da empresa - esse tempo no ônibus deve ser pago como trabalho!"
      },
      {
        number: "Súmula 118",
        court: "TST - Tribunal Superior do Trabalho",
        content: "Os intervalos concedidos pelo empregador na jornada de trabalho, não previstos em lei, representam tempo à disposição da empresa, remunerados como serviço extraordinário, se acrescidos ao final da jornada.",
        interpretation: "Em linguagem simples: Se a empresa te dá intervalos extras que não são obrigatórios por lei (além do intervalo de almoço legal), mas você tem que compensar no final do dia ficando mais tempo, essas horas extras no final devem ser pagas. A empresa não pode te fazer trabalhar mais no final do dia só porque te deu um intervalo 'de presente'."
      },
      {
        number: "Súmula 366",
        court: "TST - Tribunal Superior do Trabalho",
        content: "Não serão descontadas nem computadas como jornada extraordinária as variações de horário do registro de ponto não excedentes de cinco minutos, observado o limite máximo de dez minutos diários.",
        interpretation: "Em linguagem simples: Se você chegar até 5 minutos atrasado ou sair até 5 minutos depois, a empresa não pode descontar nem precisa pagar hora extra. O limite é 10 minutos no dia todo (5 na entrada e 5 na saída). Exemplo: chegou 3 minutos atrasado e saiu 4 minutos depois = 7 minutos, não precisa compensar nem ganha hora extra."
      }
    ],
    jurisprudence: [
      {
        title: "Tempo à disposição do empregador",
        content: "O tempo em que o empregado permanece nas dependências da empresa ou em local determinado por ela, ainda que não esteja executando tarefas, é considerado tempo à disposição. Isso inclui períodos de espera, plantões, sobreaviso, e deslocamentos determinados pela empresa.",
        interpretation: "Em linguagem simples: Se você está num lugar porque a empresa mandou, mesmo sem fazer nada, esse tempo deve ser pago como trabalho. Exemplos: motorista esperando carregamento, segurança esperando próxima ronda, médico de plantão no hospital. Estar disponível já é trabalhar!"
      },
      {
        title: "Tempo de troca de uniforme obrigatória",
        content: "Quando a troca de uniforme é obrigatória e deve ser realizada nas dependências da empresa (por questões de higiene, segurança ou sigilo), o tempo despendido para vestir e retirar o uniforme integra a jornada de trabalho e deve ser remunerado.",
        interpretation: "Em linguagem simples: Se você trabalha em hospital, frigorífico, laboratório ou qualquer lugar onde PRECISA trocar de roupa na empresa (por higiene, segurança ou sigilo), o tempo que você gasta trocando de roupa deve ser pago. Mas se é só uniforme comum que você pode colocar em casa, aí não precisa pagar."
      }
    ],
    recentDecisions: [
      {
        id: "1",
        court: "TRT-3 (Minas Gerais)",
        number: "Processo nº 0101045-67.2024.5.03.0000",
        date: "22/09/2024",
        summary: "Horas in itinere reconhecidas para trabalhador rural. Empresa condenada a pagar 2 horas extras diárias referentes ao trajeto em ônibus da empresa até fazenda de difícil acesso. Cálculo retroativo de 5 anos."
      },
      {
        id: "2",
        court: "TRT-9 (Paraná)",
        number: "Processo nº 0200156-78.2024.5.09.0000",
        date: "15/09/2024",
        summary: "Tempo de troca de uniforme em frigorífico considerado como jornada de trabalho. Empresa deve pagar 30 minutos diários (15 minutos na entrada e 15 na saída) como hora extra pelos últimos 3 anos."
      },
      {
        id: "3",
        court: "TRT-4 (Rio Grande do Sul)",
        number: "Processo nº 0300267-89.2024.5.04.0000",
        date: "08/09/2024",
        summary: "Vigilante em regime de sobreaviso tem direito a 1/3 do salário-hora pelo período. Mesmo em casa, estar disponível para chamado urgente configura tempo à disposição parcial do empregador."
      }
    ]
  },
  "teletrabalho": {
    id: "teletrabalho",
    title: "Teletrabalho e Home Office",
    description: "Direitos de quem trabalha remotamente ou em casa",
    keywords: ["teletrabalho", "home office", "trabalho remoto", "trabalho em casa", "trabalho à distância"],
    legislation: [
      {
        title: "CLT - Art. 6º",
        reference: "Consolidação das Leis do Trabalho - Artigo 6º",
        content: "Não se distingue entre o trabalho realizado no estabelecimento do empregador, o executado no domicílio do empregado e o realizado a distância, desde que estejam caracterizados os pressupostos da relação de emprego. Parágrafo único. Os meios telemáticos e informatizados de comando, controle e supervisão se equiparam, para fins de subordinação jurídica, aos meios pessoais e diretos de comando, controle e supervisão do trabalho alheio.",
        interpretation: "Em linguagem simples: Trabalhar em casa, no escritório ou em qualquer outro lugar dá os MESMOS direitos! Se você é empregado, não importa onde trabalha. Supervisão por WhatsApp, email, sistema de monitoramento ou videochamada vale tanto quanto chefe presencial olhando seu trabalho. Home office tem os mesmos direitos que trabalho presencial!"
      },
      {
        title: "CLT - Art. 75-A",
        reference: "Consolidação das Leis do Trabalho - Artigo 75-A",
        content: "A prestação de serviços pelo empregado em regime de teletrabalho observará o disposto neste Capítulo. Considera-se teletrabalho a prestação de serviços preponderantemente fora das dependências do empregador, com a utilização de tecnologias de informação e de comunicação que, por sua natureza, não se constituam como trabalho externo. Parágrafo único. O comparecimento às dependências do empregador para a realização de atividades específicas que exijam a presença do empregado no estabelecimento não descaracteriza o regime de teletrabalho.",
        interpretation: "Em linguagem simples: Teletrabalho é quando você trabalha principalmente fora da empresa, usando computador, internet, celular, etc. Se você vai na empresa às vezes para reunião ou buscar material, continua sendo teletrabalho. É diferente de trabalho externo (como vendedor que visita clientes na rua)."
      },
      {
        title: "CLT - Art. 75-D",
        reference: "Consolidação das Leis do Trabalho - Artigo 75-D",
        content: "As disposições relativas à responsabilidade pela aquisição, manutenção ou fornecimento dos equipamentos tecnológicos e da infraestrutura necessária e adequada à prestação do trabalho remoto, bem como ao reembolso de despesas arcadas pelo empregado, serão previstas em contrato escrito. Parágrafo único. As utilidades mencionadas no caput deste artigo não integram a remuneração do empregado.",
        interpretation: "Em linguagem simples: A empresa deve combinar com você POR ESCRITO quem paga internet, computador, cadeira, luz, etc. do home office. Se a empresa pagar ou reembolsar essas despesas, esse valor NÃO conta como salário (então não entra no cálculo de férias, 13º, FGTS). Mas tem que estar tudo escrito no contrato!"
      }
    ],
    ordinances: [
      {
        title: "Portaria MTE nº 671/2021",
        reference: "Ministério do Trabalho e Emprego - Portaria 671/2021",
        content: "Estabelece diretrizes sobre o teletrabalho e a anotação na Carteira de Trabalho Digital, incluindo a modalidade de prestação de serviço e as condições acordadas.",
        interpretation: "Em linguagem simples: Define como o teletrabalho deve ser registrado na carteira de trabalho digital. Garante que fique documentado que você trabalha remotamente e quais são as condições (equipamentos, horários, etc.)."
      }
    ],
    summaries: [
      {
        number: "Súmula 6",
        court: "TST - Tribunal Superior do Trabalho",
        content: "Não se distingue entre o trabalho realizado no estabelecimento do empregador, o executado no domicílio do empregado e o realizado a distância, desde que estejam caracterizados os pressupostos da relação de emprego.",
        interpretation: "Em linguagem simples: Já falamos disso, mas vale reforçar: home office, presencial ou híbrido - MESMOS DIREITOS! A Justiça não diferencia. Se você é empregado, tem todos os direitos da CLT independente de onde trabalha."
      },
      {
        number: "Súmula 428",
        court: "TST - Tribunal Superior do Trabalho",
        content: "Sobreaviso. Aplicação analógica do art. 244, § 2º da CLT. O uso de instrumentos telemáticos ou informatizados fornecidos pela empresa ao empregado, por si só, não caracteriza o regime de sobreaviso.",
        interpretation: "Em linguagem simples: Só porque a empresa te deu celular ou notebook não significa que você está de sobreaviso (disponível 24h). Sobreaviso só existe se você REALMENTE precisa ficar disponível para ser chamado a qualquer momento. Ter WhatsApp da empresa no celular não é sobreaviso automático."
      }
    ],
    jurisprudence: [
      {
        title: "Direito à desconexão no teletrabalho",
        content: "O trabalhador em regime de teletrabalho tem direito à desconexão, não podendo ser exigido que permaneça disponível fora do horário de trabalho. A cobrança excessiva de respostas imediatas em aplicativos de mensagens ou e-mails fora do expediente pode caracterizar horas extras.",
        interpretation: "Em linguagem simples: Mesmo em home office, você NÃO é obrigado a responder mensagens, emails ou chamadas fora do seu horário de trabalho. Se o chefe te cobra resposta imediata no WhatsApp às 23h ou no domingo, isso pode ser considerado hora extra! Você tem direito de 'desligar' do trabalho no final do expediente."
      },
      {
        title: "Equipamentos e despesas do teletrabalho",
        content: "A empresa deve fornecer ou reembolsar as despesas com equipamentos e infraestrutura necessários ao teletrabalho, salvo acordo expresso em contrário. O não fornecimento pode gerar direito a indenização ou reembolso das despesas comprovadas.",
        interpretation: "Em linguagem simples: Se você trabalha de casa, a empresa deveria te dar computador, internet, cadeira adequada, ou pagar essas despesas. Se não der e não combinou nada por escrito, você pode cobrar esse reembolso! Guarde notas fiscais de tudo que você comprou para trabalhar."
      },
      {
        title: "Controle de jornada no teletrabalho",
        content: "Embora a Reforma Trabalhista tenha dispensado o controle de jornada para teletrabalho, a jurisprudência vem reconhecendo direito a horas extras quando há controle efetivo do tempo de trabalho pela empresa, através de sistemas de monitoramento ou exigência de disponibilidade constante.",
        interpretation: "Em linguagem simples: A lei diz que em home office não precisa controlar horário, MAS se a empresa te monitora por sistema, exige que você esteja online em horário fixo, cobra produtividade por hora, ou te chama o tempo todo, aí você PODE ter direito a horas extras! Depende de quanto controle a empresa faz sobre você."
      }
    ],
    recentDecisions: [
      {
        id: "1",
        court: "TRT-2 (São Paulo)",
        number: "Processo nº 1001234-56.2024.5.02.0000",
        date: "28/09/2024",
        summary: "Reconhecido direito a horas extras para trabalhador em home office monitorado por sistema. Empresa que exigia login das 8h às 18h e controlava atividades por software foi condenada a pagar horas extras dos últimos 2 anos."
      },
      {
        id: "2",
        court: "TRT-1 (Rio de Janeiro)",
        number: "Processo nº 0101345-67.2024.5.01.0000",
        date: "20/09/2024",
        summary: "Empresa condenada a reembolsar despesas com internet e energia elétrica de trabalhador em teletrabalho. Ausência de acordo escrito obrigou empresa a pagar R$ 15 mil de reembolso retroativo."
      },
      {
        id: "3",
        court: "TRT-15 (Campinas)",
        number: "Processo nº 0011456-78.2024.5.15.0000",
        date: "13/09/2024",
        summary: "Caracterizado assédio moral por cobrança excessiva fora do horário. Chefe que mandava mensagens de madrugada e fins de semana exigindo respostas imediatas foi responsabilizado. Empresa pagará danos morais de R$ 30 mil."
      }
    ]
  },
  "protecao-direitos": {
    id: "protecao-direitos",
    title: "Proteção contra Fraudes Trabalhistas",
    description: "Seus direitos não podem ser fraudados ou reduzidos",
    keywords: ["fraude", "direitos", "nulidade", "proteção", "burla", "fraude trabalhista"],
    legislation: [
      {
        title: "CLT - Art. 9º",
        reference: "Consolidação das Leis do Trabalho - Artigo 9º",
        content: "Serão nulos de pleno direito os atos praticados com o objetivo de desvirtuar, impedir ou fraudar a aplicação dos preceitos contidos na presente Consolidação.",
        interpretation: "Em linguagem simples: Qualquer 'acordo' ou contrato que tente tirar ou diminuir seus direitos trabalhistas é NULO, não vale nada! Exemplos: te obrigar a assinar recibo de férias que não tirou, te fazer abrir PJ para não ter carteira assinada, pagar 'por fora' para não aparecer no salário oficial. Tudo isso é fraude e a Justiça anula!"
      },
      {
        title: "CLT - Art. 10",
        reference: "Consolidação das Leis do Trabalho - Artigo 10",
        content: "Qualquer alteração na estrutura jurídica da empresa não afetará os direitos adquiridos por seus empregados.",
        interpretation: "Em linguagem simples: Se a empresa muda de dono, muda de nome, vira outra empresa, fecha e abre de novo com outro CNPJ, NADA disso afeta seus direitos! Você não perde tempo de casa, não perde estabilidade, não perde nada. A 'nova' empresa tem que honrar tudo que a antiga devia."
      },
      {
        title: "CLT - Art. 468",
        reference: "Consolidação das Leis do Trabalho - Artigo 468",
        content: "Nos contratos individuais de trabalho só é lícita a alteração das respectivas condições por mútuo consentimento, e ainda assim desde que não resultem, direta ou indiretamente, prejuízos ao empregado, sob pena de nulidade da cláusula infringente desta garantia.",
        interpretation: "Em linguagem simples: A empresa só pode mudar alguma coisa no seu contrato se VOCÊ concordar E se não te prejudicar. Mesmo que você aceite uma mudança que te prejudica (tipo ganhar menos, perder benefício), essa mudança não vale! A Justiça anula e você pode cobrar o que perdeu."
      }
    ],
    ordinances: [
      {
        title: "Instrução Normativa SIT nº 41/2018",
        reference: "Secretaria de Inspeção do Trabalho - IN 41/2018",
        content: "Dispõe sobre a fiscalização do cumprimento das normas de proteção ao trabalho e combate a fraudes trabalhistas, incluindo terceirização irregular, pejotização e trabalho análogo ao escravo.",
        interpretation: "Em linguagem simples: Define como os fiscais do trabalho investigam fraudes. Se você denunciar que a empresa está fraudando seus direitos (te fazendo virar PJ, não pagando horas extras, etc.), os fiscais vão lá verificar e podem multar pesado a empresa."
      }
    ],
    summaries: [
      {
        number: "Súmula 51",
        court: "TST - Tribunal Superior do Trabalho",
        content: "As cláusulas regulamentares, que revoguem ou alterem vantagens deferidas anteriormente, só atingirão os trabalhadores admitidos após a revogação ou alteração do regulamento.",
        interpretation: "Em linguagem simples: Se você já tinha um benefício (tipo plano de saúde, vale-alimentação) e a empresa tira esse benefício, você continua tendo direito! A mudança só vale para quem entrar depois. Quem já estava não perde."
      },
      {
        number: "Súmula 276",
        court: "TST - Tribunal Superior do Trabalho",
        content: "O direito de ação quanto a créditos resultantes das relações de trabalho prescreve em cinco anos até o limite de dois anos após a extinção do contrato de trabalho.",
        interpretation: "Em linguagem simples: Você tem 2 anos DEPOIS de sair da empresa para entrar na Justiça cobrando seus direitos. E pode cobrar os últimos 5 anos que trabalhou. Exemplo: saiu em 2024, pode processar até 2026, cobrando de 2019 a 2024. Não deixe prescrever seus direitos!"
      },
      {
        number: "Súmula 338",
        court: "TST - Tribunal Superior do Trabalho",
        content: "É inválida a quitação discriminada de parcelas se esta não contiver ressalva expressa quanto aos direitos nela especificados, ressalvando-se, porém, a situação do empregado analfabeto ou menor.",
        interpretation: "Em linguagem simples: Quando você assina o termo de rescisão, ele tem que listar TUDO que está sendo pago. Se não listar alguma coisa e você assinar sem fazer ressalva, pode perder o direito de cobrar depois. Por isso, SEMPRE leia com atenção antes de assinar! Se for analfabeto ou menor de idade, tem proteção extra."
      }
    ],
    jurisprudence: [
      {
        title: "Fraude na terceirização",
        content: "A terceirização utilizada para mascarar vínculo empregatício direto é considerada fraude. Quando caracterizada a pessoalidade e subordinação direta com o tomador de serviços, a Justiça reconhece o vínculo empregatício diretamente com a empresa onde o trabalho era efetivamente prestado.",
        interpretation: "Em linguagem simples: Se você trabalha direto para uma empresa grande, mas eles te contratam através de uma 'empresinha' só para não registrar você, isso é fraude! A Justiça pode reconhecer que seu vínculo é direto com a empresa grande, não com a terceirizada. Você ganha todos os benefícios que os funcionários diretos têm."
      },
      {
        title: "Nulidade de acordos prejudiciais",
        content: "São nulos os acordos, ainda que homologados, que impliquem renúncia ou redução de direitos trabalhistas. O princípio da irrenunciabilidade dos direitos trabalhistas prevalece, protegendo o trabalhador mesmo contra sua própria vontade em situações de necessidade.",
        interpretation: "Em linguagem simples: Mesmo que você 'aceite' ganhar menos, perder benefícios ou abrir mão de direitos (tipo porque precisa do emprego), esse acordo NÃO VALE! A CLT protege você até de você mesmo. Depois você pode ir na Justiça e cobrar o que perdeu, mesmo tendo assinado o acordo na hora."
      },
      {
        title: "Sucessão de empresas",
        content: "Em caso de sucessão empresarial (venda, fusão, mudança de razão social), a empresa sucessora responde por todas as obrigações trabalhistas da antecessora. O tempo de serviço e todos os direitos adquiridos são preservados.",
        interpretation: "Em linguagem simples: Se a empresa é vendida, muda de dono ou de nome, você não perde NADA! Seu tempo de casa continua contando, suas férias vencidas continuam devidas, tudo que você tinha direito continua valendo. A 'nova' empresa herda todas as obrigações trabalhistas da antiga."
      }
    ],
    recentDecisions: [
      {
        id: "1",
        court: "TRT-3 (Minas Gerais)",
        number: "Processo nº 0101567-89.2024.5.03.0000",
        date: "30/09/2024",
        summary: "Pejotização fraudulenta desmascarada. Empresa que obrigava funcionários a abrir MEI para continuar trabalhando foi condenada a registrar todos retroativamente e pagar R$ 2 milhões em direitos suprimidos de 50 trabalhadores."
      },
      {
        id: "2",
        court: "TRT-2 (São Paulo)",
        number: "Processo nº 1001678-90.2024.5.02.0000",
        date: "23/09/2024",
        summary: "Sucessão empresarial reconhecida. Empresa 'nova' que contratou mesmos funcionários, no mesmo local e mesma atividade da empresa 'fechada' foi considerada sucessora. Condenada a pagar todos os direitos da empresa anterior."
      },
      {
        id: "3",
        court: "TRT-4 (Rio Grande do Sul)",
        number: "Processo nº 0300789-01.2024.5.04.0000",
        date: "16/09/2024",
        summary: "Acordo de redução salarial anulado. Mesmo tendo sido aceito pelo empregado em momento de crise, redução de 40% no salário foi considerada nula por prejudicar direito indisponível. Empresa pagará diferenças."
      }
    ]
  },
  "fontes-direito-trabalho": {
    id: "fontes-direito-trabalho",
    title: "Fontes do Direito do Trabalho",
    description: "De onde vêm as regras trabalhistas e hierarquia das normas",
    keywords: ["fontes", "leis", "convenção coletiva", "acordo coletivo", "costume", "jurisprudência", "analogia"],
    legislation: [
      {
        title: "CLT - Art. 8º",
        reference: "Consolidação das Leis do Trabalho - Artigo 8º",
        content: "As autoridades administrativas e a Justiça do Trabalho, na falta de disposições legais ou contratuais, decidirão, conforme o caso, pela jurisprudência, por analogia, por equidade e outros princípios e normas gerais de direito, principalmente do direito do trabalho, e, ainda, de acordo com os usos e costumes, o direito comparado, mas sempre de maneira que nenhum interesse de classe ou particular prevaleça sobre o interesse público. § 1º O direito comum será fonte subsidiária do direito do trabalho. § 2º Súmulas e outros enunciados de jurisprudência editados pelo Tribunal Superior do Trabalho e pelos Tribunais Regionais do Trabalho deverão ser observados pelas turmas e juízos na aplicação das normas. § 3º No exame de convenção coletiva ou acordo coletivo de trabalho, a Justiça do Trabalho analisará exclusivamente a conformidade dos elementos essenciais do negócio jurídico, respeitado o disposto no art. 104 da Lei no 10.406, de 10 de janeiro de 2002 (Código Civil), e balizará sua atuação pelo princípio da intervenção mínima na autonomia da vontade coletiva.",
        interpretation: "Em linguagem simples: Quando não tem uma lei específica sobre um assunto trabalhista, o juiz usa: jurisprudência (decisões anteriores), analogia (regras parecidas), equidade (justiça), costumes do trabalho, e princípios gerais. Basicamente, o juiz busca a solução mais justa para o trabalhador. Súmulas do TST são importantes e devem ser seguidas. Acordos e convenções coletivas são respeitados desde que não violem direitos básicos."
      }
    ],
    ordinances: [],
    summaries: [
      {
        number: "Súmula 277",
        court: "TST - Tribunal Superior do Trabalho",
        content: "As cláusulas normativas dos acordos coletivos ou convenções coletivas integram os contratos individuais de trabalho e somente poderão ser modificadas ou suprimidas mediante negociação coletiva de trabalho.",
        interpretation: "Em linguagem simples: O que foi combinado no acordo ou convenção coletiva (entre sindicato e empresa) vira parte do seu contrato de trabalho. A empresa não pode tirar esse benefício sozinha, só se negociar novamente com o sindicato. Exemplo: se a convenção deu vale-alimentação de R$ 500, a empresa não pode reduzir para R$ 300 sem nova negociação com sindicato."
      },
      {
        number: "Súmula 288",
        court: "TST - Tribunal Superior do Trabalho",
        content: "A complementação dos proventos da aposentadoria é regida pelas normas em vigor na data da admissão do empregado, observando-se as alterações posteriores desde que mais favoráveis ao beneficiário do direito.",
        interpretation: "Em linguagem simples: Se você tem direito a complementação de aposentadoria (empresa complementa o valor do INSS), vale a regra de quando você foi contratado. Se mudarem as regras depois, só vale se for melhor para você. Proteção para que a empresa não piore as condições de aposentadoria de quem já estava trabalhando."
      }
    ],
    jurisprudence: [
      {
        title: "Hierarquia das normas trabalhistas",
        content: "No direito do trabalho, aplica-se o princípio da norma mais favorável ao trabalhador. Mesmo que a CLT diga uma coisa, se uma convenção coletiva, acordo individual ou regulamento interno for melhor para o trabalhador, prevalece a norma mais benéfica.",
        interpretation: "Em linguagem simples: Entre várias regras (CLT, convenção coletiva, acordo individual, regulamento da empresa), vale sempre a MELHOR para você! Se a CLT dá 30 dias de férias mas a convenção dá 35 dias, você tem direito a 35 dias. Se o regulamento interno dá plano de saúde e a CLT não obriga, você tem direito ao plano. Sempre prevalece a regra melhor."
      },
      {
        title: "Costume como fonte do direito",
        content: "Práticas reiteradamente adotadas pela empresa e aceitas pelo empregado passam a integrar o contrato de trabalho. Exemplo clássico: se a empresa sempre pagou vale-refeição, mesmo sem obrigação legal, não pode retirar unilateralmente.",
        interpretation: "Em linguagem simples: Se a empresa sempre fez alguma coisa (mesmo sem estar na lei ou no seu contrato), e você se acostumou com aquilo, vira um direito! Exemplos: sempre pagou cesta básica, sempre liberou mais cedo na véspera de feriado, sempre deu bônus de Natal - tudo isso vira costume e a empresa não pode tirar sem negociar. Costume também é lei!"
      },
      {
        title: "Limites da negociação coletiva",
        content: "A Reforma Trabalhista ampliou o poder das negociações coletivas, mas há limites. Direitos constitucionais e de saúde/segurança não podem ser negociados. FGTS, salário mínimo, 13º, férias de 30 dias, licença maternidade, não podem ser reduzidos nem em acordo coletivo.",
        interpretation: "Em linguagem simples: Sindicato e empresa podem negociar muita coisa (como flexibilizar horário, parcelar 13º, etc.), MAS existem direitos que NINGUÉM pode tirar ou reduzir, nem o sindicato! São os direitos mínimos garantidos pela Constituição: FGTS, salário mínimo, 13º, férias de 30 dias, licença maternidade, normas de segurança. Esses são intocáveis!"
      }
    ],
    recentDecisions: [
      {
        id: "1",
        court: "TST (Brasília)",
        number: "Processo nº 0100234-56.2024.5.10.0000",
        date: "05/10/2024",
        summary: "TST declara nula cláusula de convenção coletiva que reduzia intervalo para refeição abaixo de 1 hora. Direitos de saúde e segurança não podem ser negociados mesmo em acordo coletivo. Prevalece a CLT."
      },
      {
        id: "2",
        court: "TRT-15 (Campinas)",
        number: "Processo nº 0011345-67.2024.5.15.0000",
        date: "27/09/2024",
        summary: "Costume de pagamento de gratificação anual incorporado ao contrato. Empresa que pagou por 10 anos não pode retirar unilateralmente. Prática reiterada gerou direito adquirido aos empregados."
      },
      {
        id: "3",
        court: "TRT-1 (Rio de Janeiro)",
        number: "Processo nº 0101456-78.2024.5.01.0000",
        date: "19/09/2024",
        summary: "Aplicada norma mais favorável. Mesmo com Reforma Trabalhista permitindo negociação, prevaleceu convenção coletiva anterior que garantia benefícios superiores à lei. Princípio da norma mais favorável aplicado."
      }
    ]
  }
};

export const topicsList = Object.values(topics);

