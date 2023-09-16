import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeIconComponent } from './like-icon.component';

describe('LikeIconComponent', () => {
  let component: LikeIconComponent;
  let fixture: ComponentFixture<LikeIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LikeIconComponent]
    });
    fixture = TestBed.createComponent(LikeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
