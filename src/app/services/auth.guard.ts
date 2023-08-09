import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { UrlTree, Router } from '@angular/router';

@Injectable()
export class CanActivateAuth {
  constructor(private authService: AuthService, private router: Router) {}

  canActivateFunction(): boolean | UrlTree {
    const token = this.authService.getToken();
    if (token) {
      return true; // Allow access if token exists
    } else {
      return this.router.parseUrl('/login'); // Redirect to login if no token
    }
  }
}
