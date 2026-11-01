// Dados reais da By Gota (fonte: Instagram @by.gota, cardápio de 3 de junho).
// Campos marcados como pendentes ainda precisam de confirmação da loja.

export const loja = {
  nome: 'By Gota',
  instagram: 'https://www.instagram.com/by.gota/',
  instagramUser: '@by.gota',
  endereco: 'Rua Santo Antônio, 765',
  bairroCidade: 'Centro, Juiz de Fora (MG)',
  mapa: 'https://www.google.com/maps/search/?api=1&query=Rua+Santo+Ant%C3%B4nio%2C+765+-+Centro%2C+Juiz+de+Fora+-+MG',
  // PENDENTE: número completo do WhatsApp (o Instagram mostra wa.me/553...).
  whatsapp: '',
  // PENDENTE: horário de funcionamento (destaque "horários" no Instagram).
  horario: '',
};

export const precoUnitario = 14;

// Preços especiais do cardápio.
export const combos: Array<[quantidade: number, preco: number]> = [
  [4, 54],
  [5, 65],
  [6, 77],
];

export type Sabor = {
  nome: string;
  selo?: string;
  descricao?: string;
  foto?: string;
  fotoPosicao?: string;
};

export const sabores: Sabor[] = [
  { nome: 'Tradicional', selo: 'O clássico', descricao: 'Massa de baunilha com muita gota de chocolate.', foto: 'tradicional', fotoPosicao: '50% 30%' },
  { nome: 'Nutella', selo: 'Queridinho de muitos', descricao: 'Massa de baunilha, gota de chocolate e recheio de Nutella.', foto: 'nutella' },
  { nome: 'Kinder Bueno', selo: 'Um sucesso', descricao: 'Chocolate branco e ao leite, recheio de Kinder com avelã torrada.', foto: 'kinder-bueno' },
  { nome: 'Pistache', selo: 'Trending', descricao: 'Farofa de pistache, chocolate branco e ganache de pistache torrado.', foto: 'pistache', fotoPosicao: '50% 100%' },
  { nome: 'Red Velvet', selo: 'Atemporal', descricao: 'Chocolate branco e recheio de Ninho caramelizado com cream cheese.', foto: 'red-velvet' },
  { nome: 'Chocolate Triplo' },
  { nome: 'Caramelo Salgado' },
  { nome: 'Especial da Semana', selo: 'Muda toda semana', descricao: 'Pergunte no WhatsApp qual é o desta semana.' },
];
