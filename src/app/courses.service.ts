import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  // Base URL
  url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Get all courses
  getAllCourses(): Observable<any> {
    return this.http.get(`${this.url}/courses`);
  }

  // Get all jobs
  getAllJobs(): Observable<any> {
    return this.http.get(`${this.url}/jobs`);
  }
}
