import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Base URL
  url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Login
  login(email: string, password: string): Observable<any> {
    const url = `${this.url}/login`;
    return this.http.post(url, { email, password }).pipe(
      tap((res: any) => {
        localStorage.setItem('token', res.token);
      })
    );
  }

  // Logout
  logout() {
    const url = `${this.url}/logout`;
    return this.http.get(url).pipe(
      tap((res: any) => {
        localStorage.removeItem('token');
      })
    );
    // Optionally, navigate the user to the login page or other actions on logout
  }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }

  getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    return headers;
  }
}
