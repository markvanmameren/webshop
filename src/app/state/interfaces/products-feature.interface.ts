import { IProduct } from 'src/app/shared/interfaces/product.interface'

export interface IProductsFeature {
  isWishlistOpen: boolean
  isLoading: boolean
  products: IProduct[]
  error: string | null
}
