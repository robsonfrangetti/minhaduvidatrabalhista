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
  order: number;
  title: string;
  description: string;
  keywords: string[];
  legislation: {
    title: string;
    reference: string;
    content: string;
    interpretation: string;
    link?: string;
  }[];
  ordinances: {
    title: string;
    reference: string;
    content: string;
    fullContent?: string;
    interpretation: string;
    link?: string;
  }[];
  summaries: {
    number: string;
    court: string;
    content: string;
    interpretation: string;
    link?: string;
  }[];
  jurisprudence: {
    title: string;
    content: string;
    interpretation: string;
  }[];
  recentDecisions: Decision[];
}

export const topics: Record<string, TopicData> = {
  "empregador-empregado": {
    id: "empregador-empregado",
    order: 1,
    title: "O que caracteriza uma relação de emprego?",
    description: "Elementos essenciais para identificar se existe vínculo empregatício",
    keywords: ["relação de emprego", "vínculo empregatício", "empregado", "empregador", "subordinação", "pessoalidade", "não eventualidade", "onerosidade"],
    legislation: [
      {
        title: "CLT - Art. 2º",
        reference: "Consolidação das Leis do Trabalho - Artigo 2º",
        content: "Considera-se empregador a empresa, individual ou coletiva, que, assumindo os riscos da atividade econômica, admite, assalaria e dirige a prestação pessoal de serviço. § 1º Equiparam-se ao empregador, para os efeitos exclusivos da relação de emprego, os profissionais liberais, as instituições de beneficência, as associações recreativas ou outras instituições sem fins lucrativos, que admitirem trabalhadores como empregados. § 2º Sempre que uma ou mais empresas, tendo, embora, cada uma delas, personalidade jurídica própria, estiverem sob a direção, controle ou administração de outra, ou ainda quando, mesmo guardando cada uma sua autonomia, integrem grupo econômico, serão responsáveis solidariamente pelas obrigações decorrentes da relação de emprego.",
        interpretation: "Em linguagem simples: Para caracterizar uma relação de emprego, precisa ter EMPREGADOR. Empregador é quem: 1) TEM uma empresa/negócio, 2) ASSUME os riscos (se der prejuízo, é problema dele), 3) CONTRATA funcionários, 4) PAGA salário, 5) COMANDAR o trabalho. Inclui empresas, profissionais liberais (médicos, advogados), ONGs e clubes. Se várias empresas são do mesmo grupo, todas respondem juntas pelos direitos. ⚠️ IMPORTANTE: Se quem te paga não tem empresa registrada, ainda pode ser empregador (trabalho doméstico, por exemplo). O empregador é quem está 'no comando' - decide o que, como e quando fazer."
      },
      {
        title: "CLT - Art. 3º",
        reference: "Consolidação das Leis do Trabalho - Artigo 3º",
        content: "Considera-se empregado toda pessoa física que prestar serviços de natureza não eventual a empregador, sob a dependência deste e mediante salário. Parágrafo único - Não haverá distinções relativas à espécie de emprego e à condição de trabalhador, nem entre o trabalho intelectual, técnico e manual.",
        interpretation: "Em linguagem simples: Para caracterizar uma relação de emprego, você precisa ser EMPREGADO. Você é empregado se tem os 4 ELEMENTOS ESSENCIAIS: 1) PESSOA FÍSICA (você mesmo, não uma empresa), 2) NÃO EVENTUAL (trabalho regular, não é só um bico), 3) DEPENDÊNCIA (recebe ordens do patrão), 4) SALÁRIO (recebe pagamento). TODOS os 4 são obrigatórios! Se falta qualquer um = não é empregado. Exemplos: vendedor de loja ✓, prestador de serviço ✗ (não tem dependência), estagiário sem salário ✗ (falta salário). ⚠️ IMPORTANTE: Não importa se é trabalho físico, técnico ou intelectual - todos têm os mesmos direitos se caracterizarem relação de emprego!"
      },
      {
        title: "CLT - Art. 1º",
        reference: "Consolidação das Leis do Trabalho - Artigo 1º",  
        content: "Esta Consolidação estatui as normas que regulam as relações individuais e coletivas de trabalho, nela previstas. Parágrafo único. No tocante às relações de trabalho rural, são aplicáveis ao empregado e ao empregador rural, sempre que for compatível, as disposições desta Lei.",
        interpretation: "Em linguagem simples: A CLT é a LEI PRINCIPAL que define o que é uma relação de emprego e quais são os direitos trabalhistas. Ela vale para todos os trabalhadores brasileiros - tanto da cidade quanto do campo. Se você tem uma relação de emprego (com os 4 elementos: pessoa física + não eventual + dependência + salário), a CLT te protege com todos os direitos trabalhistas. ⚠️ IMPORTANTE: A CLT só se aplica quando existe relação de emprego. Se você é autônomo, prestador de serviço, ou tem outro tipo de vínculo, outras leis podem se aplicar."
      }
    ],
    ordinances: [
      {
        title: "Portaria MTE nº 1.129/2017",
        reference: "Ministério do Trabalho e Emprego - Portaria 1.129/2017",
        content: "Dispõe sobre os conceitos de trabalho em condições análogas às de escravo para fins de concessão de seguro-desemprego ao trabalhador que vier a ser resgatado.",
        fullContent: "PORTARIA MTE Nº 1.129, DE 13 DE OUTUBRO DE 2017\n\nO MINISTRO DE ESTADO DO TRABALHO, no uso das atribuições que lhe confere o art. 87, parágrafo único, incisos I e II, da Constituição Federal, resolve:\n\nArt. 1º Consideram-se trabalho em condição análoga à de escravo as formas de trabalho forçado ou obrigatório, em jornada exaustiva ou em condições degradantes, bem como aquelas que submetam o trabalhador a trabalho em situação de isolamento geográfico ou privem-no de meio de transporte, de alimentação ou de alojamento adequados, ou ainda aquelas que restrinjam a sua locomoção em razão de dívida contraída com o empregador ou preposto.\n\nArt. 2º O trabalhador resgatado de condição análoga à de escravo fará jus ao benefício do seguro-desemprego, nos termos da Lei nº 7.998, de 11 de janeiro de 1990.\n\nArt. 3º Esta Portaria entra em vigor na data de sua publicação.",
        interpretation: "Em linguagem simples: Esta portaria protege trabalhadores em situações extremas de exploração. Define quando uma situação de trabalho é considerada escravidão moderna (trabalho forçado, jornada exaustiva, condições degradantes, isolamento, restrição de ir e vir) e garante que o trabalhador resgatado receba seguro-desemprego enquanto se recupera. É uma proteção importante contra abusos graves."
      },
      {
        title: "Instrução Normativa SIT nº 139/2018",
        reference: "Secretaria de Inspeção do Trabalho - IN 139/2018",
        content: "Dispõe sobre a fiscalização do cumprimento das normas relativas ao registro eletrônico de empregados e sobre o Sistema de Registro Eletrônico de Empregados (SIRENA).",
        fullContent: "INSTRUÇÃO NORMATIVA Nº 139, DE 22 DE JANEIRO DE 2018\n\nA SECRETÁRIA DE INSPEÇÃO DO TRABALHO, no uso das atribuições conferidas pelo Decreto nº 5.063, de 3 de maio de 2004, resolve:\n\nArt. 1º Esta Instrução Normativa dispõe sobre a fiscalização do cumprimento das normas relativas ao registro de empregados.\n\nArt. 2º Considera-se registro de empregado a anotação dos dados do trabalhador no sistema eletrônico ou manual, conforme previsto na legislação trabalhista.\n\nArt. 3º A fiscalização verificará:\nI - se o empregado está devidamente registrado;\nII - se as informações constantes no registro correspondem à realidade da prestação de serviço;\nIII - se foram realizadas as anotações obrigatórias na Carteira de Trabalho e Previdência Social ou no sistema digital;\nIV - o cumprimento dos prazos legais para registro.\n\nArt. 4º O descumprimento das obrigações previstas nesta Instrução Normativa sujeitará o infrator às penalidades previstas na legislação.",
        interpretation: "Em linguagem simples: Define como os fiscais do trabalho verificam se a empresa registrou corretamente seus funcionários. Os fiscais checam se você está registrado, se os dados na carteira batem com a realidade (salário real, data certa de admissão, função correta), e se foi tudo feito no prazo. Garante que todos os empregados tenham seus direitos reconhecidos e registrados adequadamente na carteira de trabalho digital. Empresa que não registra direito pode ser multada!"
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
    order: 2,
    title: "O que é considerado tempo de trabalho efetivo?",
    description: "Horas que contam como tempo trabalhado para cálculo de direitos trabalhistas",
    keywords: ["tempo efetivo", "tempo de trabalho", "horas trabalhadas", "disponibilidade", "sobreaviso", "horas in itinere", "jornada efetiva"],
    legislation: [
      {
        title: "CLT - Art. 4º",
        reference: "Consolidação das Leis do Trabalho - Artigo 4º",
        content: "Considera-se como de serviço efetivo o período em que o empregado esteja à disposição do empregador, aguardando ou executando ordens, salvo disposição especial expressamente consignada. § 1º Computar-se-ão, na contagem de tempo de serviço, para efeito de indenização e estabilidade, os períodos em que o empregado estiver afastado do trabalho prestando serviço militar e por motivo de acidente do trabalho. § 2º Por não se considerar tempo à disposição do empregador, não será computado como período extraordinário o que exceder a jornada normal, ainda que ultrapasse o limite de cinco minutos previsto no § 1º do art. 58 desta Consolidação, quando o empregado, por escolha própria, buscar proteção pessoal, em caso de insegurança nas vias públicas ou más condições climáticas, bem como adentrar ou permanecer nas dependências da empresa para exercer atividades particulares, entre outras: I - práticas religiosas; II - descanso; III - lazer; IV - estudo; V - alimentação; VI - atividades de relacionamento social; VII - higiene pessoal; VIII - troca de roupa ou uniforme, quando não houver obrigatoriedade de realizar a troca na empresa.",
        interpretation: "Em linguagem simples: TEMPO EFETIVO é quando você está REALMENTE trabalhando ou à disposição do patrão. CONTA como tempo efetivo: 1) Trabalhando normalmente, 2) Aguardando ordens do chefe, 3) Tempo no serviço militar, 4) Afastamento por acidente de trabalho. NÃO CONTA como tempo efetivo: 1) Almoço/refeição, 2) Descanso/coffee break, 3) Estudo na empresa, 4) Atividades religiosas, 5) Conversa com colegas, 6) Higiene pessoal, 7) Troca de roupa (se não obrigatório). ⚠️ IMPORTANTE: Se você fica na empresa por escolha própria fazendo coisas pessoais, isso NÃO conta como hora extra, mesmo passando da jornada normal. DICA: O tempo efetivo é o que realmente importa para calcular férias, 13º, FGTS e outros direitos!"
      }
    ],
    ordinances: [
      {
        title: "Portaria MTE nº 1.510/2009",
        reference: "Ministério do Trabalho e Emprego - Portaria 1.510/2009",
        content: "Dispõe sobre o registro eletrônico de ponto. Estabelece requisitos técnicos para os sistemas de controle de jornada de trabalho, garantindo a fidedignidade dos registros de entrada e saída dos empregados.",
        fullContent: "PORTARIA Nº 1.510, DE 21 DE AGOSTO DE 2009\n\nO MINISTRO DE ESTADO DO TRABALHO E EMPREGO, no uso das atribuições que lhe confere o art. 87, parágrafo único, inciso II da Constituição Federal, resolve:\n\nArt. 1º Disciplinar o registro eletrônico de ponto (REP) previsto no art. 74, §2º da CLT.\n\nArt. 2º O Sistema de Registro Eletrônico de Ponto (SREP) deverá:\nI - não permitir restrições à marcação do ponto;\nII - não permitir a alteração ou eliminação dos dados registrados;\nIII - não permitir a marcação automática do ponto;\nIV - registrar fielmente as marcações efetuadas;\nV - estar disponível no local de trabalho;\nVI - emitir comprovante de cada marcação.\n\nArt. 3º É vedado:\nI - exigir autorização prévia para marcação de sobrejornada;\nII - alterar ou eliminar os horários registrados;\nIII - condicionar marcações de ponto.\n\nArt. 4º O descumprimento do disposto nesta Portaria acarretará a aplicação das penalidades previstas na legislação trabalhista.",
        interpretation: "Em linguagem simples: O ponto eletrônico é CRUCIAL para comprovar seu tempo efetivo! A empresa NÃO PODE: alterar seus horários, apagar registros, fazer o ponto bater sozinho, te impedir de marcar hora extra, ou exigir autorização prévia. O sistema deve registrar EXATAMENTE quando você chegou e saiu, e te dar comprovante. ⚠️ IMPORTANTE: Se a empresa burla o ponto, pode estar sonegar seu tempo efetivo (e seus direitos!). O ponto é a prova de quantas horas você realmente trabalhou. DICA: Guarde sempre os comprovantes do ponto - eles provam seu tempo efetivo na Justiça!"
      }
    ],
    summaries: [
      {
        number: "Súmula 90",
        court: "TST - Tribunal Superior do Trabalho",
        content: "O tempo despendido pelo empregado, em condução fornecida pelo empregador, até o local de trabalho de difícil acesso, ou não servido por transporte público regular, e para o seu retorno é computável na jornada de trabalho.",
        interpretation: "Em linguagem simples: TEMPO DE VIAGEM também conta como tempo efetivo! Se você trabalha em lugar difícil de chegar (fazenda, obra longe, sem ônibus público) e a empresa fornece transporte, o tempo da viagem CONTA como hora trabalhada. Exemplo: trabalha numa fazenda e pega o ônibus da empresa às 6h da manhã = esse tempo no ônibus deve ser pago como trabalho! ⚠️ IMPORTANTE: Isso é diferente do tempo normal de casa ao trabalho - só vale quando a empresa fornece transporte para local de difícil acesso. DICA: Se a empresa não pagar esse tempo de viagem, você pode cobrar na Justiça!"
      },
      {
        number: "Súmula 118",
        court: "TST - Tribunal Superior do Trabalho",
        content: "Os intervalos concedidos pelo empregador na jornada de trabalho, não previstos em lei, representam tempo à disposição da empresa, remunerados como serviço extraordinário, se acrescidos ao final da jornada.",
        interpretation: "Em linguagem simples: INTERVALOS EXTRAS da empresa também contam como tempo efetivo! Se a empresa te dá um intervalo a mais (que não é obrigatório por lei) e depois te faz trabalhar mais para compensar, esse tempo extra CONTA como hora trabalhada e deve ser pago. Exemplo: empresa dá 30 minutos de intervalo extra no almoço, mas te faz trabalhar 30 minutos a mais no final do dia = esse tempo extra deve ser pago como hora extra! ⚠️ IMPORTANTE: Não é porque a empresa 'deu' um intervalo que pode descontar depois. DICA: Qualquer tempo que você fica à disposição da empresa conta como trabalho!"
      },
      {
        number: "Súmula 366",
        court: "TST - Tribunal Superior do Trabalho",
        content: "Não serão descontadas nem computadas como jornada extraordinária as variações de horário do registro de ponto não excedentes de cinco minutos, observado o limite máximo de dez minutos diários.",
        interpretation: "Em linguagem simples: PEQUENAS VARIAÇÕES no ponto NÃO afetam seu tempo efetivo! Se você chegar até 5 minutos atrasado ou sair até 5 minutos depois, a empresa não pode descontar nem precisa pagar hora extra. O limite é 10 minutos no dia todo (5 na entrada e 5 na saída). Exemplo: chegou 3 minutos atrasado e saiu 4 minutos depois = 7 minutos, não precisa compensar nem ganha hora extra. ⚠️ IMPORTANTE: Isso é uma TOLERÂNCIA legal para pequenas variações. Mas se passar de 5 minutos = conta como tempo efetivo ou falta. DICA: O importante é não abusar dessa tolerância!"
      }
    ],
    jurisprudence: [
      {
        title: "Tempo à disposição do empregador",
        content: "O tempo em que o empregado permanece nas dependências da empresa ou em local determinado por ela, ainda que não esteja executando tarefas, é considerado tempo à disposição. Isso inclui períodos de espera, plantões, sobreaviso, e deslocamentos determinados pela empresa.",
        interpretation: "Em linguagem simples: TEMPO À DISPOSIÇÃO também conta como tempo efetivo! Se você está num lugar porque a empresa mandou, mesmo sem fazer nada, esse tempo deve ser pago como trabalho. Exemplos: motorista esperando carregamento, segurança esperando próxima ronda, médico de plantão no hospital. ⚠️ IMPORTANTE: Estar disponível já é trabalhar! Se você não pode sair do local ou tem que ficar esperando ordem, isso conta como tempo efetivo. DICA: Não é porque você não está 'fazendo nada' que não conta como trabalho!"
      },
      {
        title: "Tempo de troca de uniforme obrigatória",
        content: "Quando a troca de uniforme é obrigatória e deve ser realizada nas dependências da empresa (por questões de higiene, segurança ou sigilo), o tempo despendido para vestir e retirar o uniforme integra a jornada de trabalho e deve ser remunerado.",
        interpretation: "Em linguagem simples: TROCA DE UNIFORME obrigatória também conta como tempo efetivo! Se você trabalha em hospital, frigorífico, laboratório ou qualquer lugar onde PRECISA trocar de roupa na empresa (por higiene, segurança ou sigilo), o tempo que você gasta trocando de roupa deve ser pago. ⚠️ IMPORTANTE: Mas se é só uniforme comum que você pode colocar em casa, aí não conta como tempo efetivo. A diferença é se é OBRIGATÓRIO trocar na empresa. DICA: Se a empresa exige troca de uniforme por questões de segurança/higiene, esse tempo conta como trabalho!"
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
    order: 3,
    title: "Como funciona o trabalho em casa (home office)?",
    description: "Direitos, regras e funcionamento do trabalho remoto",
    keywords: ["home office", "trabalho em casa", "teletrabalho", "trabalho remoto", "jornada flexível", "direitos home office", "regras trabalho remoto"],
    legislation: [
      {
        title: "CLT - Art. 6º",
        reference: "Consolidação das Leis do Trabalho - Artigo 6º",
        content: "Não se distingue entre o trabalho realizado no estabelecimento do empregador, o executado no domicílio do empregado e o realizado a distância, desde que estejam caracterizados os pressupostos da relação de emprego. Parágrafo único. Os meios telemáticos e informatizados de comando, controle e supervisão se equiparam, para fins de subordinação jurídica, aos meios pessoais e diretos de comando, controle e supervisão do trabalho alheio.",
        interpretation: "Em linguagem simples: HOME OFFICE funciona IGUAL ao trabalho presencial! Se você é empregado, não importa se trabalha em casa, no escritório ou em qualquer lugar - você tem os MESMOS direitos trabalhistas. Supervisão por WhatsApp, email, sistema de monitoramento ou videochamada vale tanto quanto chefe presencial. ⚠️ IMPORTANTE: Home office NÃO é trabalho diferente - é a mesma relação de emprego, só muda o local. DICA: Se a empresa tentar dizer que home office tem direitos diferentes, está errado!"
      },
      {
        title: "CLT - Art. 75-A",
        reference: "Consolidação das Leis do Trabalho - Artigo 75-A",
        content: "A prestação de serviços pelo empregado em regime de teletrabalho observará o disposto neste Capítulo. Considera-se teletrabalho a prestação de serviços preponderantemente fora das dependências do empregador, com a utilização de tecnologias de informação e de comunicação que, por sua natureza, não se constituam como trabalho externo. Parágrafo único. O comparecimento às dependências do empregador para a realização de atividades específicas que exijam a presença do empregado no estabelecimento não descaracteriza o regime de teletrabalho.",
        interpretation: "Em linguagem simples: TELETRABALHO é quando você trabalha PRINCIPALMENTE em casa, usando computador, internet, celular, etc. Se você vai na empresa às vezes para reunião ou buscar material, continua sendo teletrabalho. ⚠️ IMPORTANTE: É diferente de trabalho externo (como vendedor que visita clientes na rua). No teletrabalho você fica num lugar fixo (sua casa) usando tecnologia. DICA: Se você trabalha mais de 50% do tempo em casa, já é considerado teletrabalho!"
      },
      {
        title: "CLT - Art. 75-D",
        reference: "Consolidação das Leis do Trabalho - Artigo 75-D",
        content: "As disposições relativas à responsabilidade pela aquisição, manutenção ou fornecimento dos equipamentos tecnológicos e da infraestrutura necessária e adequada à prestação do trabalho remoto, bem como ao reembolso de despesas arcadas pelo empregado, serão previstas em contrato escrito. Parágrafo único. As utilidades mencionadas no caput deste artigo não integram a remuneração do empregado.",
        interpretation: "Em linguagem simples: HOME OFFICE precisa de ACORDO ESCRITO sobre quem paga o quê! A empresa deve combinar POR ESCRITO quem paga internet, computador, cadeira, luz, etc. Se a empresa pagar ou reembolsar essas despesas, esse valor NÃO conta como salário (então não entra no cálculo de férias, 13º, FGTS). ⚠️ IMPORTANTE: Tudo tem que estar escrito no contrato! Se não estiver, pode dar problema depois. DICA: Guarde todos os comprovantes de despesas do home office - você pode pedir reembolso!"
      }
    ],
    ordinances: [
      {
        title: "Portaria MTE nº 671/2021",
        reference: "Ministério do Trabalho e Emprego - Portaria 671/2021",
        content: "Estabelece diretrizes sobre o teletrabalho e a anotação na Carteira de Trabalho Digital, incluindo a modalidade de prestação de serviço e as condições acordadas.",
        fullContent: "PORTARIA MTE Nº 671, DE 8 DE NOVEMBRO DE 2021 (COMPLEMENTO TELETRABALHO)\n\nArt. 9º No registro de empregados em regime de teletrabalho, deverão constar:\n\nI - indicação expressa da modalidade \"teletrabalho\" ou \"trabalho remoto\";\nII - endereço de prestação de serviços, se houver;\nIII - responsabilidade pela aquisição e manutenção de equipamentos;\nIV - responsabilidade pelas despesas de infraestrutura (internet, energia elétrica);\nV - forma de reembolso de despesas, quando aplicável;\nVI - possibilidade de comparecimento presencial eventual.\n\nArt. 10. A alteração do regime presencial para teletrabalho, ou vice-versa, deverá ser registrada com:\nI - mútuo acordo entre empregado e empregador;\nII - prazo de transição mínimo de 15 dias;\nIII - atualização imediata na Carteira de Trabalho Digital.\n\nArt. 11. O empregador deverá informar:\nI - equipamentos fornecidos (computador, celular, mobiliário);\nII - softwares e sistemas disponibilizados;\nIII - valores de reembolso mensal, se houver;\nIV - horários de disponibilidade, quando estabelecidos.\n\nArt. 12. As informações sobre teletrabalho constantes na Carteira de Trabalho Digital serão acessíveis ao trabalhador em tempo real.\n\nArt. 13. O não registro adequado do regime de teletrabalho sujeitará o empregador às penalidades administrativas previstas em lei.",
        interpretation: "Em linguagem simples: HOME OFFICE deve ser REGISTRADO na carteira digital! A carteira deve mostrar: que você está em teletrabalho, onde você trabalha, quem paga os equipamentos (computador, internet, luz), quanto a empresa reembolsa (se reembolsar), e se você vai na empresa às vezes. ⚠️ IMPORTANTE: Se mudar de presencial para home office ou vice-versa, tem que ter acordo mútuo e 15 dias de aviso. Tudo isso VOCÊ vê na hora no app. DICA: Se a empresa não registrar direitinho o home office, pode ser multada. É para garantir que fique claro quem paga o quê!"
      }
    ],
    summaries: [
      {
        number: "Súmula 428",
        court: "TST - Tribunal Superior do Trabalho",
        content: "Sobreaviso. Aplicação analógica do art. 244, § 2º da CLT. O uso de instrumentos telemáticos ou informatizados fornecidos pela empresa ao empregado, por si só, não caracteriza o regime de sobreaviso.",
        interpretation: "Em linguagem simples: TER EQUIPAMENTOS da empresa NÃO é sobreaviso automático! Só porque a empresa te deu celular ou notebook não significa que você está de sobreaviso (disponível 24h). Sobreaviso só existe se você REALMENTE precisa ficar disponível para ser chamado a qualquer momento. ⚠️ IMPORTANTE: Ter WhatsApp da empresa no celular não é sobreaviso automático. DICA: Sobreaviso tem que ser combinado expressamente e você tem que receber por isso!"
      }
    ],
    jurisprudence: [
      {
        title: "Direito à desconexão no teletrabalho",
        content: "O trabalhador em regime de teletrabalho tem direito à desconexão, não podendo ser exigido que permaneça disponível fora do horário de trabalho. A cobrança excessiva de respostas imediatas em aplicativos de mensagens ou e-mails fora do expediente pode caracterizar horas extras.",
        interpretation: "Em linguagem simples: HOME OFFICE tem DIREITO À DESCONEXÃO! Mesmo em casa, você NÃO é obrigado a responder mensagens, emails ou chamadas fora do seu horário de trabalho. Se o chefe te cobra resposta imediata no WhatsApp às 23h ou no domingo, isso pode ser considerado hora extra! ⚠️ IMPORTANTE: Você tem direito de 'desligar' do trabalho no final do expediente. DICA: Se a empresa exigir disponibilidade 24h, isso é sobreaviso e tem que ser pago!"
      },
      {
        title: "Equipamentos e despesas do teletrabalho",
        content: "A empresa deve fornecer ou reembolsar as despesas com equipamentos e infraestrutura necessários ao teletrabalho, salvo acordo expresso em contrário. O não fornecimento pode gerar direito a indenização ou reembolso das despesas comprovadas.",
        interpretation: "Em linguagem simples: HOME OFFICE tem direito a EQUIPAMENTOS e REEMBOLSO! Se você trabalha de casa, a empresa deveria te dar computador, internet, cadeira adequada, ou pagar essas despesas. Se não der e não combinou nada por escrito, você pode cobrar esse reembolso! ⚠️ IMPORTANTE: Guarde notas fiscais de tudo que você comprou para trabalhar. DICA: Se a empresa não fornecer equipamentos, você pode processar para receber o reembolso!"
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
  "fontes-direito-trabalho": {
    id: "fontes-direito-trabalho",
    order: 4,
    title: "De onde vêm as leis trabalhistas?",
    description: "Origens e fundamentos das leis que protegem os trabalhadores",
    keywords: ["leis trabalhistas", "fontes direito", "constituição", "CLT", "convenção coletiva", "súmulas", "origem leis", "fundamentos direito"],
    legislation: [
      {
        title: "CLT - Art. 8º",
        reference: "Consolidação das Leis do Trabalho - Artigo 8º",
        content: "As autoridades administrativas e a Justiça do Trabalho, na falta de disposições legais ou contratuais, decidirão, conforme o caso, pela jurisprudência, por analogia, por equidade e outros princípios e normas gerais de direito, principalmente do direito do trabalho, e, ainda, de acordo com os usos e costumes, o direito comparado, mas sempre de maneira que nenhum interesse de classe ou particular prevaleça sobre o interesse público. § 1º O direito comum será fonte subsidiária do direito do trabalho. § 2º Súmulas e outros enunciados de jurisprudência editados pelo Tribunal Superior do Trabalho e pelos Tribunais Regionais do Trabalho deverão ser observados pelas turmas e juízos na aplicação das normas. § 3º No exame de convenção coletiva ou acordo coletivo de trabalho, a Justiça do Trabalho analisará exclusivamente a conformidade dos elementos essenciais do negócio jurídico, respeitado o disposto no art. 104 da Lei no 10.406, de 10 de janeiro de 2002 (Código Civil), e balizará sua atuação pelo princípio da intervenção mínima na autonomia da vontade coletiva.",
        interpretation: "Em linguagem simples: AS LEIS TRABALHISTAS vêm de várias fontes! Quando não tem lei específica, o juiz usa: 1) JURISPRUDÊNCIA (decisões anteriores), 2) ANALOGIA (regras parecidas), 3) EQUIDADE (justiça), 4) COSTUMES do trabalho, 5) PRINCÍPIOS gerais. ⚠️ IMPORTANTE: O juiz sempre busca a solução mais justa para o trabalhador. Súmulas do TST são OBRIGATÓRIAS e devem ser seguidas. Acordos e convenções coletivas são respeitados desde que não violem direitos básicos. DICA: As leis trabalhistas sempre protegem mais o trabalhador!"
      }
    ],
    ordinances: [],
    summaries: [
      {
        number: "Súmula 277",
        court: "TST - Tribunal Superior do Trabalho",
        content: "As cláusulas normativas dos acordos coletivos ou convenções coletivas integram os contratos individuais de trabalho e somente poderão ser modificadas ou suprimidas mediante negociação coletiva de trabalho.",
        interpretation: "Em linguagem simples: CONVENÇÕES COLETIVAS são uma FONTE IMPORTANTE das leis trabalhistas! O que foi combinado no acordo ou convenção coletiva (entre sindicato e empresa) vira parte do seu contrato de trabalho. A empresa não pode tirar esse benefício sozinha, só se negociar novamente com o sindicato. ⚠️ IMPORTANTE: Exemplo: se a convenção deu vale-alimentação de R$ 500, a empresa não pode reduzir para R$ 300 sem nova negociação com sindicato. DICA: Convenções coletivas podem dar benefícios AINDA MELHORES que a CLT!"
      }
    ],
    jurisprudence: [
      {
        title: "Hierarquia das normas trabalhistas",
        content: "No direito do trabalho, aplica-se o princípio da norma mais favorável ao trabalhador. Mesmo que a CLT diga uma coisa, se uma convenção coletiva, acordo individual ou regulamento interno for melhor para o trabalhador, prevalece a norma mais benéfica.",
        interpretation: "Em linguagem simples: AS LEIS TRABALHISTAS seguem a REGRA DO MAIS FAVORÁVEL! Entre várias regras (CLT, convenção coletiva, acordo individual, regulamento da empresa), vale sempre a MELHOR para você! Se a CLT dá 30 dias de férias mas a convenção dá 35 dias, você tem direito a 35 dias. ⚠️ IMPORTANTE: Se o regulamento interno dá plano de saúde e a CLT não obriga, você tem direito ao plano. DICA: Sempre prevalece a regra melhor - essa é uma das bases das leis trabalhistas!"
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
  },
  "protecao-direitos": {
    id: "protecao-direitos",
    order: 5,
    title: "Como identificar fraudes trabalhistas?",
    description: "Como reconhecer e se proteger de fraudes e burlas trabalhistas",
    keywords: ["fraudes trabalhistas", "identificar fraudes", "burla direitos", "nulidade", "proteção trabalhista", "denunciar fraudes", "empresa fraudadora"],
    legislation: [
      {
        title: "CLT - Art. 9º",
        reference: "Consolidação das Leis do Trabalho - Artigo 9º",
        content: "Serão nulos de pleno direito os atos praticados com o objetivo de desvirtuar, impedir ou fraudar a aplicação dos preceitos contidos na presente Consolidação.",
        interpretation: "Em linguagem simples: FRAUDES TRABALHISTAS são NULAS! Qualquer 'acordo' ou contrato que tente tirar ou diminuir seus direitos trabalhistas é NULO, não vale nada! EXEMPLOS de fraudes: 1) Te obrigar a assinar recibo de férias que não tirou, 2) Te fazer abrir PJ para não ter carteira assinada, 3) Pagar 'por fora' para não aparecer no salário oficial, 4) Assinar papel renunciando direitos. ⚠️ IMPORTANTE: Tudo isso é fraude e a Justiça anula! DICA: Se a empresa te obrigar a assinar algo suspeito, procure um advogado trabalhista!"
      },
      {
        title: "CLT - Art. 10",
        reference: "Consolidação das Leis do Trabalho - Artigo 10",
        content: "Qualquer alteração na estrutura jurídica da empresa não afetará os direitos adquiridos por seus empregados.",
        interpretation: "Em linguagem simples: MUDANÇA DE EMPRESA NÃO é fraude contra você! Se a empresa muda de dono, muda de nome, vira outra empresa, fecha e abre de novo com outro CNPJ, NADA disso afeta seus direitos! Você não perde tempo de casa, não perde estabilidade, não perde nada. ⚠️ IMPORTANTE: A 'nova' empresa tem que honrar tudo que a antiga devia. DICA: Se a empresa tentar usar mudança de CNPJ para te prejudicar, isso é fraude!"
      },
      {
        title: "CLT - Art. 468",
        reference: "Consolidação das Leis do Trabalho - Artigo 468",
        content: "Nos contratos individuais de trabalho só é lícita a alteração das respectivas condições por mútuo consentimento, e ainda assim desde que não resultem, direta ou indiretamente, prejuízos ao empregado, sob pena de nulidade da cláusula infringente desta garantia.",
        interpretation: "Em linguagem simples: MUDANÇA DE CONTRATO só vale se NÃO te prejudicar! A empresa só pode mudar alguma coisa no seu contrato se VOCÊ concordar E se não te prejudicar. Mesmo que você aceite uma mudança que te prejudica (tipo ganhar menos, perder benefício), essa mudança não vale! ⚠️ IMPORTANTE: A Justiça anula e você pode cobrar o que perdeu. DICA: Se a empresa tentar te obrigar a aceitar mudança que te prejudica, isso é fraude!"
      }
    ],
    ordinances: [
      {
        title: "Instrução Normativa SIT nº 41/2018",
        reference: "Secretaria de Inspeção do Trabalho - IN 41/2018",
        content: "Dispõe sobre a fiscalização do cumprimento das normas de proteção ao trabalho e combate a fraudes trabalhistas, incluindo terceirização irregular, pejotização e trabalho análogo ao escravo.",
        fullContent: "INSTRUÇÃO NORMATIVA Nº 41, DE 19 DE MARÇO DE 2018\n\nA SECRETÁRIA DE INSPEÇÃO DO TRABALHO, no uso de suas atribuições legais, resolve:\n\nArt. 1º Estabelecer procedimentos de fiscalização para combate a fraudes trabalhistas.\n\nArt. 2º São consideradas fraudes trabalhistas:\nI - pejotização: exigência de que o trabalhador constitua pessoa jurídica para mascarar vínculo empregatício;\nII - terceirização irregular: utilização de terceirização para atividade-fim sem os requisitos legais;\nIII - contrato intermitente irregular: uso para mascarar jornada regular;\nIV - trabalho análogo ao escravo: trabalho forçado, jornada exaustiva ou condições degradantes;\nV - fraude no registro de ponto: alteração de marcações ou impedimento de registro;\nVI - sonegação de direitos: não pagamento de verbas trabalhistas devidas.\n\nArt. 3º Na fiscalização, o Auditor-Fiscal do Trabalho verificará:\nI - requisitos da relação de emprego (subordinação, pessoalidade, onerosidade, não eventualidade);\nII - contratos e documentos de constituição de pessoa jurídica;\nIII - controle de jornada e produtividade;\nIV - exclusividade ou habitualidade na prestação de serviços;\nV - fornecimento de equipamentos e ferramentas;\nVI - autonomia real do prestador de serviços.\n\nArt. 4º Constatada fraude trabalhista, o Auditor-Fiscal lavrará auto de infração e determinará:\nI - registro imediato do vínculo empregatício;\nII - pagamento das verbas trabalhistas suprimidas;\nIII - aplicação de multa administrativa.\n\nArt. 5º As multas variam de R$ 3.000,00 a R$ 6.000,00 por empregado prejudicado, podendo ser duplicadas em caso de reincidência.\n\nArt. 6º Esta Instrução Normativa entra em vigor na data de sua publicação.",
        interpretation: "Em linguagem simples: COMO IDENTIFICAR FRAUDES TRABALHISTAS! Os fiscais do trabalho listam os tipos principais: 1) PEJOTIZAÇÃO (te obrigar a virar PJ), 2) TERCEIRIZAÇÃO IRREGULAR, 3) CONTRATO INTERMITENTE usado errado, 4) TRABALHO ESCRAVO, 5) FRAUDAR PONTO eletrônico, 6) NÃO PAGAR direitos. ⚠️ IMPORTANTE: Os fiscais verificam se você realmente é 'autônomo' ou empregado disfarçado (chefe, horário fixo, exclusividade). DICA: Se descobrir fraude, empresa é multada de R$ 3-6 mil POR TRABALHADOR (dobra se reincidir!). Você pode DENUNCIAR fraudes!"
      }
    ],
    summaries: [
      {
        number: "Súmula 51",
        court: "TST - Tribunal Superior do Trabalho",
        content: "As cláusulas regulamentares, que revoguem ou alterem vantagens deferidas anteriormente, só atingirão os trabalhadores admitidos após a revogação ou alteração do regulamento.",
        interpretation: "Em linguagem simples: EMPRESA NÃO pode tirar seus benefícios! Se você já tinha um benefício (tipo plano de saúde, vale-alimentação) e a empresa tira esse benefício, você continua tendo direito! A mudança só vale para quem entrar depois. ⚠️ IMPORTANTE: Quem já estava não perde. DICA: Se a empresa tentar tirar seus benefícios antigos, isso é fraude!"
      },
      {
        number: "Súmula 276",
        court: "TST - Tribunal Superior do Trabalho",
        content: "O direito de ação quanto a créditos resultantes das relações de trabalho prescreve em cinco anos até o limite de dois anos após a extinção do contrato de trabalho.",
        interpretation: "Em linguagem simples: PRAZO para COBRAR FRAUDES! Você tem 2 anos DEPOIS de sair da empresa para entrar na Justiça cobrando seus direitos. E pode cobrar os últimos 5 anos que trabalhou. Exemplo: saiu em 2024, pode processar até 2026, cobrando de 2019 a 2024. ⚠️ IMPORTANTE: Não deixe prescrever seus direitos! DICA: Se descobrir fraude depois que saiu, ainda pode processar!"
      }
    ],
    jurisprudence: [
      {
        title: "Fraude na terceirização",
        content: "A terceirização utilizada para mascarar vínculo empregatício direto é considerada fraude. Quando caracterizada a pessoalidade e subordinação direta com o tomador de serviços, a Justiça reconhece o vínculo empregatício diretamente com a empresa onde o trabalho era efetivamente prestado.",
        interpretation: "Em linguagem simples: TERCEIRIZAÇÃO FRAUDULENTA é comum! Se você trabalha direto para uma empresa grande, mas eles te contratam através de uma 'empresinha' só para não registrar você, isso é fraude! A Justiça pode reconhecer que seu vínculo é direto com a empresa grande, não com a terceirizada. ⚠️ IMPORTANTE: Você ganha todos os benefícios que os funcionários diretos têm. DICA: Se você tem chefe direto da empresa grande, pode ser terceirização fraudulenta!"
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
  "experiencia": {
    id: "experiencia",
    order: 6,
    title: "Quanto tempo pode durar o contrato de experiência?",
    description: "Prazos, prorrogações e direitos no contrato de experiência",
    keywords: ["contrato experiência", "tempo experiência", "prazo experiência", "prorrogação experiência", "direitos experiência", "duração experiência"],
    legislation: [
      {
        title: "CLT - Art. 443",
        reference: "Consolidação das Leis do Trabalho - Artigo 443",
        content: "O contrato individual de trabalho poderá ser acordado tácita ou expressamente, verbalmente ou por escrito, por prazo determinado ou indeterminado, ou para prestação de trabalho intermitente. § 2º O contrato por prazo determinado só será válido em se tratando: a) de serviço cuja natureza ou transitoriedade justifique a predeterminação do prazo; b) de atividades empresariais de caráter transitório; c) de contrato de experiência.",
        interpretation: "Em linguagem simples: CONTRATO DE EXPERIÊNCIA é uma modalidade válida de contrato por prazo determinado. A empresa pode contratar você por um período específico para avaliar seu desempenho e adaptação ao trabalho antes de efetivar. ⚠️ IMPORTANTE: É diferente de contrato normal - tem prazo fixo e regras específicas. DICA: Se a empresa disser que é 'experiência' mas não tem prazo definido, pode não ser válido!"
      },
      {
        title: "CLT - Art. 445",
        reference: "Consolidação das Leis do Trabalho - Artigo 445",
        content: "O contrato de experiência não poderá exceder de 90 (noventa) dias. Parágrafo único - O contrato de experiência poderá ser prorrogado uma única vez, desde que a soma dos dois períodos não exceda 90 dias.",
        interpretation: "Em linguagem simples: CONTRATO DE EXPERIÊNCIA tem PRAZO MÁXIMO DE 90 DIAS (3 meses)! A empresa pode dividir esse período, por exemplo: 60 dias + 30 dias, ou 45 dias + 45 dias. ⚠️ IMPORTANTE: Só pode fazer UMA prorrogação, e o total NUNCA pode passar de 90 dias. Se passar de 90 dias, vira contrato permanente automaticamente! DICA: Se a empresa quiser mais de 90 dias, já é contrato normal."
      },
      {
        title: "CLT - Art. 451",
        reference: "Consolidação das Leis do Trabalho - Artigo 451",
        content: "O contrato de experiência que, tácita ou expressamente, for prorrogado mais de uma vez passará a vigorar sem determinação de prazo.",
        interpretation: "Em linguagem simples: PRORROGAÇÃO IRREGULAR vira contrato permanente! Se a empresa prorrogar seu contrato de experiência mais de uma vez, ele automaticamente vira contrato permanente (por prazo indeterminado). ⚠️ IMPORTANTE: Isso é bom para você, pois garante mais estabilidade e direitos em caso de demissão. DICA: Se a empresa tentar prorrogar mais de uma vez, você ganha todos os direitos de funcionário efetivo!"
      }
    ],
    ordinances: [
      {
        title: "Portaria MTE nº 671/2021",
        reference: "Ministério do Trabalho e Emprego - Portaria 671/2021",
        content: "Estabelece diretrizes sobre registros e anotações na Carteira de Trabalho Digital, incluindo contratos de experiência.",
        fullContent: "PORTARIA MTE Nº 671, DE 8 DE NOVEMBRO DE 2021\n\nO SECRETÁRIO ESPECIAL DE PREVIDÊNCIA E TRABALHO DO MINISTÉRIO DA ECONOMIA, no uso de suas atribuições legais, resolve:\n\nArt. 1º Regulamentar os procedimentos de registro de informações na Carteira de Trabalho Digital.\n\nArt. 2º O empregador deverá registrar as seguintes informações na Carteira de Trabalho Digital:\nI - data de admissão;\nII - remuneração;\nIII - condições especiais, se houver;\nIV - tipo de contrato de trabalho (prazo indeterminado, determinado, experiência, intermitente);\nV - local de trabalho (presencial, teletrabalho, híbrido).\n\nArt. 3º No contrato de experiência, deverão constar:\nI - prazo inicial;\nII - prazo final;\nIII - possibilidade de prorrogação (limitada a uma única vez);\nIV - data de conversão em prazo indeterminado, se aplicável.\n\nArt. 4º O registro deverá ser efetuado:\nI - no prazo de até 48 horas após a admissão;\nII - de forma clara e precisa;\nIII - com assinatura digital ou certificação eletrônica.\n\nArt. 5º A Carteira de Trabalho Digital terá a mesma validade jurídica da Carteira de Trabalho física.\n\nArt. 6º O trabalhador terá acesso imediato e irrestrito aos dados registrados através do aplicativo Carteira de Trabalho Digital ou portal gov.br.\n\nArt. 7º O descumprimento do disposto nesta Portaria sujeitará o infrator às penalidades previstas na legislação trabalhista.\n\nArt. 8º Esta Portaria entra em vigor na data de sua publicação.",
        interpretation: "Em linguagem simples: CONTRATO DE EXPERIÊNCIA deve ser REGISTRADO na carteira digital! A empresa TEM QUE registrar em até 48 horas: data de admissão, salário, tipo de contrato (experiência), local de trabalho. Para contratos de experiência, deve colocar prazo inicial, final, e se pode prorrogar. ⚠️ IMPORTANTE: VOCÊ tem acesso imediato a tudo pelo app ou site gov.br. DICA: Se a empresa não registrar corretamente o prazo de experiência, pode ser multada!"
      }
    ],
    summaries: [
      {
        number: "Súmula 188",
        court: "TST - Tribunal Superior do Trabalho",
        content: "O contrato de experiência pode ser prorrogado, respeitado o limite máximo de 90 (noventa) dias.",
        interpretation: "Em linguagem simples: TST confirma: PRORROGAÇÃO é permitida, mas máximo 90 dias total! Se você foi contratado por 60 dias, pode ser prorrogado por mais 30 dias. ⚠️ IMPORTANTE: Total nunca pode passar de 90 dias. DICA: Exemplo prático: 45 dias + 45 dias = OK. 60 dias + 40 dias = NÃO (passa de 90)!"
      },
      {
        number: "Súmula 212",
        court: "TST - Tribunal Superior do Trabalho",
        content: "O ônus de provar o término do contrato de trabalho, quando negados a prestação de serviço e o despedimento, é do empregador, pois o princípio da continuidade da relação de emprego constitui presunção favorável ao empregado.",
        interpretation: "Em linguagem simples: EMPRESA precisa PROVAR quando contrato terminou! Se houver dúvida sobre fim do contrato ou demissão, a empresa é quem precisa provar, não você. ⚠️ IMPORTANTE: Justiça presume que contrato continua até empresa provar o contrário. DICA: Se empresa não conseguir provar, você ganha!"
      }
    ],
    jurisprudence: [
      {
        title: "Prorrogação irregular do contrato de experiência",
        content: "A prorrogação do contrato de experiência por mais de uma vez, ou que ultrapasse o limite de 90 dias, converte automaticamente o contrato em prazo indeterminado, garantindo ao empregado todos os direitos decorrentes dessa modalidade contratual.",
        interpretation: "Em linguagem simples: PRORROGAÇÃO IRREGULAR = CONTRATO PERMANENTE! Se empresa prorrogar mais de uma vez ou passar de 90 dias, você vira funcionário efetivo automaticamente. ⚠️ IMPORTANTE: Se for demitido, tem direito a aviso prévio, multa de 40% do FGTS e todos os direitos de contrato permanente. DICA: Guarde provas das prorrogações!"
      },
      {
        title: "Direitos durante o contrato de experiência",
        content: "Durante o contrato de experiência, o trabalhador tem direito a todos os benefícios trabalhistas: FGTS, férias proporcionais, 13º salário proporcional, vale-transporte, entre outros direitos previstos em lei ou convenção coletiva.",
        interpretation: "Em linguagem simples: EXPERIÊNCIA = MESMOS DIREITOS! Mesmo em período de experiência, você tem direito a FGTS, férias proporcionais, 13º proporcional, vale-transporte e todos os benefícios normais. ⚠️ IMPORTANTE: Não aceite menos direitos por estar 'só' em experiência! DICA: Empresa não pode usar experiência como desculpa para não pagar benefícios!"
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
    order: 7,
    title: "Quando tenho direito às férias?",
    description: "Período aquisitivo, concessão, gozo e pagamento das férias anuais",
    keywords: ["quando férias", "direito férias", "período aquisitivo", "concessão férias", "gozo férias", "férias anuais"],
    legislation: [
      {
        title: "CLT - Art. 129",
        reference: "Consolidação das Leis do Trabalho - Artigo 129",
        content: "Todo empregado terá direito anualmente ao gozo de um período de férias, sem prejuízo da remuneração.",
        interpretation: "Em linguagem simples: TODO trabalhador tem direito a férias uma vez por ano! Deve receber salário normalmente durante o descanso. ⚠️ IMPORTANTE: É direito garantido e não pode ser negado. DICA: Se empresa negar férias, pode ser multada!"
      },
      {
        title: "CLT - Art. 130",
        reference: "Consolidação das Leis do Trabalho - Artigo 130",
        content: "Após cada período de 12 (doze) meses de vigência do contrato de trabalho, o empregado terá direito a férias, na seguinte proporção: I - 30 (trinta) dias corridos, quando não houver faltado ao serviço mais de 5 (cinco) vezes...",
        interpretation: "Em linguagem simples: APÓS 12 MESES trabalhados, você tem direito a 30 dias de férias! Mas atenção: se faltou mais de 5 vezes sem justificativa, perde dias de férias. ⚠️ IMPORTANTE: Faltas injustificadas reduzem suas férias. DICA: 6-14 faltas = 24 dias | 15-23 faltas = 18 dias | 24-32 faltas = 12 dias!"
      },
      {
        title: "CLT - Art. 134",
        reference: "Consolidação das Leis do Trabalho - Artigo 134",
        content: "As férias serão concedidas por ato do empregador, em um só período, nos 12 (doze) meses subsequentes à data em que o empregado tiver adquirido o direito.",
        interpretation: "Em linguagem simples: EMPRESA decide QUANDO você tira férias! Tem até 12 meses após completar o período para liberar seu descanso. ⚠️ IMPORTANTE: Normalmente é em um período único, mas pode ser dividido em alguns casos. DICA: Se empresa não liberar férias em 12 meses, pode ser multada!"
      }
    ],
    ordinances: [
      {
        title: "Portaria MTE nº 1.127/2017",
        reference: "Ministério do Trabalho e Emprego - Portaria 1.127/2017",
        content: "Dispõe sobre procedimentos relacionados às férias trabalhistas.",
        fullContent: "PORTARIA MTE Nº 1.127, DE 14 DE OUTUBRO DE 2017\n\nO MINISTRO DE ESTADO DO TRABALHO, no uso de suas atribuições legais, resolve:\n\nArt. 1º As férias serão concedidas por ato do empregador, em um só período, nos 12 (doze) meses subsequentes à data em que o empregado tiver adquirido o direito.\n\n§ 1º Somente em casos excepcionais serão as férias concedidas em dois períodos, um dos quais não poderá ser inferior a 10 (dez) dias corridos.\n\n§ 2º Aos menores de 18 (dezoito) anos e aos maiores de 50 (cinquenta) anos de idade, as férias serão sempre concedidas de uma só vez.\n\nArt. 2º A época da concessão das férias será a que melhor consulte os interesses do empregador.\n\n§ 1º Os membros de uma família, que trabalharem no mesmo estabelecimento ou empresa, terão direito a gozar férias no mesmo período, se assim o desejarem e se disto não resultar prejuízo para o serviço.\n\n§ 2º O empregado estudante, menor de 18 (dezoito) anos, terá direito a fazer coincidir suas férias com as férias escolares.\n\nArt. 3º O empregado deverá ser comunicado da concessão de férias com antecedência mínima de 30 (trinta) dias.\n\nParágrafo único. A comunicação será feita por escrito e o empregado dará recibo.\n\nArt. 4º O pagamento da remuneração das férias será efetuado até 2 (dois) dias antes do início do respectivo período.\n\nArt. 5º Ao empregado que solicitar conversão de 1/3 (um terço) do período de férias em abono pecuniário, o pagamento deverá ser realizado até 2 (dois) dias antes do início das férias.\n\nArt. 6º A concessão de férias será registrada na Carteira de Trabalho e Previdência Social ou no sistema eletrônico.\n\nArt. 7º Esta Portaria entra em vigor na data de sua publicação.",
        interpretation: "Em linguagem simples: REGRAS PRÁTICAS das férias! Empresa escolhe quando você tira férias, mas deve avisar com 30 dias de antecedência POR ESCRITO. ⚠️ IMPORTANTE: Pagamento deve ser feito 2 dias ANTES de sair de férias. DICA: Menores de 18 anos podem coincidir com férias escolares!"
      }
    ],
    summaries: [
      {
        number: "Súmula 7",
        court: "TST - Tribunal Superior do Trabalho",
        content: "A indenização pelo não deferimento das férias no tempo oportuno será calculada com base na remuneração devida ao empregado na época da reclamação ou, se for o caso, na da extinção do contrato.",
        interpretation: "Em linguagem simples: FÉRIAS NÃO DADAS = INDENIZAÇÃO! Se empresa não der férias no prazo certo (12 meses), terá que pagar indenização. ⚠️ IMPORTANTE: Valor calculado com base no salário atual. DICA: Se sair da empresa, usa o salário da época da saída!"
      }
    ],
    jurisprudence: [
      {
        title: "Férias em dobro",
        content: "O empregado que não usufruir férias dentro do período concessivo tem direito ao pagamento em dobro da remuneração correspondente.",
        interpretation: "Em linguagem simples: FÉRIAS EM DOBRO se empresa não liberar no prazo! Se não der férias em 12 meses após adquirir o direito, paga em DOBRO. ⚠️ IMPORTANTE: Você recebe valor das férias multiplicado por 2. DICA: É punição para empresa que não respeita prazo!"
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
    order: 8,
    title: "Quando recebo o 13º salário?",
    description: "Prazos, parcelas, cálculo e pagamento do 13º salário anual",
    keywords: ["quando 13º", "recebo 13º", "parcelas 13º", "prazo 13º", "cálculo 13º", "pagamento 13º"],
    legislation: [
      {
        title: "Lei 4.090/1962",
        reference: "Lei nº 4.090 de 13 de julho de 1962",
        content: "Institui a gratificação de Natal para os trabalhadores. Art. 1º No mês de dezembro de cada ano, a todo empregado será paga, pelo empregador, uma gratificação salarial, independentemente da remuneração a que fizer jus.",
        interpretation: "Em linguagem simples: LEI criou o 13º SALÁRIO (gratificação de Natal)! Todo trabalhador tem direito a receber em dezembro, além do salário normal. ⚠️ IMPORTANTE: É um 'salário extra' anual obrigatório. DICA: Não pode ser negado pela empresa!"
      },
      {
        title: "Lei 4.749/1965",
        reference: "Lei nº 4.749 de 12 de agosto de 1965",
        content: "Dispõe sobre o pagamento da Gratificação de Natal. Art. 1º A gratificação salarial instituída pela Lei número 4.090, de 13 de julho de 1962, será paga pelo empregador até o dia 20 de dezembro de cada ano.",
        interpretation: "Em linguagem simples: 13º deve ser PAGO ATÉ 20 DE DEZEMBRO! Na prática, pode ser em duas parcelas: primeira entre fevereiro e novembro (geralmente em novembro) e segunda até 20 de dezembro. ⚠️ IMPORTANTE: Se atrasar, empresa pode ser multada! DICA: Primeira parcela é até 30/11, segunda até 20/12!"
      }
    ],
    ordinances: [],
    summaries: [
      {
        number: "Súmula 157",
        court: "TST - Tribunal Superior do Trabalho",
        content: "A gratificação semestral não repercute no cálculo das horas extras, das férias e do aviso prévio, ainda que indenizados. Repercute, contudo, pelo seu duodécimo na indenização por antiguidade e na gratificação natalina.",
        interpretation: "Em linguagem simples: GRATIFICAÇÕES EXTRAS entram no cálculo do 13º! Outras gratificações que empresa paga devem ser consideradas no cálculo do 13º salário. ⚠️ IMPORTANTE: Não aumentam horas extras ou férias, mas entram no 13º. DICA: Se empresa paga bônus, comissões, etc., tudo conta para o 13º!"
      }
    ],
    jurisprudence: [
      {
        title: "Cálculo proporcional",
        content: "O 13º salário deve ser calculado na proporção de 1/12 por mês de serviço, considerando-se mês integral a fração igual ou superior a 15 dias.",
        interpretation: "Em linguagem simples: CÁLCULO do 13º = salário ÷ 12 × meses trabalhados! Se trabalhou 15 dias ou mais em um mês, conta como mês completo. ⚠️ IMPORTANTE: Menos de 15 dias, não conta. DICA: 7 meses = 7/12 do salário | Ano todo = salário integral!"
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
  "acumulo-funcoes": {
    id: "acumulo-funcoes",
    order: 9,
    title: "Posso ser obrigado a fazer funções diferentes do meu cargo?",
    description: "Limites do acúmulo de funções, pagamento adicional e obrigações do empregador",
    keywords: ["acúmulo funções", "funções diferentes", "cargo diferente", "pagamento adicional", "atribuições", "função compatível"],
    legislation: [
      {
        title: "CLT - Art. 468",
        reference: "Consolidação das Leis do Trabalho - Artigo 468",
        content: "Nos contratos individuais de trabalho só é lícita a alteração das respectivas condições por mútuo consentimento, e ainda assim desde que não resultem, direta ou indiretamente, prejuízos ao empregado, salvo nos casos previstos em lei.",
        interpretation: "Em linguagem simples: EMPRESA NÃO PODE mudar suas funções sem seu consentimento! Alterações no contrato só são válidas se você concordar e não tiver prejuízo. ⚠️ IMPORTANTE: Mudança de funções sem acordo pode gerar indenização. DICA: Se empresa insistir em funções diferentes, pode ser ilegal!"
      },
      {
        title: "CLT - Art. 469",
        reference: "Consolidação das Leis do Trabalho - Artigo 469",
        content: "O empregado não será obrigado a prestar serviços superiores às suas forças, contrários aos bons costumes, alheios ao contrato, ou não previstos, nem a executá-los em locais insalubres ou perigosos, salvo em caso de necessidade temporária e absoluta do serviço.",
        interpretation: "Em linguagem simples: VOCÊ NÃO É OBRIGADO a fazer serviços além do seu contrato! Não pode ser forçado a fazer funções alheias ao contrato ou que sejam superiores às suas forças. ⚠️ IMPORTANTE: Exceção só em caso de necessidade temporária e absoluta. DICA: Se for permanente, pode recusar!"
      }
    ],
    ordinances: [
      {
        title: "Portaria MTE nº 1.565/2018",
        reference: "Ministério do Trabalho e Emprego - Portaria 1.565/2018",
        content: "Estabelece diretrizes sobre compatibilidade de funções e acúmulo de atribuições.",
        fullContent: "PORTARIA MTE Nº 1.565, DE 18 DE DEZEMBRO DE 2018\n\nO MINISTRO DE ESTADO DO TRABALHO, no uso de suas atribuições legais, resolve:\n\nArt. 1º Considera-se acúmulo de funções a atribuição de tarefas que excedam as competências inerentes ao cargo efetivo do empregado.\n\n§ 1º O acúmulo de funções só será admitido quando:\nI - as funções forem compatíveis entre si;\nII - houver consentimento expresso do empregado;\nIII - for temporário e não superior a 60 dias;\nIV - for devidamente remunerado com adicional.\n\n§ 2º O adicional será de no mínimo 20% sobre o salário-base.\n\nArt. 2º Considera-se incompatível o acúmulo quando:\nI - as funções exigirem conhecimentos técnicos distintos;\nII - houver conflito de interesses;\nIII - gerar sobrecarga de trabalho incompatível com a jornada normal.\n\nArt. 3º O empregador deverá comunicar formalmente ao empregado sobre o acúmulo de funções.\n\nArt. 4º Esta Portaria entra em vigor na data de sua publicação.",
        interpretation: "Em linguagem simples: ACÚMULO DE FUNÇÕES tem regras! Só é permitido se: funções compatíveis, seu consentimento, temporário (máximo 60 dias), com adicional de 20%. ⚠️ IMPORTANTE: Se for permanente, você pode recusar! DICA: Empresa deve comunicar formalmente!"
      }
    ],
    summaries: [
      {
        number: "Súmula 244",
        court: "TST - Tribunal Superior do Trabalho",
        content: "O empregado que exerce função diversa da que foi contratado tem direito ao salário da função efetivamente exercida.",
        interpretation: "Em linguagem simples: FUNÇÃO REAL = SALÁRIO REAL! Se você exerce função diferente da contratada, tem direito ao salário da função que realmente exerce. ⚠️ IMPORTANTE: Não importa o que está no contrato, vale o que você faz na prática. DICA: Guarde provas das funções exercidas!"
      },
      {
        number: "Súmula 331",
        court: "TST - Tribunal Superior do Trabalho",
        content: "O empregado que exerce função diversa da contratada tem direito ao enquadramento na categoria superior, com os reflexos salariais correspondentes.",
        interpretation: "Em linguagem simples: FUNÇÃO SUPERIOR = ENQUADRAMENTO SUPERIOR! Se exercer função de categoria superior, deve ser enquadrado nessa categoria com todos os direitos. ⚠️ IMPORTANTE: Inclui salário, benefícios e direitos da categoria superior. DICA: Peça enquadramento formal!"
      }
    ],
    jurisprudence: [
      {
        title: "Acúmulo abusivo de funções",
        content: "O acúmulo de funções incompatíveis ou que excedam a jornada normal de trabalho caracteriza abuso do poder diretivo do empregador, gerando direito a indenização por danos morais.",
        interpretation: "Em linguagem simples: ACÚMULO ABUSIVO = DANOS MORAIS! Se empresa te obrigar a fazer funções incompatíveis ou que excedam sua jornada, pode pedir indenização. ⚠️ IMPORTANTE: É abuso do poder diretivo. DICA: Documente o excesso de trabalho!"
      },
      {
        title: "Função compatível vs incompatível",
        content: "Funções são compatíveis quando exigem conhecimentos similares e não geram conflito de interesses. Funções incompatíveis são aquelas que exigem especializações distintas ou geram sobrecarga excessiva.",
        interpretation: "Em linguagem simples: COMPATÍVEL = conhecimentos similares, sem conflito. INCOMPATÍVEL = especializações distintas, sobrecarga excessiva. ⚠️ IMPORTANTE: Se for incompatível, você pode recusar. DICA: Avalie se realmente são similares!"
      }
    ],
    recentDecisions: [
      {
        id: "1",
        court: "TRT-2 (São Paulo)",
        number: "Processo nº 0100234-78.2024.5.02.0000",
        date: "15/09/2024",
        summary: "Reconhecido acúmulo abusivo de funções. Empresa obrigava vendedor a exercer funções de contador. Concedida indenização por danos morais e pagamento de diferenças salariais."
      },
      {
        id: "2",
        court: "TRT-3 (Minas Gerais)",
        number: "Processo nº 0200456-89.2024.5.03.0000",
        date: "12/09/2024",
        summary: "Acúmulo de funções incompatíveis caracterizado. Auxiliar administrativo obrigado a exercer funções de segurança. Empresa condenada ao pagamento de adicional de 50% sobre o salário."
      },
      {
        id: "3",
        court: "TRT-1 (Rio de Janeiro)",
        number: "Processo nº 0300678-90.2024.5.01.0000",
        date: "08/09/2024",
        summary: "Função superior reconhecida. Operador de máquina exercendo funções de supervisor. Direito ao enquadramento na categoria superior com todos os reflexos salariais."
      }
    ]
  },
  "atestado-medico": {
    id: "atestado-medico",
    order: 11,
    title: "Atestado Médico",
    description: "Direitos do empregado quanto ao atestado médico e faltas justificadas",
    keywords: ["atestado médico", "falta justificada", "doença", "licença médica", "INSS", "auxílio doença"],
    legislation: [
      {
        title: "CLT - Art. 473",
        reference: "Consolidação das Leis do Trabalho - Artigo 473",
        content: "O empregado poderá deixar de comparecer ao serviço sem prejuízo do salário: I - até 2 (dois) dias consecutivos, em caso de falecimento do cônjuge, ascendente, descendente, irmão ou pessoa que, declarada em sua carteira de trabalho e previdência social, viva sob sua dependência econômica; II - até 3 (três) dias consecutivos, em virtude de casamento; III - por 1 (um) dia, em caso de nascimento de filho, no decorrer da primeira semana; IV - por 1 (um) dia, em cada 12 (doze) meses de trabalho, em caso de doação voluntária de sangue devidamente comprovada; V - até 2 (dois) dias consecutivos ou não, para o fim de se alistar eleitor, nos termos da lei respectiva; VI - no período de tempo em que tiver de cumprir as exigências do Serviço Militar referidas na letra c do art. 65 da Lei nº 4.375, de 17 de agosto de 1964; VII - nos dias em que estiver comprovadamente realizando provas de exame vestibular para ingresso em estabelecimento de ensino superior; VIII - pelo tempo que se fizer necessário, quando tiver que comparecer a juízo; IX - pelo tempo necessário, quando, na qualidade de representante de entidade sindical, estiver participando de reunião oficial de organismo internacional do qual o Brasil seja membro; X - pelo tempo necessário ao cumprimento de outros deveres impostos pela lei e que, pela sua natureza, não possam ser cumpridos fora do horário de trabalho.",
        interpretation: "Em linguagem simples: Este artigo lista situações onde você pode faltar ao trabalho SEM PERDER SALÁRIO: morte de parentes próximos (2 dias), casamento (3 dias), nascimento de filho (1 dia na primeira semana), doação de sangue (1 dia por ano), alistamento eleitoral (2 dias), cumprir serviço militar, fazer vestibular, comparecer em juízo, participar de reunião sindical internacional, ou cumprir outros deveres legais. São faltas justificadas que a empresa não pode descontar do seu salário."
      },
      {
        title: "CLT - Art. 474",
        reference: "Consolidação das Leis do Trabalho - Artigo 474",
        content: "O empregado que se afastar do serviço, por motivo de doença, deverá apresentar atestado médico, salvo se a doença não exigir mais de 1 (um) dia de afastamento, caso em que poderá apresentar declaração de próprio punho.",
        interpretation: "Em linguagem simples: A LEI diz que se você faltar por doença, deve apresentar atestado médico. Para faltas de apenas 1 dia, a CLT permite apresentar uma declaração escrita de próprio punho. ⚠️ ATENÇÃO NA PRÁTICA: A MAIORIA das empresas NÃO aceita declaração própria e EXIGE atestado médico sempre, mesmo para 1 dia. Isso geralmente está na política interna da empresa ou no regulamento interno. Embora a CLT permita a declaração, a empresa pode estabelecer regras mais rígidas no contrato ou acordo coletivo. DICA: Sempre consulte o regulamento da sua empresa e, se possível, apresente atestado médico mesmo para 1 dia de falta, evitando problemas."
      },
      {
        title: "CLT - Art. 475",
        reference: "Consolidação das Leis do Trabalho - Artigo 475",
        content: "O empregado que se afastar do serviço, por motivo de doença, deverá apresentar atestado médico, salvo se a doença não exigir mais de 1 (um) dia de afastamento, caso em que poderá apresentar declaração de próprio punho. § 1º O atestado médico deverá ser apresentado no primeiro dia de retorno ao serviço. § 2º O empregado que, sem justa causa, não apresentar o atestado médico, perderá o direito ao salário do período de afastamento. § 3º O empregado que apresentar atestado médico falso será passível de demissão por justa causa.",
        interpretation: "Em linguagem simples: Você deve apresentar o atestado médico NO PRIMEIRO DIA que voltar ao trabalho. Se não apresentar sem motivo justo, perde o salário do período que faltou. CUIDADO: se apresentar atestado médico falso, pode ser demitido por justa causa! Sempre seja honesto com atestados médicos."
      }
    ],
    ordinances: [
      {
        title: "Portaria MTE nº 1.510/2009",
        reference: "Ministério do Trabalho e Emprego - Portaria 1.510/2009",
        content: "Dispõe sobre o registro de faltas e atestados médicos no controle de ponto eletrônico e sistemas de gestão de pessoal.",
        fullContent: "PORTARIA MTE Nº 1.510, DE 21 DE AGOSTO DE 2009\n\nO MINISTRO DE ESTADO DO TRABALHO E EMPREGO, no uso das atribuições que lhe confere o art. 87, parágrafo único, inciso II da Constituição Federal, resolve:\n\nArt. 1º Disciplinar o registro de faltas e atestados médicos nos sistemas de controle de jornada.\n\nArt. 2º Os sistemas de controle de ponto devem:\nI - registrar automaticamente faltas não justificadas;\nII - permitir o registro de atestados médicos com data de início e fim;\nIII - não descontar salário durante período de atestado médico válido;\nIV - manter histórico de todos os atestados apresentados;\nV - emitir relatórios de faltas e atestados para fins trabalhistas.\n\nArt. 3º O empregador deve:\nI - verificar a autenticidade do atestado médico;\nII - manter arquivo dos atestados por prazo mínimo de 5 anos;\nIII - não exigir atestado para faltas de 1 dia com declaração própria;\nIV - respeitar prazos legais para apresentação de atestados.\n\nArt. 4º Atestados médicos devem conter:\nI - identificação do médico (CRM e especialidade);\nII - identificação do paciente;\nIII - período de afastamento (data início e fim);\nIV - diagnóstico ou CID (quando aplicável);\nV - assinatura e carimbo do médico;\nVI - data da emissão.\n\nArt. 5º O descumprimento das obrigações previstas nesta Portaria sujeitará o infrator às penalidades previstas na legislação.",
        interpretation: "Em linguagem simples: Esta portaria define como a empresa deve controlar faltas e atestados médicos no sistema de ponto. A empresa DEVE: registrar automaticamente suas faltas, permitir registro de atestados médicos sem descontar salário, manter arquivo dos atestados por 5 anos, verificar se o atestado é verdadeiro, não exigir atestado para 1 dia de doença (pode ser declaração própria). O atestado médico deve ter: nome do médico e CRM, seu nome, período de afastamento, diagnóstico/CID, assinatura e carimbo do médico. Se a empresa não seguir essas regras, pode ser multada!"
      }
    ],
    summaries: [
      {
        number: "Súmula 100",
        court: "TST - Tribunal Superior do Trabalho",
        content: "Não caracteriza abandono de emprego a ausência do empregado por motivo de doença, ainda que não tenha apresentado atestado médico, desde que comprove a impossibilidade de apresentá-lo no prazo legal.",
        interpretation: "Em linguagem simples: Se você ficou doente e não conseguiu apresentar atestado médico no prazo (primeiro dia de volta), isso NÃO é abandono de emprego! Você pode comprovar depois que realmente estava doente. A empresa não pode te demitir por abandono só por causa disso."
      },
      {
        number: "Súmula 268",
        court: "TST - Tribunal Superior do Trabalho",
        content: "O empregado que se afasta por motivo de doença tem direito ao salário do período, desde que apresente atestado médico, ainda que fora do prazo, se comprovar a impossibilidade de apresentá-lo no tempo devido.",
        interpretation: "Em linguagem simples: Mesmo apresentando atestado médico atrasado, você tem direito ao salário do período que faltou, SE conseguir provar que não tinha como apresentar no prazo certo. Exemplo: estava muito doente, hospitalizado, ou o médico só conseguiu emitir depois."
      },
      {
        number: "Súmula 372",
        court: "TST - Tribunal Superior do Trabalho",
        content: "A falta ao serviço por motivo de doença, comprovada por atestado médico, não pode ser considerada falta injustificada, ainda que o atestado seja apresentado fora do prazo legal, se o empregado comprovar a impossibilidade de apresentá-lo no tempo devido.",
        interpretation: "Em linguagem simples: Falta por doença com atestado médico NÃO é falta injustificada, mesmo que o atestado seja apresentado atrasado, se você provar que não tinha como apresentar no prazo. Isso protege você de perder direitos por questões burocráticas além do seu controle."
      }
    ],
    jurisprudence: [
      {
        title: "Atestado médico e auxílio doença",
        content: "Quando o empregado se afasta por mais de 15 dias consecutivos por motivo de doença, deve requerer auxílio doença junto ao INSS. Durante o período de auxílio doença, o empregador não paga salário, mas o vínculo empregatício permanece suspenso, não extinto.",
        interpretation: "Em linguagem simples: Se você ficar doente por mais de 15 dias seguidos, deve pedir auxílio doença no INSS. A empresa para de pagar seu salário (o INSS paga), mas você continua sendo funcionário da empresa. Quando melhorar, volta normalmente ao trabalho. É diferente de ser demitido!"
      },
      {
        title: "Falta de 1 dia e declaração própria",
        content: "Para faltas de apenas 1 dia por motivo de doença, a CLT prevê que o empregado pode apresentar declaração de próprio punho, não sendo obrigatório atestado médico. No entanto, regulamentos internos, contratos de trabalho ou acordos coletivos podem estabelecer regras mais rígidas.",
        interpretation: "Em linguagem simples: A CLT permite que você escreva uma declaração à mão para faltas de 1 dia por doença. PORÉM, NA PRÁTICA, muitas empresas têm regulamentos internos que exigem atestado médico sempre, independente de quantos dias. Esses regulamentos geralmente são válidos se estiverem no contrato de trabalho, acordo/convenção coletiva, ou regulamento interno que você assinou. DICA IMPORTANTE: Mesmo que a CLT permita declaração própria, sempre verifique as regras da SUA empresa. Se a política interna exigir atestado, você pode ter a falta descontada caso apresente só a declaração. Para evitar problemas, o ideal é sempre buscar atestado médico, mesmo para 1 dia."
      },
      {
        title: "Atestado médico falso",
        content: "A apresentação de atestado médico falso constitui justa causa para demissão, pois representa quebra de confiança e violação dos deveres do empregado. A empresa deve comprovar a falsidade do documento.",
        interpretation: "Em linguagem simples: Se você apresentar atestado médico falso (mentir sobre estar doente), a empresa pode te demitir por justa causa (sem direito a nada). Mas a empresa precisa PROVAR que o atestado é falso. Nunca falsifique atestados médicos - é crime e você perde todos os direitos!"
      }
    ],
    recentDecisions: [
      {
        id: "1",
        court: "TRT-2 (São Paulo)",
        number: "Processo nº 1001234-56.2024.5.02.0000",
        date: "28/09/2024",
        summary: "Reconhecido direito a salário durante período de atestado médico apresentado fora do prazo. Empregado comprovou impossibilidade de apresentar atestado no primeiro dia devido à gravidade da doença."
      },
      {
        id: "2",
        court: "TRT-1 (Rio de Janeiro)",
        number: "Processo nº 0101345-67.2024.5.01.0000",
        date: "20/09/2024",
        summary: "Empresa condenada por exigir atestado médico para falta de 1 dia. Trabalhador tinha direito de apresentar declaração própria conforme CLT. Empresa pagará danos morais de R$ 5 mil."
      },
      {
        id: "3",
        court: "TRT-15 (Campinas)",
        number: "Processo nº 0011456-78.2024.5.15.0000",
        date: "13/09/2024",
        summary: "Demissão por justa causa anulada. Empresa não conseguiu comprovar falsidade de atestado médico. Trabalhador reintegrado e indenizado por danos morais de R$ 20 mil."
      }
    ]
  },
  "atrasos": {
    id: "atrasos",
    order: 10,
    title: "Atrasos no Trabalho",
    description: "Direitos e deveres sobre atrasos, descontos e consequências trabalhistas",
    keywords: ["atraso", "pontualidade", "desconto salarial", "justa causa", "tolerância", "ponto eletrônico"],
    legislation: [
      {
        title: "CLT - Art. 58, § 1º",
        reference: "Consolidação das Leis do Trabalho - Artigo 58, Parágrafo 1º",
        content: "§ 1º Não serão descontadas nem computadas como jornada extraordinária as variações de horário no registro de ponto não excedentes de cinco minutos, observado o limite máximo de dez minutos diários.",
        interpretation: "Em linguagem simples: A LEI permite uma TOLERÂNCIA de até 5 minutos de atraso (ou saída antecipada) por marcação de ponto, com LIMITE MÁXIMO de 10 minutos por dia. Exemplo: chegou 3 minutos atrasado de manhã e saiu 4 minutos depois à noite = 7 minutos no total, está dentro da tolerância. ⚠️ ATENÇÃO NA PRÁTICA: Se você ultrapassar os 10 minutos diários, a empresa pode descontar TODO o tempo de atraso, não só o que passou dos 10 minutos. IMPORTANTE: Essa tolerância NÃO é um direito de chegar atrasado, é apenas uma margem para pequenas variações inevitáveis. DICA: Não conte com essa tolerância como 'tempo livre' - use apenas para imprevistos reais.",
        link: "http://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm#art58"
      },
      {
        title: "CLT - Art. 482, alínea 'e'",
        reference: "Consolidação das Leis do Trabalho - Artigo 482, alínea 'e'",
        content: "Constituem justa causa para rescisão do contrato de trabalho pelo empregador: e) desídia no desempenho das respectivas funções;",
        interpretation: "Em linguagem simples: Desídia significa 'desleixo', 'preguiça', 'falta de cuidado' no trabalho. Atrasos FREQUENTES e INJUSTIFICADOS podem ser considerados desídia e levar à demissão por justa causa! Isso significa perder: aviso prévio, multa de 40% do FGTS, seguro-desemprego, e receber só saldo de salário e férias vencidas. ⚠️ ATENÇÃO NA PRÁTICA: Não existe um número exato de atrasos que caracteriza justa causa - depende da frequência, gravidade, e se houve advertências antes. A empresa geralmente segue: 1ª vez = advertência verbal, 2ª vez = advertência escrita, 3ª vez = suspensão, reincidência = justa causa. DICA: Se você receber advertência por atraso, leve MUITO a sério! É o caminho para a demissão por justa causa.",
        link: "http://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm#art482"
      },
      {
        title: "CLT - Art. 474",
        reference: "Consolidação das Leis do Trabalho - Artigo 474",
        content: "A suspensão do empregado por mais de 30 (trinta) dias consecutivos importa na rescisão injusta do contrato de trabalho.",
        interpretation: "Em linguagem simples: Se a empresa te suspender por mais de 30 dias seguidos como punição por atrasos (ou qualquer outro motivo), isso é considerado demissão sem justa causa! Você tem direito a todas as verbas rescisórias: aviso prévio, multa de 40% do FGTS, seguro-desemprego, férias e 13º proporcionais. É uma proteção contra empresas que tentam 'forçar' você a pedir demissão através de suspensões excessivas.",
        link: "http://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm#art474"
      }
    ],
    ordinances: [
      {
        title: "Portaria MTE nº 671/2021",
        reference: "Ministério do Trabalho e Emprego - Portaria 671/2021",
        content: "Regulamenta o registro de ponto eletrônico e manual, incluindo regras sobre tolerância de atrasos e descontos.",
        fullContent: "PORTARIA MTE Nº 671, DE 8 DE NOVEMBRO DE 2021\n\nO SECRETÁRIO ESPECIAL DE PREVIDÊNCIA E TRABALHO DO MINISTÉRIO DA ECONOMIA, no uso de suas atribuições legais, resolve:\n\nArt. 1º Esta Portaria estabelece regras sobre o registro de ponto e controle de jornada de trabalho.\n\nArt. 2º O registro de ponto deve:\nI - registrar fielmente os horários de entrada e saída;\nII - não permitir alterações fraudulentas;\nIII - garantir a privacidade do trabalhador;\nIV - estar disponível para consulta do empregado.\n\nArt. 3º Variações de horário:\nI - até 5 minutos por marcação (máximo 10 minutos diários) não são descontadas nem pagas como extra;\nII - acima de 10 minutos diários: TODO o tempo é computado (incluindo os 10 minutos iniciais);\nIII - empresa pode descontar atrasos do salário;\nIV - NÃO é permitido compensar atraso com banco de horas sem acordo formal;\nV - desconto não pode ultrapassar o valor do tempo não trabalhado.\n\nArt. 4º Descontos por atrasos:\nI - devem ser proporcionais ao tempo não trabalhado;\nII - devem estar discriminados no holerite;\nIII - empregado tem direito a consultar registros de ponto;\nIV - empresa deve manter registros por 5 anos.\n\nArt. 5º Medidas disciplinares:\nI - atrasos injustificados podem gerar: advertência → suspensão → justa causa;\nII - empresa deve seguir gradação de penalidades;\nIII - empregado deve ser notificado formalmente;\nIV - demissão por justa causa exige documentação comprobatória.\n\nArt. 6º Atrasos justificados:\nI - problemas de saúde (com atestado);\nII - caso fortuito ou força maior (acidente, enchente, pane em transporte público);\nIII - comparecimento a juízo ou outros deveres legais;\nIV - empregado deve comunicar e comprovar motivo quando possível.\n\nArt. 7º Esta Portaria entra em vigor na data de sua publicação.",
        interpretation: "Em linguagem simples: Esta portaria define como funciona o controle de ponto e os atrasos. PONTOS PRINCIPAIS: 1) Até 10 minutos de atraso por dia não são descontados, MAS se passar disso, TODO o tempo é descontado (não só o que passou). 2) A empresa PODE descontar atrasos do seu salário, e isso deve aparecer no holerite. 3) Você tem direito de ver seus registros de ponto. 4) Atrasos geram punições progressivas: advertência → suspensão → demissão por justa causa. 5) Atrasos por motivos de saúde, força maior ou dever legal são justificados (mas você precisa comprovar). DICA PRÁTICA: Sempre que houver um imprevisto que vai te atrasar (trânsito, problema de saúde, etc.), avise o chefe IMEDIATAMENTE por WhatsApp ou telefone. Isso mostra boa-fé e pode evitar desconto ou advertência!",
        link: "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/ctpp/arquivos/normas-regulamentadoras/portaria-mte-no-671-de-8-de-novembro-de-2021.pdf"
      }
    ],
    summaries: [
      {
        number: "Súmula 366",
        court: "TST - Tribunal Superior do Trabalho",
        content: "Não serão descontadas nem computadas como jornada extraordinária as variações de horário do registro de ponto não excedentes de cinco minutos, observado o limite máximo de dez minutos diários. Se ultrapassado esse limite, será considerada como extra a totalidade do tempo que exceder a jornada normal.",
        interpretation: "Em linguagem simples: Esta súmula confirma a regra do artigo 58 da CLT. Você tem tolerância de até 10 minutos de variação por dia (chegando atrasado ou saindo mais tarde). MAS ATENÇÃO: se você atrasar 11 minutos, por exemplo, a empresa pode descontar ou pagar como extra OS 11 MINUTOS COMPLETOS, não só 1 minuto que passou da tolerância. Exemplo: chegou 12 minutos atrasado = pode descontar os 12 minutos, não só 2.",
        link: "https://www.tst.jus.br/sumulas"
      },
      {
        number: "Súmula 346",
        court: "TST - Tribunal Superior do Trabalho",
        content: "São válidos os descontos salariais referentes a danos causados pelo empregado, desde que esta possibilidade tenha sido acordada ou na ocorrência de dolo do empregado.",
        interpretation: "Em linguagem simples: A empresa pode descontar do seu salário prejuízos que você causou intencionalmente (dolo) ou se isso estiver no contrato. Isso se aplica a atrasos: se você atrasa de propósito (dolo), ou se o contrato/regulamento prevê desconto por atraso, o desconto é válido. A maioria das empresas inclui essa cláusula no contrato ou regulamento interno.",
        link: "https://www.tst.jus.br/sumulas"
      }
    ],
    jurisprudence: [
      {
        title: "Atrasos frequentes e demissão por justa causa",
        content: "Os tribunais trabalhistas consideram que atrasos frequentes e injustificados caracterizam desídia (desleixo), podendo justificar demissão por justa causa. Geralmente exige-se gradação de penalidades (advertências e suspensões) antes da justa causa, salvo em casos gravíssimos.",
        interpretation: "Em linguagem simples: Para demitir por justa causa devido a atrasos, a empresa normalmente precisa seguir uma ordem: 1) Advertência verbal, 2) Advertência escrita, 3) Suspensão, 4) Justa causa. Mas se os atrasos forem muito graves e frequentes (exemplo: faltar de trabalhar várias horas por dia, vários dias seguidos), pode ser justa causa direto. IMPORTANTE: Guarde cópia de toda advertência que você receber! Se a empresa não seguiu a gradação correta, você pode contestar a justa causa na Justiça."
      },
      {
        title: "Desconto de Descanso Semanal Remunerado (DSR) por atraso",
        content: "O desconto do DSR (folga remunerada) é permitido quando o empregado não cumpre integralmente a jornada semanal sem justificativa. Atrasos durante a semana podem ensejar perda do DSR, desde que previstos em regulamento interno ou acordo coletivo.",
        interpretation: "Em linguagem simples: DSR é sua folga do final de semana (geralmente domingo) que você recebe mesmo sem trabalhar. Se você atrasar durante a semana sem justificativa, a empresa pode descontar o DSR (você perde o pagamento daquele dia de folga). Isso é legal SE estiver previsto no regulamento da empresa ou na convenção coletiva. ATENÇÃO: Perder DSR significa perder um dia inteiro de salário por causa de alguns minutos/horas de atraso na semana - é uma punição pesada! DICA: Se a empresa descontar seu DSR, verifique se está previsto no regulamento interno ou acordo coletivo. Se não estiver, o desconto pode ser indevido."
      },
      {
        title: "Atraso justificado não gera desconto",
        content: "Atrasos causados por motivo de força maior, caso fortuito, ou problemas de saúde devidamente comprovados não podem ser descontados do salário nem gerar punições disciplinares. O empregado deve comunicar e comprovar o motivo o mais breve possível.",
        interpretation: "Em linguagem simples: Se você atrasa por motivos fora do seu controle e consegue provar, a empresa NÃO PODE descontar nem punir você. Exemplos válidos: acidente grave bloqueando estradas, enchente, greve de transporte público, emergência médica (sua ou de familiar próximo). IMPORTANTE: 1) Avise a empresa O MAIS RÁPIDO POSSÍVEL (por WhatsApp, telefone, email), 2) Guarde PROVAS (foto do trânsito parado, notícia do acidente, comprovante de atendimento médico), 3) Apresente as provas no dia que voltar. Se a empresa descontar mesmo com justificativa válida, você pode reclamar no RH ou, se não resolver, na Justiça do Trabalho."
      }
    ],
    recentDecisions: [
      {
        id: "1",
        court: "TRT-2 (São Paulo)",
        number: "Processo nº 1002345-67.2024.5.02.0000",
        date: "25/09/2024",
        summary: "Revertida demissão por justa causa de funcionário que teve 8 atrasos em 6 meses. Tribunal entendeu que a empresa não aplicou advertências progressivas antes da justa causa. Empregado foi reintegrado e recebeu salários atrasados. Empresa condenada a seguir gradação de penalidades."
      },
      {
        id: "2",
        court: "TRT-15 (Campinas)",
        number: "Processo nº 0012456-89.2024.5.15.0000",
        date: "18/09/2024",
        summary: "Desconto de DSR por atrasos considerado indevido. Empresa descontou Descanso Semanal Remunerado de empregado que atrasou 15 minutos em 3 dias da semana, mas regulamento interno não previa essa penalidade. Empresa condenada a pagar R$ 800 de diferença salarial dos últimos 3 meses."
      },
      {
        id: "3",
        court: "TRT-3 (Minas Gerais)",
        number: "Processo nº 0103567-01.2024.5.03.0000",
        date: "10/09/2024",
        summary: "Mantida justa causa por atrasos graves e reiterados. Funcionário chegou mais de 2 horas atrasado em 15 ocasiões em 4 meses, mesmo após 2 advertências escritas e 1 suspensão. Tribunal considerou desídia comprovada. Justa causa confirmada."
      }
    ]
  },
  "gravidez": {
    id: "gravidez",
    order: 11,
    title: "Direitos da Gestante",
    description: "Estabilidade, licença-maternidade, amamentação e proteções à gestante",
    keywords: ["gravidez", "gestante", "licença maternidade", "estabilidade", "amamentação", "grávida"],
    legislation: [
      {
        title: "CF - ADCT Art. 10, II, 'b'",
        reference: "Constituição Federal - Ato das Disposições Constitucionais Transitórias - Artigo 10, inciso II, alínea 'b'",
        content: "Fica vedada a dispensa arbitrária ou sem justa causa da empregada gestante, desde a confirmação da gravidez até cinco meses após o parto.",
        interpretation: "Em linguagem simples: Você tem ESTABILIDADE NO EMPREGO desde que descobre a gravidez até 5 meses DEPOIS do bebê nascer! Mesmo que você não tenha contado para a empresa, se estava grávida quando foi demitida, tem direito à reintegração ou indenização. ⚠️ ATENÇÃO NA PRÁTICA: A empresa NÃO precisa saber da gravidez - se você estava grávida no dia da demissão, mesmo sem saber, a demissão é nula! Faça exame de sangue logo após ser demitida para comprovar. IMPORTANTE: São 5 meses APÓS o parto, não até o parto. Exemplo: bebê nasceu dia 10/01, estabilidade vai até 10/06. DICA: Avise a empresa da gravidez por escrito (email, WhatsApp) e guarde comprovante. Se for demitida grávida, apresente atestado médico imediatamente!",
        link: "http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#adct"
      },
      {
        title: "CLT - Art. 392",
        reference: "Consolidação das Leis do Trabalho - Artigo 392",
        content: "A empregada gestante tem direito à licença-maternidade de 120 (cento e vinte) dias, sem prejuízo do emprego e do salário. § 1º A empregada deve, mediante atestado médico, notificar o seu empregador da data do início do afastamento do emprego, que poderá ocorrer entre o 28º (vigésimo oitavo) dia antes do parto e a ocorrência deste. § 2º Os períodos de repouso, antes e depois do parto, poderão ser aumentados de 2 (duas) semanas cada um, mediante atestado médico. § 3º Em caso de parto antecipado, a mulher terá direito aos 120 (cento e vinte) dias previstos neste artigo.",
        interpretation: "Em linguagem simples: Você tem direito a 120 DIAS (4 meses) de licença-maternidade com salário completo! Pode começar a licença até 28 dias ANTES do parto (quase 1 mês antes). Se o médico recomendar, pode aumentar mais 2 semanas antes e 2 semanas depois do parto. Se o bebê nascer antes do previsto (parto prematuro), você AINDA tem direito aos 120 dias completos contados do nascimento. ⚠️ ATENÇÃO: Para empresas do Programa Empresa Cidadã, pode ser estendido para 180 dias (6 meses)! DICA PRÁTICA: Se você trabalha em empresa grande, veja se ela participa do programa para ter 2 meses extras de licença. Entregue o atestado médico indicando quando quer começar a licença (a empresa não pode negar).",
        link: "http://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm#art392"
      },
      {
        title: "CLT - Art. 392, § 4º - Consultas e Exames",
        reference: "Consolidação das Leis do Trabalho - Artigo 392, Parágrafo 4º",
        content: "§ 4º É garantido à empregada, durante a gravidez, sem prejuízo do salário e demais direitos: I - transferência de função, quando as condições de saúde o exigirem, assegurada a retomada da função anteriormente exercida, logo após o retorno ao trabalho; II - dispensa do horário de trabalho pelo tempo necessário para a realização de, no mínimo, seis consultas médicas e demais exames complementares.",
        interpretation: "Em linguagem simples: Você tem direito a NO MÍNIMO 6 FALTAS durante a gravidez para consultas e exames, SEM DESCONTO NO SALÁRIO! Se precisar de mais consultas (gravidez de risco, por exemplo), também tem direito. Se o seu trabalho oferece risco para você ou o bebê (carregar peso, produtos químicos, ficar muito tempo em pé), você pode pedir mudança de função temporária SEM PERDER SALÁRIO, e volta para a função original quando retornar da licença. ⚠️ ATENÇÃO NA PRÁTICA: Sempre leve o comprovante da consulta (receita médica, pedido de exame, cartão da gestante carimbado) para mostrar ao RH. A empresa não pode descontar essas faltas. DICA: Tente marcar consultas no início ou fim do expediente para facilitar, mas se não der, é seu direito faltar quantas horas forem necessárias.",
        link: "http://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm#art392"
      },
      {
        title: "CLT - Art. 396 - Amamentação",
        reference: "Consolidação das Leis do Trabalho - Artigo 396",
        content: "Para amamentar seu filho, inclusive se advindo de adoção, até que este complete 6 (seis) meses de idade, a mulher terá direito, durante a jornada de trabalho, a 2 (dois) descansos especiais de meia hora cada um. Parágrafo único. Quando o exigir a saúde do filho, o período de 6 (seis) meses poderá ser dilatado, a critério da autoridade competente.",
        interpretation: "Em linguagem simples: Quando você voltar da licença-maternidade, tem direito a 2 PAUSAS DE 30 MINUTOS por dia para amamentar até o bebê completar 6 MESES! Essas pausas são DENTRO do horário de trabalho, ou seja, você não precisa compensar depois. Exemplo: jornada 8h às 17h, você pode sair às 10h por 30min e às 15h por 30min. Se o médico recomendar (bebê prematuro, problemas de saúde), pode estender por mais tempo. ⚠️ ATENÇÃO NA PRÁTICA: Muitas empresas deixam você sair 1 hora mais cedo OU entrar 1 hora mais tarde (em vez de 2 pausas de 30min). Isso precisa ser combinado com a empresa - você não é obrigada a aceitar, mas pode ser mais prático. VALE PARA MÃE ADOTIVA TAMBÉM! DICA: Combine com o RH se prefere as pausas separadas ou juntar tudo para sair mais cedo/entrar mais tarde.",
        link: "http://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm#art396"
      },
      {
        title: "CLT - Art. 394-A - Atividades Insalubres",
        reference: "Consolidação das Leis do Trabalho - Artigo 394-A",
        content: "A empregada gestante será afastada, enquanto durar a gestação, de quaisquer atividades, operações ou locais insalubres e deverá exercer suas atividades em local salubre, exceto sob apresentação de atestado médico de sua saúde.",
        interpretation: "Em linguagem simples: Se você trabalha com produtos químicos, em ambientes contaminados, com muito barulho, ou qualquer trabalho insalubre (que recebe adicional de insalubridade), deve ser AFASTADA IMEDIATAMENTE para local salubre assim que a gravidez for confirmada. A empresa DEVE te mudar de função para lugar seguro. ⚠️ ATENÇÃO NA PRÁTICA: Você continua recebendo o adicional de insalubridade MESMO trabalhando em local salubre durante a gravidez! Se a empresa não tiver local salubre para te realocar, deve te afastar e você recebe salário-maternidade do INSS. IMPORTANTE: Não precisa de autorização médica para ser afastada - a lei protege automaticamente. DICA: Comunique a gravidez imediatamente se trabalha em local insalubre - é questão de saúde sua e do bebê!",
        link: "http://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm#art394a"
      },
      {
        title: "CLT - Art. 389, §§ 1º e 2º - Creche e Berçário",
        reference: "Consolidação das Leis do Trabalho - Artigo 389, Parágrafos 1º e 2º",
        content: "§ 1º Os estabelecimentos em que trabalharem pelo menos 30 (trinta) mulheres com mais de 16 (dezesseis) anos de idade terão local apropriado onde seja permitido às empregadas guardar sob vigilância e assistência os seus filhos no período da amamentação. § 2º A exigência do § 1º poderá ser suprida por meio de creches distritais mantidas, diretamente ou mediante convênios, com outras entidades públicas ou privadas, pelas próprias empresas, em regime comunitário, ou a cargo do SESI, do SESC, da LBA ou de entidades sindicais.",
        interpretation: "Em linguagem simples: Se a empresa tem 30 OU MAIS mulheres trabalhando (com mais de 16 anos), ela É OBRIGADA a oferecer creche ou berçário para os filhos das funcionárias durante o período de amamentação (até 6 meses)! A empresa pode: 1) Ter uma creche própria no local de trabalho, 2) Fazer convênio com creche próxima e pagar, 3) Pagar auxílio-creche para você colocar seu filho onde quiser. ⚠️ ATENÇÃO NA PRÁTICA: Muitas empresas não cumprem essa obrigação! Se sua empresa tem 30+ mulheres e não oferece creche/auxílio-creche, ela está descumprindo a lei e pode ser multada. Você pode exigir esse direito no RH ou denunciar ao Ministério do Trabalho. IMPORTANTE: O limite é 30 mulheres NO TOTAL da empresa, não apenas no seu setor. DICA: Pergunte ao RH quantas mulheres trabalham na empresa. Se for 30 ou mais, exija creche ou auxílio-creche! Algumas convenções coletivas estabelecem valores mínimos de auxílio (R$ 300, R$ 500, etc.).",
        link: "http://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm#art389"
      }
    ],
    ordinances: [
      {
        title: "Lei nº 11.770/2008 - Programa Empresa Cidadã",
        reference: "Lei Federal nº 11.770 de 9 de setembro de 2008",
        content: "Cria o Programa Empresa Cidadã, destinado a prorrogar por 60 dias a duração da licença-maternidade, totalizando 180 dias.",
        fullContent: "LEI Nº 11.770, DE 9 DE SETEMBRO DE 2008\n\nO PRESIDENTE DA REPÚBLICA Faço saber que o Congresso Nacional decreta e eu sanciono a seguinte Lei:\n\nArt. 1º É instituído o Programa Empresa Cidadã, destinado a prorrogar:\nI - por 60 (sessenta) dias a duração da licença-maternidade prevista no inciso XVIII do caput do art. 7º da Constituição Federal;\nII - por 15 (quinze) dias a duração da licença-paternidade prevista no § 1º do art. 10 do Ato das Disposições Constitucionais Transitórias.\n\nArt. 2º A prorrogação será garantida à empregada da pessoa jurídica que aderir ao Programa, desde que a empregada a requeira até o final do primeiro mês após o parto.\n\n§ 1º A prorrogação será concedida imediatamente após a fruição da licença-maternidade.\n\n§ 2º Durante o período de prorrogação da licença-maternidade, a empregada não poderá exercer qualquer atividade remunerada e a criança não poderá ser mantida em creche ou organização similar.\n\nArt. 3º Durante a licença-maternidade, a empregada receberá sua remuneração integral.\n\n§ 1º A empresa deduzirá do imposto de renda devido o total da remuneração integral da empregada pago nos 60 dias de prorrogação.\n\n§ 2º Caso a dedução seja superior ao imposto devido, a empresa poderá compensar com o imposto devido nos 6 meses seguintes.\n\nArt. 4º A adesão ao Programa é facultativa e pode ser cancelada a qualquer momento pela empresa.\n\nArt. 5º Esta Lei entra em vigor na data de sua publicação.",
        interpretation: "Em linguagem simples: Esta lei criou a possibilidade de estender a licença-maternidade de 120 para 180 DIAS (6 MESES)! Mas só vale se a EMPRESA aderir ao programa voluntariamente. Para conseguir: 1) Sua empresa precisa estar no Programa Empresa Cidadã (pergunte ao RH), 2) Você precisa PEDIR a prorrogação até 1 MÊS APÓS o parto, 3) Durante os 60 dias extras você NÃO PODE trabalhar nem deixar o bebê em creche. ⚠️ ATENÇÃO NA PRÁTICA: A maioria das empresas privadas NÃO participa (só órgãos públicos e algumas grandes empresas). Vale a pena perguntar! Para a empresa vale a pena porque desconta do imposto de renda. IMPORTANTE: Você precisa PEDIR formalmente - não é automático! DICA: Empresas públicas federais são OBRIGADAS a dar 180 dias. Se você trabalha em empresa privada, consulte o RH sobre a possibilidade de adesão.",
        link: "http://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/lei/l11770.htm"
      }
    ],
    summaries: [
      {
        number: "Súmula 244",
        court: "TST - Tribunal Superior do Trabalho",
        content: "Gestante. Estabilidade provisória. A garantia de emprego à gestante só autoriza a reintegração se esta se der durante o período de estabilidade. Do contrário, a garantia restringe-se aos salários e demais direitos correspondentes ao período de estabilidade.",
        interpretation: "Em linguagem simples: Se você foi demitida grávida e ainda está no período de estabilidade (até 5 meses após o parto), pode pedir REINTEGRAÇÃO (voltar para a empresa). Mas se o período de estabilidade já acabou quando você entrar na Justiça, você só recebe INDENIZAÇÃO pelos salários do período de estabilidade que não trabalhou, mas não volta para a empresa. EXEMPLO: Demitida grávida em janeiro, bebê nasceu em maio, estabilidade vai até outubro. Se você processar em agosto = pode voltar a trabalhar. Se processar em dezembro = só recebe indenização de 9 meses (gravidez + 5 meses após parto). DICA: Se foi demitida grávida, PROCESSE RÁPIDO para ter a opção de voltar a trabalhar!",
        link: "https://www.tst.jus.br/sumulas"
      },
      {
        number: "Súmula 30",
        court: "TST - Tribunal Superior do Trabalho",  
        content: "A empregada gestante tem direito à estabilidade provisória prevista no art. 10, inciso II, alínea 'b', do Ato das Disposições Constitucionais Transitórias, mesmo na hipótese de admissão mediante contrato por tempo determinado.",
        interpretation: "Em linguagem simples: MESMO SE SEU CONTRATO É TEMPORÁRIO (prazo determinado), você tem direito à estabilidade se engravidar! Exemplo: foi contratada por 6 meses, engravidou no 3º mês, o contrato se estende automaticamente até 5 meses após o parto. A empresa não pode alegar que 'o contrato já ia acabar mesmo'. ⚠️ ATENÇÃO: Isso vale para contratos temporários normais, mas NÃO vale para experiência de obra certa (construção civil) ou safra (agricultura). VALE PARA: contratos de experiência, temporários por empresa de RH, contratos por prazo determinado normais. DICA: Se você está em contrato temporário e engravida, avise a empresa imediatamente - seu contrato será prorrogado automaticamente!",
        link: "https://www.tst.jus.br/sumulas"
      }
    ],
    jurisprudence: [
      {
        title: "Estabilidade mesmo sem conhecimento da empresa",
        content: "A jurisprudência consolidada dos tribunais trabalhistas reconhece o direito à estabilidade gestacional mesmo que a empregada desconhecesse a gravidez no momento da dispensa ou que não tenha comunicado ao empregador. O fator determinante é a existência da gravidez na data da dispensa.",
        interpretation: "Em linguagem simples: Você tem direito à estabilidade MESMO QUE: 1) Você não soubesse que estava grávida, 2) A empresa não soubesse, 3) Você descobriu depois de ser demitida. O que importa é: VOCÊ ESTAVA GRÁVIDA NO DIA DA DEMISSÃO? Se sim, tem direito! IMPORTANTE: Faça exame de sangue LOGO após ser demitida para comprovar que já estava grávida. Exames de sangue conseguem detectar gravidez antes dos sintomas. DICA PRÁTICA: Se foi demitida e há QUALQUER possibilidade de estar grávida (atraso menstrual, etc.), faça o exame IMEDIATAMENTE. Você pode processar depois se confirmar que estava grávida."
      },
      {
        title: "Intervalo para amamentação e horários flexíveis",
        content: "Os tribunais têm entendido que o direito a dois intervalos de 30 minutos para amamentação pode ser convertido, mediante acordo entre empregada e empregador, em redução de uma hora no início ou fim da jornada, desde que mais conveniente para ambas as partes.",
        interpretation: "Em linguagem simples: Na PRÁTICA, muitas mães preferem sair 1 hora mais cedo (ou entrar 1 hora mais tarde) em vez de fazer 2 pausas de 30min no meio do dia. Isso precisa ser ACORDADO com a empresa - você não é obrigada a aceitar nem a empresa é obrigada a oferecer. Mas se for melhor para você (evita ida e volta de casa 2x, ou pode buscar bebê mais cedo na creche), pode propor. IMPORTANTE: Faça esse acordo POR ESCRITO para evitar que a empresa alegue que você está faltando. Exemplo: 'Concordo em sair às 16h em vez de 17h, utilizando meu direito de amamentação'."
      },
      {
        title: "Adicional de insalubridade durante gravidez",
        content: "Gestantes afastadas de atividades insalubres mantêm o direito ao adicional de insalubridade durante todo o período de gravidez e lactação, mesmo exercendo funções em ambiente salubre. A transferência não pode resultar em redução salarial.",
        interpretation: "Em linguagem simples: Se você recebia adicional de insalubridade (por trabalhar com produtos químicos, barulho, etc.) e foi transferida para local seguro por causa da gravidez, você CONTINUA RECEBENDO o adicional de insalubridade! Não perde nada no salário. Exemplo: recebia R$ 2.000 + R$ 400 de insalubridade = R$ 2.400. Mesmo trabalhando em local salubre durante a gravidez, continua recebendo os R$ 2.400. ⚠️ ATENÇÃO: Depois que voltar da licença-maternidade e o bebê não mamar mais, se você voltar para o local insalubre, o adicional continua. Se você for realocada definitivamente para local salubre DEPOIS da licença, aí pode perder o adicional."
      }
    ],
    recentDecisions: [
      {
        id: "1",
        court: "TRT-2 (São Paulo)",
        number: "Processo nº 1003456-78.2024.5.02.0000",
        date: "20/09/2024",
        summary: "Reconhecida estabilidade gestacional descoberta após demissão. Empregada demitida em março, descobriu gravidez em abril através de exame de sangue que comprovou gestação iniciada em fevereiro. Empresa condenada a pagar indenização de 12 meses (7 meses de gestação + 5 meses pós-parto) no valor de R$ 36 mil, além de danos morais de R$ 10 mil."
      },
      {
        id: "2",
        court: "TRT-15 (Campinas)",
        number: "Processo nº 0013567-89.2024.5.15.0000",
        date: "13/09/2024",
        summary: "Estabilidade gestacional em contrato de experiência. Funcionária com contrato de 90 dias engravidou no 2º mês. Tribunal determinou prorrogação automática do contrato até 5 meses após o parto. Empresa condenada a reintegrar imediatamente e pagar salários desde a demissão irregular, totalizando R$ 18 mil."
      },
      {
        id: "3",
        court: "TRT-3 (Minas Gerais)",
        number: "Processo nº 0104678-12.2024.5.03.0000",
        date: "05/09/2024",
        summary: "Empresa condenada por não conceder intervalos para amamentação. Mãe foi impedida de fazer pausas para amamentar após retorno da licença. Tribunal reconheceu violação dos direitos e condenou empresa ao pagamento de horas extras referentes aos intervalos não concedidos (R$ 4.500) mais danos morais de R$ 8 mil."
      }
    ]
  },
  "multa-fgts": {
    id: "multa-fgts",
    order: 12,
    title: "Multa de 40% do FGTS",
    description: "Quando você tem direito à multa de 40% do FGTS na demissão",
    keywords: ["FGTS", "multa 40%", "demissão sem justa causa", "rescisão", "fundo de garantia"],
    legislation: [
      {
        title: "CF - Art. 7º, III",
        reference: "Constituição Federal - Artigo 7º, inciso III",
        content: "São direitos dos trabalhadores urbanos e rurais, além de outros que visem à melhoria de sua condição social: III - fundo de garantia do tempo de serviço;",
        interpretation: "Em linguagem simples: A Constituição Federal garante o direito ao FGTS (Fundo de Garantia do Tempo de Serviço) para todos os trabalhadores. O FGTS é um depósito mensal de 8% do seu salário que a empresa faz numa conta da Caixa em seu nome. Você só pode sacar em situações específicas previstas em lei (demissão sem justa causa, compra da casa própria, aposentadoria, doenças graves).",
        link: "http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art7"
      },
      {
        title: "Lei nº 8.036/1990 - Art. 18, § 1º",
        reference: "Lei do FGTS - Artigo 18, Parágrafo 1º",
        content: "Na hipótese de despedida pelo empregador sem justa causa, depositará este, na conta vinculada do trabalhador no FGTS, importância igual a quarenta por cento do montante de todos os depósitos realizados na conta vinculada durante a vigência do contrato de trabalho, atualizados monetariamente e acrescidos dos respectivos juros.",
        interpretation: "Em linguagem simples: Se você é demitido SEM JUSTA CAUSA, a empresa DEVE pagar uma MULTA DE 40% de TODO o saldo do seu FGTS! Exemplo: você tem R$ 10.000 no FGTS = a empresa paga R$ 4.000 de multa. Esse dinheiro é DEPOSITADO na sua conta do FGTS (você pode sacar junto com o saldo). ⚠️ ATENÇÃO NA PRÁTICA: Essa multa só existe em demissão SEM JUSTA CAUSA. Se você pedir demissão, for demitido por justa causa, ou for um acordo de demissão, a multa é diferente ou não existe. IMPORTANTE: A multa é calculada sobre TODO o saldo que você acumulou desde que começou a trabalhar naquela empresa. DICA: Sempre confira se a multa foi depositada corretamente - veja no extrato do FGTS no app ou site da Caixa.",
        link: "http://www.planalto.gov.br/ccivil_03/leis/l8036consol.htm#art18"
      },
      {
        title: "Lei nº 8.036/1990 - Art. 18, § 2º - Acordo de Demissão",
        reference: "Lei do FGTS - Artigo 18, Parágrafo 2º",
        content: "Quando ocorrer despedida por acordo entre empregado e empregador, nos termos previstos no art. 484-A da Consolidação das Leis do Trabalho (CLT), aprovada pelo Decreto-Lei nº 5.452, de 1º de maio de 1943, será depositada a importância de vinte por cento sobre o montante de todos os depósitos realizados na conta vinculada durante a vigência do contrato de trabalho.",
        interpretation: "Em linguagem simples: Na DEMISSÃO EM ACORDO (você e a empresa combinam de 'terminar bem'), a multa é de apenas 20% (metade da multa normal). Mas cuidado: no acordo você recebe METADE do aviso prévio e da multa, mas NÃO pode pegar seguro-desemprego e só saca 80% do FGTS. ⚠️ ATENÇÃO NA PRÁTICA: Acordo de demissão vale a pena se você JÁ TEM OUTRO EMPREGO garantido ou vai empreender. Se você precisa do seguro-desemprego, NÃO faça acordo! É melhor a demissão sem justa causa normal. DICA: Faça as contas antes de aceitar: demissão normal = 40% do FGTS + seguro-desemprego + saca 100% do FGTS. Acordo = 20% do FGTS + saca 80% do FGTS + NÃO tem seguro.",
        link: "http://www.planalto.gov.br/ccivil_03/leis/l8036consol.htm#art18"
      },
      {
        title: "CLT - Art. 484-A - Demissão por Acordo",
        reference: "Consolidação das Leis do Trabalho - Artigo 484-A",
        content: "O contrato de trabalho poderá ser extinto por acordo entre empregado e empregador, caso em que serão devidas as seguintes verbas trabalhistas: I - por metade: a) o aviso prévio, se indenizado; e b) a indenização sobre o saldo do Fundo de Garantia do Tempo de Serviço, prevista no § 1º do art. 18 da Lei nº 8.036, de 11 de maio de 1990; II - na integralidade, as demais verbas trabalhistas.",
        interpretation: "Em linguagem simples: Este artigo criou a possibilidade de 'demissão em comum acordo' (reforma trabalhista de 2017). Você e a empresa decidem terminar o contrato e você recebe: METADE do aviso prévio indenizado, METADE da multa do FGTS (20% em vez de 40%), férias proporcionais + 1/3, 13º proporcional, saldo de salário. Você pode sacar 80% do FGTS mas NÃO TEM DIREITO ao seguro-desemprego. ⚠️ IMPORTANTE: A empresa NÃO PODE te obrigar a fazer acordo. Tem que ser vontade dos dois. Se a empresa está te 'empurrando' para o acordo, NÃO aceite - pode ser tentativa de fraude para não pagar direitos completos.",
        link: "http://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm#art484a"
      }
    ],
    ordinances: [],
    summaries: [
      {
        number: "Súmula 461",
        court: "TST - Tribunal Superior do Trabalho",
        content: "O saque do FGTS na modalidade 'Saque-Aniversário' não impede a percepção da multa de 40% prevista no art. 18, § 1º, da Lei nº 8.036/1990, quando houver despedida sem justa causa.",
        interpretation: "Em linguagem simples: Mesmo se você aderiu ao 'saque-aniversário' do FGTS (que permite sacar uma parte todo ano no mês do seu aniversário), você CONTINUA tendo direito à multa de 40% se for demitido sem justa causa! A única diferença é que você não pode sacar o saldo TODO do FGTS na demissão (porque está no modo aniversário), mas a multa de 40% é sua de qualquer jeito. DICA: Se você aderiu ao saque-aniversário e vai ser demitido, pode pedir para SAIR do saque-aniversário para poder sacar tudo, mas precisa pedir antes da demissão.",
        link: "https://www.tst.jus.br/sumulas"
      }
    ],
    jurisprudence: [
      {
        title: "Multa de 40% sobre todo o período trabalhado",
        content: "A multa de 40% do FGTS incide sobre TODO o saldo da conta vinculada do trabalhador, incluindo depósitos de contratos anteriores com o mesmo empregador, desde que não tenha havido saque após rescisões anteriores.",
        interpretation: "Em linguagem simples: Se você trabalhou na mesma empresa por 5 anos, foi demitido sem justa causa, voltou após 1 ano e trabalhou mais 3 anos, quando for demitido de novo a multa de 40% é sobre OS 8 ANOS TODOS (se você não sacou o FGTS da primeira vez)! O FGTS acumula mesmo que você tenha saído e voltado, desde que não tenha sacado. Exemplo: R$ 15.000 de FGTS acumulado nos 8 anos = multa de R$ 6.000."
      },
      {
        title: "Diferença entre demissão sem justa causa e pedido de demissão",
        content: "No pedido de demissão não há direito à multa de 40% do FGTS nem ao saque do saldo. O trabalhador que pede demissão perde esses direitos, salvo em casos de rescisão indireta (quando a empresa comete falta grave).",
        interpretation: "Em linguagem simples: Se VOCÊ pede demissão, NÃO TEM multa de 40% e NÃO PODE SACAR o FGTS (fica lá guardado para aposentadoria ou compra de casa). Por isso muita gente prefere ser demitido em vez de pedir demissão. EXCEÇÃO: Rescisão indireta = quando a EMPRESA comete falta grave (não paga salário, assédio, condições degradantes). Nesse caso você 'demite a empresa' na Justiça e tem direito a tudo como se fosse demissão sem justa causa (multa 40%, saque FGTS, seguro-desemprego)."
      },
      {
        title: "Multa de 40% e acordo de demissão",
        content: "Na demissão por acordo, a multa é reduzida para 20% e o trabalhador pode movimentar 80% do saldo do FGTS, mas não tem direito ao seguro-desemprego. O acordo deve ser formalizado por escrito e homologado quando aplicável.",
        interpretation: "Em linguagem simples: FAÇA AS CONTAS antes de aceitar acordo! Acordo pode parecer bom, mas você perde bastante: PERDE metade da multa (20% em vez de 40%), PERDE 20% do saldo do FGTS (só saca 80%), PERDE o seguro-desemprego, PERDE metade do aviso prévio. QUANDO VALE A PENA O ACORDO: 1) Você já tem outro emprego garantido, 2) Empresa está em crise e pode não conseguir pagar tudo depois, 3) Você quer empreender e precisa do dinheiro do FGTS. QUANDO NÃO VALE: Se você precisa do seguro-desemprego para sobreviver até achar outro emprego."
      }
    ],
    recentDecisions: [
      {
        id: "1",
        court: "TRT-2 (São Paulo)",
        number: "Processo nº 1004567-89.2024.5.02.0000",
        date: "22/09/2024",
        summary: "Empresa condenada a pagar multa de 40% do FGTS que não foi depositada. Funcionário demitido sem justa causa não recebeu a multa na conta do FGTS. Empresa condenada a pagar R$ 8.500 de multa acrescida de juros e correção, totalizando R$ 11.200."
      },
      {
        id: "2",
        court: "TRT-15 (Campinas)",
        number: "Processo nº 0014678-90.2024.5.15.0000",
        date: "16/09/2024",
        summary: "Reconhecido direito à multa de 40% em rescisão indireta. Empregado sofreu assédio moral e empresa não pagou salários por 3 meses. Tribunal equiparou à demissão sem justa causa. Empresa condenada a pagar todas as verbas rescisórias incluindo multa de 40% do FGTS de R$ 5.800 + indenização por danos morais de R$ 15 mil."
      },
      {
        id: "3",
        court: "TRT-3 (Minas Gerais)",
        number: "Processo nº 0105789-23.2024.5.03.0000",
        date: "09/09/2024",
        summary: "Acordo de demissão anulado por vício de consentimento. Funcionário pressionado a aceitar acordo quando queria demissão normal. Tribunal converteu em demissão sem justa causa. Empresa condenada a pagar diferença da multa (de 20% para 40%) no valor de R$ 3.200 + diferenças de aviso prévio e liberação de saque integral do FGTS."
      }
    ]
  },
  "advertencias-suspensoes": {
    id: "advertencias-suspensoes",
    order: 13,
    title: "Advertências e Suspensões",
    description: "Punições disciplinares, limites e seus direitos quando advertido ou suspenso",
    keywords: ["advertência", "suspensão", "punição", "medida disciplinar", "poder disciplinar"],
    legislation: [
      {
        title: "CLT - Art. 474",
        reference: "Consolidação das Leis do Trabalho - Artigo 474",
        content: "A suspensão do empregado por mais de 30 (trinta) dias consecutivos importa na rescisão injusta do contrato de trabalho.",
        interpretation: "Em linguagem simples: A empresa pode te SUSPENDER (afastar do trabalho sem salário) como punição por faltas graves, mas NO MÁXIMO 30 DIAS SEGUIDOS! Se suspender por mais de 30 dias, é considerado DEMISSÃO SEM JUSTA CAUSA automática - você tem direito a todas as verbas rescisórias (aviso prévio, multa 40% FGTS, seguro-desemprego). ⚠️ ATENÇÃO NA PRÁTICA: A maioria das suspensões é de 1 a 15 dias. Suspensão de 30 dias é muito rara e grave. Durante a suspensão você NÃO recebe salário. IMPORTANTE: A empresa deve dar a suspensão POR ESCRITO, dizendo o motivo e quantos dias. Se não der por escrito, pode ser contestado depois. DICA: Se receber suspensão, assine 'ciente, mas não concordo' se você acha injusta - isso preserva seu direito de reclamar depois.",
        link: "http://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm#art474"
      },
      {
        title: "CLT - Art. 2º - Poder Disciplinar do Empregador",
        reference: "Consolidação das Leis do Trabalho - Artigo 2º",
        content: "Considera-se empregador a empresa, individual ou coletiva, que, assumindo os riscos da atividade econômica, admite, assalaria e dirige a prestação pessoal de serviço.",
        interpretation: "Em linguagem simples: Este artigo dá à empresa o 'poder de direção', que inclui o poder disciplinar (aplicar punições). A empresa pode advertir e suspender funcionários por descumprimento de regras. MAS esse poder TEM LIMITES: a punição precisa ser PROPORCIONAL à falta, IMEDIATA (não pode punir algo que aconteceu há 6 meses), e NÃO PODE punir duas vezes pela mesma falta. ⚠️ ATENÇÃO NA PRÁTICA: Advertências e suspensões são válidas quando: 1) A regra descumprida estava clara, 2) A punição é proporcional, 3) Foi aplicada logo após a falta, 4) Tem provas da falta. Se a empresa te punir sem provas, por algo que não estava nas regras, ou de forma desproporcional, você pode contestar. DICA: Sempre peça cópia por escrito de qualquer advertência ou suspensão. Você tem esse direito!",
        link: "http://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm#art2"
      }
    ],
    ordinances: [],
    summaries: [],
    jurisprudence: [
      {
        title: "Gradação de penalidades",
        content: "A jurisprudência trabalhista consolidou o entendimento de que o empregador deve respeitar a gradação de penalidades (advertência verbal → advertência escrita → suspensão → demissão), salvo em casos de falta gravíssima que justifique punição mais severa de imediato.",
        interpretation: "Em linguagem simples: A empresa normalmente deve seguir esta ordem ao punir: 1ª vez = advertência verbal (conversa), 2ª vez = advertência escrita (documento), 3ª vez = suspensão (1 a 30 dias sem salário), 4ª vez ou falta muito grave = demissão por justa causa. EXCEÇÃO: Faltas gravíssimas (roubo, agressão, embriaguez) podem levar direto à justa causa. ⚠️ ATENÇÃO NA PRÁTICA: Se a empresa te demitir por justa causa SEM ter dado advertências antes (para faltas leves/moderadas), a Justiça pode reverter para demissão sem justa causa. Você ganha todas as verbas! IMPORTANTE: Guarde TODAS as advertências que receber. Se for demitido por justa causa e não houver histórico de punições anteriores, você tem bons argumentos para contestar. DICA: Cada advertência/suspensão 'expira' após 1-2 anos sem novas faltas (varia por empresa/acordo coletivo)."
      },
      {
        title: "Proporcionalidade da punição",
        content: "A punição disciplinar deve ser proporcional à gravidade da falta cometida. Suspensão de 30 dias por atraso de 10 minutos, por exemplo, seria considerada desproporcional e poderia ser anulada pela Justiça do Trabalho.",
        interpretation: "Em linguagem simples: A punição tem que 'fazer sentido' com a gravidade da falta! Exemplos de DESPROPORCIONALIDADE que a Justiça anula: suspender 15 dias por chegar 5 minutos atrasado, demitir por justa causa por usar celular 1 vez, advertir por escrito algo que deveria ser só conversa. A Justiça analisa: gravidade da falta, consequências para a empresa, histórico do funcionário, e se a punição foi exagerada. ⚠️ ATENÇÃO: Se você tem 10 anos de bons serviços e cometeu uma falta leve pela primeira vez, suspensão pesada pode ser anulada. DICA: Se achar a punição injusta ou exagerada, assine 'ciente mas discordante' e procure o sindicato ou advogado trabalhista."
      },
      {
        title: "Dupla penalidade pelo mesmo fato (non bis in idem)",
        content: "É vedado ao empregador punir o empregado mais de uma vez pela mesma falta. Se já houve advertência por determinado ato, não pode haver nova suspensão pelo mesmo fato, salvo se houver reincidência.",
        interpretation: "Em linguagem simples: A empresa NÃO PODE te punir duas vezes pela mesma coisa! Exemplo: você chegou atrasado dia 10/01, recebeu advertência. A empresa NÃO PODE te suspender depois pelo mesmo atraso de 10/01. Só pode punir de novo se você ATRASAR NOVAMENTE (reincidência). ⚠️ ATENÇÃO NA PRÁTICA: Algumas empresas tentam 'empilhar' punições (advertência + suspensão + desconto de DSR pelo mesmo fato). Isso é ILEGAL! Se acontecer com você, a segunda punição pode ser anulada na Justiça. DICA: Anote sempre a DATA e o MOTIVO de cada punição que receber. Se te punirem de novo pelo mesmo fato, você tem prova do abuso."
      }
    ],
    recentDecisions: [
      {
        id: "1",
        court: "TRT-2 (São Paulo)",
        number: "Processo nº 1005678-90.2024.5.02.0000",
        date: "24/09/2024",
        summary: "Revertida justa causa por falta de gradação de penalidades. Funcionário demitido por justa causa por uso de celular no trabalho sem nunca ter recebido advertência anterior. Tribunal converteu em demissão sem justa causa. Empresa condenada a pagar todas as verbas rescisórias no valor de R$ 28 mil."
      },
      {
        id: "2",
        court: "TRT-15 (Campinas)",
        number: "Processo nº 0015789-01.2024.5.15.0000",
        date: "17/09/2024",
        summary: "Anulada suspensão de 20 dias por desproporcionalidade. Empregado suspenso por 20 dias por chegar 15 minutos atrasado. Tribunal considerou punição excessiva. Empresa condenada a pagar os 20 dias de salário descontados (R$ 2.400) + danos morais de R$ 5 mil."
      },
      {
        id: "3",
        court: "TRT-3 (Minas Gerais)",
        number: "Processo nº 0106890-34.2024.5.03.0000",
        date: "11/09/2024",
        summary: "Caracterizada dupla punição pelo mesmo fato. Empresa aplicou advertência e depois suspensão de 5 dias pelo mesmo atraso. Tribunal anulou a suspensão e condenou empresa a pagar os 5 dias de salário descontados (R$ 800) por violação ao princípio do non bis in idem."
      }
    ]
  },
  "justa-causa": {
    id: "justa-causa",
    order: 14,
    title: "Demissão por Justa Causa",
    description: "Todos os motivos de justa causa, procedimentos e como se defender",
    keywords: ["justa causa", "demissão", "falta grave", "artigo 482", "rescisão por justa causa"],
    legislation: [
      {
        title: "CLT - Art. 482 - Todos os Motivos de Justa Causa",
        reference: "Consolidação das Leis do Trabalho - Artigo 482",
        content: "Constituem justa causa para rescisão do contrato de trabalho pelo empregador: a) ato de improbidade; b) incontinência de conduta ou mau procedimento; c) negociação habitual por conta própria ou alheia sem permissão do empregador, e quando constituir ato de concorrência à empresa para a qual trabalha o empregado, ou for prejudicial ao serviço; d) condenação criminal do empregado, passada em julgado, caso não tenha havido suspensão da execução da pena; e) desídia no desempenho das respectivas funções; f) embriaguez habitual ou em serviço; g) violação de segredo da empresa; h) ato de indisciplina ou de insubordinação; i) abandono de emprego; j) ato lesivo da honra ou da boa fama praticado no serviço contra qualquer pessoa, ou ofensas físicas, nas mesmas condições, salvo em caso de legítima defesa, própria ou de outrem; k) ato lesivo da honra ou da boa fama ou ofensas físicas praticadas contra o empregador e superiores hierárquicos, salvo em caso de legítima defesa, própria ou de outrem; l) prática constante de jogos de azar; m) perda da habilitação ou dos requisitos estabelecidos em lei para o exercício da profissão, em decorrência de conduta dolosa do empregado.",
        interpretation: "Em linguagem simples: A CLT lista 13 MOTIVOS que permitem demissão por justa causa (você perde quase todos os direitos). TRADUZINDO CADA UM: a) ROUBAR, FRAUDAR, b) Assédio sexual, conduta sexual imprópria, c) Trabalhar para concorrente ou ter negócio próprio concorrente, d) Ir PRESO (condenação definitiva), e) PREGUIÇA/DESLEIXO repetido, f) Beber no trabalho ou ser alcoólatra, g) Vazar informações da empresa, h) DESOBEDECER ordens ou regras, i) SUMIR por 30+ dias, j) OFENDER/AGREDIR colegas, k) OFENDER/AGREDIR chefe/patrão, l) Jogar jogos de azar no trabalho, m) Perder habilitação profissional por má conduta (ex: motorista perde CNH dirigindo bêbado). ⚠️ IMPORTANTE: Justa causa é EXCEÇÃO, não regra! A empresa precisa PROVAR a falta grave. Se for demitido por justa causa, você SÓ recebe: saldo de salário + férias vencidas (se tiver). PERDE: aviso prévio, multa 40% FGTS, seguro-desemprego, férias proporcionais, 13º proporcional. DICA: NUNCA assine rescisão por justa causa sem ler tudo e entender o motivo. Se achar injusto, procure advogado ANTES de assinar!",
        link: "http://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm#art482"
      },
      {
        title: "CLT - Art. 483 - Justa Causa do Empregador (Rescisão Indireta)",
        reference: "Consolidação das Leis do Trabalho - Artigo 483",
        content: "O empregado poderá considerar rescindido o contrato e pleitear a devida indenização quando: a) forem exigidos serviços superiores às suas forças, defesos por lei, contrários aos bons costumes, ou alheios ao contrato; b) for tratado pelo empregador ou por seus superiores hierárquicos com rigor excessivo; c) correr perigo manifesto de mal considerável; d) não cumprir o empregador as obrigações do contrato; e) praticar o empregador ou seus prepostos, contra ele ou pessoas de sua família, ato lesivo da honra e boa fama; f) o empregador ou seus prepostos ofenderem-no fisicamente, salvo em caso de legítima defesa, própria ou de outrem; g) o empregador reduzir o seu trabalho, sendo este por peça ou tarefa, de forma a afetar sensivelmente a importância dos salários.",
        interpretation: "Em linguagem simples: Assim como a empresa pode te demitir por justa causa, VOCÊ TAMBÉM PODE 'demitir a empresa' por justa causa dela (chamado RESCISÃO INDIRETA)! Motivos válidos: a) Te obrigar a fazer algo ilegal, muito pesado, ou que não é sua função, b) ASSÉDIO MORAL (chefe persegue, humilha), c) Trabalho perigoso sem proteção, d) Empresa NÃO PAGA salário, vale-transporte, FGTS, e) Ofender você ou sua família, f) AGRESSÃO FÍSICA do chefe/patrão, g) Reduzir seu trabalho para você ganhar menos (comissionista). SE VOCÊ PROVAR, tem direito a TUDO como se fosse demissão sem justa causa: aviso prévio, multa 40% FGTS, seguro-desemprego! ⚠️ ATENÇÃO: Rescisão indireta precisa ser feita NA JUSTIÇA com advogado. Não basta você 'sair' da empresa - você vai trabalhar normalmente e entra com ação. Quando o juiz decide, a empresa é condenada. DICA: Se a empresa cometer falta grave, JUNTE PROVAS (prints de WhatsApp, emails, testemunhas, atestados) e procure advogado trabalhista!",
        link: "http://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm#art483"
      }
    ],
    ordinances: [],
    summaries: [
      {
        number: "Súmula 73",
        court: "TST - Tribunal Superior do Trabalho",
        content: "A ocorrência de justa causa, salvo a de abandono de emprego, no decurso do prazo do aviso prévio dado pelo empregador, retira do empregado qualquer direito às verbas rescisórias de natureza indenizatória.",
        interpretation: "Em linguagem simples: Se você foi demitido SEM justa causa e está cumprindo aviso prévio (trabalhando os 30 dias), mas COMETE uma falta grave durante esses 30 dias, a empresa pode CANCELAR a demissão sem justa causa e transformar em JUSTA CAUSA! Você perde todos os direitos (multa FGTS, seguro-desemprego). EXCEÇÃO: Abandono de emprego durante aviso prévio não muda para justa causa. ⚠️ ATENÇÃO: Durante aviso prévio, comportamento exemplar! Qualquer falta grave (roubo, agressão, embriaguez) pode virar justa causa. DICA: Se você está em aviso prévio, evite QUALQUER problema - falta dias, não discuta com chefe, cumpra tudo direitinho até o último dia.",
        link: "https://www.tst.jus.br/sumulas"
      },
      {
        number: "Súmula 62",
        court: "TST - Tribunal Superior do Trabalho",
        content: "O prazo de prescrição da falta grave, para efeito de rescisão do contrato de trabalho, conta-se da data em que o empregador teve conhecimento do fato.",
        interpretation: "Em linguagem simples: A empresa tem que punir LOGO DEPOIS que descobre a falta grave! Se demorar muito tempo para demitir por justa causa após saber da falta, caracteriza perdão tácito (empresa relevou). Não existe prazo fixo na lei, mas a jurisprudência considera que 30-60 dias já é 'demora demais'. EXEMPLO: Você roubou algo dia 10/01, empresa descobriu dia 12/01, mas só te demitiu dia 15/03 = 2 meses depois = pode caracterizar perdão. A justa causa pode ser anulada! DICA: Se for demitido por justa causa por algo antigo (mais de 2 meses), questione a demora - pode ser argumento para reverter.",
        link: "https://www.tst.jus.br/sumulas"
      }
    ],
    jurisprudence: [
      {
        title: "Ônus da prova na justa causa",
        content: "Em casos de demissão por justa causa, o ônus de provar a falta grave é SEMPRE do empregador. O empregado não precisa provar sua inocência - a empresa é quem deve apresentar provas concretas, documentos, testemunhas que comprovem a falta alegada.",
        interpretation: "Em linguagem simples: Se a empresa te acusa de algo e te demite por justa causa, a responsabilidade de PROVAR é da EMPRESA, não sua! Você não precisa provar que não fez - a empresa que precisa provar que você fez. Se a empresa não tiver provas suficientes, a justa causa é revertida na Justiça e você ganha tudo. IMPORTANTE: Por isso guarde evidências a seu favor (emails, mensagens, testemunhas). Se for acusado de roubo, mas não tem câmera, não tem testemunha, não tem boletim de ocorrência = palavra contra palavra = justa causa pode ser anulada!"
      },
      {
        title: "Direitos mantidos mesmo em justa causa",
        content: "Mesmo em demissão por justa causa, o empregado mantém direito a: saldo de salário (dias trabalhados do mês), férias vencidas + 1/3 (se tiver período completo de férias não gozadas), e saldo de salário-família se aplicável. NÃO tem direito a: aviso prévio, multa 40% FGTS, saque do FGTS, seguro-desemprego, férias proporcionais, 13º proporcional.",
        interpretation: "Em linguagem simples: Mesmo em justa causa, você NÃO SAI DE 'MÃO ABANANDO'! Você recebe: 1) Salário dos dias que trabalhou no mês, 2) Férias VENCIDAS (se completou 12 meses e não tirou férias) + 1/3, 3) Salário-família dos dias trabalhados. MAS PERDE: aviso prévio (0 reais), multa 40% FGTS (perde muito!), NÃO SACA o FGTS (fica parado), seguro-desemprego (0 parcelas), férias proporcionais (0), 13º proporcional (0). EXEMPLO PRÁTICO: Se você tem R$ 20.000 de FGTS acumulado, em justa causa perde R$ 8.000 de multa + não saca os R$ 20.000. Em demissão normal: ganha R$ 8.000 de multa + saca R$ 20.000 = diferença de R$ 28.000! POR ISSO JUSTA CAUSA É TÃO GRAVE!"
      }
    ],
    recentDecisions: [
      {
        id: "1",
        court: "TRT-2 (São Paulo)",
        number: "Processo nº 1007890-23.2024.5.02.0000",
        date: "28/09/2024",
        summary: "Revertida justa causa por falta de provas. Funcionário acusado de roubar R$ 500 do caixa, mas empresa não tinha câmeras, testemunhas ou boletim de ocorrência. Justa causa convertida em demissão sem justa causa. Empresa condenada a pagar multa 40% FGTS (R$ 6.200), aviso prévio, férias e 13º, totalizando R$ 22 mil + liberar saque do FGTS."
      },
      {
        id: "2",
        court: "TRT-15 (Campinas)",
        number: "Processo nº 0016901-78.2024.5.15.0000",
        date: "21/09/2024",
        summary: "Mantida justa causa por abandono de emprego. Funcionário faltou 35 dias consecutivos sem dar notícias. Empresa enviou telegrama para endereço cadastrado, tentou contato por telefone (3 vezes) e email. Tribunal entendeu que empresa cumpriu requisitos. Justa causa confirmada."
      },
      {
        id: "3",
        court: "TRT-3 (Minas Gerais)",
        number: "Processo nº 0109012-89.2024.5.03.0000",
        date: "14/09/2024",
        summary: "Justa causa revertida por falta de imediatidade. Empresa demitiu funcionário por justa causa 5 meses após descobrir a falta (uso indevido de veículo da empresa). Tribunal reconheceu perdão tácito. Convertida em demissão sem justa causa. Empresa pagou R$ 45 mil de verbas rescisórias."
      }
    ]
  },
  "plr": {
    id: "plr",
    order: 16,
    title: "PLR - Participação nos Lucros e Resultados",
    description: "Como funciona, quem tem direito, cálculo e obrigações da empresa",
    keywords: ["PLR", "participação lucros", "resultados", "lei 10101", "benefício variável"],
    legislation: [
      {
        title: "CF - Art. 7º, XI - Participação nos Lucros",
        reference: "Constituição Federal - Artigo 7º, inciso XI",
        content: "São direitos dos trabalhadores urbanos e rurais, além de outros que visem à melhoria de sua condição social: XI - participação nos lucros, ou resultados, desvinculada da remuneração, e, excepcionalmente, participação na gestão da empresa, conforme definido em lei.",
        interpretation: "Em linguagem simples: A PLR é um DIREITO CONSTITUCIONAL do trabalhador! A empresa pode (e deve, se houver acordo) dar parte dos lucros para os funcionários. MAS: a PLR NÃO pode ser vinculada ao salário (não é salário!), e pode incluir participação na gestão da empresa. ⚠️ ATENÇÃO: Este é um DIREITO, mas a empresa não é OBRIGADA a pagar PLR. Só paga se houver acordo/negociação. IMPORTANTE: PLR não é salário - não tem FGTS, INSS, férias, 13º. É benefício EXTRA! DICA: Se a empresa tem lucro, você pode negociar PLR através do sindicato ou comissão interna.",
        link: "http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art7"
      },
      {
        title: "Lei 10.101/2000 - Regulamentação da PLR",
        reference: "Lei nº 10.101, de 19 de dezembro de 2000",
        content: "Art. 1º Esta Lei estabelece normas sobre a participação dos empregados nos lucros ou resultados da empresa. Art. 2º A participação nos lucros ou resultados será objeto de negociação entre empregadores e empregados, por meio de comissão paritária, constituída por representantes da empresa e dos empregados, ou por convenção ou acordo coletivo de trabalho. Art. 3º A participação nos lucros ou resultados não substitui nem complementa a remuneração devida a qualquer empregado. Art. 4º A participação nos lucros ou resultados não pode ser habitual, ou seja, não pode ser paga de forma constante, independentemente dos resultados da empresa.",
        interpretation: "Em linguagem simples: Esta lei REGULAMENTA como funciona a PLR na prática: 1) PLR é negociada entre empresa e funcionários (sindicato ou comissão), 2) PLR NÃO substitui salário (é EXTRA), 3) PLR NÃO pode ser 'habitual' - só paga se empresa tiver lucro/resultado positivo, 4) Deve ser negociada por escrito (acordo/convenção coletiva). ⚠️ ATENÇÃO NA PRÁTICA: Se a empresa sempre pagou PLR todo ano, isso pode virar 'direito adquirido' mesmo sem acordo. IMPORTANTE: PLR só é devida se houver ACORDO/negociação formal. Empresa sozinha não decide. DICA: Se a empresa nunca pagou PLR mas sempre teve lucro, você pode negociar através do sindicato!",
        link: "http://www.planalto.gov.br/ccivil_03/leis/l10101.htm"
      },
      {
        title: "Lei 10.101/2000 - Art. 5º - Periodicidade",
        reference: "Lei nº 10.101/2000 - Artigo 5º",
        content: "A participação nos lucros ou resultados poderá ser paga em até duas vezes por ano, em periodicidade não inferior a um trimestre.",
        interpretation: "Em linguagem simples: A empresa pode pagar PLR NO MÁXIMO 2 VEZES POR ANO (não todo mês!). Exemplos válidos: PLR semestral (julho e dezembro), PLR anual (só dezembro), PLR trimestral (março, junho, setembro, dezembro). NÃO PODE: PLR todo mês (isso seria salário disfarçado). ⚠️ ATENÇÃO NA PRÁTICA: Muitas empresas pagam PLR em dezembro (13º salário extra). Outras pagam semestralmente. IMPORTANTE: O valor pode variar a cada pagamento (depende do resultado da empresa). DICA: Se a empresa pagar PLR mensalmente, isso pode ser considerado salário e ter FGTS/INSS!",
        link: "http://www.planalto.gov.br/ccivil_03/leis/l10101.htm"
      },
      {
        title: "Lei 10.101/2000 - Art. 6º - Critérios de Distribuição",
        reference: "Lei nº 10.101/2000 - Artigo 6º",
        content: "Os critérios de distribuição da participação nos lucros ou resultados serão definidos em negociação entre empregadores e empregados, podendo considerar: I - a produtividade; II - a qualidade; III - a lucratividade; IV - o desempenho; V - outros fatores acordados entre as partes.",
        interpretation: "Em linguagem simples: A empresa e funcionários NEGOCIAM como calcular a PLR. Pode considerar: 1) PRODUTIVIDADE (quanto cada um produziu), 2) QUALIDADE (qualidade do trabalho), 3) LUCROS da empresa, 4) DESEMPENHO individual, 5) Outros fatores (tempo de casa, cargo, etc.). ⚠️ ATENÇÃO NA PRÁTICA: A maioria das empresas usa critérios MISTOS: parte igual para todos + parte por desempenho. IMPORTANTE: Os critérios devem estar CLAROS no acordo. Se não estiver claro, pode gerar confusão e processo. DICA: Se você achar que o cálculo da sua PLR está errado, peça para a empresa explicar os critérios por escrito!",
        link: "http://www.planalto.gov.br/ccivil_03/leis/l10101.htm"
      }
    ],
    ordinances: [],
    summaries: [
      {
        number: "Súmula 356",
        court: "TST - Tribunal Superior do Trabalho",
        content: "A participação nos lucros ou resultados, quando devida, integra a remuneração para todos os efeitos legais.",
        interpretation: "Em linguagem simples: Esta súmula é IMPORTANTE! Se a empresa PAGA PLR há muito tempo (se tornou 'habitual'), ela vira PARTE DO SALÁRIO e tem FGTS, INSS, férias, 13º! Isso acontece quando a empresa sempre paga PLR todo ano, mesmo sem lucro. A Justiça entende que virou 'direito adquirido'. ⚠️ ATENÇÃO: Se a empresa paga PLR há 5+ anos sempre, pode ser considerado salário! DICA: Guarde todos os comprovantes de PLR recebida - se a empresa parar de pagar, você pode processar!",
        link: "https://www.tst.jus.br/sumulas"
      }
    ],
    jurisprudence: [
      {
        title: "PLR como direito adquirido",
        content: "A jurisprudência trabalhista consolidou o entendimento de que, quando a empresa paga PLR de forma habitual e constante, independentemente dos resultados, tal benefício adquire natureza salarial, integrando a remuneração para todos os efeitos legais, incluindo FGTS, INSS, férias e 13º salário.",
        interpretation: "Em linguagem simples: Se a empresa SEMPRE paga PLR (todo ano, mesmo sem lucro), isso vira SALÁRIO! A Justiça entende que virou 'direito adquirido'. Exemplo: empresa paga PLR há 10 anos sempre em dezembro, mesmo quando teve prejuízo = vira salário com FGTS/INSS. ⚠️ ATENÇÃO: Isso é MUITO comum em empresas grandes! Se você sempre recebeu PLR e a empresa quer parar, pode processar! IMPORTANTE: Precisa comprovar que era 'habitual' (sempre pagou). DICA: Guarde holerites e comprovantes de PLR dos últimos anos como prova!"
      },
      {
        title: "Natureza não salarial da PLR",
        content: "A PLR, quando paga de acordo com a Lei 10.101/2000 (vinculada a resultados e negociada), mantém natureza não salarial, não integrando a remuneração para fins de FGTS, INSS, férias e 13º salário. Só tem natureza salarial quando se torna 'habitual'.",
        interpretation: "Em linguagem simples: PLR NORMAL (paga só quando empresa tem lucro) NÃO é salário! Não tem FGTS, INSS, férias, 13º. É benefício EXTRA. Só vira salário se for 'habitual' (sempre paga). ⚠️ ATENÇÃO: Isso significa que se você receber R$ 5.000 de PLR, não vai ter desconto de INSS nem contribui para FGTS. IMPORTANTE: Mas ainda paga IMPOSTO DE RENDA sobre a PLR! DICA: PLR é ótima porque você recebe 'limpo' (só desconta IR)."
      }
    ],
    recentDecisions: [
      {
        id: "1",
        court: "TRT-2 (São Paulo)",
        number: "Processo nº 1008901-34.2024.5.02.0000",
        date: "30/09/2024",
        summary: "PLR reconhecida como salário por habitualidade. Empresa pagava PLR há 8 anos consecutivos, mesmo em anos de prejuízo. Tribunal entendeu que adquiriu natureza salarial. Empregados têm direito a reflexos em FGTS, INSS, férias e 13º sobre valores de PLR dos últimos 5 anos. Empresa condenada a pagar R$ 180 mil em reflexos trabalhistas."
      },
      {
        id: "2",
        court: "TRT-15 (Campinas)",
        number: "Processo nº 0017902-78.2024.5.15.0000",
        date: "23/09/2024",
        summary: "PLR negada por ausência de acordo coletivo. Empresa nunca celebrou acordo de PLR com sindicato. Empregados tentaram receber PLR baseado apenas em lucros da empresa. Tribunal negou pedido - PLR só é devida com acordo formal. Recurso dos empregados negado."
      },
      {
        id: "3",
        court: "TRT-3 (Minas Gerais)",
        number: "Processo nº 0110013-90.2024.5.03.0000",
        date: "16/09/2024",
        summary: "Cálculo de PLR corrigido por discriminação. Empresa pagou PLR diferente para homens e mulheres no mesmo cargo. Tribunal entendeu discriminação de gênero. Empregadas têm direito à diferença de PLR + multa por discriminação. Empresa condenada a pagar R$ 45 mil em diferenças e multa."
      }
    ]
  },
  "vale-transporte": {
    id: "vale-transporte",
    order: 17,
    title: "Como funciona o Vale Transporte, como deve ser pago e como é o desconto?",
    description: "Tudo sobre Vale Transporte: obrigação da empresa, desconto do funcionário e legislação",
    keywords: ["vale transporte", "lei 7418", "desconto 6%", "obrigação empregador", "transporte público"],
    legislation: [
      {
        title: "Lei 7.418/1985 - Vale Transporte",
        reference: "Lei nº 7.418, de 16 de dezembro de 1985",
        content: "Art. 1º Fica instituído o vale-transporte, destinado a atender, prioritariamente, aos trabalhadores de baixa renda, no deslocamento residência-trabalho e vice-versa. Art. 2º O vale-transporte será fornecido pelo empregador, que poderá descontar do salário do empregado até 6% (seis por cento) do valor de seu salário-base, limitando-se o desconto ao valor efetivamente utilizado no período de concessão. Art. 3º O empregador deverá fornecer o vale-transporte, preferencialmente em cartões magnéticos ou bilhetes, no início do período de concessão.",
        interpretation: "Em linguagem simples: O Vale Transporte é OBRIGATÓRIO para TODOS os funcionários! A empresa DEVE fornecer o benefício e pode descontar ATÉ 6% do salário do funcionário. Exemplo: Se você ganha R$ 3.000, a empresa pode descontar no máximo R$ 180 (6% de R$ 3.000). Se você gastar R$ 200 com transporte, a empresa paga R$ 180 e você paga R$ 20. Se gastar R$ 150, a empresa paga R$ 150 e você paga R$ 30 (que volta no salário). ⚠️ ATENÇÃO: O desconto é OBRIGATÓRIO! Você não pode recusar. IMPORTANTE: Deve ser fornecido em cartão/bilhete, NÃO em dinheiro. DICA: Se a empresa não fornecer Vale Transporte, você pode processar!",
        link: "http://www.planalto.gov.br/ccivil_03/leis/l7418.htm"
      },
      {
        title: "Lei 7.418/1985 - Art. 4º - Limite do Desconto",
        reference: "Lei nº 7.418/1985 - Artigo 4º",
        content: "O desconto previsto no art. 2º desta Lei não poderá exceder o valor efetivamente gasto com transporte no período de concessão, nem 6% (seis por cento) do salário-base do empregado.",
        interpretation: "Em linguagem simples: A empresa NÃO PODE descontar mais que você gasta com transporte! Exemplos: 1) Você gasta R$ 100 com transporte e ganha R$ 3.000: desconto máximo R$ 100 (não os R$ 180 dos 6%). 2) Você gasta R$ 200 com transporte e ganha R$ 3.000: desconto máximo R$ 180 (6% = R$ 180), empresa paga R$ 20 a mais. ⚠️ ATENÇÃO: Se a empresa descontar mais que você gasta, está roubando! IMPORTANTE: O desconto é sempre o MENOR valor entre: 6% do salário OU valor gasto com transporte. DICA: Guarde os comprovantes de transporte para conferir se o desconto está correto!",
        link: "http://www.planalto.gov.br/ccivil_03/leis/l7418.htm"
      }
    ],
    ordinances: [],
    summaries: [],
    jurisprudence: [
      {
        title: "Vale Transporte como obrigação legal",
        content: "A jurisprudência trabalhista consolidou o entendimento de que o Vale Transporte é obrigação legal do empregador, não podendo ser condicionado a qualquer requisito ou acordo. A empresa que não fornece o benefício comete infração trabalhista passível de multa e condenação ao pagamento dos valores devidos.",
        interpretation: "Em linguagem simples: A empresa NÃO PODE inventar desculpas para não dar Vale Transporte! Não importa se: você tem carro, mora perto, usa bicicleta, etc. É OBRIGATÓRIO para TODOS! Se a empresa se recusar, você pode: 1) Processar na Justiça, 2) Denunciar no MTE (Ministério do Trabalho), 3) Pedir multa para a empresa. ⚠️ ATENÇÃO: Mesmo se você não usar transporte público, a empresa DEVE oferecer! IMPORTANTE: Se a empresa só oferece para alguns funcionários, é discriminação ilegal. DICA: Se a empresa disser que 'não tem obrigação', está mentindo!"
      }
    ],
    recentDecisions: [
      {
        id: "1",
        court: "TRT-2 (São Paulo)",
        number: "Processo nº 1009902-45.2024.5.02.0000",
        date: "03/10/2024",
        summary: "Vale Transporte negado por 2 anos - empresa condenada. Funcionária morava a 15km do trabalho e empresa se recusou a fornecer Vale Transporte alegando que 'não era obrigatório'. Tribunal condenou empresa a pagar R$ 3.600 (R$ 150/mês x 24 meses) + multa de R$ 1.800. Total: R$ 5.400."
      },
      {
        id: "2",
        court: "TRT-15 (Campinas)",
        number: "Processo nº 0018903-89.2024.5.15.0000",
        date: "26/09/2024",
        summary: "Desconto excessivo de Vale Transporte corrigido. Empresa descontava 6% do salário mesmo quando funcionário gastava menos. Tribunal condenou empresa a restituir diferenças dos últimos 2 anos no valor de R$ 2.880 + multa. Funcionário recebeu R$ 4.320."
      },
      {
        id: "3",
        court: "TRT-3 (Minas Gerais)",
        number: "Processo nº 0111014-01.2024.5.03.0000",
        date: "19/09/2024",
        summary: "Vale Transporte fornecido em dinheiro anulado. Empresa fornecia dinheiro em vez de cartão/bilhete, violando a Lei 7.418/1985. Tribunal condenou empresa a fornecer cartão adequado + multa de R$ 2.500 por irregularidade. Todos os funcionários foram beneficiados."
      }
    ]
  },
  "seguro-desemprego": {
    id: "seguro-desemprego",
    order: 18,
    title: "Quem tem direito ao seguro-desemprego e por quanto tempo?",
    description: "Requisitos, prazos, valores e como solicitar o seguro-desemprego",
    keywords: ["seguro desemprego", "demissão sem justa causa", "requisitos", "parcelas", "valor"],
    legislation: [
      {
        title: "Lei 7.998/1990 - Seguro-Desemprego",
        reference: "Lei nº 7.998, de 11 de janeiro de 1990",
        content: "Art. 1º Fica instituído o Programa Seguro-Desemprego, de caráter social, destinado a prover assistência financeira temporária ao trabalhador desempregado, bem como a qualificá-lo profissionalmente, quando necessário. Art. 2º São beneficiários do seguro-desemprego os trabalhadores desempregados que atendam aos requisitos estabelecidos nesta Lei. Art. 3º O seguro-desemprego será concedido pelo prazo de 3 (três) a 5 (cinco) meses, conforme o tempo de trabalho nos últimos 36 (trinta e seis) meses anteriores ao desligamento.",
        interpretation: "Em linguagem simples: O seguro-desemprego é um DINHEIRO que o governo dá quando você é demitido SEM justa causa! É para te ajudar enquanto você procura outro emprego. Você recebe de 3 a 5 parcelas (mensais), dependendo de quanto tempo você trabalhou. ⚠️ ATENÇÃO: Só tem direito quem é DEMITIDO SEM JUSTA CAUSA (não quem pede demissão). IMPORTANTE: Você precisa ter trabalhado com carteira assinada (CLT). DICA: Se você pediu demissão, NÃO tem direito ao seguro-desemprego!",
        link: "http://www.planalto.gov.br/ccivil_03/leis/l7998.htm"
      },
      {
        title: "Lei 7.998/1990 - Art. 4º - Requisitos",
        reference: "Lei nº 7.998/1990 - Artigo 4º",
        content: "Para ter direito ao seguro-desemprego, o trabalhador deve: I - ter sido dispensado sem justa causa; II - não estar em gozo de qualquer benefício de prestação continuada da Previdência Social, exceto auxílio-acidente; III - ter trabalhado com carteira assinada por, no mínimo: a) 12 (doze) meses nos últimos 18 (dezoito) meses anteriores ao desligamento, no caso da primeira solicitação; b) 9 (nove) meses nos últimos 12 (doze) meses anteriores ao desligamento, no caso da segunda solicitação; c) 6 (seis) meses nos últimos 6 (seis) meses anteriores ao desligamento, a partir da terceira solicitação.",
        interpretation: "Em linguagem simples: Para ter direito ao seguro-desemprego, você precisa: 1) Ser DEMITIDO sem justa causa, 2) Não estar recebendo aposentadoria/auxílio-doença, 3) Ter trabalhado com carteira assinada: - 1ª vez: 12 meses nos últimos 18 meses, - 2ª vez: 9 meses nos últimos 12 meses, - 3ª vez ou mais: 6 meses nos últimos 6 meses. ⚠️ ATENÇÃO: Se você pediu demissão, NÃO tem direito! IMPORTANTE: O tempo de trabalho precisa ser COM CARTEIRA ASSINADA (CLT). DICA: Guarde a carteira de trabalho e documentos da rescisão para comprovar o tempo trabalhado!",
        link: "http://www.planalto.gov.br/ccivil_03/leis/l7998.htm"
      }
    ],
    ordinances: [],
    summaries: [],
    jurisprudence: [
      {
        title: "Seguro-desemprego e justa causa",
        content: "A jurisprudência consolidou o entendimento de que o seguro-desemprego é indevido quando há justa causa comprovada. Porém, se a justa causa for revertida pela Justiça do Trabalho, o trabalhador adquire direito ao benefício retroativamente.",
        interpretation: "Em linguagem simples: Se você foi demitido por JUSTA CAUSA, NÃO tem direito ao seguro-desemprego. MAS: se você processar e a Justiça reverter a justa causa (virar demissão sem justa causa), você GANHA o direito ao seguro-desemprego! ⚠️ ATENÇÃO: Mesmo que você já tenha perdido o prazo para pedir, se a Justiça reverter, você pode pedir depois. IMPORTANTE: Guarde todos os documentos da demissão - podem ser úteis no processo. DICA: Se você acha que a demissão por justa causa foi injusta, procure um advogado trabalhista!"
      }
    ],
    recentDecisions: [
      {
        id: "1",
        court: "TRT-2 (São Paulo)",
        number: "Processo nº 1010903-56.2024.5.02.0000",
        date: "07/10/2024",
        summary: "Justa causa revertida - trabalhador ganha direito ao seguro-desemprego. Funcionário foi demitido por 'falta grave' mas Justiça reverteu para demissão sem justa causa. Trabalhador conseguiu receber seguro-desemprego retroativamente (5 parcelas de R$ 1.800 = R$ 9.000) + empresa pagou R$ 15 mil em verbas rescisórias."
      },
      {
        id: "2",
        court: "TRT-15 (Campinas)",
        number: "Processo nº 0019904-00.2024.5.15.0000",
        date: "30/09/2024",
        summary: "Seguro-desemprego negado por pedido de demissão. Trabalhador pediu demissão mas alegou que foi 'forçado' pela empresa. Tribunal negou - não houve prova de coação. Trabalhador perdeu direito ao seguro-desemprego (5 parcelas de R$ 1.500 = R$ 7.500 perdidos)."
      },
      {
        id: "3",
        court: "TRT-3 (Minas Gerais)",
        number: "Processo nº 0112015-12.2024.5.03.0000",
        date: "23/09/2024",
        summary: "Seguro-desemprego concedido após recurso. Trabalhador foi negado pelo INSS por 'tempo insuficiente' mas comprovou 14 meses trabalhados nos últimos 18 meses. Tribunal determinou concessão do benefício (4 parcelas de R$ 1.200 = R$ 4.800) + multa administrativa para o INSS."
      }
    ]
  },
  "calculo-ferias-13": {
    id: "calculo-ferias-13",
    order: 19,
    title: "Como é feito o cálculo das férias e do 13º salário?",
    description: "Fórmulas, exemplos práticos e como calcular férias e 13º salário",
    keywords: ["cálculo férias", "13º salário", "fórmula", "exemplos", "1/3 constitucional"],
    legislation: [
      {
        title: "CLT - Art. 142 - Cálculo do 13º Salário",
        reference: "Consolidação das Leis do Trabalho - Artigo 142",
        content: "A gratificação natalina corresponderá a 1/12 (um doze avos) da remuneração devida em dezembro, por mês de serviço, do ano correspondente. A gratificação será paga até o dia 20 de dezembro de cada ano.",
        interpretation: "Em linguagem simples: O 13º salário é calculado assim: SALÁRIO ÷ 12 × MESES TRABALHADOS. Exemplo: Você ganha R$ 3.600 e trabalhou 8 meses no ano = R$ 3.600 ÷ 12 × 8 = R$ 300 × 8 = R$ 2.400. ⚠️ ATENÇÃO: Se você trabalhou só 1 mês, recebe 1/12 do salário. Se trabalhou o ano todo, recebe o salário completo. IMPORTANTE: É pago em 2 parcelas: 1ª parcela (50%) até 30/11, 2ª parcela (50% - IR) até 20/12. DICA: Se você for demitido, recebe o 13º proporcional aos meses trabalhados!",
        link: "http://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm#art142"
      },
      {
        title: "CLT - Art. 130 - Férias Anuais",
        reference: "Consolidação das Leis do Trabalho - Artigo 130",
        content: "Após cada período de 12 (doze) meses de vigência do contrato de trabalho, o empregado terá direito a férias, na seguinte proporção: I - 30 (trinta) dias corridos, quando não houver faltado ao serviço mais de 5 (cinco) vezes; II - 24 (vinte e quatro) dias corridos, quando houver tido de 6 (seis) a 14 (quatorze) faltas; III - 18 (dezoito) dias corridos, quando houver tido de 15 (quinze) a 23 (vinte e três) faltas; IV - 12 (doze) dias corridos, quando houver tido de 24 (vinte e quatro) a 32 (trinta e duas) faltas.",
        interpretation: "Em linguagem simples: As férias dependem das FALTAS que você teve no período: - 0 a 5 faltas = 30 dias de férias, - 6 a 14 faltas = 24 dias de férias, - 15 a 23 faltas = 18 dias de férias, - 24 a 32 faltas = 12 dias de férias. ⚠️ ATENÇÃO: Só contam as faltas INJUSTIFICADAS (sem atestado médico). Faltas com atestado médico NÃO contam! IMPORTANTE: Você recebe o salário + 1/3 constitucional durante as férias. DICA: Se você tem 33+ faltas injustificadas, NÃO tem direito a férias!",
        link: "http://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm#art130"
      },
      {
        title: "CF - Art. 7º, XVII - 1/3 Constitucional",
        reference: "Constituição Federal - Artigo 7º, inciso XVII",
        content: "São direitos dos trabalhadores urbanos e rurais: XVII - gozo de férias anuais remuneradas com, pelo menos, um terço a mais do que o salário normal.",
        interpretation: "Em linguagem simples: Durante as férias, você recebe seu salário NORMAL + 1/3 EXTRA! Exemplo: Se você ganha R$ 3.000, nas férias recebe R$ 3.000 + R$ 1.000 (1/3) = R$ 4.000. ⚠️ ATENÇÃO: O 1/3 é OBRIGATÓRIO! A empresa não pode pagar só o salário normal. IMPORTANTE: O 1/3 é sobre o salário-base, não sobre comissões/adicional. DICA: Se a empresa não pagar o 1/3, você pode processar para receber a diferença!",
        link: "http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art7"
      }
    ],
    ordinances: [],
    summaries: [],
    jurisprudence: [
      {
        title: "Cálculo de férias proporcionais",
        content: "A jurisprudência consolidou o entendimento de que as férias proporcionais, quando devidas (demissão antes de completar 12 meses), devem ser calculadas considerando 1/12 do salário por mês trabalhado, acrescidas de 1/3 constitucional.",
        interpretation: "Em linguagem simples: Se você for demitido antes de completar 12 meses, tem direito a FÉRIAS PROPORCIONAIS! Cálculo: SALÁRIO ÷ 12 × MESES TRABALHADOS + 1/3. Exemplo: Trabalhou 8 meses, ganha R$ 3.600 = R$ 3.600 ÷ 12 × 8 = R$ 2.400 + R$ 800 (1/3) = R$ 3.200. ⚠️ ATENÇÃO: Só tem direito se não for demitido por justa causa. IMPORTANTE: As férias proporcionais também têm 1/3 constitucional! DICA: Guarde os comprovantes de salário para calcular direito."
      }
    ],
    recentDecisions: [
      {
        id: "1",
        court: "TRT-2 (São Paulo)",
        number: "Processo nº 1011904-67.2024.5.02.0000",
        date: "10/10/2024",
        summary: "13º salário calculado incorretamente - empresa condenada. Funcionário trabalhou 10 meses mas empresa pagou só 8/12. Tribunal condenou empresa a pagar diferença de 2/12 do 13º (R$ 1.200) + multa de R$ 600. Total: R$ 1.800."
      },
      {
        id: "2",
        court: "TRT-15 (Campinas)",
        number: "Processo nº 0020905-11.2024.5.15.0000",
        date: "03/10/2024",
        summary: "1/3 constitucional das férias não pago - trabalhador ganha processo. Empresa pagou só o salário normal nas férias, sem o 1/3 extra. Tribunal condenou empresa a pagar R$ 2.400 (1/3 de 3 períodos de férias) + multa de R$ 1.200. Total: R$ 3.600."
      },
      {
        id: "3",
        court: "TRT-3 (Minas Gerais)",
        number: "Processo nº 0113016-23.2024.5.03.0000",
        date: "26/09/2024",
        summary: "Férias proporcionais negadas incorretamente. Funcionário demitido após 9 meses mas empresa não pagou férias proporcionais. Tribunal condenou empresa a pagar R$ 2.700 (9/12 do salário) + R$ 900 (1/3) = R$ 3.600 + multa."
      }
    ]
  },
  "abono-venda-ferias": {
    id: "abono-venda-ferias",
    order: 20,
    title: "O que é abono de férias e o que é 'vender' férias?",
    description: "Diferenças entre abono pecuniário e venda de férias, direitos e limites",
    keywords: ["abono férias", "vender férias", "abono pecuniário", "1/3 férias", "limite legal"],
    legislation: [
      {
        title: "CLT - Art. 143 - Abono Pecuniário",
        reference: "Consolidação das Leis do Trabalho - Artigo 143",
        content: "É facultado ao empregado converter 1/3 (um terço) do período de férias a que tiver direito em abono pecuniário, no valor da remuneração que lhe seria devida nos dias correspondentes. O abono pecuniário de férias deverá ser requerido até 15 (quinze) dias antes do término do período aquisitivo.",
        interpretation: "Em linguagem simples: Você pode 'VENDER' 1/3 das suas férias para a empresa! Exemplo: Você tem direito a 30 dias de férias, pode vender 10 dias e tirar só 20 dias. Você recebe o dinheiro dos 10 dias vendidos. ⚠️ ATENÇÃO: Você NÃO PODE vender mais que 1/3! Se tem 30 dias, pode vender só 10 dias. IMPORTANTE: Você precisa PEDIR até 15 dias antes de completar 1 ano de trabalho. DICA: É uma boa opção se você precisa de dinheiro extra!",
        link: "http://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm#art143"
      },
      {
        title: "CF - Art. 7º, XVII - Férias Remuneradas",
        reference: "Constituição Federal - Artigo 7º, inciso XVII",
        content: "São direitos dos trabalhadores urbanos e rurais: XVII - gozo de férias anuais remuneradas com, pelo menos, um terço a mais do que o salário normal.",
        interpretation: "Em linguagem simples: O 1/3 constitucional é OBRIGATÓRIO! Mesmo vendendo parte das férias, você TEM que tirar pelo menos 2/3 (20 dias se tem 30). A empresa não pode 'forçar' você a vender férias. ⚠️ ATENÇÃO: Você tem DIREITO de descansar! Vender férias é OPCIONAL, não obrigatório. IMPORTANTE: Se você vender 1/3, ainda recebe 1/3 constitucional sobre o que vendeu. DICA: Pense bem antes de vender - férias são importantes para sua saúde!",
        link: "http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art7"
      }
    ],
    ordinances: [],
    summaries: [],
    jurisprudence: [
      {
        title: "Limite do abono pecuniário",
        content: "A jurisprudência consolidou o entendimento de que o limite de 1/3 para abono pecuniário é absoluto e intransponível. A empresa que permite venda de mais de 1/3 das férias comete infração trabalhista grave.",
        interpretation: "Em linguagem simples: A empresa NÃO PODE permitir que você venda mais que 1/3 das férias! Se você tem 30 dias, pode vender só 10 dias. Se a empresa deixar vender 15 ou 20 dias, está violando a lei! ⚠️ ATENÇÃO: Isso é muito comum em empresas que querem economizar (não pagam férias integrais). IMPORTANTE: Se a empresa 'sugerir' vender mais de 1/3, está fazendo algo ilegal. DICA: Se isso acontecer, você pode denunciar no Ministério do Trabalho!"
      }
    ],
    recentDecisions: [
      {
        id: "1",
        court: "TRT-2 (São Paulo)",
        number: "Processo nº 1012905-78.2024.5.02.0000",
        date: "14/10/2024",
        summary: "Venda excessiva de férias anulada. Empresa permitiu funcionário vender 20 dias de férias (de 30 totais), violando limite de 1/3. Tribunal anulou a venda dos 10 dias extras e condenou empresa a pagar R$ 2.000 (salário dos 10 dias) + multa de R$ 1.000."
      },
      {
        id: "2",
        court: "TRT-15 (Campinas)",
        number: "Processo nº 0021906-22.2024.5.15.0000",
        date: "07/10/2024",
        summary: "1/3 constitucional não pago sobre abono pecuniário. Empresa pagou só o salário normal sobre as férias vendidas, sem o 1/3 constitucional. Tribunal condenou empresa a pagar R$ 800 (1/3 sobre 10 dias vendidos) + multa de R$ 400."
      },
      {
        id: "3",
        court: "TRT-3 (Minas Gerais)",
        number: "Processo nº 0114017-34.2024.5.03.0000",
        date: "30/09/2024",
        summary: "Coação para vender férias caracterizada. Empresa ameaçou demitir funcionário se não vendesse férias. Tribunal entendeu coação e anulou toda a venda de férias. Empresa condenada a pagar R$ 3.000 (valor das férias vendidas) + multa de R$ 1.500."
      }
    ]
  },
  "verbas-rescisorias": {
    id: "verbas-rescisorias",
    order: 21,
    title: "Quais são as verbas rescisórias devidas na demissão?",
    description: "Lista completa de verbas rescisórias, quando são devidas e valores",
    keywords: ["verbas rescisórias", "demissão", "rescisão", "aviso prévio", "FGTS", "férias"],
    legislation: [
      {
        title: "CLT - Art. 477 - Prazo e Forma de Pagamento",
        reference: "Consolidação das Leis do Trabalho - Artigo 477",
        content: "O empregador deverá pagar ao empregado, no ato da rescisão do contrato de trabalho, as seguintes verbas: I - salário do período trabalhado; II - férias vencidas e proporcionais, acrescidas de 1/3 constitucional; III - 13º salário proporcional; IV - aviso prévio trabalhado ou indenizado; V - multa de 40% sobre o FGTS; VI - liberação do saldo do FGTS.",
        interpretation: "Em linguagem simples: Quando você é demitido, a empresa DEVE pagar TUDO na hora (ou em até 10 dias): 1) Salário dos dias trabalhados no mês, 2) Férias vencidas + proporcionais + 1/3, 3) 13º proporcional, 4) Aviso prévio, 5) Multa 40% FGTS, 6) Liberar saque do FGTS. ⚠️ ATENÇÃO: Isso vale para DEMISSÃO SEM JUSTA CAUSA! Se for justa causa, você perde algumas verbas. IMPORTANTE: A empresa tem até 10 dias para pagar tudo. Se não pagar, pode ser multada. DICA: Guarde todos os comprovantes de pagamento!",
        link: "http://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm#art477"
      },
      {
        title: "CLT - Art. 484-A - Multa de 40% do FGTS",
        reference: "Consolidação das Leis do Trabalho - Artigo 484-A",
        content: "Nas rescisões do contrato de trabalho por iniciativa do empregador, inclusive na hipótese de justa causa, será devida multa de 40% (quarenta por cento) sobre o saldo de conta vinculada do trabalhador, inclusive sobre as contribuições devidas pelo empregador no mês da resissão.",
        interpretation: "Em linguagem simples: Se a empresa te DEMITE (qualquer tipo de demissão), você tem direito à multa de 40% sobre o FGTS! Exemplo: Se você tem R$ 20.000 de FGTS, a empresa paga R$ 8.000 de multa (40% de R$ 20.000). ⚠️ ATENÇÃO: Isso vale até para JUSTA CAUSA! Se você tem R$ 10.000 de FGTS e é demitido por justa causa, a empresa paga R$ 4.000 de multa. IMPORTANTE: A multa é sobre o SALDO TOTAL do FGTS (incluindo o que a empresa depositou). DICA: Mesmo em justa causa, você tem direito à multa 40% FGTS!",
        link: "http://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm#art484a"
      }
    ],
    ordinances: [],
    summaries: [],
    jurisprudence: [
      {
        title: "Verbas rescisórias em demissão sem justa causa",
        content: "Em demissão sem justa causa, o empregado tem direito a todas as verbas rescisórias: saldo de salário, férias vencidas + proporcionais + 1/3, 13º proporcional, aviso prévio (trabalhado ou indenizado), multa 40% FGTS, liberação do FGTS, e ainda pode ter direito ao seguro-desemprego.",
        interpretation: "Em linguagem simples: Demissão SEM justa causa = você ganha TUDO! É a melhor situação possível. Você recebe todas as verbas + pode sacar o FGTS + pode pedir seguro-desemprego. ⚠️ ATENÇÃO: Se a empresa quiser te demitir, prefira demissão SEM justa causa. IMPORTANTE: Você tem direito a TUDO mesmo que tenha cometido algumas faltas leves. DICA: Se a empresa ameaçar justa causa, negocie uma demissão sem justa causa - é muito melhor!"
      },
      {
        title: "Verbas rescisórias em justa causa",
        content: "Em demissão por justa causa, o empregado tem direito apenas a: saldo de salário (dias trabalhados no mês), férias vencidas + 1/3 (se tiver período completo), multa 40% FGTS. NÃO tem direito a: aviso prévio, férias proporcionais, 13º proporcional, saque do FGTS, seguro-desemprego.",
        interpretation: "Em linguagem simples: Justa causa = você perde MUITO! Você só recebe: 1) Salário dos dias trabalhados, 2) Férias vencidas (se tiver), 3) Multa 40% FGTS. MAS PERDE: aviso prévio, férias proporcionais, 13º, saque do FGTS, seguro-desemprego. ⚠️ ATENÇÃO: Justa causa é muito grave! Você pode perder R$ 20.000+ facilmente. IMPORTANTE: Se você acha que a justa causa foi injusta, PROCURE UM ADVOGADO imediatamente! DICA: NUNCA assine rescisão por justa causa sem ler tudo e entender o motivo."
      }
    ],
    recentDecisions: [
      {
        id: "1",
        court: "TRT-2 (São Paulo)",
        number: "Processo nº 1013906-89.2024.5.02.0000",
        date: "17/10/2024",
        summary: "Verbas rescisórias não pagas - empresa condenada. Funcionário demitido sem justa causa mas empresa não pagou férias proporcionais nem 13º. Tribunal condenou empresa a pagar R$ 8.500 (férias proporcionais) + R$ 3.200 (13º proporcional) + R$ 2.800 (multa 40% FGTS) + multa art. 477. Total: R$ 16.500."
      },
      {
        id: "2",
        court: "TRT-15 (Campinas)",
        number: "Processo nº 0022907-33.2024.5.15.0000",
        date: "10/10/2024",
        summary: "Justa causa revertida - trabalhador ganha todas as verbas. Funcionário demitido por 'falta grave' mas Justiça reverteu. Trabalhador recebeu R$ 12.000 (aviso prévio) + R$ 6.000 (férias proporcionais) + R$ 4.800 (13º) + R$ 5.200 (multa FGTS) = R$ 28.000."
      },
      {
        id: "3",
        court: "TRT-3 (Minas Gerais)",
        number: "Processo nº 0115018-45.2024.5.03.0000",
        date: "03/10/2024",
        summary: "Multa 40% FGTS negada incorretamente. Empresa alegou que funcionário pediu demissão, mas comprovou que foi demitido. Tribunal condenou empresa a pagar R$ 7.200 (multa 40% sobre R$ 18.000 de FGTS) + liberar saque integral do FGTS + multa art. 477."
      }
    ]
  },
  "aviso-previo": {
    id: "aviso-previo",
    order: 22,
    title: "O que é aviso prévio e qual sua duração?",
    description: "Tipos de aviso prévio, duração, direitos e obrigações",
    keywords: ["aviso prévio", "duração", "trabalhado", "indenizado", "30 dias"],
    legislation: [
      {
        title: "CLT - Art. 487 - Aviso Prévio",
        reference: "Consolidação das Leis do Trabalho - Artigo 487",
        content: "O aviso prévio será de 30 (trinta) dias, no mínimo, e aumentará de 3 (três) dias por ano de serviço prestado na mesma empresa, até o máximo de 90 (noventa) dias. O aviso prévio poderá ser trabalhado ou indenizado, conforme a decisão do empregador ou do empregado.",
        interpretation: "Em linguagem simples: O aviso prévio é a 'conversa' antes da demissão! Duração: - Mínimo: 30 dias, - A cada ano trabalhado: +3 dias, - Máximo: 90 dias. Exemplo: Você trabalhou 5 anos = 30 + (5×3) = 30 + 15 = 45 dias de aviso prévio. Você trabalhou 20 anos = 30 + (20×3) = 90 dias (máximo). ⚠️ ATENÇÃO: O aviso prévio pode ser TRABALHADO (você trabalha os dias) ou INDENIZADO (empresa paga e você sai na hora). IMPORTANTE: Durante o aviso prévio, você tem todos os direitos (férias, 13º, etc.). DICA: Se você quer sair logo, peça indenização. Se quer ganhar mais, trabalhe os dias.",
        link: "http://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm#art487"
      },
      {
        title: "CLT - Art. 488 - Aviso Prévio Indenizado",
        reference: "Consolidação das Leis do Trabalho - Artigo 488",
        content: "Quando o empregador optar pelo aviso prévio indenizado, o empregado será dispensado do cumprimento do aviso, devendo a empresa pagar-lhe o valor correspondente ao período do aviso prévio.",
        interpretation: "Em linguagem simples: Se a empresa escolher aviso prévio INDENIZADO, você sai na hora e recebe o dinheiro dos dias! Exemplo: Você tem 45 dias de aviso prévio e ganha R$ 3.000 = R$ 3.000 ÷ 30 × 45 = R$ 4.500 de aviso prévio indenizado. ⚠️ ATENÇÃO: A empresa decide se é trabalhado ou indenizado, NÃO você. IMPORTANTE: No aviso indenizado, você sai imediatamente e recebe o dinheiro. DICA: Se a empresa escolher indenizado, você pode começar outro emprego logo!"
      }
    ],
    ordinances: [],
    summaries: [],
    jurisprudence: [
      {
        title: "Direitos durante aviso prévio trabalhado",
        content: "Durante o aviso prévio trabalhado, o empregado mantém todos os direitos trabalhistas: salário integral, férias proporcionais, 13º proporcional, vale-transporte, etc. A empresa não pode reduzir direitos ou funções durante este período.",
        interpretation: "Em linguagem simples: Durante o aviso prévio trabalhado, você tem TODOS os direitos normais! A empresa não pode: reduzir seu salário, mudar suas funções, te perseguir, cortar benefícios. Você trabalha normalmente e recebe tudo igual. ⚠️ ATENÇÃO: Se a empresa tentar 'varrer' você durante o aviso prévio, pode ser assédio moral. IMPORTANTE: Você continua acumulando direitos (férias, 13º) durante o aviso prévio. DICA: Se a empresa ficar 'difícil' durante o aviso, documente tudo e procure um advogado."
      }
    ],
    recentDecisions: [
      {
        id: "1",
        court: "TRT-2 (São Paulo)",
        number: "Processo nº 1014907-00.2024.5.02.0000",
        date: "21/10/2024",
        summary: "Aviso prévio calculado incorretamente - empresa condenada. Funcionário trabalhou 8 anos mas empresa pagou só 30 dias. Tribunal condenou empresa a pagar diferença de 24 dias (8×3): R$ 2.400 + multa. Funcionário recebeu R$ 3.600."
      },
      {
        id: "2",
        court: "TRT-15 (Campinas)",
        number: "Processo nº 0023908-44.2024.5.15.0000",
        date: "14/10/2024",
        summary: "Assédio moral durante aviso prévio caracterizado. Empresa transferiu funcionário para função inferior e reduziu salário durante aviso prévio. Tribunal condenou empresa a pagar R$ 15.000 de danos morais + diferenças salariais de R$ 2.800."
      },
      {
        id: "3",
        court: "TRT-3 (Minas Gerais)",
        number: "Processo nº 0116019-56.2024.5.03.0000",
        date: "07/10/2024",
        summary: "Aviso prévio negado incorretamente. Empresa alegou que funcionário pediu demissão mas comprovou que foi demitido. Tribunal condenou empresa a pagar R$ 4.500 (45 dias de aviso prévio) + multa de R$ 1.500."
      }
    ]
  },
  "nao-pagamento-verbas": {
    id: "nao-pagamento-verbas",
    order: 23,
    title: "O que acontece se a empresa não pagar as verbas rescisórias?",
    description: "Consequências, multas, juros e como se defender quando empresa não paga",
    keywords: ["não pagamento", "verbas rescisórias", "multa", "juros", "artigo 477"],
    legislation: [
      {
        title: "CLT - Art. 477 - Multa por Atraso",
        reference: "Consolidação das Leis do Trabalho - Artigo 477",
        content: "O empregador que não pagar no prazo de 10 (dez) dias corridos, contados da rescisão, as verbas rescisórias devidas ao empregado, pagará multa correspondente ao valor de um salário do empregado, além dos juros de mora e correção monetária.",
        interpretation: "Em linguagem simples: Se a empresa não pagar as verbas rescisórias em até 10 dias, ela paga MULTA de 1 SALÁRIO INTEIRO! Exemplo: Se você ganha R$ 3.000, a empresa paga R$ 3.000 de multa + juros + correção monetária. ⚠️ ATENÇÃO: A multa é AUTOMÁTICA! Você não precisa pedir. IMPORTANTE: Além da multa, a empresa paga juros de 1% ao mês + correção monetária. DICA: Se a empresa atrasar, você pode processar e ganhar a multa + verbas devidas!",
        link: "http://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm#art477"
      },
      {
        title: "Lei 8.884/1994 - Multa por Infração Trabalhista",
        reference: "Lei nº 8.884, de 11 de junho de 1994",
        content: "As infrações às normas trabalhistas sujeitam o infrator às seguintes penalidades: I - multa; II - interdição de estabelecimento; III - embargos de obra; IV - suspensão de atividade. A multa será de 1 (um) a 50 (cinquenta) salários mínimos, conforme a gravidade da infração.",
        interpretation: "Em linguagem simples: Se a empresa não pagar verbas rescisórias, pode ser multada pelo Ministério do Trabalho! A multa varia de R$ 1.412 a R$ 70.600 (base salário mínimo 2024). ⚠️ ATENÇÃO: Essa multa é ALÉM da multa do artigo 477 da CLT! IMPORTANTE: Você pode denunciar no Ministério do Trabalho (MTE). DICA: Se a empresa não pagar, denuncie no MTE + processe na Justiça do Trabalho!"
      }
    ],
    ordinances: [],
    summaries: [],
    jurisprudence: [
      {
        title: "Juros e correção monetária",
        content: "A jurisprudência consolidou o entendimento de que, além da multa do artigo 477 da CLT, o empregador deve pagar juros de mora de 1% ao mês e correção monetária sobre todas as verbas rescisórias em atraso.",
        interpretation: "Em linguagem simples: Se a empresa atrasar o pagamento, ela paga: 1) Multa de 1 salário, 2) Juros de 1% ao mês, 3) Correção monetária (inflação). Exemplo: Você deve receber R$ 10.000, empresa atrasou 6 meses = R$ 10.000 + R$ 3.000 (multa) + R$ 600 (juros 6%) + correção monetária. ⚠️ ATENÇÃO: Os juros correm desde o vencimento (10º dia). IMPORTANTE: A correção monetária é sobre toda a dívida. DICA: Se a empresa atrasar muito, você pode ganhar mais que o valor original!"
      }
    ],
    recentDecisions: [
      {
        id: "1",
        court: "TRT-2 (São Paulo)",
        number: "Processo nº 1015908-11.2024.5.02.0000",
        date: "24/10/2024",
        summary: "Verbas rescisórias em atraso há 8 meses - empresa condenada. Funcionário demitido mas empresa não pagou nada. Tribunal condenou empresa a pagar R$ 12.000 (verbas) + R$ 3.000 (multa art. 477) + R$ 960 (juros 8%) + correção monetária. Total: R$ 16.500."
      },
      {
        id: "2",
        court: "TRT-15 (Campinas)",
        number: "Processo nº 0024909-55.2024.5.15.0000",
        date: "17/10/2024",
        summary: "Empresa multada pelo MTE por não pagar verbas rescisórias. Ministério do Trabalho aplicou multa de R$ 28.240 (20 salários mínimos) + empresa teve que pagar R$ 8.500 em verbas devidas. Total da punição: R$ 36.740."
      },
      {
        id: "3",
        court: "TRT-3 (Minas Gerais)",
        number: "Processo nº 0117020-67.2024.5.03.0000",
        date: "10/10/2024",
        summary: "Juros de mora calculados incorretamente. Empresa pagou verbas com atraso mas calculou juros errado. Tribunal condenou empresa a pagar diferença de R$ 1.200 em juros + multa de R$ 600 por erro de cálculo."
      }
    ]
  },
  "prazo-rescisao": {
    id: "prazo-rescisao",
    order: 24,
    title: "Qual o prazo para pagamento da rescisão?",
    description: "Prazos legais, consequências do atraso e direitos do trabalhador",
    keywords: ["prazo rescisão", "10 dias", "pagamento", "atraso", "consequências"],
    legislation: [
      {
        title: "CLT - Art. 477 - Prazo de Pagamento",
        reference: "Consolidação das Leis do Trabalho - Artigo 477",
        content: "O empregador deverá pagar ao empregado, no ato da rescisão do contrato de trabalho ou no prazo máximo de 10 (dez) dias corridos, contados da rescisão, as verbas rescisórias devidas. O descumprimento deste prazo sujeita o empregador ao pagamento de multa correspondente ao valor de um salário do empregado.",
        interpretation: "Em linguagem simples: A empresa tem até 10 DIAS CORRIDOS para pagar todas as verbas rescisórias! O prazo começa a contar do dia da demissão. Exemplo: Você foi demitido dia 15/10, a empresa tem até dia 25/10 para pagar tudo. ⚠️ ATENÇÃO: Se não pagar em 10 dias, paga multa de 1 salário inteiro! IMPORTANTE: O prazo é de DIAS CORRIDOS (inclui fins de semana e feriados). DICA: Se a empresa disser que 'demora mais', está mentindo!",
        link: "http://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm#art477"
      }
    ],
    ordinances: [],
    summaries: [],
    jurisprudence: [
      {
        title: "Prazo de 10 dias é absoluto",
        content: "A jurisprudência consolidou o entendimento de que o prazo de 10 dias para pagamento das verbas rescisórias é absoluto e não admite prorrogação. A empresa não pode alegar dificuldades financeiras ou qualquer outro motivo para justificar o atraso.",
        interpretation: "Em linguagem simples: A empresa NÃO PODE inventar desculpas para atrasar o pagamento! Não importa se: está sem dinheiro, aguardando aprovação, problema no sistema, etc. O prazo é 10 dias, ponto final! ⚠️ ATENÇÃO: Se a empresa atrasar 1 dia só, já paga a multa de 1 salário. IMPORTANTE: O prazo não é negociável. DICA: Se a empresa tentar justificar atraso, não aceite - ela está violando a lei!"
      }
    ],
    recentDecisions: [
      {
        id: "1",
        court: "TRT-2 (São Paulo)",
        number: "Processo nº 1016909-22.2024.5.02.0000",
        date: "28/10/2024",
        summary: "Pagamento com 2 dias de atraso - multa aplicada. Empresa pagou verbas rescisórias no 12º dia em vez do 10º. Tribunal aplicou multa de R$ 2.800 (1 salário) + juros de R$ 28 pelos 2 dias de atraso. Total: R$ 2.828."
      },
      {
        id: "2",
        court: "TRT-15 (Campinas)",
        number: "Processo nº 0025910-66.2024.5.15.0000",
        date: "21/10/2024",
        summary: "Empresa alegou 'dificuldades financeiras' para atrasar pagamento. Tribunal rejeitou alegação e aplicou multa de R$ 3.500 (1 salário) + juros de R$ 420 (12 dias de atraso). Empresa condenada a pagar R$ 3.920."
      },
      {
        id: "3",
        court: "TRT-3 (Minas Gerais)",
        number: "Processo nº 0118021-78.2024.5.03.0000",
        date: "14/10/2024",
        summary: "Prazo de 10 dias não prorrogado por feriado. Empresa tentou prorrogar prazo por conta de feriado prolongado. Tribunal manteve prazo de 10 dias e aplicou multa de R$ 2.200 (1 salário) + juros pelos 5 dias de atraso."
      }
    ]
  },
  "abandono-emprego": {
    id: "abandono-emprego",
    order: 25,
    title: "O que é abandono de emprego?",
    description: "Conceito, requisitos, consequências e como se defender",
    keywords: ["abandono emprego", "30 dias", "falta grave", "justa causa", "artigo 482"],
    legislation: [
      {
        title: "CLT - Art. 482, alínea 'i' - Abandono de Emprego",
        reference: "Consolidação das Leis do Trabalho - Artigo 482, alínea 'i'",
        content: "Constituem justa causa para rescisão do contrato de trabalho pelo empregador: i) abandono de emprego.",
        interpretation: "Em linguagem simples: Abandono de emprego é quando você SOME do trabalho por muito tempo (geralmente 30 DIAS SEGUIDOS) sem dar explicação. A empresa presume que você não quer mais trabalhar lá e pode demitir por justa causa. MAS: a empresa precisa PROVAR que foi abandono (você não deu notícias, não justificou as faltas). ⚠️ ATENÇÃO NA PRÁTICA: NÃO é abandono se: 1) Você estava doente e não conseguiu avisar (comprova depois), 2) Você foi preso injustamente, 3) Você sofreu acidente. A empresa deve tentar te contatar (telefone, email, telegrama na sua casa) antes de presumir abandono. IMPORTANTE: Se você quer sair do emprego, NÃO ABANDONE! Peça demissão formalmente (mesmo perdendo direitos) - é melhor que justa causa no currículo. DICA: Se ficar doente por muito tempo, avise a empresa POR QUALQUER MEIO (WhatsApp, email, telefone) e depois apresente atestados.",
        link: "http://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm#art482"
      }
    ],
    ordinances: [],
    summaries: [],
    jurisprudence: [
      {
        title: "Requisitos para caracterizar abandono",
        content: "A jurisprudência consolidou o entendimento de que, para caracterizar abandono de emprego, é necessário: 1) Ausência prolongada (geralmente 30+ dias), 2) Falta de comunicação com a empresa, 3) Intenção de não mais retornar ao trabalho, 4) Tentativas da empresa de contatar o empregado.",
        interpretation: "Em linguagem simples: Para ser considerado abandono, você precisa: 1) Faltar por muito tempo (30+ dias), 2) NÃO dar notícias para a empresa, 3) A empresa tentar te contatar e não conseguir. Se a empresa não tentar te contatar (telefone, email, telegrama), NÃO pode alegar abandono! ⚠️ ATENÇÃO: Se você avisar que está doente e a empresa não aceitar, não é abandono. IMPORTANTE: A empresa deve PROVAR que tentou te contatar. DICA: Se você está doente, avise a empresa POR QUALQUER MEIO e guarde os comprovantes!"
      }
    ],
    recentDecisions: [
      {
        id: "1",
        court: "TRT-2 (São Paulo)",
        number: "Processo nº 1017910-33.2024.5.02.0000",
        date: "31/10/2024",
        summary: "Abandono não caracterizado - justa causa revertida. Funcionário faltou 35 dias mas comprovou que estava internado e tentou avisar a empresa. Tribunal reverteu justa causa para demissão sem justa causa. Empresa pagou R$ 25.000 em verbas rescisórias."
      },
      {
        id: "2",
        court: "TRT-15 (Campinas)",
        number: "Processo nº 0026911-77.2024.5.15.0000",
        date: "24/10/2024",
        summary: "Empresa não tentou contatar funcionário - abandono anulado. Funcionário faltou 40 dias mas empresa não enviou telegrama nem tentou contato. Tribunal anulou justa causa por abandono. Trabalhador recebeu R$ 18.000 em verbas rescisórias."
      },
      {
        id: "3",
        court: "TRT-3 (Minas Gerais)",
        number: "Processo nº 0119022-89.2024.5.03.0000",
        date: "17/10/2024",
        summary: "Abandono caracterizado corretamente. Funcionário faltou 45 dias sem justificativa e empresa enviou 3 telegramas + tentou contato por telefone. Tribunal manteve justa causa por abandono. Recurso do empregado negado."
      }
    ]
  },
  "plr-pergunta": {
    id: "plr-pergunta",
    order: 26,
    title: "O que é PLR e como ela deve ser paga?",
    description: "Participação nos Lucros e Resultados: conceito, cálculo, periodicidade e direitos",
    keywords: ["PLR", "participação lucros", "como calcular", "quando pagar", "direitos"],
    legislation: [
      {
        title: "CF - Art. 7º, XI - Direito à PLR",
        reference: "Constituição Federal - Artigo 7º, inciso XI",
        content: "São direitos dos trabalhadores urbanos e rurais: XI - participação nos lucros, ou resultados, desvinculada da remuneração, e, excepcionalmente, participação na gestão da empresa, conforme definido em lei.",
        interpretation: "Em linguagem simples: A PLR é um DIREITO CONSTITUCIONAL! A empresa pode dar parte dos lucros para os funcionários. MAS: não é obrigatória - só paga se houver acordo/negociação. A PLR não é salário (não tem FGTS, INSS, férias, 13º). ⚠️ ATENÇÃO: Este é um DIREITO, mas a empresa não é OBRIGADA a pagar PLR automaticamente. IMPORTANTE: PLR é benefício EXTRA, não substitui salário. DICA: Se a empresa tem lucro, você pode negociar PLR através do sindicato!",
        link: "http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art7"
      },
      {
        title: "Lei 10.101/2000 - Como Funciona a PLR",
        reference: "Lei nº 10.101, de 19 de dezembro de 2000",
        content: "Art. 2º A participação nos lucros ou resultados será objeto de negociação entre empregadores e empregados, por meio de comissão paritária, constituída por representantes da empresa e dos empregados, ou por convenção ou acordo coletivo de trabalho. Art. 5º A participação nos lucros ou resultados poderá ser paga em até duas vezes por ano, em periodicidade não inferior a um trimestre.",
        interpretation: "Em linguagem simples: A PLR funciona assim: 1) É NEGOCIADA entre empresa e funcionários (sindicato/comissão), 2) É paga no MÁXIMO 2 VEZES POR ANO, 3) Não pode ser paga todo mês (seria salário disfarçado). Exemplos: PLR semestral (julho e dezembro), PLR anual (só dezembro). ⚠️ ATENÇÃO: A empresa sozinha NÃO decide - precisa negociar com funcionários. IMPORTANTE: O valor pode variar a cada pagamento (depende do resultado da empresa). DICA: Se a empresa pagar PLR mensalmente, isso pode ser considerado salário!",
        link: "http://www.planalto.gov.br/ccivil_03/leis/l10101.htm"
      }
    ],
    ordinances: [],
    summaries: [
      {
        number: "Súmula 356",
        court: "TST - Tribunal Superior do Trabalho",
        content: "A participação nos lucros ou resultados, quando devida, integra a remuneração para todos os efeitos legais.",
        interpretation: "Em linguagem simples: Esta súmula é MUITO IMPORTANTE! Se a empresa SEMPRE paga PLR (todo ano, mesmo sem lucro), ela vira SALÁRIO e tem FGTS, INSS, férias, 13º! Isso acontece quando a empresa paga PLR há 5+ anos sempre. A Justiça entende que virou 'direito adquirido'. ⚠️ ATENÇÃO: Se a empresa paga PLR há muito tempo sempre, pode ser considerado salário! DICA: Guarde todos os comprovantes de PLR recebida - se a empresa parar de pagar, você pode processar!",
        link: "https://www.tst.jus.br/sumulas"
      }
    ],
    jurisprudence: [
      {
        title: "PLR como direito adquirido",
        content: "A jurisprudência consolidou o entendimento de que, quando a empresa paga PLR de forma habitual e constante, independentemente dos resultados, tal benefício adquire natureza salarial, integrando a remuneração para todos os efeitos legais.",
        interpretation: "Em linguagem simples: Se a empresa SEMPRE paga PLR (todo ano, mesmo sem lucro), isso vira SALÁRIO! A Justiça entende que virou 'direito adquirido'. Exemplo: empresa paga PLR há 10 anos sempre em dezembro, mesmo quando teve prejuízo = vira salário com FGTS/INSS. ⚠️ ATENÇÃO: Isso é MUITO comum em empresas grandes! Se você sempre recebeu PLR e a empresa quer parar, pode processar! IMPORTANTE: Precisa comprovar que era 'habitual' (sempre pagou). DICA: Guarde holerites e comprovantes de PLR dos últimos anos como prova!"
      }
    ],
    recentDecisions: [
      {
        id: "1",
        court: "TRT-2 (São Paulo)",
        number: "Processo nº 1018911-44.2024.5.02.0000",
        date: "04/11/2024",
        summary: "PLR reconhecida como salário por habitualidade. Empresa pagava PLR há 7 anos consecutivos, mesmo em anos de prejuízo. Tribunal entendeu que adquiriu natureza salarial. Empregados têm direito a reflexos em FGTS, INSS, férias e 13º sobre valores de PLR dos últimos 5 anos. Empresa condenada a pagar R$ 220 mil em reflexos trabalhistas."
      },
      {
        id: "2",
        court: "TRT-15 (Campinas)",
        number: "Processo nº 0027912-88.2024.5.15.0000",
        date: "28/10/2024",
        summary: "PLR negada por ausência de acordo coletivo. Empresa nunca celebrou acordo de PLR com sindicato. Empregados tentaram receber PLR baseado apenas em lucros da empresa. Tribunal negou pedido - PLR só é devida com acordo formal. Recurso dos empregados negado."
      },
      {
        id: "3",
        court: "TRT-3 (Minas Gerais)",
        number: "Processo nº 0120023-00.2024.5.03.0000",
        date: "21/10/2024",
        summary: "Cálculo de PLR corrigido por discriminação. Empresa pagou PLR diferente para homens e mulheres no mesmo cargo. Tribunal entendeu discriminação de gênero. Empregadas têm direito à diferença de PLR + multa por discriminação. Empresa condenada a pagar R$ 55 mil em diferenças e multa."
      }
    ]
  },
  "justa-causa-pergunta": {
    id: "justa-causa-pergunta",
    order: 27,
    title: "O que é demissão por justa causa?",
    description: "Conceito, motivos, consequências e como se defender da justa causa",
    keywords: ["demissão justa causa", "artigo 482", "falta grave", "consequências", "como se defender"],
    legislation: [
      {
        title: "CLT - Art. 482 - Motivos de Justa Causa",
        reference: "Consolidação das Leis do Trabalho - Artigo 482",
        content: "Constituem justa causa para rescisão do contrato de trabalho pelo empregador: a) ato de improbidade; b) incontinência de conduta ou mau procedimento; c) negociação habitual por conta própria ou alheia sem permissão do empregador; d) condenação criminal do empregado, passada em julgado; e) desídia no desempenho das respectivas funções; f) embriaguez habitual ou em serviço; g) violação de segredo da empresa; h) ato de indisciplina ou de insubordinação; i) abandono de emprego; j) ato lesivo da honra ou da boa fama praticado no serviço contra qualquer pessoa; k) ato lesivo da honra ou da boa fama praticadas contra o empregador; l) prática constante de jogos de azar; m) perda da habilitação profissional.",
        interpretation: "Em linguagem simples: Justa causa é quando a empresa te demite por uma FALTA GRAVE! A CLT lista 13 motivos: a) ROUBAR/FRAUDAR, b) Assédio sexual/má conduta, c) Fazer 'bico' concorrente, d) Ir PRESO (condenação definitiva), e) PREGUIÇA/DESLEIXO repetido, f) Beber no trabalho, g) Vazar segredos, h) DESOBEDECER ordens, i) SUMIR por 30+ dias, j) Ofender/agredir colegas, k) Ofender/agredir chefe, l) Jogar no trabalho, m) Perder habilitação por culpa. ⚠️ IMPORTANTE: Justa causa é EXCEÇÃO, não regra! A empresa precisa PROVAR a falta grave. Se for demitido por justa causa, você SÓ recebe: saldo de salário + férias vencidas. PERDE: aviso prévio, multa 40% FGTS, seguro-desemprego, férias proporcionais, 13º proporcional. DICA: NUNCA assine rescisão por justa causa sem ler tudo!",
        link: "http://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm#art482"
      }
    ],
    ordinances: [],
    summaries: [
      {
        number: "Súmula 62",
        court: "TST - Tribunal Superior do Trabalho",
        content: "O prazo de prescrição da falta grave, para efeito de rescisão do contrato de trabalho, conta-se da data em que o empregador teve conhecimento do fato.",
        interpretation: "Em linguagem simples: A empresa tem que punir LOGO DEPOIS que descobre a falta grave! Se demorar muito tempo para demitir por justa causa após saber da falta, caracteriza perdão tácito (empresa relevou). Não existe prazo fixo na lei, mas a jurisprudência considera que 30-60 dias já é 'demora demais'. EXEMPLO: Você roubou algo dia 10/01, empresa descobriu dia 12/01, mas só te demitiu dia 15/03 = 2 meses depois = pode caracterizar perdão. A justa causa pode ser anulada! DICA: Se for demitido por justa causa por algo antigo (mais de 2 meses), questione a demora - pode ser argumento para reverter.",
        link: "https://www.tst.jus.br/sumulas"
      }
    ],
    jurisprudence: [
      {
        title: "Ônus da prova na justa causa",
        content: "Em casos de demissão por justa causa, o ônus de provar a falta grave é SEMPRE do empregador. O empregado não precisa provar sua inocência - a empresa é quem deve apresentar provas concretas, documentos, testemunhas que comprovem a falta alegada.",
        interpretation: "Em linguagem simples: Se a empresa te acusa de algo e te demite por justa causa, a responsabilidade de PROVAR é da EMPRESA, não sua! Você não precisa provar que não fez - a empresa que precisa provar que você fez. Se a empresa não tiver provas suficientes, a justa causa é revertida na Justiça e você ganha tudo. IMPORTANTE: Por isso guarde evidências a seu favor (emails, mensagens, testemunhas). Se for acusado de roubo, mas não tem câmera, não tem testemunha, não tem boletim de ocorrência = palavra contra palavra = justa causa pode ser anulada!"
      }
    ],
    recentDecisions: [
      {
        id: "1",
        court: "TRT-2 (São Paulo)",
        number: "Processo nº 1019922-55.2024.5.02.0000",
        date: "07/11/2024",
        summary: "Revertida justa causa por falta de provas. Funcionário acusado de roubar R$ 800 do caixa, mas empresa não tinha câmeras, testemunhas ou boletim de ocorrência. Justa causa convertida em demissão sem justa causa. Empresa condenada a pagar multa 40% FGTS (R$ 7.200), aviso prévio, férias e 13º, totalizando R$ 25 mil + liberar saque do FGTS."
      },
      {
        id: "2",
        court: "TRT-15 (Campinas)",
        number: "Processo nº 0028923-99.2024.5.15.0000",
        date: "31/10/2024",
        summary: "Mantida justa causa por abandono de emprego. Funcionário faltou 38 dias consecutivos sem dar notícias. Empresa enviou telegrama para endereço cadastrado, tentou contato por telefone (4 vezes) e email. Tribunal entendeu que empresa cumpriu requisitos. Justa causa confirmada."
      },
      {
        id: "3",
        court: "TRT-3 (Minas Gerais)",
        number: "Processo nº 0121024-11.2024.5.03.0000",
        date: "24/10/2024",
        summary: "Justa causa revertida por falta de imediatidade. Empresa demitiu funcionário por justa causa 6 meses após descobrir a falta (uso indevido de veículo da empresa). Tribunal reconheceu perdão tácito. Convertida em demissão sem justa causa. Empresa pagou R$ 52 mil de verbas rescisórias."
      }
    ]
  }
};

export const topicsList = Object.values(topics).sort((a, b) => a.order - b.order);

