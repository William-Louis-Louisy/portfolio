// Import necessary modules
import {
  Component,
  OnInit,
  HostListener,
  Output,
  EventEmitter,
} from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription, Observable } from 'rxjs';
import { Project } from 'src/app/types/project.model';

@Component({
  selector: 'app-professional-projects',
  templateUrl: './professional-projects.component.html',
  styleUrls: ['./professional-projects.component.css'],
})
export class ProfessionalProjectsComponent implements OnInit {
  // The ID of the project currently visible on screen
  currentVisibleProjectId: string = '';

  // EventEmitter to communicate the ID of the currently visible project to parent components
  @Output() visibleProjectIdChange = new EventEmitter<string>();

  // Observable to fetch the list of professional projects
  public professionalProjects$: Observable<Project[]>;

  // List of professional projects
  private professionalProjectsList: Project[] = [];

  // The current language of the application
  currentLanguage: string;

  // Subscription to keep track of language changes
  langChangeSubscription?: Subscription;

  constructor(
    public projectsService: ProjectsService,
    private translate: TranslateService
  ) {
    // Initialize professionalProjects$ with an empty Observable
    this.professionalProjects$ = new Observable<Project[]>();

    // Initialize currentLanguage with the current language from the TranslateService
    this.currentLanguage = translate.currentLang;
  }

  ngOnInit() {
    // Fetch all professional projects and subscribe to the Observable
    this.professionalProjects$ =
      this.projectsService.getAllProfessionalProjects();
    this.professionalProjects$.subscribe((professionalProjects) => {
      this.professionalProjectsList = professionalProjects;
    });

    // Subscribe to language change events
    this.langChangeSubscription = this.translate.onLangChange.subscribe(
      (event) => {
        this.currentLanguage = event.lang;
      }
    );
  }

  // Listen to scroll events
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.checkVisibleProject();
  }

  // Check which project is currently visible on screen
  checkVisibleProject() {
    // If the user has scrolled to the top of the page, select the first project
    if (window.scrollY === 0) {
      const firstProjectId = this.professionalProjectsList[0]._id;
      if (firstProjectId !== this.currentVisibleProjectId) {
        this.currentVisibleProjectId = firstProjectId;
        this.visibleProjectIdChange.emit(this.currentVisibleProjectId);
      }
    } else {
      // If the user has scrolled down, find the project that is most visible on screen
      let maxVisible = 0;
      let currentVisibleProjectId = '';

      this.professionalProjectsList.forEach((project) => {
        const element = document.getElementById(project._id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const visibleHeight =
            Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
          const visiblePercentage = visibleHeight / rect.height;

          if (visiblePercentage > maxVisible) {
            maxVisible = visiblePercentage;
            currentVisibleProjectId = project._id;
          }
        }
      });

      // If a different project is now most visible, update currentVisibleProjectId and emit the change
      if (currentVisibleProjectId !== this.currentVisibleProjectId) {
        this.currentVisibleProjectId = currentVisibleProjectId;
        this.visibleProjectIdChange.emit(this.currentVisibleProjectId);
      }
    }
  }

  ngOnDestroy() {
    // When the component is destroyed, unsubscribe from the language change events
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
}
