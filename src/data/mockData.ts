import { ApartmentTypology, Amenity, GalleryItem, FAQItem, LocationHighlight } from '../types';

export const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf-O7jzFHlCZrMZ93_yU5lhv4QMVKIJsYX5jj5haK52mFT4Zw/viewform?usp=sharing&ouid=105556214066624981001";

export const PROJECT_INFO = {
  name: "Residencial Lumière",
  subtitle: "Onde o design contemporâneo encontra o conforto supremo",
  address: "Alameda dos Ipês Nobres, 850 - Bairro Jardins",
  city: "São Paulo - SP",
  deliveryDate: "Novembro de 2026",
  towerCount: "2 Torres Exclusivas",
  totalUnits: "128 Apartamentos",
  floors: "22 Andares",
  status: "Obras Avançadas • 65% Vendido",
  startingPrice: "R$ 549.000",
};

export const TYPOLOGIES: ApartmentTypology[] = [
  {
    id: "smart-68",
    name: "Apartamento Compacto Premium",
    tagline: "Praticidade inteligente com acabamento de alto padrão",
    area: "68 m²",
    bedrooms: 2,
    suites: 1,
    bathrooms: 2,
    parkingSpots: 1,
    priceFrom: "A partir de R$ 549.000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    floorPlanImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    description: "Living integrado com varanda espaçosa, suíte aconchegante e infraestrutura completa para ar-condicionado em todos os ambientes.",
    features: [
      "Varanda gourmet com ponto grill",
      "Persiana integrada automatizada no quarto",
      "Infraestrutura para automação residencial",
      "Tomada USB na cabeceira e sala",
      "Depósito privativo no subsolo opcional"
    ]
  },
  {
    id: "family-92",
    name: "Apartamento Família Confort",
    tagline: "O equilíbrio perfeito entre espaço, sofisticação e bem-estar",
    area: "92 m²",
    bedrooms: 3,
    suites: 1,
    bathrooms: 2,
    parkingSpots: 2,
    priceFrom: "A partir de R$ 740.000",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    floorPlanImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    description: "Planta ampla com cozinha americana conectada ao living e à varanda gourmet com churrasqueira a carvão e vista livre definitiva.",
    features: [
      "Varanda gourmet com churrasqueira a carvão",
      "Suíte master com closet espaçoso",
      "2 vagas de garagem demarcadas e cobertas",
      "Cozinha integrada estilo conceito aberto",
      "Lavabo para visitas com cuba esculpida"
    ]
  },
  {
    id: "exclusive-126",
    name: "Exclusive Suite Residence",
    tagline: "Privacidade absoluta com 3 suítes plenas e hall privativo",
    area: "126 m²",
    bedrooms: 3,
    suites: 3,
    bathrooms: 4,
    parkingSpots: 2,
    priceFrom: "A partir de R$ 1.150.000",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    floorPlanImage: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80",
    description: "Hall social privativo com elevador codificado, terraço panorâmico em L com churrasqueira e suíte master com banheiro senhor e senhora.",
    features: [
      "Hall privativo com biometria no elevador",
      "3 Suítes plenas com piso aquecido nos banheiros",
      "Churrasqueira gourmet a carvão com exaustão",
      "Isolamento acústico reforçado nas lajes e caixilhos",
      "Ponto de recarga elétrica para carro na garagem"
    ]
  },
  {
    id: "penthouse-184",
    name: "Penthouse Cobertura Duplex",
    tagline: "O ápice do luxo urbano com spa privativo e vista panorâmica",
    area: "184 m²",
    bedrooms: 4,
    suites: 3,
    bathrooms: 5,
    parkingSpots: 3,
    priceFrom: "A partir de R$ 1.890.000",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    floorPlanImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    description: "Pé-direito duplo no living, terraço exclusivo com piscina privativa aquecida tipo jacuzzi, deck de madeira e espaço gourmet completo.",
    features: [
      "Piscina privativa aquecida / Spa no rooftop",
      "Living com pé-direito duplo de 5,80 metros",
      "3 vagas soltas + depósito individual de 6m²",
      "Suíte master com closet walk-in e hidromassagem",
      "Vista panorâmica definitiva para o pôr do sol"
    ]
  }
];

