/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Neighborhood } from '../types';

// Pinheirinho Headquarters coordinates (our central base)
export const HQ_COORDS = { lat: -25.5134, lng: -49.2954 };

// Raw arrays from user specifications
export const OFFICIAL_BAIRROS = [
  'Abranches', 'Água Verde', 'Ahú', 'Alto Boqueirão', 'Alto da Glória', 'Alto da Rua XV',
  'Atuba', 'Augusta', 'Bacacheri', 'Bairro Alto', 'Barreirinha', 'Batel', 'Bigorrilho',
  'Boa Vista', 'Bom Retiro', 'Boqueirão', 'Butiatuvinha', 'Cabral', 'Cachoeira', 'Cajuru',
  'Campina do Siqueira', 'Campo Comprido', 'Campo de Santana', 'Capão Raso', 'Capão da Imbuia',
  'Cascatinha', 'Caximba', 'Centro', 'Centro Cívico', 'Cidade Industrial (CIC)', 'Cristo Rei',
  'Fanny', 'Fazendinha', 'Ganchinho', 'Guabirotuba', 'Guaíra', 'Hauer', 'Hugo Lange',
  'Jardim Botânico', 'Jardim Social', 'Jardim das Américas', 'Juvevê', 'Lamenha Pequena',
  'Lindóia', 'Mercês', 'Mossunguê', 'Novo Mundo', 'Orleans', 'Parolin', 'Pilarzinho',
  'Pinheirinho', 'Portão', 'Prado Velho', 'Rebouças', 'Riviera', 'Santa Cândida',
  'Santa Felicidade', 'Santa Quitéria', 'Santo Inácio', 'Seminário', 'Sítio Cercado',
  'São Braz', 'São Francisco', 'São João', 'São Lourenço', 'São Miguel', 'Taboão',
  'Tarumã', 'Tatuquara', 'Tingui', 'Uberaba', 'Umbará', 'Vila Izabel', 'Vista Alegre', 'Xaxim'
];

export const POPULAR_REGIONS = [
  // CIC subdivisions
  'Vila Sandra', 'Vila Verde', 'Vila Nossa Senhora da Luz', 'Vitória Régia', 'Caiuá',
  'Sabará', 'Gabineto', 'Itatiaia', 'Santa Helena', 'Conquista', 'Barigui', 'Osvaldo Cruz',
  'Atenas', 'Neoville', 'CIC Central',
  // Vilas & Popular names
  'Vila Pantanal', 'Vila Torres', 'Vila das Torres', 'Vila Parolin', 'Vila Hauer',
  'Vila Guaíra', 'Vila Oficinas', 'Vila Osternack', 'Vila São Pedro', 'Vila Audi', 'Vila Prado',
  // Local variations
  'Pinheirinho Velho', 'Portão Velho', 'Capão Raso Velho', 'Sítio Cercado Velho',
  'Umbará de Baixo', 'Umbará de Cima', 'Carmo', 'Hauer Velho', 'Xaxim Velho',
  'Boqueirão Alto', 'Boqueirão Velho', 'Cajuru Alto', 'Uberaba Velho', 'Uberaba de Cima',
  'Jardim das Torres', 'Bairro Alto Norte', 'Bairro Alto Velho', 'Tingui Velho',
  'Boa Vista Norte', 'Orleans Velho', 'São Braz Alto', 'Santa Felicidade Norte',
  'Jardim Gabineto', 'Jardim Itatiaia', 'Jardim Kosmos', 'Jardim da Ordem', 'Jardim Alvorada'
];

export const METROPOLITAN_CITIES = [
  'São José dos Pinhais', 'Pinhais', 'Colombo', 'Araucária', 'Almirante Tamandaré',
  'Campo Largo', 'Campo Magro', 'Fazenda Rio Grande', 'Quatro Barras', 'Campina Grande do Sul',
  'Mandirituba', 'Balsa Nova', 'Rio Branco do Sul', 'Itaperuçu', 'Tijucas do Sul'
];

