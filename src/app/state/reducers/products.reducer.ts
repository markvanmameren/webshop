import { createReducer, on } from '@ngrx/store'
import {
  getProductsFailureAction,
  getProductsSuccessAction,
} from '../actions/products.actions'
import { initialProductsState } from '../initial-state/products.initial-state'
import { IProductsFeature } from '../interfaces/products-feature.interface'

export const productsReducer = createReducer(
  initialProductsState,
  on(
    getProductsSuccessAction,
    (state, { products }): IProductsFeature => ({ ...state, products })
  ),
  on(
    getProductsFailureAction,
    (state, { error }): IProductsFeature => ({ ...state, error })
  )
)
