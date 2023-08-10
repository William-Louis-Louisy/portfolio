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

  // Create personal project
  createPersonalProject(project: Project): Observable<Project> {
    return this.http.post<Project>(`${this.url}/personal-project`, project);
  }

  // Create professional project
  createProfessionalProject(project: Project): Observable<Project> {
    return this.http.post<Project>(`${this.url}/professional-project`, project);
  }

  // Update personal project
  updatePersonalProject(project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.url}/personal-project`, project);
  }

  // Update professional project
  updateProfessionalProject(project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.url}/professional-project`, project);
  }

  // Delete personal project
  deletePersonalProject(projectId: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/personal-project/${projectId}`);
  }

  // Delete professional project
  deleteProfessionalProject(projectId: string): Observable<any> {
    return this.http.delete<any>(
      `${this.url}/professional-project/${projectId}`
    );
  }
}