// Helper to determine region of Curitiba
const getRegionForOfficial = (name: string): Neighborhood['region'] => {
  const SUL = ['Pinheirinho', 'Portão', 'Capão Raso', 'Novo Mundo', 'Lindóia', 'Fanny', 'Guaíra', 'Parolin', 'Sítio Cercado', 'Umbará', 'Ganchinho', 'Caximba', 'Campo de Santana', 'Tatuquara', 'Xaxim', 'Hauer', 'Boqueirão', 'Alto Boqueirão', 'Fazendinha'];
  const NORTE = ['Abranches', 'Ahú', 'Atuba', 'Bacacheri', 'Bairro Alto', 'Barreirinha', 'Boa Vista', 'Bom Retiro', 'Cabral', 'Cachoeira', 'Hugo Lange', 'Jardim Social', 'Juvevê', 'Lamenha Pequena', 'Pilarzinho', 'Santa Cândida', 'São Lourenço', 'Taboão', 'Tingui', 'Vista Alegre', 'São Francisco', 'São João'];
  const LESTE = ['Cajuru', 'Capão da Imbuia', 'Cristo Rei', 'Guabirotuba', 'Jardim Botânico', 'Jardim das Américas', 'Prado Velho', 'Rebouças', 'Tarumã', 'Uberaba', 'Alto da Glória', 'Alto da Rua XV'];
  const OESTE = ['Batel', 'Bigorrilho', 'Butiatuvinha', 'Campina do Siqueira', 'Campo Comprido', 'Cascatinha', 'Mercês', 'Mossunguê', 'Orleans', 'Riviera', 'Santa Felicidade', 'Santa Quitéria', 'Santo Inácio', 'Seminário', 'São Braz', 'São Miguel', 'Vila Izabel', 'Augusta'];
  
  if (name.includes('Cidade Industrial') || name.includes('CIC')) return 'CIC';
  if (SUL.some(b => name.includes(b))) return 'Sul';
  if (NORTE.some(b => name.includes(b))) return 'Norte';
  if (LESTE.some(b => name.includes(b))) return 'Leste';
  if (OESTE.some(b => name.includes(b))) return 'Oeste';
  return 'Centro';
};

// Deterministic coordinate calculation relative to HQ in Pinheirinho (-25.5134, -49.2954)
// to make sure we don't have static 0,0 and provide gorgeous map routes
const calculateDeterministicGeo = (name: string, type: Neighborhood['type'], index: number): {
  lat: number;
  lng: number;
  distanceKm: number;
  timeMins: number;
  region: Neighborhood['region'];
} => {
  let relativeAngle = (index * 35) % 360;
  let rad = (relativeAngle * Math.PI) / 180;
  
  let distanceKm = 0;
  let region: Neighborhood['region'] = 'Sul';

  if (type === 'metropolitan') {
    region = 'Metropolitana';
    // Metropolitan cities are further away: 12km to 45km
    distanceKm = 10 + ((index * 7) % 25);
  } else {
    // Curitiba neighborhoods
    const reg = getRegionForOfficial(name);
    region = reg;
    if (name === 'Pinheirinho') {
      distanceKm = 0;
    } else {
      switch (reg) {
        case 'Sul':
          distanceKm = 2 + ((index * 3) % 7);
          break;
        case 'Centro':
          distanceKm = 8 + ((index * 2) % 4);
          break;
        case 'CIC':
          distanceKm = 4 + ((index * 4) % 8);
          break;
        case 'Norte':
          distanceKm = 10 + ((index * 5) % 12);
          break;
        case 'Leste':
          distanceKm = 7 + ((index * 4) % 10);
          break;
        case 'Oeste':
          distanceKm = 8 + ((index * 5) % 11);
          break;
      }
    }
  }

  // Handle specific coordinates for key places to align perfectly
  if (name === 'Pinheirinho') {
    return { lat: HQ_COORDS.lat, lng: HQ_COORDS.lng, distanceKm: 0, timeMins: 5, region: 'Sul' };
  }
  if (name === 'Portão') return { lat: -25.4761, lng: -49.2921, distanceKm: 4.8, timeMins: 9, region: 'Sul' };
  if (name === 'Água Verde') return { lat: -25.4594, lng: -49.2858, distanceKm: 6.5, timeMins: 11, region: 'Sul' };
  if (name === 'Centro') return { lat: -25.4316, lng: -49.2713, distanceKm: 9.2, timeMins: 15, region: 'Centro' };
  if (name === 'Cidade Industrial (CIC)') return { lat: -25.4981, lng: -49.3411, distanceKm: 5.5, timeMins: 10, region: 'CIC' };
  if (name === 'Sítio Cercado') return { lat: -25.5348, lng: -49.2661, distanceKm: 3.8, timeMins: 7, region: 'Sul' };
  if (name === 'Santa Felicidade') return { lat: -25.4053, lng: -49.3308, distanceKm: 15.8, timeMins: 22, region: 'Oeste' };
  if (name === 'Bairro Alto') return { lat: -25.4024, lng: -49.2154, distanceKm: 16.2, timeMins: 24, region: 'Norte' };
  if (name === 'Boqueirão') return { lat: -25.5034, lng: -49.2311, distanceKm: 7.5, timeMins: 12, region: 'Sul' };
  if (name === 'São José dos Pinhais') return { lat: -25.5342, lng: -49.1912, distanceKm: 12.8, timeMins: 14, region: 'Metropolitana' };
  
  // Convert distance to coordinate offset (approx 0.009 degrees per km lat, 0.010 degrees per km lng at Curitiba latitude)
  let latOffset = (distanceKm * 0.009) * Math.sin(rad);
  let lngOffset = (distanceKm * 0.010) * Math.cos(rad);

  let lat = HQ_COORDS.lat + latOffset;
  let lng = HQ_COORDS.lng + lngOffset;

  // Transit time based on distance (assuming urban traffic speed 35km/h, with offset)
  let timeMins = Math.round(5 + (distanceKm * 1.5) + (index % 4));

  return { lat, lng, distanceKm: parseFloat(distanceKm.toFixed(1)), timeMins, region };
};

