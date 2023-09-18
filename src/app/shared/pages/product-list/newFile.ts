import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
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

    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('ngOnInit', () => {
    it('should dispatch getAllProductsInitiateAction', () => {
      const dispatchSpy = spyOn(mockStore, 'dispatch')

      expect(dispatchSpy).toHaveBeenCalledOnceWith(
        getAllProductsInitiateAction()
      )
    })
  })
})
