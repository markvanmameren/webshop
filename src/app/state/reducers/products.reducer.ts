import { createReducer, on } from '@ngrx/store'
import {
  getProductsAction,
  getProductsFailureAction,
  getProductsSuccessAction,
  toggleWishlistAction,
} from '../actions/products.actions'
import { initialProductsState } from '../initial-state/products.initial-state'
import { IProductsFeature } from '../interfaces/products-feature.interface'

export const productsReducer = createReducer(
  initialProductsState,
  on(
    getProductsAction,
    (state): IProductsFeature => ({ ...state, isLoading: true })
  ),
  on(
    getProductsSuccessAction,
    (state, { products }): IProductsFeature => ({
      ...state,
      isLoading: false,
      products,
    })
  ),
  on(
    getProductsFailureAction,
    (state, { error }): IProductsFeature => ({
      ...state,
      isLoading: false,
      error,
    })
  ),
  on(
    toggleWishlistAction,
    (state): IProductsFeature => ({
      ...state,
      isWishlistOpen: !state.isWishlistOpen,
    })
  )
)
