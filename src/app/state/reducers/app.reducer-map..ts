import { ActionReducerMap } from '@ngrx/store'
import { productsFeatureKey } from '../actions/products.actions'
import { IAppState } from '../interfaces/app-state.interface'
import { productsReducer } from './products.reducer'

export const appReducerMap: ActionReducerMap<IAppState> = {
  [productsFeatureKey]: productsReducer,
}
