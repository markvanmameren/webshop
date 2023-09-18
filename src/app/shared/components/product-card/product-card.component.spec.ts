import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterTestingModule } from '@angular/router/testing'
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { togglelikeProductInitiateAction } from 'src/app/state/actions/products.actions'
import { IAppState } from 'src/app/state/interfaces/app-state.interface'
import { getProductMock } from 'src/app/testing/mocks/product.mock'
import { IProduct } from '../../interfaces/product.interface'
import { NumberAsEuroPipe } from '../../pipes/number-as-euro.pipe'
import { LikeIconComponent } from '../like-icon/like-icon.component'
import { ProductCardComponent } from './product-card.component'

describe('ProductCardComponent', () => {
  let component: ProductCardComponent
  let fixture: ComponentFixture<ProductCardComponent>

  let mockStore: MockStore<IAppState>
  let mockProduct: IProduct

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [LikeIconComponent, NumberAsEuroPipe, ProductCardComponent],
      providers: [FontAwesomeTestingModule, provideMockStore<IAppState>({})],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    fixture = TestBed.createComponent(ProductCardComponent)
    component = fixture.componentInstance

    mockStore = TestBed.inject(MockStore<IAppState>)
    mockProduct = getProductMock()
    component.product = mockProduct

    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('handleLikeClicked', () => {
    it('should dispatch togglelikeProductInitiateAction', () => {
      const dispatchSpy = spyOn(mockStore, 'dispatch')

      component.handleLikeClicked(mockProduct.id)

      expect(dispatchSpy).toHaveBeenCalledOnceWith(
        togglelikeProductInitiateAction({ id: mockProduct.id })
      )
    })
  })
})
