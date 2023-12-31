import { Component } from '@angular/core'
import { faShop, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Store } from '@ngrx/store'
import { toggleWishlistAction } from 'src/app/state/actions/product.actions'
import {
  selectIsWishlistOpen,
  selectWishlistCount,
} from 'src/app/state/selectors/product.selectors'

@Component({
  selector: 'shop-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isWishlistOpen$ = this.store.select(selectIsWishlistOpen)
  public wishlistCount$ = this.store.select(selectWishlistCount)

  // icons
  public faShop = faShop
  public faXmark = faXmark

  constructor(private readonly store: Store) {}

  public toggleWishlist(): void {
    this.store.dispatch(toggleWishlistAction())
  }
}
