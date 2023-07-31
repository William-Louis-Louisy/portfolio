import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsStateService {
  private _currentProjectId = new BehaviorSubject<string | null>(null);

  currentProjectId$ = this._currentProjectId.asObservable();

  setCurrentProjectId(id: string | null) {
    this._currentProjectId.next(id);
  }
}
