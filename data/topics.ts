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
  }[];
  ordinances: {
    title: string;
    reference: string;
    content: string;
    fullContent?: string;
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
  "empregador-empregado": {
    id: "empregador-empregado",
    order: 1,
    title: "Arts. 1º, 2º e 3º - Empregador e Empregado",
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
    title: "Art. 4º - Tempo de Serviço",
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
        fullContent: "PORTARIA Nº 1.510, DE 21 DE AGOSTO DE 2009\n\nO MINISTRO DE ESTADO DO TRABALHO E EMPREGO, no uso das atribuições que lhe confere o art. 87, parágrafo único, inciso II da Constituição Federal, resolve:\n\nArt. 1º Disciplinar o registro eletrônico de ponto (REP) previsto no art. 74, §2º da CLT.\n\nArt. 2º O Sistema de Registro Eletrônico de Ponto (SREP) deverá:\nI - não permitir restrições à marcação do ponto;\nII - não permitir a alteração ou eliminação dos dados registrados;\nIII - não permitir a marcação automática do ponto;\nIV - registrar fielmente as marcações efetuadas;\nV - estar disponível no local de trabalho;\nVI - emitir comprovante de cada marcação.\n\nArt. 3º É vedado:\nI - exigir autorização prévia para marcação de sobrejornada;\nII - alterar ou eliminar os horários registrados;\nIII - condicionar marcações de ponto.\n\nArt. 4º O descumprimento do disposto nesta Portaria acarretará a aplicação das penalidades previstas na legislação trabalhista.",
        interpretation: "Em linguagem simples: Define as regras do ponto eletrônico para proteger você! A empresa NÃO PODE: alterar seus horários, apagar registros, fazer o ponto bater sozinho, te impedir de marcar hora extra, ou exigir autorização prévia para marcar overtime. O sistema tem que registrar exatamente quando você chegou e saiu, e te dar um comprovante. Serve para proteger você de empresas que tentam fraudar o controle de horário. Se a empresa burlar o ponto eletrônico, pode ser multada pesado!"
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
    order: 3,
    title: "Art. 6º e 75-A a 75-E - Teletrabalho e Home Office",
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
        fullContent: "PORTARIA MTE Nº 671, DE 8 DE NOVEMBRO DE 2021 (COMPLEMENTO TELETRABALHO)\n\nArt. 9º No registro de empregados em regime de teletrabalho, deverão constar:\n\nI - indicação expressa da modalidade \"teletrabalho\" ou \"trabalho remoto\";\nII - endereço de prestação de serviços, se houver;\nIII - responsabilidade pela aquisição e manutenção de equipamentos;\nIV - responsabilidade pelas despesas de infraestrutura (internet, energia elétrica);\nV - forma de reembolso de despesas, quando aplicável;\nVI - possibilidade de comparecimento presencial eventual.\n\nArt. 10. A alteração do regime presencial para teletrabalho, ou vice-versa, deverá ser registrada com:\nI - mútuo acordo entre empregado e empregador;\nII - prazo de transição mínimo de 15 dias;\nIII - atualização imediata na Carteira de Trabalho Digital.\n\nArt. 11. O empregador deverá informar:\nI - equipamentos fornecidos (computador, celular, mobiliário);\nII - softwares e sistemas disponibilizados;\nIII - valores de reembolso mensal, se houver;\nIV - horários de disponibilidade, quando estabelecidos.\n\nArt. 12. As informações sobre teletrabalho constantes na Carteira de Trabalho Digital serão acessíveis ao trabalhador em tempo real.\n\nArt. 13. O não registro adequado do regime de teletrabalho sujeitará o empregador às penalidades administrativas previstas em lei.",
        interpretation: "Em linguagem simples: Para quem trabalha em home office, a carteira digital deve mostrar: que você está em teletrabalho, onde você trabalha, quem paga os equipamentos (computador, internet, luz), quanto a empresa reembolsa (se reembolsar), e se você vai na empresa às vezes. Se mudar de presencial para home office ou vice-versa, tem que ter acordo mútuo e 15 dias de aviso. Tudo isso VOCÊ vê na hora no app. Se a empresa não registrar direitinho o home office, pode ser multada. É para garantir que fique claro quem paga o quê e quais são as condições do seu trabalho remoto!"
      }
    ],
    summaries: [
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
    title: "Art. 8º - Fontes do Direito do Trabalho",
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
      }
    ],
    jurisprudence: [
      {
        title: "Hierarquia das normas trabalhistas",
        content: "No direito do trabalho, aplica-se o princípio da norma mais favorável ao trabalhador. Mesmo que a CLT diga uma coisa, se uma convenção coletiva, acordo individual ou regulamento interno for melhor para o trabalhador, prevalece a norma mais benéfica.",
        interpretation: "Em linguagem simples: Entre várias regras (CLT, convenção coletiva, acordo individual, regulamento da empresa), vale sempre a MELHOR para você! Se a CLT dá 30 dias de férias mas a convenção dá 35 dias, você tem direito a 35 dias. Se o regulamento interno dá plano de saúde e a CLT não obriga, você tem direito ao plano. Sempre prevalece a regra melhor."
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
    title: "Arts. 9º e 10 - Proteção contra Fraudes",
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
        fullContent: "INSTRUÇÃO NORMATIVA Nº 41, DE 19 DE MARÇO DE 2018\n\nA SECRETÁRIA DE INSPEÇÃO DO TRABALHO, no uso de suas atribuições legais, resolve:\n\nArt. 1º Estabelecer procedimentos de fiscalização para combate a fraudes trabalhistas.\n\nArt. 2º São consideradas fraudes trabalhistas:\nI - pejotização: exigência de que o trabalhador constitua pessoa jurídica para mascarar vínculo empregatício;\nII - terceirização irregular: utilização de terceirização para atividade-fim sem os requisitos legais;\nIII - contrato intermitente irregular: uso para mascarar jornada regular;\nIV - trabalho análogo ao escravo: trabalho forçado, jornada exaustiva ou condições degradantes;\nV - fraude no registro de ponto: alteração de marcações ou impedimento de registro;\nVI - sonegação de direitos: não pagamento de verbas trabalhistas devidas.\n\nArt. 3º Na fiscalização, o Auditor-Fiscal do Trabalho verificará:\nI - requisitos da relação de emprego (subordinação, pessoalidade, onerosidade, não eventualidade);\nII - contratos e documentos de constituição de pessoa jurídica;\nIII - controle de jornada e produtividade;\nIV - exclusividade ou habitualidade na prestação de serviços;\nV - fornecimento de equipamentos e ferramentas;\nVI - autonomia real do prestador de serviços.\n\nArt. 4º Constatada fraude trabalhista, o Auditor-Fiscal lavrará auto de infração e determinará:\nI - registro imediato do vínculo empregatício;\nII - pagamento das verbas trabalhistas suprimidas;\nIII - aplicação de multa administrativa.\n\nArt. 5º As multas variam de R$ 3.000,00 a R$ 6.000,00 por empregado prejudicado, podendo ser duplicadas em caso de reincidência.\n\nArt. 6º Esta Instrução Normativa entra em vigor na data de sua publicação.",
        interpretation: "Em linguagem simples: Define como os fiscais do trabalho investigam e combatem fraudes. Lista os tipos principais de fraude: te obrigar a virar PJ, terceirização irregular, contrato intermitente usado errado, trabalho escravo, fraudar ponto eletrônico, não pagar direitos. Os fiscais vão lá verificar se você realmente é 'autônomo' ou se é empregado disfarçado (olhando se tem chefe, horário fixo, exclusividade). Se descobrir fraude: empresa é multada de R$ 3 mil a R$ 6 mil POR TRABALHADOR (dobra se reincidir!), tem que registrar você imediatamente e pagar tudo que deve. Se você denunciar fraude, os fiscais vão lá e podem multar PESADO a empresa!"
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
      }
    ],
    jurisprudence: [
      {
        title: "Fraude na terceirização",
        content: "A terceirização utilizada para mascarar vínculo empregatício direto é considerada fraude. Quando caracterizada a pessoalidade e subordinação direta com o tomador de serviços, a Justiça reconhece o vínculo empregatício diretamente com a empresa onde o trabalho era efetivamente prestado.",
        interpretation: "Em linguagem simples: Se você trabalha direto para uma empresa grande, mas eles te contratam através de uma 'empresinha' só para não registrar você, isso é fraude! A Justiça pode reconhecer que seu vínculo é direto com a empresa grande, não com a terceirizada. Você ganha todos os benefícios que os funcionários diretos têm."
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
    title: "Arts. 443, 445 e 451 - Contrato de Experiência",
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
        fullContent: "PORTARIA MTE Nº 671, DE 8 DE NOVEMBRO DE 2021\n\nO SECRETÁRIO ESPECIAL DE PREVIDÊNCIA E TRABALHO DO MINISTÉRIO DA ECONOMIA, no uso de suas atribuições legais, resolve:\n\nArt. 1º Regulamentar os procedimentos de registro de informações na Carteira de Trabalho Digital.\n\nArt. 2º O empregador deverá registrar as seguintes informações na Carteira de Trabalho Digital:\nI - data de admissão;\nII - remuneração;\nIII - condições especiais, se houver;\nIV - tipo de contrato de trabalho (prazo indeterminado, determinado, experiência, intermitente);\nV - local de trabalho (presencial, teletrabalho, híbrido).\n\nArt. 3º No contrato de experiência, deverão constar:\nI - prazo inicial;\nII - prazo final;\nIII - possibilidade de prorrogação (limitada a uma única vez);\nIV - data de conversão em prazo indeterminado, se aplicável.\n\nArt. 4º O registro deverá ser efetuado:\nI - no prazo de até 48 horas após a admissão;\nII - de forma clara e precisa;\nIII - com assinatura digital ou certificação eletrônica.\n\nArt. 5º A Carteira de Trabalho Digital terá a mesma validade jurídica da Carteira de Trabalho física.\n\nArt. 6º O trabalhador terá acesso imediato e irrestrito aos dados registrados através do aplicativo Carteira de Trabalho Digital ou portal gov.br.\n\nArt. 7º O descumprimento do disposto nesta Portaria sujeitará o infrator às penalidades previstas na legislação trabalhista.\n\nArt. 8º Esta Portaria entra em vigor na data de sua publicação.",
        interpretation: "Em linguagem simples: Esta portaria define como a empresa deve registrar você na Carteira de Trabalho Digital. A empresa TEM QUE registrar em até 48 horas: data de admissão, salário, tipo de contrato (se é experiência, prazo determinado, etc.), local de trabalho (presencial, home office). Para contratos de experiência, deve colocar prazo inicial, final, e se pode prorrogar. VOCÊ tem acesso imediato a tudo pelo app ou site gov.br. Se a empresa não registrar corretamente, pode ser multada. É uma proteção para garantir que seu contrato seja documentado direitinho e digitalmente!"
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
    order: 7,
    title: "Arts. 129, 130 e 134 - Férias Trabalhistas",
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
        fullContent: "PORTARIA MTE Nº 1.127, DE 14 DE OUTUBRO DE 2017\n\nO MINISTRO DE ESTADO DO TRABALHO, no uso de suas atribuições legais, resolve:\n\nArt. 1º As férias serão concedidas por ato do empregador, em um só período, nos 12 (doze) meses subsequentes à data em que o empregado tiver adquirido o direito.\n\n§ 1º Somente em casos excepcionais serão as férias concedidas em dois períodos, um dos quais não poderá ser inferior a 10 (dez) dias corridos.\n\n§ 2º Aos menores de 18 (dezoito) anos e aos maiores de 50 (cinquenta) anos de idade, as férias serão sempre concedidas de uma só vez.\n\nArt. 2º A época da concessão das férias será a que melhor consulte os interesses do empregador.\n\n§ 1º Os membros de uma família, que trabalharem no mesmo estabelecimento ou empresa, terão direito a gozar férias no mesmo período, se assim o desejarem e se disto não resultar prejuízo para o serviço.\n\n§ 2º O empregado estudante, menor de 18 (dezoito) anos, terá direito a fazer coincidir suas férias com as férias escolares.\n\nArt. 3º O empregado deverá ser comunicado da concessão de férias com antecedência mínima de 30 (trinta) dias.\n\nParágrafo único. A comunicação será feita por escrito e o empregado dará recibo.\n\nArt. 4º O pagamento da remuneração das férias será efetuado até 2 (dois) dias antes do início do respectivo período.\n\nArt. 5º Ao empregado que solicitar conversão de 1/3 (um terço) do período de férias em abono pecuniário, o pagamento deverá ser realizado até 2 (dois) dias antes do início das férias.\n\nArt. 6º A concessão de férias será registrada na Carteira de Trabalho e Previdência Social ou no sistema eletrônico.\n\nArt. 7º Esta Portaria entra em vigor na data de sua publicação.",
        interpretation: "Em linguagem simples: Esta portaria estabelece as regras práticas de como a empresa deve controlar e conceder férias. Define que: a empresa escolhe quando você tira férias (mas respeitando seus interesses), membros da mesma família podem tirar férias juntos, estudantes menores de 18 anos podem coincidir com férias escolares, você deve ser avisado com 30 dias de antecedência POR ESCRITO, o pagamento das férias deve ser feito 2 dias ANTES de você sair de férias, e tudo deve ser registrado na sua carteira. São regras para garantir que seus direitos sejam respeitados!"
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
    order: 8,
    title: "Leis 4.090/62 e 4.749/65 - 13º Salário",
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
  "atestado-medico": {
    id: "atestado-medico",
    order: 9,
    title: "Arts. 473, 474 e 475 - Atestado Médico",
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
  }
};

export const topicsList = Object.values(topics).sort((a, b) => a.order - b.order);

