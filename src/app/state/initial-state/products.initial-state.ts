import { IProductsFeature } from '../interfaces/products-feature.interface'

export const initialProductsState: IProductsFeature = {
  isLoading: true,
  products: [],
  error: null,
}
