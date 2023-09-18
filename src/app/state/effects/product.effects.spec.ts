import { TestBed } from '@angular/core/testing'
import { Actions } from '@ngrx/effects'
import { provideMockActions } from '@ngrx/effects/testing'
import { Action } from '@ngrx/store'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { BehaviorSubject, Subject, of } from 'rxjs'
import { IProduct } from 'src/app/shared/interfaces/product.interface'
import { ProductService } from 'src/app/shared/services/product.service'
import { getMockProduct } from 'src/app/testing/mocks/product.mock'
import { getMockProducts } from 'src/app/testing/mocks/products.mock'
import {
  getAllProductsFailureAction,
  getAllProductsInitiateAction,
  getAllProductsSuccessAction,
  togglelikeProductFailureAction,
  togglelikeProductInitiateAction,
  togglelikeProductSuccessAction,
} from '../actions/product.actions'
import { IAppState } from '../interfaces/app-state.interface'
import { selectAllProducts } from '../selectors/product.selectors'
import { ProductEffects } from './product.effects'

describe('Product effects', () => {
  let actions$: Actions<Action>
  let productEffects: ProductEffects
  let mockStore$: MockStore
  let productServiceSpy: jasmine.SpyObj<ProductService>

  let getProductsSubject: Subject<IProduct[]>
  let mockProducts: IProduct[]

  let updateProductSubject: Subject<IProduct>

  beforeEach(() => {
    mockProducts = getMockProducts()

    getProductsSubject = new BehaviorSubject<IProduct[]>([])
    updateProductSubject = new BehaviorSubject<IProduct>(getMockProduct())

    productServiceSpy = jasmine.createSpyObj('ProductService', {
      getProducts: getProductsSubject.asObservable(),
      updateProduct: updateProductSubject.asObservable(),
    })

    TestBed.configureTestingModule({
      providers: [
        ProductEffects,
        provideMockActions(() => actions$),
        provideMockStore<IAppState>({
          selectors: [{ selector: selectAllProducts, value: mockProducts }],
        }),
        { provide: ProductService, useValue: productServiceSpy },
      ],
    })

    mockStore$ = TestBed.inject(MockStore)
    productEffects = TestBed.inject(ProductEffects)
  })

  afterEach(() => {
    mockStore$.resetSelectors()
  })

  describe('getAllProductsEffect$', () => {
    it('should return getAllProductsSuccessAction in case of success', (done) => {
      const expected = getAllProductsSuccessAction({ products: mockProducts })

      getProductsSubject.next(mockProducts)
      actions$ = of(getAllProductsInitiateAction())

      productEffects.getAllProductsEffect$.subscribe((result) => {
        expect(result).toEqual(expected)
        done()
      })
    })

    it('should return getAllProductsFailureAction in case of an error', (done) => {
      const mockErrorMessage = 'an error message'
      const mockError = new Error(mockErrorMessage)
      const expected = getAllProductsFailureAction({
        errorMessage: mockErrorMessage,
      })

      getProductsSubject.error(mockError)
      actions$ = of(getAllProductsInitiateAction())

      productEffects.getAllProductsEffect$.subscribe((result) => {
        expect(result).toEqual(expected)
        done()
      })
    })
  })

  describe('toggleLikeProductEffect$', () => {
    let initialProduct: IProduct
    let updatedProduct: IProduct

    beforeEach(() => {
      initialProduct = mockProducts[2]
      updatedProduct = {
        ...initialProduct,
        liked: !initialProduct.liked,
      }
    })

    it('should return togglelikeProductSuccessAction in case of succes', (done) => {
      const expected = togglelikeProductSuccessAction({
        updatedProduct,
      })

      updateProductSubject.next(updatedProduct)
      actions$ = of(togglelikeProductInitiateAction({ id: initialProduct.id }))

      productEffects.toggleLikeProductEffect$.subscribe((result) => {
        expect(result).toEqual(expected)
        done()
      })
    })

    it('should return togglelikeProductFailureAction in case of an error', (done) => {
      const mockErrorMessage = 'another error message'
      const mockError = new Error(mockErrorMessage)
      const expected = togglelikeProductFailureAction({
        errorMessage: mockErrorMessage,
      })

      updateProductSubject.error(mockError)
      actions$ = of(togglelikeProductInitiateAction({ id: initialProduct.id }))

      productEffects.toggleLikeProductEffect$.subscribe((result) => {
        expect(result).toEqual(expected)
        done()
      })
    })
  })
})
