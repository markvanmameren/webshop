import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import {
  selectCountLikedProducts,
  selectIsWishlistOpen,
  selectLikedProducts,
  selectSumLikedProducts,
} from 'src/app/state/selectors/products.selectors'

@Component({
  selector: 'shop-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent {
  public isWishlistOpen$ = this.store.select(selectIsWishlistOpen)
  public likedProducts$ = this.store.select(selectLikedProducts)
  public count$ = this.store.select(selectCountLikedProducts)
  public sum$ = this.store.select(selectSumLikedProducts)

  public constructor(private readonly store: Store) {}

  public handleLikeClicked(id: string) {
    alert(id)
  }
}
