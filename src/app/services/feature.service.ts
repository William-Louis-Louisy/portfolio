import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { IFeature } from '../types/feature.model';

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  // Base URL
  url = environment.apiUrl;

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Get all features
  getAllFeatures(): Observable<IFeature[]> {
    return this.http.get<IFeature[]>(`${this.url}/features`);
  }

  // Get a feature
  getFeatureById(featureId: string): Observable<IFeature> {
    return this.http.get<IFeature>(`${this.url}/feature/${featureId}`);
  }

  // Create a feature
  createFeature(feature: IFeature): Observable<IFeature> {
    const headers = this.authService.getAuthHeaders();
    return this.http.post<IFeature>(`${this.url}/feature`, feature, {
      headers,
    });
  }

  // Update a feature
  updateFeature(feature: IFeature): Observable<IFeature> {
    const headers = this.authService.getAuthHeaders();
    return this.http.put<IFeature>(`${this.url}/feature`, feature, { headers });
  }

  // Delete a feature
  deleteFeature(featureId: string): Observable<IFeature> {
    const headers = this.authService.getAuthHeaders();
    return this.http.delete<any>(`${this.url}/feature/${featureId}`, {
      headers,
    });
  }
}