export const AMENITIES: Amenity[] = [
  {
    id: "pool",
    title: "Piscina com Borda Infinita",
    category: "lazer",
    description: "Piscina climatizada com raia de 25m, deck molhado, solarium com espreguiçadeiras e vista deslumbrante.",
    iconName: "Waves",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fitness",
    title: "Academia Fitness Pro",
    category: "esporte",
    description: "Espaço fitness de 140m² equipado com aparelhos de última geração Technogym e área de treino funcional.",
    iconName: "Dumbbell",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gourmet",
    title: "Espaço Gourmet & Festas",
    category: "lazer",
    description: "Ambiente sofisticado com adega climatizada, ilha gastronômica e capacidade para até 50 convidados confortavelmente.",
    iconName: "UtensilsCrossed",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "coworking",
    title: "Coworking & Reuniões",
    category: "facilidade",
    description: "Estações de trabalho silenciosas, cabines acústicas para chamadas de vídeo e internet corporativa dedicada.",
    iconName: "Briefcase",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "spa",
    title: "Spa & Sauna Relax",
    category: "bem-estar",
    description: "Sauna seca e úmida, sala de massagem privativa e banheira de hidromassagem terapêutica para relaxar a qualquer hora.",
    iconName: "Sparkles",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "kids",
    title: "Brinquedoteca & Play",
    category: "lazer",
    description: "Espaço lúdico interativo e seguro com piso emborrachado e playground ao ar livre para as crianças se divertirem.",
    iconName: "Smile",
    image: "https://images.unsplash.com/photo-1566454544259-f4b94c3d758c?auto=format&fit=crop&w=800&q=80"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Fachada Arquitetônica Contemporânea",
    category: "fachada",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    description: "Linhas modernas com brises amadeirados e paisagismo assinado por renomado escritório internacional."
  },
  {
    id: "g2",
    title: "Living Ampliado com Varanda Integrada",
    category: "decorado",
    imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    description: "Ambientes integrados com iluminação natural abundante e acabamentos em mármore e madeira nobre."
  },
  {
    id: "g3",
    title: "Suíte Master com Vista Privilegiada",
    category: "interiores",
    imageUrl: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    description: "Espaço amplo planejado para descanso com closet e banheiro refinado."
  },
  {
    id: "g4",
    title: "Varanda Gourmet com Churrasqueira",
    category: "interiores",
    imageUrl: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
    description: "O espaço perfeito para receber amigos e família aos finais de semana."
  },
  {
    id: "g5",
    title: "Piscina e Solarium com Deck Molhado",
    category: "lazer",
    imageUrl: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
    description: "Ambiente de resort urbano no coração do residencial."
  },
  {
    id: "g6",
    title: "Lobby de Entrada Imponente",
    category: "fachada",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "Hall com pé-direito duplo, portaria 24 horas blindada e concierge."
  }
];

export const LOCATION_HIGHLIGHTS: LocationHighlight[] = [
  {
    place: "Parque Ibirapuera / Parque Central",
    distance: "3 min a pé",
    category: "parque",
    description: "Área verde exuberante para corridas matinais, passeios com pets e piqueniques."
  },
  {
    place: "Shopping Pátio Jardins",
    distance: "5 min de carro",
    category: "shopping",
    description: "Cinemas VIP, grifes internacionais e polo gastronômico com renomados chefs."
  },
  {
    place: "Estação de Metrô Linha Ouro",
    distance: "400 metros",
    category: "transporte",
    description: "Conexão rápida com as principais regiões empresariais e centros culturais da cidade."
  },
  {
    place: "Colégio Internacional & Bilíngue",
    distance: "4 min de caminhada",
    category: "educacao",
    description: "Educação de excelência desde a infância até o ensino médio internacional."
  },
  {
    place: "Hospital Albert Einstein / Sírio",
    distance: "7 min de carro",
    category: "saude",
    description: "Referência médica e hospitalar com pronto atendimento 24h de padrão mundial."
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    question: "Como funciona o processo após clicar no botão 'Tenho Interesse'?",
    answer: "Ao clicar em 'Tenho Interesse', você será direcionado para o nosso formulário oficial e seguro do Google. Preencha seus dados de contato e preferências. Nossa equipe de consultores especializados entrará em contato em menos de 1 hora para apresentar a tabela de preços exclusiva, disponibilidade de andares e agendar sua visita ao apartamento decorado."
  },
  {
    question: "Quais são as condições de pagamento e financiamento durante a obra?",
    answer: "Oferecemos fluxo de pagamento amplamente flexível durante o período de obras, com entrada facilitada e parcelas mensais ajustadas ao seu planejamento. O saldo residual na entrega das chaves pode ser quitado à vista ou financiado pelo banco de sua preferência com as melhores taxas do mercado."
  },
  {
    question: "Posso utilizar meu FGTS na compra do apartamento?",
    answer: "Sim! Você pode utilizar os recursos da sua conta do FGTS tanto na composição da entrada quanto para amortizar o saldo devedor financiado, conforme as regras vigentes do Sistema Financeiro de Habitação (SFH)."
  },
  {
    question: "Existe possibilidade de personalização das plantas e acabamentos?",
    answer: "Sim, disponibilizamos o programa 'Custom Home', onde você pode selecionar opções de plantas aprovadas pela construtora (como integração de dormitórios ou ampliação de living) e kits de acabamentos premium antes da entrega das chaves, sem necessidade de reformas posteriores."
  },
  {
    question: "Qual a garantia e segurança jurídica do empreendimento?",
    answer: "O empreendimento opera sob o regime de Patrimônio de Afetação registrado em cartório, garantindo que todos os recursos da obra fiquem segregados e protegidos. A construtora possui certificação PBQP-H Nível A e ISO 9001, além de seguro de conclusão de obra."
  }
];

export const REASONS_TO_BUY = [
  {
    title: "Valorização Patrimonial",
    description: "Bairro nobre com histórico de valorização de até 22% acima da média nos últimos 3 anos.",
    icon: "TrendingUp"
  },
  {
    title: "Segurança 24h Inteligente",
    description: "Guarita blindada, controle de acesso facial, clausura para veículos e monitoramento perimetral.",
    icon: "ShieldCheck"
  },
  {
    title: "Sustentabilidade & Economia",
    description: "Energia solar para áreas comuns, reúso de águas pluviais e menor custo condominial.",
    icon: "Leaf"
  },
  {
    title: "Construção de Alto Padrão",
    description: "Materiais nobres, isolamento térmico e acústico com lajes protendidas e caixilhos especiais.",
    icon: "Award"
  }
];
