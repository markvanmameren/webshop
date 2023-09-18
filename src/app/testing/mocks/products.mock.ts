import { IProduct } from 'src/app/shared/interfaces/product.interface'
import { getMockProduct } from './product.mock'

export const getMockProducts = (): IProduct[] => [
  { ...getMockProduct(), id: '0', title: 'Product 0' },
  { ...getMockProduct(), id: '1', title: 'Product 1', liked: true },
  { ...getMockProduct(), id: '2', title: 'Product 2' },
]
