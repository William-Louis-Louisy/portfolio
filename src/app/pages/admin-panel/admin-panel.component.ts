import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription, Observable } from 'rxjs';
import { CoursesService } from 'src/app/services/courses.service';
import { ProjectsService } from 'src/app/services/projects.service';
import { ICourse } from 'src/app/types/course.model';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent {
  // Courses
  public courses$: Observable<ICourse[]>;
  public coursesList: ICourse[] = [];

  // Jobs
  public jobs$: Observable<any>;
  public jobsList: any[] = [];

  // Personal projects
  public personalProjects$: Observable<any>;
  public personalProjectsList: any[] = [];

  // Professional projects
  public professionalProjects$: Observable<any>;
  public professionalProjectsList: any[] = [];

  // Tasks
  public tasks$: Observable<any>;
  public tasksList: any[] = [];

  // Features
  public features$: Observable<any>;
  public featuresList: any[] = [];

  // Stack items
  public stackItems$: Observable<any>;
  public stackItemsList: any[] = [];

  // Current language
  currentLanguage: string;
  langChangeSubscription?: Subscription;

  constructor(
    public coursesService: CoursesService,
    public projectsService: ProjectsService,
    private translate: TranslateService
  ) {
    // Initialize courses$ with an empty Observable
    this.courses$ = new Observable<any>();

    // Initialize jobs$ with an empty Observable
    this.jobs$ = new Observable<any>();

    // Initialize personalProjects$ with an empty Observable
    this.personalProjects$ = new Observable<any>();

    // Initialize professionalProjects$ with an empty Observable
    this.professionalProjects$ = new Observable<any>();

    // Initialize tasks$ with an empty Observable
    this.tasks$ = new Observable<any>();

    // Initialize features$ with an empty Observable
    this.features$ = new Observable<any>();

    // Initialize stackItems$ with an empty Observable
    this.stackItems$ = new Observable<any>();

    // Initialize currentLanguage
    this.currentLanguage = translate.currentLang;
  }

  ngOnInit() {
    // Get all courses
    this.courses$ = this.coursesService.getAllCourses();
    this.courses$.subscribe((courses) => {
      this.coursesList = courses;
    });

    // Get all jobs
    this.jobs$ = this.coursesService.getAllJobs();
    this.jobs$.subscribe((jobs) => {
      this.jobsList = jobs;
    });

    // Get all personal projects
    this.personalProjects$ = this.projectsService.getAllPersonalProjects();
    this.personalProjects$.subscribe((personalProjects) => {
      this.personalProjectsList = personalProjects;
    });

    // Get all professional projects
    this.professionalProjects$ =
      this.projectsService.getAllProfessionalProjects();
    this.professionalProjects$.subscribe((professionalProjects) => {
      this.professionalProjectsList = professionalProjects;
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
    this.langChangeSubscription?.unsubscribe();
  }
}
