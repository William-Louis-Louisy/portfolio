import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICourse } from '../types/course.model';
import { IJob } from '../types/job.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  // Base URL
  url = environment.apiUrl;

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Get all courses
  getAllCourses(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(`${this.url}/courses`);
  }

  // Get all jobs
  getAllJobs(): Observable<IJob[]> {
    return this.http.get<IJob[]>(`${this.url}/jobs`);
  }

  // Create a course
  createCourse(course: ICourse): Observable<ICourse> {
    const headers = this.authService.getAuthHeaders();
    return this.http.post<ICourse>(`${this.url}/course`, course, { headers });
  }

  // Create a job
  createJob(job: IJob): Observable<IJob> {
    const headers = this.authService.getAuthHeaders();
    return this.http.post<IJob>(`${this.url}/job`, job, { headers });
  }
}
