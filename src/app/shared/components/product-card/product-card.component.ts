import { Component, Input } from '@angular/core'
import { Store } from '@ngrx/store'
import { togglelikeProductInitiateAction } from 'src/app/state/actions/product.actions'
import { IProduct } from '../../interfaces/product.interface'

@Component({
  selector: 'shop-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product: IProduct

  constructor(private readonly store: Store) {}

  public handleLikeClicked(id: string): void {
    this.store.dispatch(togglelikeProductInitiateAction({ id }))
  }
}
