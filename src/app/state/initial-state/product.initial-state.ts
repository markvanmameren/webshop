import { IProductFeature } from '../interfaces/product-feature.interface'

export const getInitialProductsState = (): IProductFeature => ({
  isWishlistOpen: false,
  isLoading: true,
  products: [],
  errorMessage: null,
})
