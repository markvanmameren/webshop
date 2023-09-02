import { Component } from '@angular/core'
import { faShop } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'shop-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public faShop = faShop
}
