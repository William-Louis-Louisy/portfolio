import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  currentLanguage: string;
  isMenuOpen = false;

  constructor(private translate: TranslateService) {
    this.currentLanguage = translate.currentLang;
    this.translate.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang;
      localStorage.setItem('currentLang', event.lang);
    });
  }

  toggleLanguage() {
    const newLang = this.currentLanguage === 'en' ? 'fr' : 'en';
    this.translate.use(newLang);
    localStorage.setItem('currentLang', newLang);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
