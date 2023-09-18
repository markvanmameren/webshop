import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ActivatedRoute, convertToParamMap } from '@angular/router'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { of } from 'rxjs'
import {
  getAllProductsInitiateAction,
  togglelikeProductInitiateAction,
} from 'src/app/state/actions/product.actions'
import { IAppState } from 'src/app/state/interfaces/app-state.interface'
import {
  selectAllProducts,
  selectProductsError,
  selectProductsLoading,
} from 'src/app/state/selectors/product.selectors'
import { getMockProduct } from 'src/app/testing/mocks/product.mock'
import { getMockProducts } from 'src/app/testing/mocks/products.mock'
import { IProduct } from '../../interfaces/product.interface'
import { NumberAsEuroPipe } from '../../pipes/number-as-euro.pipe'
import { ProductDetailComponent } from './product-detail.component'

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent
  let fixture: ComponentFixture<ProductDetailComponent>

  let mockStore: MockStore<IAppState>
  let dispatchSpy: jasmine.Spy

  const mockProductsLoading = false
  const mockProductsError = null
  const mockId = '99'
  const mockProduct = { ...getMockProduct(), id: mockId }
  const mockProducts: IProduct[] = [...getMockProducts(), mockProduct]
  const mockActivatedRoute = {
    paramMap: of(convertToParamMap({ id: mockId })),
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberAsEuroPipe, ProductDetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        provideMockStore<IAppState>({
          selectors: [
            { selector: selectProductsLoading, value: mockProductsLoading },
            {
              selector: selectProductsError,
              value: mockProductsError,
            },
            {
              selector: selectAllProducts,
              value: mockProducts,
            },
          ],
        }),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    fixture = TestBed.createComponent(ProductDetailComponent)
    component = fixture.componentInstance

    mockStore = TestBed.inject(MockStore<IAppState>)
    dispatchSpy = spyOn(mockStore, 'dispatch')

    fixture.detectChanges()
  })

  describe('constructor', () => {
    it('should create', () => {
      expect(component).toBeTruthy()
    })

    it('should set isLoading$', (done) => {
      component.isLoading$.subscribe((isLoading) => {
        expect(isLoading).toBe(mockProductsLoading)
        done()
      })
    })

    it('should set errorMessage$', (done) => {
      component.errorMessage$.subscribe((errorMessage) => {
        expect(errorMessage).toBe(mockProductsError)
        done()
      })
    })
  })

  describe('ngOnInit', () => {
    it('should dispatch getAllProductsInitiateAction', () => {
      expect(dispatchSpy).toHaveBeenCalledOnceWith(
        getAllProductsInitiateAction()
      )
    })

    it('should get the product corresponding to the paramMap id', (done) => {
      component.product$.subscribe((product) => {
        expect(product).toEqual(mockProduct)
        done()
      })
    })
  })

  describe('handleLikeClicked', () => {
    it('should dispatch togglelikeProductInitiateAction', () => {
      dispatchSpy.calls.reset()
      const mockId = '123'

      component.handleLikeClicked(mockId)

      expect(dispatchSpy).toHaveBeenCalledOnceWith(
        togglelikeProductInitiateAction({ id: mockId })
      )
    })
  })
})
