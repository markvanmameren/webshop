import { Component, Input } from '@angular/core'

@Component({
  selector: 'shop-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  @Input() isLarge = false
}
