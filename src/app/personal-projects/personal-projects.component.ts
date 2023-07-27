import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.css'],
})
export class PersonalProjectsComponent {
  // Personal projects list
  private personalProjects: any = [];

  // Current language
  currentLanguage: string;

  langChangeSubscription?: Subscription;

  constructor(
    public projectsService: ProjectsService,
    private translate: TranslateService
  ) {
    // Initialize currentLanguage
    this.currentLanguage = translate.currentLang;
  }

  ngOnInit() {
    // Get all personal projects
    this.projectsService
      .getAllPersonalProjects()
      .subscribe((retrievedPersonalProjects) => {
        console.log('personal projects', retrievedPersonalProjects);
        this.personalProjects = retrievedPersonalProjects;
      });

    // Subscribe to language change
    this.langChangeSubscription = this.translate.onLangChange.subscribe(
      (event) => {
        this.currentLanguage = event.lang;
      }
    );
  }

  ngOnDestroy() {
    // Unsubscribe from language change
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  // Getter for personal projects list
  get personalProjectsList() {
    return this.personalProjects;
  }
}
