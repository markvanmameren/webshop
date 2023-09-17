import { createReducer, on } from '@ngrx/store'
import {
  getAllProductsFailureAction,
  getAllProductsInitiateAction,
  getAllProductsSuccessAction,
  toggleWishlistAction,
  togglelikeProductSuccessAction,
} from '../actions/products.actions'
import { initialProductsState } from '../initial-state/products.initial-state'
import { IProductsFeature } from '../interfaces/products-feature.interface'

export const productsReducer = createReducer(
  initialProductsState,
  on(
    getAllProductsInitiateAction,
    (state): IProductsFeature => ({ ...state, isLoading: true })
  ),
  on(
    getAllProductsSuccessAction,
    (state, { products }): IProductsFeature => ({
      ...state,
      isLoading: false,
      error: null,
      products,
    })
  ),
  on(
    getAllProductsFailureAction,
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
  ),
  on(
    togglelikeProductSuccessAction,
    (state, { updatedProduct }): IProductsFeature => ({
      ...state,
      isLoading: false,
      error: null,
      products: [
        ...state.products.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        ),
      ],
    })
  )
)
