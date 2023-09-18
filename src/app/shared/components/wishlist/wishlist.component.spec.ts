import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { togglelikeProductInitiateAction } from 'src/app/state/actions/product.actions'
import { IAppState } from 'src/app/state/interfaces/app-state.interface'
import {
  selectIsWishlistOpen,
  selectWishList,
  selectWishListSum,
  selectWishlistCount,
} from 'src/app/state/selectors/product.selectors'
import { getMockProducts } from 'src/app/testing/mocks/products.mock'
import { NumberAsEuroPipe } from '../../pipes/number-as-euro.pipe'
import { WishlistComponent } from './wishlist.component'

describe('WishlistComponent', () => {
  let component: WishlistComponent
  let fixture: ComponentFixture<WishlistComponent>

  let mockStore: MockStore<IAppState>
  const mockIsWishlistOpen = true
  const mockWishlist = getMockProducts()
  const mockWishlistCount = mockWishlist.length
  const mockWishlistSum = mockWishlist.reduce(
    (total, { price }) => total + parseFloat(price),
    0
  )

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberAsEuroPipe, WishlistComponent],
      providers: [
        FontAwesomeTestingModule,
        provideMockStore<IAppState>({
          selectors: [
            { selector: selectIsWishlistOpen, value: mockIsWishlistOpen },
            {
              selector: selectWishList,
              value: mockWishlist,
            },
            {
              selector: selectWishlistCount,
              value: mockWishlistCount,
            },
            {
              selector: selectWishListSum,
              value: mockWishlistSum,
            },
          ],
        }),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    fixture = TestBed.createComponent(WishlistComponent)
    component = fixture.componentInstance

    mockStore = TestBed.inject(MockStore<IAppState>)

    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('constructor', () => {
    it('should create', () => {
      expect(component).toBeTruthy()
    })

    it('should set isWishlistOpen$', (done) => {
      component.isWishlistOpen$.subscribe((isWishlistOpen) => {
        expect(isWishlistOpen).toBe(mockIsWishlistOpen)
        done()
      })
    })

    it('should set wishlist$', (done) => {
      component.wishlist$.subscribe((wishlist) => {
        expect(wishlist).toBe(mockWishlist)
        done()
      })
    })

    it('should set wishlistCount$', (done) => {
      component.wishlistCount$.subscribe((wishlistCount) => {
        expect(wishlistCount).toBe(mockWishlistCount)
        done()
      })
    })

    it('should set wishlistSum$', (done) => {
      component.wishlistSum$.subscribe((wishlistSum) => {
        expect(wishlistSum).toBe(mockWishlistSum)
        done()
      })
    })
  })

  describe('handleLikeClicked', () => {
    it('should dispatch togglelikeProductInitiateAction', () => {
      const dispatchSpy = spyOn(mockStore, 'dispatch')
      const mockId = '123'

      component.handleLikeClicked(mockId)

      expect(dispatchSpy).toHaveBeenCalledOnceWith(
        togglelikeProductInitiateAction({ id: mockId })
      )
    })
  })
})
