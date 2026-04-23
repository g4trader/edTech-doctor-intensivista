const seedUsers = [
  {
    id: "usr-ana",
    name: "Dra. Ana Ribeiro",
    email: "ana@demo.com",
    password: "demo123",
    role: "doctor",
    hospital: "UTI Pediátrica Santa Clara",
    specialty: "Intensivista Pediátrica",
    weeklyMinutes: 186,
    completionRate: 72,
    casesReviewed: 24,
    rankingPercentile: 84,
    lastAccess: "2026-04-14T08:15:00.000Z",
    subscriptionPlan: "Equipe Premium"
  },
  {
    id: "usr-carlos",
    name: "Dr. Carlos Menezes",
    email: "carlos@demo.com",
    password: "demo123",
    role: "admin",
    hospital: "Hospital Universitário Atlântico",
    specialty: "Coordenação UTI Pediátrica",
    weeklyMinutes: 242,
    completionRate: 81,
    casesReviewed: 31,
    rankingPercentile: 92,
    lastAccess: "2026-04-14T07:40:00.000Z",
    subscriptionPlan: "Institucional"
  }
];

const pathologies = [
  {
    id: "pat-01",
    slug: "sepse-pediatrica",
    name: "Sepse Pediátrica",
    clinicalFocus: "Reconhecimento precoce e pacote da primeira hora",
    frequencyRank: 1,
    successRate: 91,
    averageTimeToProtocolMinutes: 18,
    diagnosisHighlights: [
      "Avaliação clínica seriada com foco em perfusão e estado mental",
      "Integração de sinais laboratoriais e marcadores inflamatórios",
      "Estratificação de risco nas primeiras 6 horas"
    ],
    treatmentHighlights: [
      "Pacote assistencial com antibioticoterapia protocolada",
      "Reposição volêmica guiada por resposta clínica",
      "Monitorização hemodinâmica contínua"
    ],
    contentCounts: { videos: 4, texts: 3, images: 2 },
    overview:
      "Módulo orientado para acelerar a identificação de sepse em cenários de emergência e UTI, com fluxo assistencial escalável e checklist de resposta inicial.",
    diagnosticSteps: [
      "Triagem com gatilhos de alerta clínico, lactato e perfusão periférica",
      "Classificação do grau de disfunção orgânica e definição do nível assistencial",
      "Reavaliação estruturada após cada intervenção inicial"
    ],
    treatmentProtocol: [
      "Acionar bundle institucional da primeira hora",
      "Definir antimicrobianos conforme foco presumido e protocolo local",
      "Escalonar suporte hemodinâmico com metas documentadas"
    ],
    monitoringChecklist: [
      "Tempo para antibiótico",
      "Perfusão capilar e diurese",
      "Metas hemodinâmicas e necessidade de suporte avançado"
    ],
    curatorNote:
      "Conteúdo de demonstração. Protocolos finais devem ser revisados e assinados pela curadoria médica antes de uso clínico.",
    contents: [
      {
        id: "sepse-video-1",
        title: "Primeiros 15 minutos na suspeita de sepse",
        format: "video",
        orientation: "vertical",
        durationMinutes: 6,
        summary: "Vídeo vertical com abordagem inicial passo a passo para equipes de plantão.",
        coverTag: "Bundle 1h"
      },
      {
        id: "sepse-texto-1",
        title: "Checklist assistencial da primeira hora",
        format: "text",
        summary: "Resumo objetivo para consulta rápida durante o plantão.",
        coverTag: "Checklist"
      },
      {
        id: "sepse-imagem-1",
        title: "Mapa visual de reavaliação hemodinâmica",
        format: "image",
        summary: "Fluxograma gráfico para rounds e discussão multiprofissional.",
        coverTag: "Fluxo visual"
      }
    ]
  },
  {
    id: "pat-02",
    slug: "bronquiolite-grave",
    name: "Bronquiolite Grave",
    clinicalFocus: "Suporte respiratório escalonado e vigilância de fadiga",
    frequencyRank: 2,
    successRate: 88,
    averageTimeToProtocolMinutes: 22,
    diagnosisHighlights: [
      "Leitura integrada de esforço respiratório e saturação",
      "Critérios de gravidade para UTI pediátrica",
      "Vigilância para apneia e exaustão"
    ],
    treatmentHighlights: [
      "Oxigenoterapia de alto fluxo conforme protocolo local",
      "Suporte ventilatório não invasivo quando indicado",
      "Reavaliação seriada da resposta respiratória"
    ],
    contentCounts: { videos: 3, texts: 2, images: 2 },
    overview:
      "Módulo desenhado para decisões rápidas em sazonalidade respiratória, com ênfase em suporte, critérios de intubação e comunicação com a família.",
    diagnosticSteps: [
      "Avaliar padrão respiratório, frequência e sinais de fadiga",
      "Classificar gravidade conforme oxigenação e reserva ventilatória",
      "Documentar resposta após intervenções de suporte"
    ],
    treatmentProtocol: [
      "Definir modalidade de suporte respiratório inicial",
      "Reavaliar em janela curta para detectar falha terapêutica",
      "Escalonar assistência quando houver fadiga ou hipoxemia persistente"
    ],
    monitoringChecklist: [
      "Frequência respiratória e retrações",
      "Resposta ao suporte de oxigênio",
      "Sinais de exaustão e necessidade de via aérea avançada"
    ],
    curatorNote:
      "Conteúdo de demonstração. Parâmetros finais de ventilação e critérios de escalonamento dependem do protocolo institucional.",
    contents: [
      {
        id: "bronq-video-1",
        title: "Como reconhecer falha do suporte inicial",
        format: "video",
        orientation: "vertical",
        durationMinutes: 5,
        summary: "Vídeo curto para rounds rápidos com foco em deterioração clínica.",
        coverTag: "Falha terapêutica"
      },
      {
        id: "bronq-texto-1",
        title: "Estratificação de gravidade na admissão",
        format: "text",
        summary: "Texto de bolso com critérios práticos de admissão e reavaliação.",
        coverTag: "Admissão"
      },
      {
        id: "bronq-imagem-1",
        title: "Escala visual de esforço respiratório",
        format: "image",
        summary: "Imagem de apoio para treinamento de equipe e discussão de casos.",
        coverTag: "Escala"
      }
    ]
  },
  {
    id: "pat-03",
    slug: "crise-asmatica-grave",
    name: "Crise Asmática Grave",
    clinicalFocus: "Manejo escalonado e vigilância de exaustão respiratória",
    frequencyRank: 3,
    successRate: 89,
    averageTimeToProtocolMinutes: 16,
    diagnosisHighlights: [
      "Integração entre ausculta, esforço e histórico prévio",
      "Sinais precoces de fadiga e risco de ventilação invasiva",
      "Monitorização seriada da resposta ao broncodilatador"
    ],
    treatmentHighlights: [
      "Broncodilatação escalonada conforme protocolo institucional",
      "Corticoterapia sistêmica precoce",
      "Suporte ventilatório progressivo quando necessário"
    ],
    contentCounts: { videos: 3, texts: 3, images: 1 },
    overview:
      "Trilha focada em reduzir atraso terapêutico e padronizar escalonamento nas crises mais graves, incluindo comunicação entre emergência e UTI.",
    diagnosticSteps: [
      "Avaliar gravidade com escore clínico e saturação",
      "Definir risco de exaustão e falha terapêutica",
      "Reavaliar resposta após cada bloco terapêutico"
    ],
    treatmentProtocol: [
      "Instituir broncodilatação e corticosteroide conforme protocolo",
      "Avaliar necessidade de suporte ventilatório não invasivo",
      "Acionar terapia intensiva quando houver piora ou resposta insuficiente"
    ],
    monitoringChecklist: [
      "Fala, consciência e tolerância ao esforço",
      "Saturação e tendência da frequência respiratória",
      "Intervalo entre ciclos terapêuticos"
    ],
    curatorNote:
      "Conteúdo de demonstração. Fluxos devem ser adaptados ao estoque institucional, experiência local e recomendações da curadoria.",
    contents: [
      {
        id: "asma-video-1",
        title: "Escalonamento terapêutico em 6 minutos",
        format: "video",
        orientation: "vertical",
        durationMinutes: 6,
        summary: "Vídeo vertical de revisão rápida antes do plantão.",
        coverTag: "Escalonamento"
      },
      {
        id: "asma-texto-1",
        title: "Sinais de exaustão iminente",
        format: "text",
        summary: "Guia objetivo para decisões de escalonamento ventilatório.",
        coverTag: "Alerta"
      },
      {
        id: "asma-imagem-1",
        title: "Linha do tempo de reavaliação clínica",
        format: "image",
        summary: "Painel visual com janelas de checagem e critérios de resposta.",
        coverTag: "Timeline"
      }
    ]
  },
  {
    id: "pat-04",
    slug: "pards",
    name: "PARDS",
    clinicalFocus: "Ventilação protetora e monitorização intensiva",
    frequencyRank: 4,
    successRate: 86,
    averageTimeToProtocolMinutes: 24,
    diagnosisHighlights: [
      "Reconhecimento de hipoxemia e disfunção pulmonar aguda",
      "Integração entre imagem, mecânica respiratória e contexto clínico",
      "Definição precoce de gravidade"
    ],
    treatmentHighlights: [
      "Estratégia ventilatória protetora",
      "Pronação e otimização da oxigenação quando indicadas",
      "Reavaliação multidisciplinar com metas ventilatórias"
    ],
    contentCounts: { videos: 4, texts: 4, images: 3 },
    overview:
      "Conteúdo desenhado para unificar linguagem entre plantonistas e intensivistas, com foco em ventilação protetora, resgate e monitorização.",
    diagnosticSteps: [
      "Confirmar critérios clínicos e radiológicos compatíveis",
      "Estratificar gravidade pela oxigenação e mecânica ventilatória",
      "Registrar gatilhos para terapias de resgate"
    ],
    treatmentProtocol: [
      "Ajustar ventilação com metas protetoras documentadas",
      "Discutir pronação e outras terapias conforme evolução",
      "Monitorizar impacto hemodinâmico do suporte avançado"
    ],
    monitoringChecklist: [
      "Tendência de oxigenação",
      "Mecânica respiratória e pressão de condução",
      "Sincronia ventilatória e necessidade de resgate"
    ],
    curatorNote:
      "Conteúdo de demonstração. Estratégias avançadas de ventilação devem ser validadas pela coordenação clínica.",
    contents: [
      {
        id: "pards-video-1",
        title: "Ventilação protetora para rounds noturnos",
        format: "video",
        orientation: "vertical",
        durationMinutes: 7,
        summary: "Vídeo objetivo com linguagem visual para consulta no celular.",
        coverTag: "Ventilação"
      },
      {
        id: "pards-texto-1",
        title: "Critérios de gravidade e gatilhos de resgate",
        format: "text",
        summary: "Texto de referência rápida para tomada de decisão escalonada.",
        coverTag: "Gravidade"
      },
      {
        id: "pards-imagem-1",
        title: "Mapa de estratégias ventilatórias",
        format: "image",
        summary: "Painel visual para discussão de caso e ensino multiprofissional.",
        coverTag: "Mapa visual"
      }
    ]
  },
  {
    id: "pat-05",
    slug: "cetoacidose-diabetica",
    name: "Cetoacidose Diabética",
    clinicalFocus: "Reposição segura, correção metabólica e vigilância neurológica",
    frequencyRank: 5,
    successRate: 92,
    averageTimeToProtocolMinutes: 14,
    diagnosisHighlights: [
      "Confirmação de descompensação metabólica com foco em gravidade",
      "Estratificação do risco neurológico",
      "Monitorização de resposta por etapas"
    ],
    treatmentHighlights: [
      "Reposição hídrica e correções conforme protocolo",
      "Fluxo de monitorização metabólica seriada",
      "Vigilância intensiva para complicações neurológicas"
    ],
    contentCounts: { videos: 3, texts: 4, images: 2 },
    overview:
      "Trilha desenhada para reduzir variabilidade no manejo inicial e reforçar pontos críticos de segurança, especialmente monitorização neurológica.",
    diagnosticSteps: [
      "Confirmar critérios clínicos e laboratoriais da descompensação",
      "Classificar gravidade e risco de complicações",
      "Planejar monitorização seriada desde a admissão"
    ],
    treatmentProtocol: [
      "Aplicar protocolo institucional de correção metabólica",
      "Definir metas de reavaliação clínica e laboratorial",
      "Escalonar vigilância quando houver sinais neurológicos de alerta"
    ],
    monitoringChecklist: [
      "Estado mental e cefaleia",
      "Tendência metabólica seriada",
      "Resposta à reposição e à correção protocolada"
    ],
    curatorNote:
      "Conteúdo de demonstração. Velocidade de correção e detalhes farmacológicos devem ser definidos pela equipe curadora.",
    contents: [
      {
        id: "cad-video-1",
        title: "CAD em pediatria: pontos de segurança",
        format: "video",
        orientation: "vertical",
        durationMinutes: 5,
        summary: "Vídeo de bolso com foco em prevenção de eventos adversos.",
        coverTag: "Segurança"
      },
      {
        id: "cad-texto-1",
        title: "Reavaliação metabólica em janelas críticas",
        format: "text",
        summary: "Texto estruturado para uso durante plantões com alta rotatividade.",
        coverTag: "Reavaliação"
      },
      {
        id: "cad-imagem-1",
        title: "Fluxograma de vigilância neurológica",
        format: "image",
        summary: "Guia visual para rounds e alinhamento multiprofissional.",
        coverTag: "Neuro"
      }
    ]
  },
  {
    id: "pat-06",
    slug: "status-convulsivo",
    name: "Status Convulsivo",
    clinicalFocus: "Intervenção rápida e prevenção de dano secundário",
    frequencyRank: 6,
    successRate: 87,
    averageTimeToProtocolMinutes: 12,
    diagnosisHighlights: [
      "Reconhecimento de crise prolongada e refratariedade",
      "Busca direcionada de gatilhos reversíveis",
      "Avaliação neurológica e hemodinâmica integrada"
    ],
    treatmentHighlights: [
      "Fluxo escalonado para interrupção da crise",
      "Proteção de via aérea e suporte sistêmico",
      "Rastreamento etiológico em paralelo"
    ],
    contentCounts: { videos: 4, texts: 2, images: 2 },
    overview:
      "Módulo com foco em reduzir o tempo até a intervenção e estruturar decisões sucessivas sob pressão assistencial.",
    diagnosticSteps: [
      "Confirmar duração, frequência e padrão das crises",
      "Pesquisar fatores precipitantes e causas reversíveis",
      "Definir necessidade de suporte intensivo avançado"
    ],
    treatmentProtocol: [
      "Aplicar sequência terapêutica escalonada conforme protocolo local",
      "Garantir suporte ventilatório e hemodinâmico quando necessário",
      "Acionar investigação etiológica enquanto a crise é controlada"
    ],
    monitoringChecklist: [
      "Tempo total de crise",
      "Nível de consciência e ventilação",
      "Necessidade de escalonamento terapêutico"
    ],
    curatorNote:
      "Conteúdo de demonstração. Sequências medicamentosas e doses devem ser preenchidas exclusivamente pela curadoria clínica.",
    contents: [
      {
        id: "status-video-1",
        title: "Fluxo mental de resposta imediata",
        format: "video",
        orientation: "vertical",
        durationMinutes: 4,
        summary: "Vídeo vertical para revisão rápida antes de iniciar o plantão.",
        coverTag: "Resposta rápida"
      },
      {
        id: "status-texto-1",
        title: "Checklist de causas reversíveis",
        format: "text",
        summary: "Resumo prático para organizar investigação em paralelo ao tratamento.",
        coverTag: "Etiologia"
      },
      {
        id: "status-imagem-1",
        title: "Algoritmo visual de escalonamento",
        format: "image",
        summary: "Infográfico de apoio para treinamento e consulta rápida.",
        coverTag: "Algoritmo"
      }
    ]
  },
  {
    id: "pat-07",
    slug: "meningoencefalite-aguda",
    name: "Meningoencefalite Aguda",
    clinicalFocus: "Abordagem sindrômica e início rápido do tratamento",
    frequencyRank: 7,
    successRate: 84,
    averageTimeToProtocolMinutes: 20,
    diagnosisHighlights: [
      "Identificação de sinais neurológicos e infecciosos prioritários",
      "Organização diagnóstica em cenário de instabilidade",
      "Estratificação de risco para deterioração neurológica"
    ],
    treatmentHighlights: [
      "Terapia antimicrobiana guiada por síndrome e protocolo institucional",
      "Monitorização neurológica e hemodinâmica contínua",
      "Abordagem multiprofissional com metas por turno"
    ],
    contentCounts: { videos: 3, texts: 3, images: 2 },
    overview:
      "Trilha que organiza decisões em casos neurológicos agudos complexos, com foco em tempo até tratamento e segurança na monitorização.",
    diagnosticSteps: [
      "Reconhecer síndrome meníngea ou encefalítica compatível",
      "Definir sequência diagnóstica conforme estabilidade clínica",
      "Reavaliar nível de consciência e sinais focais repetidamente"
    ],
    treatmentProtocol: [
      "Iniciar protocolo institucional para síndrome infecciosa do SNC",
      "Garantir monitorização intensiva e proteção sistêmica",
      "Revisar hipótese etiológica após dados laboratoriais e de imagem"
    ],
    monitoringChecklist: [
      "Nível de consciência e sinais focais",
      "Estabilidade hemodinâmica e respiratória",
      "Tempo entre suspeita clínica e início do tratamento"
    ],
    curatorNote:
      "Conteúdo de demonstração. Algoritmos de antimicrobianos e exames devem ser revisados pela curadoria e pelo SCIH.",
    contents: [
      {
        id: "mening-video-1",
        title: "Sinais de deterioração neurológica em pediatria",
        format: "video",
        orientation: "vertical",
        durationMinutes: 5,
        summary: "Vídeo com foco em gatilhos de escalonamento na UTI pediátrica.",
        coverTag: "Deterioração"
      },
      {
        id: "mening-texto-1",
        title: "Abordagem sindrômica inicial",
        format: "text",
        summary: "Resumo textual orientado para decisão rápida em sala de emergência.",
        coverTag: "Síndrome"
      },
      {
        id: "mening-imagem-1",
        title: "Painel de monitorização neurológica",
        format: "image",
        summary: "Imagem de apoio para rounds e treinamento de equipe.",
        coverTag: "Monitorização"
      }
    ]
  },
  {
    id: "pat-08",
    slug: "tce-grave",
    name: "TCE Grave",
    clinicalFocus: "Neuroproteção e vigilância multimodal",
    frequencyRank: 8,
    successRate: 85,
    averageTimeToProtocolMinutes: 17,
    diagnosisHighlights: [
      "Estratificação neurológica imediata",
      "Reconhecimento de sinais de hipertensão intracraniana",
      "Integração entre exame clínico e imagem"
    ],
    treatmentHighlights: [
      "Pacote de neuroproteção inicial",
      "Metas fisiológicas com revisão por turno",
      "Coordenação rápida com neurocirurgia e imagem"
    ],
    contentCounts: { videos: 4, texts: 3, images: 3 },
    overview:
      "Trilha voltada para plantonistas que precisam organizar as primeiras horas do TCE grave com consistência e linguagem comum entre equipes.",
    diagnosticSteps: [
      "Avaliar neurologia, via aérea e estabilidade sistêmica",
      "Classificar gravidade e risco de hipertensão intracraniana",
      "Definir janela de imagem e discussão especializada"
    ],
    treatmentProtocol: [
      "Aplicar medidas iniciais de neuroproteção",
      "Garantir metas respiratórias e hemodinâmicas documentadas",
      "Escalonar vigilância e suporte conforme resposta clínica"
    ],
    monitoringChecklist: [
      "Escala neurológica seriada",
      "Perfusão sistêmica e ventilação",
      "Sinais de piora neurológica nas primeiras horas"
    ],
    curatorNote:
      "Conteúdo de demonstração. Metas pressóricas, osmoterapia e terapias avançadas devem ser definidas pela equipe curadora.",
    contents: [
      {
        id: "tce-video-1",
        title: "Neuroproteção nas primeiras 2 horas",
        format: "video",
        orientation: "vertical",
        durationMinutes: 6,
        summary: "Revisão prática para consulta imediata via smartphone.",
        coverTag: "2 horas"
      },
      {
        id: "tce-texto-1",
        title: "Checklist de metas fisiológicas",
        format: "text",
        summary: "Material de apoio para rounds e passagem de plantão.",
        coverTag: "Metas"
      },
      {
        id: "tce-imagem-1",
        title: "Fluxo visual de escalonamento neurointensivo",
        format: "image",
        summary: "Painel gráfico para treinamento e padronização de conduta.",
        coverTag: "Neuro UTI"
      }
    ]
  },
  {
    id: "pat-09",
    slug: "choque-cardiogenico-pediatrico",
    name: "Choque Cardiogênico Pediátrico",
    clinicalFocus: "Reconhecimento hemodinâmico e suporte escalonado",
    frequencyRank: 9,
    successRate: 83,
    averageTimeToProtocolMinutes: 19,
    diagnosisHighlights: [
      "Integração de perfusão, imagem funcional e biomarcadores",
      "Diferenciação rápida entre perfis de choque",
      "Reconhecimento de deterioração circulatória"
    ],
    treatmentHighlights: [
      "Suporte hemodinâmico guiado por perfil clínico",
      "Reavaliação multiprofissional frequente",
      "Planejamento para transferência ou suporte avançado"
    ],
    contentCounts: { videos: 3, texts: 3, images: 2 },
    overview:
      "Módulo criado para organizar decisões complexas em instabilidade cardiovascular, com foco em perfis clínicos e vigilância contínua.",
    diagnosticSteps: [
      "Caracterizar o perfil hemodinâmico inicial",
      "Avaliar sinais de congestão e baixo débito",
      "Documentar resposta às primeiras intervenções"
    ],
    treatmentProtocol: [
      "Instituir suporte conforme protocolo institucional e perfil clínico",
      "Monitorizar perfusão, débito urinário e marcadores seriados",
      "Discutir precocemente suporte avançado quando necessário"
    ],
    monitoringChecklist: [
      "Perfusão periférica e débito urinário",
      "Tendência hemodinâmica e resposta ao suporte",
      "Critérios de escalonamento para centro de maior complexidade"
    ],
    curatorNote:
      "Conteúdo de demonstração. Algoritmos de drogas vasoativas e ECMO devem ser definidos com base na curadoria clínica.",
    contents: [
      {
        id: "cardio-video-1",
        title: "Perfis clínicos do choque cardiogênico",
        format: "video",
        orientation: "vertical",
        durationMinutes: 5,
        summary: "Vídeo de bolso com foco em tomada de decisão nas primeiras horas.",
        coverTag: "Perfis"
      },
      {
        id: "cardio-texto-1",
        title: "Mapa de reavaliação hemodinâmica",
        format: "text",
        summary: "Texto com perguntas-chave para rounds e passagem de plantão.",
        coverTag: "Hemodinâmica"
      },
      {
        id: "cardio-imagem-1",
        title: "Painel de alertas de baixo débito",
        format: "image",
        summary: "Imagem de apoio para treinamento de equipe assistencial.",
        coverTag: "Baixo débito"
      }
    ]
  },
  {
    id: "pat-10",
    slug: "pos-operatorio-cardiaco-complexo",
    name: "Pós-operatório Cardíaco Complexo",
    clinicalFocus: "Monitorização intensiva e decisão por perfis de risco",
    frequencyRank: 10,
    successRate: 90,
    averageTimeToProtocolMinutes: 21,
    diagnosisHighlights: [
      "Leitura integrada de perfusão, ventilação e drenagens",
      "Reconhecimento de padrões de instabilidade nas primeiras horas",
      "Critérios de alerta para reabordagem"
    ],
    treatmentHighlights: [
      "Checklist estruturado de admissão pós-operatória",
      "Metas por sistema com revisão a cada turno",
      "Alinhamento entre intensivista, cirurgia e enfermagem"
    ],
    contentCounts: { videos: 4, texts: 3, images: 3 },
    overview:
      "Trilha orientada para UTI pediátrica cirúrgica com ênfase em vigilância intensiva, comunicação de equipe e detecção precoce de complicações.",
    diagnosticSteps: [
      "Aplicar checklist de admissão e perfil de risco",
      "Mapear estabilidade hemodinâmica, ventilatória e sangramento",
      "Reavaliar resposta nas primeiras janelas críticas"
    ],
    treatmentProtocol: [
      "Instituir metas assistenciais por sistema e por turno",
      "Reavaliar volume, suporte e perfusão de forma protocolada",
      "Escalonar discussão cirúrgica diante de sinais de alerta"
    ],
    monitoringChecklist: [
      "Drenagens, perfusão e balanço",
      "Parâmetros ventilatórios e sincronia",
      "Gatilhos para rediscussão cirúrgica"
    ],
    curatorNote:
      "Conteúdo de demonstração. Metas cirúrgicas e protocolos específicos dependem da linha assistencial local.",
    contents: [
      {
        id: "po-cardio-video-1",
        title: "Checklist de admissão em 90 segundos",
        format: "video",
        orientation: "vertical",
        durationMinutes: 3,
        summary: "Vídeo vertical pensado para consulta imediata ao lado do leito.",
        coverTag: "Admissão"
      },
      {
        id: "po-cardio-texto-1",
        title: "Perfis de risco nas primeiras 12 horas",
        format: "text",
        summary: "Texto objetivo para rounds e padronização de condutas.",
        coverTag: "12 horas"
      },
      {
        id: "po-cardio-imagem-1",
        title: "Painel visual de sinais de alerta",
        format: "image",
        summary: "Material visual para equipe multiprofissional e treinamento interno.",
        coverTag: "Alerta"
      }
    ]
  }
];

