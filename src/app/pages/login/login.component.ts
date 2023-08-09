import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        // Handle successful login
        // localStorage.setItem('jwt_token', response.token);
        this.router.navigate(['/admin']);
      },
      (error) => {
        // Handle login error
        alert('Login failed! Please check your credentials.');
      }
    );
  }
}
