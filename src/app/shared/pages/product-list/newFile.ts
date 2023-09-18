import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { getAllProductsInitiateAction } from 'src/app/state/actions/products.actions'
import { IAppState } from 'src/app/state/interfaces/app-state.interface'
import {
  selectAllProducts,
  selectProductsError,
  selectProductsLoading,
} from 'src/app/state/selectors/products.selectors'
import { getProductMock } from 'src/app/testing/mocks/product.mock'
import { IProduct } from '../../interfaces/product.interface'
import { ProductListComponent } from './product-list.component'

fdescribe('ProductListComponent', () => {
  let component: ProductListComponent
  let fixture: ComponentFixture<ProductListComponent>

  let mockStore: MockStore<IAppState>

  const mockProductsLoading = false
  const mockProductsError = null
  const mockProducts: IProduct[] = [
    getProductMock(),
    getProductMock(),
    getProductMock(),
  ]

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
