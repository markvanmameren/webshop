import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing'
import { LikeIconComponent } from './like-icon.component'

describe('LikeIconComponent', () => {
  let component: LikeIconComponent
  let fixture: ComponentFixture<LikeIconComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LikeIconComponent],
      providers: [FontAwesomeTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    fixture = TestBed.createComponent(LikeIconComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('handleClick', () => {
    let mockEvent: Event

    beforeEach(() => {
      mockEvent = new Event('mock event')
    })

    it('should emit the click event', () => {
      const emitSpy = spyOn(component.likeClicked, 'emit')

      component.handleClick(mockEvent)

      expect(emitSpy).toHaveBeenCalledOnceWith(mockEvent)
    })

    it('should call stopPropagation', () => {
      const stopPropagationSpy = spyOn(mockEvent, 'stopPropagation')

      component.handleClick(mockEvent)

      expect(stopPropagationSpy).toHaveBeenCalledTimes(1)
    })
  })
})
