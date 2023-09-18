import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ImageWithLoaderComponent } from './image-with-loader.component'

describe('ImageWithLoaderComponent', () => {
  let component: ImageWithLoaderComponent
  let fixture: ComponentFixture<ImageWithLoaderComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageWithLoaderComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    fixture = TestBed.createComponent(ImageWithLoaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
