import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-slider-testimonials',
  templateUrl: './slider-testimonials.component.html',
  styleUrls: ['./slider-testimonials.component.css'],
})
export class SliderTestimonialsComponent implements OnInit, OnDestroy {
  // Define the slides array
  @Input() slides: string[] = [];
  // Define the translated slides array
  translatedSlides: string[] = [];
  // Define the current slide index
  currentSlideIndex = 0;
  // Define the loading state
  loading = true;
  // Define the interval id
  private intervalId?: number;
  // Define the lang change subscription
  private langChangeSubscription?: Subscription;

  // Inject the translate service
  constructor(private translate: TranslateService) {}

  // On init
  ngOnInit() {
    // Translate the slides
    this.translateSlides();
    // Set the interval
    this.intervalId = window.setInterval(() => {
      this.nextSlide();
    }, 10000);

    // Subscribe to the lang change event
    this.langChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.translateSlides();
    });
  }

  // On destroy
  ngOnDestroy() {
    // Clear the interval
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
    }

    // Unsubscribe from the lang change event
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  // Translate the slides
  translateSlides() {
    this.slides.forEach((slide, index) => {
      this.translate.get(slide).subscribe((res: string) => {
        this.translatedSlides[index] = res;
        this.loading = false;
      });
    });
  }

  // Previous slide
  previousSlide() {
    if (!this.loading) {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
      } else {
        this.currentSlideIndex = this.translatedSlides.length - 1;
      }
    }
  }

  // Next slide
  nextSlide() {
    if (!this.loading) {
      if (this.currentSlideIndex < this.translatedSlides.length - 1) {
        this.currentSlideIndex++;
      } else {
        this.currentSlideIndex = 0;
      }
    }
  }

  // Go to slide
  goToSlide(index: number) {
    this.currentSlideIndex = index;
  }
}
