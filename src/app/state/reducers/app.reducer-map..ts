import { ActionReducerMap } from '@ngrx/store'
import { productsFeatureKey } from '../actions/product.actions'
import { IAppState } from '../interfaces/app-state.interface'
import { productReducer } from './product.reducer'

export const createAppReducerMap = (): ActionReducerMap<IAppState> => ({
  [productsFeatureKey]: productReducer,
})
