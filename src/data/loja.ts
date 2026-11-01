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
  { nome: 'Tradicional', selo: 'O clássico', descricao: 'Massa aromatizada de baunilha com muita gota de chocolate.', foto: 'tradicional', fotoPosicao: '50% 30%' },
  { nome: 'Nutella', selo: 'Queridinho de muitos', descricao: 'Massa de baunilha com gota de chocolate e recheio de Nutella.', foto: 'nutella', fotoPosicao: '50% 45%' },
  { nome: 'Kinder Bueno', selo: 'Um sucesso', descricao: 'Massa de baunilha, muito chocolate branco e ao leite, com recheio de Kinder e avelã torrada.', foto: 'kinder-bueno' },
  { nome: 'Pistache', selo: 'Trending', descricao: 'Massa de baunilha com farofa de pistache, chocolate branco e recheio de pistache torrado com ganache de chocolate branco.', foto: 'pistache', fotoPosicao: '50% 45%' },
  { nome: 'Red Velvet', selo: 'Atemporal', descricao: 'Massa especial de red velvet, chocolate branco e recheio de Ninho caramelizado com cream cheese.', foto: 'red-velvet' },
  // PENDENTE: descrição e foto.
  { nome: 'Chocolate Triplo', descricao: '[Descrição a confirmar]' },
  // PENDENTE: descrição e foto.
  { nome: 'Caramelo Salgado', descricao: '[Descrição a confirmar]' },
  { nome: 'Especial da Semana', selo: 'Muda toda semana', descricao: 'Um sabor diferente a cada semana. O desta semana aparece no Instagram.' },
];
