import { createAction, props } from '@ngrx/store'
import { IProduct } from 'src/app/shared/interfaces/product.interface'

export const productsFeatureKey = 'products'
export const productsTypePrefix = `[${productsFeatureKey}]`

export const getProductsAction = createAction(
  `${productsTypePrefix} Get products`
)
export const getProductsSuccessAction = createAction(
  `${productsTypePrefix} Get products - Success`,
  props<{ products: IProduct[] }>()
)
export const getProductsFailureAction = createAction(
  `${productsTypePrefix} Get products - Failure`,
  props<{ error: string }>()
)
export const getProductByIdAction = createAction(
  `${productsTypePrefix} Get product by ID`,
  props<{ id: string }>()
)
export const getProductByIdSuccessAction = createAction(
  `${productsTypePrefix} Get product by ID - Success`,
  props<{ product: IProduct }>()
)
export const getProductByIdFailureAction = createAction(
  `${productsTypePrefix} Get product by ID - Failutre`
)
export const toggleWishlistAction = createAction(
  `${productsTypePrefix} toggleWishlist`
)
