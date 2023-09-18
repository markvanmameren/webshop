import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { getAllProductsInitiateAction } from 'src/app/state/actions/product.actions'
import { IAppState } from 'src/app/state/interfaces/app-state.interface'
import {
  selectAllProducts,
  selectProductsError,
  selectProductsLoading,
} from 'src/app/state/selectors/product.selectors'
import { getMockProducts } from 'src/app/testing/mocks/products.mock'
import { ProductListComponent } from './product-list.component'

describe('ProductListComponent', () => {
  let component: ProductListComponent
  let fixture: ComponentFixture<ProductListComponent>

  let mockStore: MockStore<IAppState>
  let dispatchSpy: jasmine.Spy

  const mockProductsLoading = false
  const mockProductsError = null
  const mockProducts = getMockProducts()

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      providers: [
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
    fixture = TestBed.createComponent(ProductListComponent)
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
  })
})
