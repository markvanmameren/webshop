import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { togglelikeProductInitiateAction } from 'src/app/state/actions/product.actions'
import {
  selectIsWishlistOpen,
  selectWishList,
  selectWishListSum,
  selectWishlistCount,
} from 'src/app/state/selectors/product.selectors'

@Component({
  selector: 'shop-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent {
  public isWishlistOpen$ = this.store.select(selectIsWishlistOpen)
  public wishlist$ = this.store.select(selectWishList)
  public wishlistCount$ = this.store.select(selectWishlistCount)
  public wishlistSum$ = this.store.select(selectWishListSum)

  public constructor(private readonly store: Store) {}

  public handleLikeClicked(id: string): void {
    this.store.dispatch(togglelikeProductInitiateAction({ id }))
  }
}
