import { IAppState } from '../interfaces/app-state.interface'
import { initialProductsState } from './product.initial-state'

export const initialAppState: IAppState = {
  products: initialProductsState,
}
