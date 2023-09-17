import { IAppState } from '../interfaces/app-state.interface'
import { initialProductsState } from './products.initial-state'

export const initialAppState: IAppState = {
  products: initialProductsState,
}
