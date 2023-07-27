import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mon-portfolio';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    const storedLang = localStorage.getItem('currentLang');
    const browserLang = storedLang || translate.getBrowserLang() || 'en';
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
}