// Generate SEO service description specifically for each place
const generateSeoDescription = (name: string, type: Neighborhood['type'], region: Neighborhood['region']): string => {
  const isBairro = type !== 'metropolitan';
  
  if (isBairro) {
    return `Precisando de poda ou corte de árvores no bairro ${name} em Curitiba? A Arbosat oferece serviços profissionais e seguros de arborização, supressão vegetal de risco e limpeza de galhos. Localizados no Pinheirinho, garantimos deslocamento imediato até o ${name} com maquinário de ponta, equipe qualificada e orçamentos virtuais sem burocracia. Atendemos chamados residenciais e comerciais sob as normas de Curitiba.`;
  } else {
    return `Serviço especializado de corte e poda de árvores em ${name}. Atendemos a Região Metropolitana de Curitiba com máxima agilidade e remoção segura de galhos e troncos de risco. Nossa equipe de arboristas possui fácil acesso via vias rápidas e contorno, garantindo preço justo e respeito às diretrizes ambientais locais de ${name}. Faça seu orçamento online pelo WhatsApp!`;
  }
};

const generateSafetyNote = (name: string, region: Neighborhood['region']): string => {
  if (region === 'CIC') {
    return `Atenção: A região da Cidade Industrial possui áreas com alta densidade de rede elétrica e árvores de grande porte. Realizamos remoções próximas a fiações com segurança homologada.`;
  }
  if (region === 'Centro' || name === 'Batel' || name === 'Água Verde') {
    return `Devido ao tráfego intenso e áreas verticais nas proximidades do ${name}, operamos com sistemas avançados de contenção (cesto aéreo e cordas de resgate) para evitar quedas em calçadas e fachadas de condomínios.`;
  }
  if (region === 'Metropolitana') {
    return `Para atendimentos em ${name}, contamos com rotas expressas de atendimento, facilitando o transporte de caminhões de descarte com trituração de galhos orgânicos no local.`;
  }
  return `Operação ágil e segura em áreas residenciais do ${name}. Poda qualificada para manter as árvores saudáveis e em harmonia com telhados e tubulações.`;
};

