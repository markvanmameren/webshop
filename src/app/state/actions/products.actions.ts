import { createAction, props } from '@ngrx/store'
import { IProduct } from 'src/app/shared/interfaces/product.interface'

export const productsFeatureKey = 'products'
export const productsTypePrefix = `[${productsFeatureKey}]`

export const getAllProductsInitiateAction = createAction(
  `${productsTypePrefix} Get all products - Initiate`
)

export const getAllProductsSuccessAction = createAction(
  `${productsTypePrefix} Get all products - Success`,
  props<{ products: IProduct[] }>()
)

export const getAllProductsFailureAction = createAction(
  `${productsTypePrefix} Get all products - Failure`,
  props<{ error: string }>()
)

export const toggleWishlistAction = createAction(
  `${productsTypePrefix} Toggle wishlist`
)

export const togglelikeProductInitiateAction = createAction(
  `${productsTypePrefix} Toggle like product - Initiate`,
  props<{ id: string }>()
)

export const togglelikeProductSuccessAction = createAction(
  `${productsTypePrefix} Toggle like product - Success`,
  props<{ updatedProduct: IProduct }>()
)

export const togglelikeProductFailureAction = createAction(
  `${productsTypePrefix} Toggle like product - Failure`,
  props<{ error: string }>()
)