const topTreatmentBenchmarks = [
  {
    pathologySlug: "cetoacidose-diabetica",
    pathologyName: "Cetoacidose Diabética",
    treatmentName: "Fluxo de correção metabólica com monitorização seriada",
    successRate: 94,
    supportingSignal: "Menor tempo para estabilização e alta adesão ao checklist."
  },
  {
    pathologySlug: "sepse-pediatrica",
    pathologyName: "Sepse Pediátrica",
    treatmentName: "Bundle da primeira hora com metas documentadas",
    successRate: 92,
    supportingSignal: "Redução consistente no tempo até antibiótico e reavaliação."
  },
  {
    pathologySlug: "pos-operatorio-cardiaco-complexo",
    pathologyName: "Pós-operatório Cardíaco Complexo",
    treatmentName: "Checklist de admissão com revisão por turno",
    successRate: 91,
    supportingSignal: "Maior consistência nas passagens de plantão e menos eventos de omissão."
  }
];

export function authenticateUser(email, password) {
  const user = seedUsers.find(
    (candidate) => candidate.email.toLowerCase() === email.toLowerCase() && candidate.password === password
  );

  if (!user) {
    return null;
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    hospital: user.hospital,
    specialty: user.specialty
  };
}

export function getUserById(userId) {
  const user = seedUsers.find((candidate) => candidate.id === userId);
  if (!user) {
    return null;
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    hospital: user.hospital,
    specialty: user.specialty
  };
}

