import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageWithLoaderComponent } from './image-with-loader.component';

describe('ImageWithLoaderComponent', () => {
  let component: ImageWithLoaderComponent;
  let fixture: ComponentFixture<ImageWithLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageWithLoaderComponent]
    });
    fixture = TestBed.createComponent(ImageWithLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
