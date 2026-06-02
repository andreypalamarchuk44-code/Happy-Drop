export interface Product {
  id: number
  name: string
  taste: string
  price: string
  priceNum: number
  image: string
  description: string
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Cherry Night',
    taste: 'Вишня · дуб · карамель',
    price: '690₴',
    priceNum: 690,
    image: '/img/cherry.jpg',
    description: 'Глибокий вишневий смак з теплою деревною витримкою.',
  },
  {
    id: 2,
    name: 'Fresh Citrus',
    taste: 'Апельсин · кориця · дим',
    price: '720₴',
    priceNum: 720,
    image: '/img/lemon.jpg',
    description: 'Яскравий цитрусовий характер з легкою димністю.',
  },
  {
    id: 3,
    name: 'Sweet Honey',
    taste: 'Мед · ваніль · спеції',
    price: '740₴',
    priceNum: 740,
    image: '/img/honey.jpg',
    description: "М'який аромат меду з пряним післясмаком.",
  },
  {
    id: 4,
    name: 'Forest Berry',
    taste: 'Чорниця · ожина · смородина',
    price: '680₴',
    priceNum: 680,
    image: '/img/berry.jpg',
    description: 'Свіжий ягідний аромат з холодним акцентом.',
  },
  {
    id: 5,
    name: 'Sweet Cherry',
    taste: 'Черешня · дубова витримка · карамель',
    price: '790₴',
    priceNum: 790,
    image: '/img/sweetcherry.jpg',
    description: 'Темний насичений смак для особливих вечорів.',
  },
  {
    id: 6,
    name: 'Cold Mint',
    taste: 'М\'ята · лайм · трав\'яний мед',
    price: '650₴',
    priceNum: 650,
    image: '/img/mint.jpg',
    description: "Теплий фруктовий профіль з м'якою солодкістю.",
  },
]
