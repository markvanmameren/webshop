import { IProduct } from 'src/app/shared/interfaces/product.interface'

export interface IProductFeature {
  isWishlistOpen: boolean
  isLoading: boolean
  products: IProduct[]
  errorMessage: string | null
}
