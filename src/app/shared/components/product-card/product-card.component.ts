import { Component, Input } from '@angular/core'
import { IProduct } from '../../interfaces/product.interface'

@Component({
  selector: 'shop-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product: IProduct

  public handleLikeClicked(id: string) {
    alert(this.product.id)
  }
}
