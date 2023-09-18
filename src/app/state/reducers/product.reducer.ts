import { createReducer, on } from '@ngrx/store'
import {
  getAllProductsFailureAction,
  getAllProductsInitiateAction,
  getAllProductsSuccessAction,
  toggleWishlistAction,
  togglelikeProductSuccessAction,
} from '../actions/product.actions'
import { initialProductsState } from '../initial-state/product.initial-state'
import { IProductFeature } from '../interfaces/product-feature.interface'

export const productReducer = createReducer(
  initialProductsState,
  on(
    getAllProductsInitiateAction,
    (state): IProductFeature => ({ ...state, isLoading: true })
  ),
  on(
    getAllProductsSuccessAction,
    (state, { products }): IProductFeature => ({
      ...state,
      isLoading: false,
      error: null,
      products,
    })
  ),
  on(
    getAllProductsFailureAction,
    (state, { errorMessage: error }): IProductFeature => ({
      ...state,
      isLoading: false,
      error,
    })
  ),
  on(
    toggleWishlistAction,
    (state): IProductFeature => ({
      ...state,
      isWishlistOpen: !state.isWishlistOpen,
    })
  ),
  on(
    togglelikeProductSuccessAction,
    (state, { updatedProduct }): IProductFeature => ({
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
