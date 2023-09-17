import { createFeatureSelector, createSelector } from '@ngrx/store'
import { productsFeatureKey } from '../actions/products.actions'
import { IProductsFeature } from '../interfaces/products-feature.interface'

const selectProductsFeature =
  createFeatureSelector<IProductsFeature>(productsFeatureKey)

export const selectLoading = createSelector(
  selectProductsFeature,
  ({ isLoading }) => isLoading
)

export const selectAllProducts = createSelector(
  selectProductsFeature,
  ({ products }) => products
)
export const selectProductsError = createSelector(
  selectProductsFeature,
  ({ error }) => error
)

export const selectProductsById = (id: string) =>
  createSelector(selectProductsFeature, ({ products }) =>
    products.find((product) => product.id === id)
  )
