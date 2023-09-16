import { Component, EventEmitter, Input, Output } from '@angular/core'
import { faHeart as faHeartEmpty } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartFilled } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'shop-like-icon',
  templateUrl: './like-icon.component.html',
  styleUrls: ['./like-icon.component.scss'],
})
export class LikeIconComponent {
  @Input() liked = false
  @Input() badge = 0
  @Input() title?: string
  @Output() onclick = new EventEmitter()

  // icons
  public faHeartEmpty = faHeartEmpty
  public faHeartFilled = faHeartFilled
}
