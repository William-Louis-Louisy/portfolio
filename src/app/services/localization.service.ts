import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalizationService {
  private _currentLang = new BehaviorSubject<string>('fr');
  currentLang = this._currentLang.asObservable();

  setLang(value: string): void {
    localStorage.setItem('lang', value);
    this._currentLang.next(value);
  }

  getLang(): void {
    const storedLang = localStorage.getItem('lang');
    if (storedLang) {
      this._currentLang.next(storedLang);
    }
  }

  constructor() {}
}
