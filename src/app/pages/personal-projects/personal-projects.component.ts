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

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.css'],
})
export class PersonalProjectsComponent implements OnInit {
  // The ID of the project currently visible on screen
  currentVisibleProjectId: string = '';

  // EventEmitter to communicate the ID of the currently visible project to parent components
  @Output() visibleProjectIdChange = new EventEmitter<string>();

  // Observable to fetch the list of personal projects
  public personalProjects$: Observable<any>;

  // Personal projects list
  private personalProjectsList: any[] = [];

  // Current language
  currentLanguage: string;

  langChangeSubscription?: Subscription;

  constructor(
    public projectsService: ProjectsService,
    private translate: TranslateService
  ) {
    // Initialize personalProjects$ with an empty Observable
    this.personalProjects$ = new Observable<any>();

    // Initialize currentLanguage
    this.currentLanguage = translate.currentLang;
  }

  ngOnInit() {
    // Get all personal projects
    this.personalProjects$ = this.projectsService.getAllPersonalProjects();
    this.personalProjects$.subscribe((personalProjects) => {
      this.personalProjectsList = personalProjects;
    });

    // Subscribe to language change
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
      const firstProjectId = this.personalProjectsList[0]._id;
      if (firstProjectId !== this.currentVisibleProjectId) {
        this.currentVisibleProjectId = firstProjectId;
        this.visibleProjectIdChange.emit(this.currentVisibleProjectId);
      }
    } else {
      // If the user has scrolled down, find the project that is most visible on screen
      let maxVisible = 0;
      let currentVisibleProjectId = '';

      this.personalProjectsList.forEach((project) => {
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
    // Unsubscribe from language change
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
}
