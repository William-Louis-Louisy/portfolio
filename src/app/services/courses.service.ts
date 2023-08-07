import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICourse } from '../types/course.model';
import { IJob } from '../types/job.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  // Base URL
  url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Get all courses
  getAllCourses(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(`${this.url}/courses`);
  }

  // Get all jobs
  getAllJobs(): Observable<IJob[]> {
    return this.http.get<IJob[]>(`${this.url}/jobs`);
  }
}
