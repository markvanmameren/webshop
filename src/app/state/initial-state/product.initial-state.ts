import { IProductFeature } from '../interfaces/product-feature.interface'

export const initialProductsState: IProductFeature = {
  isWishlistOpen: false,
  isLoading: true,
  products: [],
  error: null,
}
