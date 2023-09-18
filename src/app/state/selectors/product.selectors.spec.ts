import { IProduct } from 'src/app/shared/interfaces/product.interface'
import { getMockProducts } from 'src/app/testing/mocks/products.mock'
import { IAppState } from '../interfaces/app-state.interface'
import {
  selectAllProducts,
  selectIsWishlistOpen,
  selectProductsById,
  selectProductsError,
  selectProductsFeature,
  selectProductsLoading,
  selectWishList,
  selectWishListSum,
  selectWishlistCount,
} from './product.selectors'

describe('Product selectors', () => {
  let mockState: IAppState
  let mockProducts: IProduct[]

  beforeEach(() => {
    mockProducts = getMockProducts()
    mockState = {
      products: {
        errorMessage: null,
        isLoading: false,
        isWishlistOpen: false,
        products: mockProducts,
      },
    }
  })

  describe('selectProductsFeature', () => {
    it('should select the products feature from app state', () => {
      const expected = mockState.products

      const actual = selectProductsFeature.projector(mockState.products)

      expect(actual).toEqual(expected)
    })
  })

  describe('selectIsWishlistOpen', () => {
    it('should select isWishlistOpen from products feature', () => {
      const mockIsWishlistOpen = true
      mockState.products.isWishlistOpen = mockIsWishlistOpen

      const actual = selectIsWishlistOpen.projector(mockState.products)

      expect(actual).toBe(mockIsWishlistOpen)
    })
  })

  describe('selectProductsLoading', () => {
    it('should select isLoading from products feature', () => {
      const mockIsLoading = true
      mockState.products.isLoading = mockIsLoading

      const actual = selectProductsLoading.projector(mockState.products)

      expect(actual).toBe(mockIsLoading)
    })
  })

  describe('selectProductsError', () => {
    it('should select error from products feature', () => {
      const mockErrorMessage = 'an error message'
      mockState.products.errorMessage = mockErrorMessage

      const actual = selectProductsError.projector(mockState.products)

      expect(actual).toBe(mockErrorMessage)
    })
  })

  describe('selectAllProducts', () => {
    it('should select products from products feature', () => {
      const expected = mockState.products.products

      const actual = selectAllProducts.projector(mockState.products)

      expect(actual).toEqual(expected)
    })
  })

  describe('selectProductsById', () => {
    it('should select products from products feature', () => {
      const expected = mockState.products.products[1]
      const id = mockState.products.products[1].id

      const actual = selectProductsById(id).projector(
        mockState.products.products
      )

      expect(actual).toEqual(expected)
    })
  })

  describe('Wishlist', () => {
    let likedProducts: IProduct[]

    beforeEach(() => {
      likedProducts = mockState.products.products.filter(({ liked }) => liked)
    })

    describe('selectWishList', () => {
      it('should select products from products feature', () => {
        const actual = selectWishList.projector(mockState.products)

        expect(actual).toEqual(likedProducts)
      })
    })

    describe('selectWishList', () => {
      it('should select products from products feature', () => {
        const expected = likedProducts.length

        const actual = selectWishlistCount.projector(likedProducts)

        expect(actual).toEqual(expected)
      })
    })

    describe('selectWishListSum', () => {
      it('should select products from products feature', () => {
        const expected = likedProducts.reduce(
          (total, { price }) => total + parseFloat(price),
          0
        )

        const actual = selectWishListSum.projector(likedProducts)

        expect(actual).toEqual(expected)
      })
    })
  })
})
