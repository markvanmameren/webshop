import { IProduct } from 'src/app/shared/interfaces/product.interface'

export interface IProductsFeature {
  products: IProduct[]
  error: string | null
}
