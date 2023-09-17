import { IProduct } from 'src/app/shared/interfaces/product.interface'

export interface IProductsFeature {
  isLoading: boolean
  products: IProduct[]
  error: string | null
}
