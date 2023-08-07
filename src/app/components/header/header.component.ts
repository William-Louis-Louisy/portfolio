import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  // Define the current language
  currentLanguage: string;
  // Define the menu open state
  isMenuOpen: boolean = false;
  // Define the select open state
  isSelectOpen: boolean = false;
  // Define the active routes
  activeRoutes = ['/professional-projects', '/personal-projects'];

  constructor(
    // Inject the translate service
    private translate: TranslateService,
    // Inject the router
    private router: Router,
    // Inject the route
    private route: ActivatedRoute,
    // Inject the element ref
    private elementRef: ElementRef
  ) {
    // Set the current language
    this.currentLanguage = translate.currentLang;
    this.translate.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang;
      localStorage.setItem('currentLang', event.lang);
    });
  }

  // Close the menu on click outside
  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isMenuOpen = false;
      this.isSelectOpen = false;
    }
  }

  // On init
  ngOnInit(): void {}

  // Is active
  isActive(): boolean {
    return this.activeRoutes.includes(this.router.url);
  }

  // Toggle language
  toggleLanguage() {
    const newLang = this.currentLanguage === 'en' ? 'fr' : 'en';
    this.translate.use(newLang);
    localStorage.setItem('currentLang', newLang);
  }

  // Toggle menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Toggle select
  toggleSelect() {
    this.isSelectOpen = !this.isSelectOpen;
  }
}
