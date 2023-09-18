import { getMockProduct } from 'src/app/testing/mocks/product.mock'
import { getMockProducts } from 'src/app/testing/mocks/products.mock'
import {
  getAllProductsFailureAction,
  getAllProductsInitiateAction,
  getAllProductsSuccessAction,
  productsTypePrefix,
  toggleWishlistAction,
  togglelikeProductFailureAction,
  togglelikeProductInitiateAction,
  togglelikeProductSuccessAction,
} from './product.actions'

describe('Product actions', () => {
  describe('getAllProductsInitiateAction', () => {
    it('should have the correct type', () => {
      const action = getAllProductsInitiateAction()

      expect(action.type).toBe(
        `${productsTypePrefix} Get all products - Initiate`
      )
    })
  })

  describe('getAllProductsSuccessAction', () => {
    const mockProducts = getMockProducts()

    it('should have the correct type', () => {
      const action = getAllProductsSuccessAction({
        products: mockProducts,
      })

      expect(action.type).toBe(
        `${productsTypePrefix} Get all products - Success`
      )
    })

    it('should have the correct products', () => {
      const action = getAllProductsSuccessAction({
        products: mockProducts,
      })

      expect(action.products).toBe(mockProducts)
    })
  })

  describe('getAllProductsFailureAction', () => {
    const mockErrorMessage = 'some error'

    it('should have the correct type', () => {
      const action = getAllProductsFailureAction({
        errorMessage: mockErrorMessage,
      })

      expect(action.type).toBe(
        `${productsTypePrefix} Get all products - Failure`
      )
    })

    it('should have the correct error message', () => {
      const action = getAllProductsFailureAction({
        errorMessage: mockErrorMessage,
      })

      expect(action.errorMessage).toBe(mockErrorMessage)
    })
  })

  describe('toggleWishlistAction', () => {
    it('should have the correct type', () => {
      const action = toggleWishlistAction()

      expect(action.type).toBe(`${productsTypePrefix} Toggle wishlist`)
    })
  })

  describe('togglelikeProductInitiateAction', () => {
    const mockId = '987'

    it('should have the correct type', () => {
      const action = togglelikeProductInitiateAction({ id: mockId })

      expect(action.type).toBe(
        `${productsTypePrefix} Toggle like product - Initiate`
      )
    })

    it('should have the correct id', () => {
      const action = togglelikeProductInitiateAction({ id: mockId })

      expect(action.id).toBe(mockId)
    })
  })

  describe('togglelikeProductSuccessAction', () => {
    const mockUpdatedProduct = getMockProduct()

    it('should have the correct type', () => {
      const action = togglelikeProductSuccessAction({
        updatedProduct: mockUpdatedProduct,
      })

      expect(action.type).toBe(
        `${productsTypePrefix} Toggle like product - Success`
      )
    })

    it('should have the correct updated product', () => {
      const action = togglelikeProductSuccessAction({
        updatedProduct: mockUpdatedProduct,
      })

      expect(action.updatedProduct).toBe(mockUpdatedProduct)
    })
  })

  describe('togglelikeProductFailureAction', () => {
    const mockErrorMessage = 'some error'

    it('should have the correct type', () => {
      const action = togglelikeProductFailureAction({
        errorMessage: mockErrorMessage,
      })

      expect(action.type).toBe(
        `${productsTypePrefix} Toggle like product - Failure`
      )
    })

    it('should have the correct error message', () => {
      const action = togglelikeProductFailureAction({
        errorMessage: mockErrorMessage,
      })

      expect(action.errorMessage).toBe(mockErrorMessage)
    })
  })
})
