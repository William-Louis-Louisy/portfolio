import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IStack } from '../types/stack.model';

@Injectable({
  providedIn: 'root',
})
export class StackService {
  // Base URL
  url = environment.apiUrl;

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Get all stack items
  getAllStackItems(): Observable<IStack> {
    return this.http.get<IStack>(`${this.url}/stacks`);
  }

  // Get a stack item
  getStackItemById(stackItemId: string): Observable<IStack> {
    return this.http.get<IStack>(`${this.url}/stack/${stackItemId}`);
  }

  // Create a stack item
  createStackItem(stackItem: IStack): Observable<IStack> {
    const headers = this.authService.getAuthHeaders();
    return this.http.post<IStack>(`${this.url}/stack`, stackItem, { headers });
  }

  // Update a stack item
  updateStackItem(stackItem: IStack): Observable<IStack> {
    const headers = this.authService.getAuthHeaders();
    return this.http.put<IStack>(`${this.url}/stack`, stackItem, { headers });
  }

  // Delete a stack item
  deleteStackItem(stackItemId: string): Observable<IStack> {
    const headers = this.authService.getAuthHeaders();
    return this.http.delete<any>(`${this.url}/stack/${stackItemId}`, {
      headers,
    });
  }
}
