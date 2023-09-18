import { IAppState } from '../interfaces/app-state.interface'
import { getInitialProductsState } from './product.initial-state'

export const getInitialAppState = (): IAppState => ({
  products: getInitialProductsState(),
})
