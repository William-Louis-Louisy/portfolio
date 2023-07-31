import { Component, OnInit, HostListener } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-professional-projects',
  templateUrl: './professional-projects.component.html',
  styleUrls: ['./professional-projects.component.css'],
})
export class ProfessionalProjectsComponent implements OnInit {
  // Professional projects list
  private professionalProjects$!: Observable<any>;

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
    // Get all professional projects
    this.professionalProjects$ =
      this.projectsService.getAllProfessionalProjects();

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

  // Getter for professional projects list
  get professionalProjectsList() {
    return this.professionalProjects$;
  }
}
