import { IProductsFeature } from '../interfaces/products-feature.interface'

export const initialProductsState: IProductsFeature = {
  isWishlistOpen: false,
  isLoading: true,
  products: [],
  error: null,
}
