import { createAction, props } from '@ngrx/store'
import { IProduct } from 'src/app/shared/interfaces/product.interface'

export const productsFeatureKey = 'products'
export const productsTypePrefix = `[${productsFeatureKey}]`

export const getProductsActionType = `${productsTypePrefix} Get products`
export const getProductsSuccessActionType = `${productsTypePrefix} Get products Success`
export const getProductsFailureActionType = `${productsTypePrefix} Get products Failure`

export const getProductsAction = createAction(getProductsActionType)
export const getProductsSuccessAction = createAction(
  getProductsSuccessActionType,
  props<{ products: IProduct[] }>()
)
export const getProductsFailureAction = createAction(
  getProductsFailureActionType,
  props<{ error: string }>()
)
