import { Component, Input } from '@angular/core'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'shop-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent {
  @Input() errorMessage: string | null = null

  //icons
  public faXmark = faXmark
}
