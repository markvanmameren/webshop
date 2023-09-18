import { createReducer, on } from '@ngrx/store'
import {
  getAllProductsFailureAction,
  getAllProductsInitiateAction,
  getAllProductsSuccessAction,
  toggleWishlistAction,
  togglelikeProductSuccessAction,
} from '../actions/product.actions'
import { getInitialProductsState } from '../initial-state/product.initial-state'
import { IProductFeature } from '../interfaces/product-feature.interface'

export const productReducer = createReducer(
  getInitialProductsState(),
  on(
    getAllProductsInitiateAction,
    (state): IProductFeature => ({ ...state, isLoading: true })
  ),
  on(
    getAllProductsSuccessAction,
    (state, { products }): IProductFeature => ({
      ...state,
      isLoading: false,
      errorMessage: null,
      products,
    })
  ),
  on(
    getAllProductsFailureAction,
    (state, { errorMessage }): IProductFeature => ({
      ...state,
      isLoading: false,
      errorMessage,
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
      errorMessage: null,
      products: [
        ...state.products.map((product) =>
          product.id === updatedProduct.id
            ? { ...product, liked: updatedProduct.liked }
            : product
        ),
      ],
    })
  )
)
