import { Component, Input } from '@angular/core'

@Component({
  selector: 'shop-image-with-loader',
  templateUrl: './image-with-loader.component.html',
  styleUrls: ['./image-with-loader.component.scss'],
})
export class ImageWithLoaderComponent {
  @Input() imageUrl: string
  @Input() altText: string

  public isLoading = true
}
