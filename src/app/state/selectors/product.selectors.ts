import { createFeatureSelector, createSelector } from '@ngrx/store'
import { productsFeatureKey } from '../actions/product.actions'
import { IProductFeature } from '../interfaces/product-feature.interface'

const selectProductsFeature =
  createFeatureSelector<IProductFeature>(productsFeatureKey)

export const selectIsWishlistOpen = createSelector(
  selectProductsFeature,
  ({ isWishlistOpen }) => isWishlistOpen
)

export const selectProductsLoading = createSelector(
  selectProductsFeature,
  ({ isLoading }) => isLoading
)

export const selectProductsError = createSelector(
  selectProductsFeature,
  ({ error }) => error
)

export const selectAllProducts = createSelector(
  selectProductsFeature,
  ({ products }) => products
)

export const selectProductsById = (id: string) =>
  createSelector(selectAllProducts, (products) =>
    products.find((product) => product.id === id)
  )

export const selectWishList = createSelector(
  selectProductsFeature,
  ({ products }) => products.filter(({ liked }) => liked)
)

export const selectWishlistCount = createSelector(
  selectWishList,
  (likedProducts) => likedProducts.length
)

export const selectWishListSum = createSelector(
  selectWishList,
  (likedProducts) =>
    likedProducts.reduce((total, { price }) => total + parseFloat(price), 0)
)
