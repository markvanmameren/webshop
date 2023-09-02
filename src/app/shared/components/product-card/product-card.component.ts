import { Component, Input } from '@angular/core'
import { faHeart as faHeartEmpty } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartFilled } from '@fortawesome/free-solid-svg-icons'
import { IProduct } from '../../interfaces/product.interface'

@Component({
  selector: 'shop-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product: IProduct

  // icons
  public faHeartEmpty = faHeartEmpty
  public faHeartFilled = faHeartFilled
}