// Compile list
export const BAIRROS_DATA: Neighborhood[] = [
  ...OFFICIAL_BAIRROS.map((name, i) => {
    const geo = calculateDeterministicGeo(name, 'official', i);
    return {
      id: `official-${name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '-')}`,
      name,
      type: 'official' as const,
      lat: geo.lat,
      lng: geo.lng,
      distanceKm: geo.distanceKm,
      timeMins: geo.timeMins,
      region: geo.region,
      seoDescription: generateSeoDescription(name, 'official', geo.region),
      safetyNote: generateSafetyNote(name, geo.region)
    };
  }),
  ...POPULAR_REGIONS.map((name, i) => {
    const geo = calculateDeterministicGeo(name, 'popular', i + 100);
    return {
      id: `popular-${name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '-')}`,
      name,
      type: 'popular' as const,
      lat: geo.lat,
      lng: geo.lng,
      distanceKm: geo.distanceKm,
      timeMins: geo.timeMins,
      region: geo.region,
      seoDescription: generateSeoDescription(name, 'popular', geo.region),
      safetyNote: generateSafetyNote(name, geo.region)
    };
  }),
  ...METROPOLITAN_CITIES.map((name, i) => {
    const geo = calculateDeterministicGeo(name, 'metropolitan', i + 300);
    return {
      id: `metro-${name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '-')}`,
      name,
      type: 'metropolitan' as const,
      lat: geo.lat,
      lng: geo.lng,
      distanceKm: geo.distanceKm,
      timeMins: geo.timeMins,
      region: geo.region,
      seoDescription: generateSeoDescription(name, 'metropolitan', geo.region),
      safetyNote: generateSafetyNote(name, geo.region)
    };
  })
];

export const SERVICE_DETAILS = [
  {
    id: 'poda' as const,
    title: 'Poda Especializada de Árvores',
    shortDesc: 'Manutenção de copa, desobstrução de fios de energia e poda preventiva de galhos secos.',
    fullDesc: 'Procedimento fitossanitário executado para manter o equilíbrio, saúde e estética da árvore. Realizamos poda de limpeza (remoção de galhos secos ou doentes), poda de condução (direcionamento de crescimento) e poda de desobstrução (para afastar galhos de fiação elétrica, telhados, calhas ou iluminação pública) em conformidade com as exigências da Secretaria Municipal do Meio Ambiente de Curitiba.',
    iconName: 'Scissors',
    keywords: ['poda de arvores curitiba', 'podar galhos de risco', 'poda de limpeza curitiba', 'cortar galho perto de fio']
  },
  {
    id: 'remocao' as const,
    title: 'Remoção Segura e Supressão',
    shortDesc: 'Abate controlado de árvores comprometidas, secas ou com risco iminente de queda.',
    fullDesc: 'Serviço de alta complexidade que consiste na derrubada de espécimes arbóreos que apresentam risco de queda sobre imóveis, calçadas ou rede elétrica, ou que possuem autorização legal de supressão para obras de construção civil. Utilizamos técnicas de cabo guia, rapel de árvore e cestos aéreos para desmontar a árvore em segmentos, garantindo zero danos ao patrimônio ao redor.',
    iconName: 'ShieldAlert',
    keywords: ['remocao de árvore de risco', 'derrubada de pinheiro curitiba', 'corte de eucalipto', 'autorizacao ambiental curitiba para corte']
  },
  {
    id: 'corte' as const,
    title: 'Corte Rápido e Picagem',
    shortDesc: 'Minimização de troncos caídos devido a tempestades e trituração orgânica imediata.',
    fullDesc: 'Atendimento emergencial pós-temporal para liberação de vias públicas, portões de garagens ou desobstrução de telhados. Nossa equipe se desloca com motosserras de alto desempenho e trituradores de tamanho industrial que transformam galhos em cavaco orgânico em poucos minutos, deixando seu quintal ou calçada totalmente limpos e organizados.',
    iconName: 'Zap',
    keywords: ['corte de arvore emergencia', 'retirar arvore caida curitiba', 'maquina de triturar galhos', 'limpeza de terreno curitiba']
  },
  {
    id: 'arborizacao' as const,
    title: 'Arborização e Consultoria Técnica',
    shortDesc: 'Laudos para liberação de cortes de árvores e plantios compensatórios em Curitiba.',
    fullDesc: 'Prestamos auxílio técnico em engenharia florestal para obtenção de alvarás de corte e supressão vegetal junto à Prefeitura de Curitiba. Planejamos o plantio compensatório conforme as mudas nativas exigidas (ex: Ipê, Quaresmeira) orientando as melhores práticas para que sua obra ou reforma ocorra dentro de toda a legalidade jurídica necessária.',
    iconName: 'FileText',
    keywords: ['laudo ambiental corte arvore', 'alvara meio ambiente curitiba', 'plantio compensatorio curitiba', 'engenheiro florestal curitiba']
  }
];
