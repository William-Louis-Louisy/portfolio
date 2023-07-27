import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderTestimonialsComponent } from './slider-testimonials.component';

describe('SliderTestimonialsComponent', () => {
  let component: SliderTestimonialsComponent;
  let fixture: ComponentFixture<SliderTestimonialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderTestimonialsComponent]
    });
    fixture = TestBed.createComponent(SliderTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
