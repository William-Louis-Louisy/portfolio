import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { ITask } from '../types/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // Base URL
  url = environment.apiUrl;

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Get all tasks
  getAllTasks(): Observable<ITask> {
    return this.http.get<ITask>(`${this.url}/tasks`);
  }

  // Get a task
  getTaskById(taskId: string): Observable<ITask> {
    return this.http.get<ITask>(`${this.url}/task/${taskId}`);
  }

  // Create a task
  createTask(task: ITask): Observable<ITask> {
    const headers = this.authService.getAuthHeaders();
    return this.http.post<ITask>(`${this.url}/task`, task, { headers });
  }

  // Update a task
  updateTask(task: ITask): Observable<ITask> {
    const headers = this.authService.getAuthHeaders();
    return this.http.put<ITask>(`${this.url}/task`, task, { headers });
  }

  // Delete a task
  deleteTask(taskId: string): Observable<ITask> {
    const headers = this.authService.getAuthHeaders();
    return this.http.delete<any>(`${this.url}/task/${taskId}`, {
      headers,
    });
  }
}
