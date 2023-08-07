import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  // Current language
  currentLanguage: string;
  langChangeSubscription?: Subscription;

  // Data
  data: { icon: string; label: string; value: string; alt?: string }[] = [
    {
      icon: 'fa-regular fa-envelope',
      label: 'LABELS.MAIL',
      alt: 'wlouislouisy@gmail.com',
      value: 'mailto:wlouislouisy@gmail.com',
    },
    {
      icon: 'fa-solid fa-phone',
      label: 'LABELS.PHONE',
      alt: '06.95.03.14.20',
      value: 'tel:+33695031420',
    },
    {
      icon: 'fa-brands fa-linkedin',
      label: 'LABELS.LINKEDIN',
      alt: 'linkedin.com/william-louis-louisy',
      value: 'https://www.linkedin.com/in/william-louis-louisy/',
    },
  ];

  constructor(private translate: TranslateService) {
    // Initialize currentLanguage
    this.currentLanguage = translate.currentLang;
  }

  ngOnInit() {
    // Subscribe to language changes
    this.langChangeSubscription = this.translate.onLangChange.subscribe(
      (event) => {
        this.currentLanguage = event.lang;
      }
    );
  }

  ngOnDestroy() {
    // Unsubscribe from language changes
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
}
