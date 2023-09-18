import { IProduct } from 'src/app/shared/interfaces/product.interface'
import { getMockProducts } from 'src/app/testing/mocks/products.mock'
import {
  getAllProductsFailureAction,
  getAllProductsInitiateAction,
  getAllProductsSuccessAction,
  toggleWishlistAction,
  togglelikeProductSuccessAction,
} from '../actions/product.actions'
import { getInitialProductsState } from '../initial-state/product.initial-state'
import { IProductFeature } from '../interfaces/product-feature.interface'
import { productReducer } from './product.reducer'

describe('Product reducer', () => {
  let mockState: IProductFeature

  beforeEach(() => {
    mockState = getInitialProductsState()
  })

  describe('initial state', () => {
    it('should have initial state', () => {
      const unknownAction = { type: 'unknown' }

      const actual = productReducer(mockState, unknownAction)

      expect(actual).toBe(mockState)
    })
  })

  describe('getAllProductsInitiateAction', () => {
    it('should set isLoading to true', () => {
      const action = getAllProductsInitiateAction()

      const actual = productReducer(mockState, action)

      expect(actual.isLoading).toBeTrue()
    })
  })

  describe('getAllProductsSuccessAction', () => {
    let mockProducts: IProduct[]

    beforeEach(() => {
      mockProducts = getMockProducts()
    })

    it('should set isLoading to false', () => {
      const action = getAllProductsSuccessAction({ products: mockProducts })

      const actual = productReducer(mockState, action)

      expect(actual.isLoading).toBeFalse()
    })

    it('should set errorMessage to null', () => {
      const action = getAllProductsSuccessAction({ products: mockProducts })

      const actual = productReducer(mockState, action)

      expect(actual.errorMessage).toBeNull()
    })

    it('should set products', () => {
      const action = getAllProductsSuccessAction({ products: mockProducts })

      const actual = productReducer(mockState, action)

      expect(actual.products).toBe(mockProducts)
    })
  })

  describe('getAllProductsFailureAction', () => {
    let mockErrorMessage: string

    beforeEach(() => {
      mockErrorMessage = 'an error message'
    })

    it('should set isLoading to false', () => {
      const action = getAllProductsFailureAction({
        errorMessage: mockErrorMessage,
      })

      const actual = productReducer(mockState, action)

      expect(actual.isLoading).toBeFalse()
    })

    it('should set the error message', () => {
      const action = getAllProductsFailureAction({
        errorMessage: mockErrorMessage,
      })

      const actual = productReducer(mockState, action)

      expect(actual.errorMessage).toBe(mockErrorMessage)
    })
  })

  describe('toggleWishlistAction', () => {
    it('should set isWishlistOpen to true if previously false', () => {
      mockState.isWishlistOpen = false
      const action = toggleWishlistAction()

      const actual = productReducer(mockState, action)

      expect(actual.isWishlistOpen).toBeTrue()
    })

    it('should set isWishlistOpen to false if previously true', () => {
      mockState.isWishlistOpen = true
      const action = toggleWishlistAction()

      const actual = productReducer(mockState, action)

      expect(actual.isWishlistOpen).toBeFalse()
    })
  })

  describe('togglelikeProductSuccessAction', () => {
    let mockProducts: IProduct[]
    let mockUpdatedProduct: IProduct

    beforeEach(() => {
      mockProducts = getMockProducts()
      mockState.products = mockProducts
      mockUpdatedProduct = { ...mockProducts[1], liked: true }
    })

    it('should set isLoading to false', () => {
      const action = togglelikeProductSuccessAction({
        updatedProduct: mockUpdatedProduct,
      })

      const actual = productReducer(mockState, action)

      expect(actual.isLoading).toBeFalse()
    })

    it('should set errorMessage to null', () => {
      const action = togglelikeProductSuccessAction({
        updatedProduct: mockUpdatedProduct,
      })

      const actual = productReducer(mockState, action)

      expect(actual.errorMessage).toBeNull()
    })

    it('should updated liked status for the product with matching id', () => {
      const expected = [mockProducts[0], mockUpdatedProduct, mockProducts[2]]
      const action = togglelikeProductSuccessAction({
        updatedProduct: mockUpdatedProduct,
      })

      const actual = productReducer(mockState, action)

      expect(actual.products).toEqual(expected)
    })
  })
})
