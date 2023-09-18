import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing'

import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { toggleWishlistAction } from 'src/app/state/actions/products.actions'
import { IAppState } from 'src/app/state/interfaces/app-state.interface'
import {
  selectIsWishlistOpen,
  selectWishlistCount,
} from 'src/app/state/selectors/products.selectors'
import { HeaderComponent } from './header.component'

describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>

  let mockStore: MockStore<IAppState>
  const mockIsWishlistOpen = true
  const mockWishlistCount = 3

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [
        FontAwesomeTestingModule,
        provideMockStore<IAppState>({
          selectors: [
            { selector: selectIsWishlistOpen, value: mockIsWishlistOpen },
            {
              selector: selectWishlistCount,
              value: mockWishlistCount,
            },
          ],
        }),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance

    mockStore = TestBed.inject(MockStore<IAppState>)

    fixture.detectChanges()
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

    it('should set wishlistCount$', (done) => {
      component.wishlistCount$.subscribe((wishlistCount) => {
        expect(wishlistCount).toBe(mockWishlistCount)
        done()
      })
    })
  })

  describe('toggleWishlist', () => {
    it('should dispatch toggleWishlistAction', () => {
      const dispatchSpy = spyOn(mockStore, 'dispatch')

      component.toggleWishlist()

      expect(dispatchSpy).toHaveBeenCalledOnceWith(toggleWishlistAction())
    })
  })
})
