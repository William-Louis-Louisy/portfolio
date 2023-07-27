import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-slider-testimonials',
  templateUrl: './slider-testimonials.component.html',
  styleUrls: ['./slider-testimonials.component.css'],
})
export class SliderTestimonialsComponent implements OnInit, OnDestroy {
  @Input() slides: string[] = [];
  translatedSlides: string[] = [];
  currentSlideIndex = 0;
  loading = true;
  private intervalId?: number;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.translateSlides();
    this.intervalId = window.setInterval(() => {
      this.nextSlide();
    }, 10000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
    }
  }

  translateSlides() {
    this.slides.forEach((slide, index) => {
      this.translate.get(slide).subscribe((res: string) => {
        this.translatedSlides[index] = res;
        this.loading = false;
      });
    });
  }

  previousSlide() {
    if (!this.loading) {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
      } else {
        this.currentSlideIndex = this.translatedSlides.length - 1;
      }
    }
  }

  nextSlide() {
    if (!this.loading) {
      if (this.currentSlideIndex < this.translatedSlides.length - 1) {
        this.currentSlideIndex++;
      } else {
        this.currentSlideIndex = 0;
      }
    }
  }

  goToSlide(index: number) {
    this.currentSlideIndex = index;
  }
}
