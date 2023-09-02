import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { ShopRootComponent } from './shop-root.component'

describe('ShopRootComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ShopRootComponent],
    })
  )

  it('should create the shop', () => {
    const fixture = TestBed.createComponent(ShopRootComponent)
    const shop = fixture.componentInstance
    expect(shop).toBeTruthy()
  })
})
