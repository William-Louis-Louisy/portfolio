import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Project } from '../types/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  // Base URL
  url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Get all personal projects
  getAllPersonalProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.url}/personal-projects`);
  }

  // Get all professional projects
  getAllProfessionalProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.url}/professional-projects`);
  }

  // Get personal project by id
  getPersonalProjectById(id: string): Observable<Project> {
    return this.http.get<Project>(`${this.url}/personal-project/${id}`);
  }

  // Get professional project by id
  getProfessionalProjectById(id: string): Observable<Project> {
    return this.http.get<Project>(`${this.url}/professional-project/${id}`);
  }
}