function getUserStats(userId) {
  const user = seedUsers.find((candidate) => candidate.id === userId);
  if (!user) {
    return null;
  }

  return {
    weeklyMinutes: user.weeklyMinutes,
    completionRate: user.completionRate,
    casesReviewed: user.casesReviewed,
    rankingPercentile: user.rankingPercentile,
    lastAccess: user.lastAccess,
    subscriptionPlan: user.subscriptionPlan
  };
}

export function getDashboardOverview(userId) {
  const user = getUserById(userId);
  const userStats = getUserStats(userId);

  if (!user || !userStats) {
    return null;
  }

  return {
    user,
    userStats,
    platformStats: {
      totalUsers: 1248,
      activeUsers30d: 982,
      totalSessions30d: 8643,
      averageSessionMinutes: 17,
      completionRate: 74
    },
    mostFrequentPathologies: [...pathologies].sort((a, b) => a.frequencyRank - b.frequencyRank).slice(0, 5),
    topTreatmentBenchmarks,
    featuredPathologies: pathologies.slice(0, 4)
  };
}

export function listPathologies() {
  return pathologies.map((pathology) => ({
    id: pathology.id,
    slug: pathology.slug,
    name: pathology.name,
    clinicalFocus: pathology.clinicalFocus,
    frequencyRank: pathology.frequencyRank,
    successRate: pathology.successRate,
    averageTimeToProtocolMinutes: pathology.averageTimeToProtocolMinutes,
    diagnosisHighlights: pathology.diagnosisHighlights,
    treatmentHighlights: pathology.treatmentHighlights,
    contentCounts: pathology.contentCounts
  }));
}

export function getPathologyBySlug(slug) {
  return pathologies.find((pathology) => pathology.slug === slug) ?? null;
}
