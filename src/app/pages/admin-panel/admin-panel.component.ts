import { Component } from '@angular/core';
import { IJob } from 'src/app/types/job.model';
import { Subscription, Observable } from 'rxjs';
import { ITask } from 'src/app/types/task.model';
import { ICourse } from 'src/app/types/course.model';
import { TranslateService } from '@ngx-translate/core';
import { TaskService } from 'src/app/services/task.service';
import { StackService } from 'src/app/services/stack.service';
import { FeatureService } from 'src/app/services/feature.service';
import { CoursesService } from 'src/app/services/courses.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent {
  // Properties for modal
  public mode: 'create' | 'edit' | 'delete' | null = null;
  public type:
    | 'course'
    | 'job'
    | 'personal-project'
    | 'professional-project'
    | 'stack'
    | 'task'
    | 'feature'
    | null = null;
  public element: any = null;

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

  // Define modal state
  isModalOpen = false;

  // Define active section
  activeSection: string | null = null;

  // Define sections
  sections: any[] = [];

  constructor(
    public taskService: TaskService,
    public stackService: StackService,
    private translate: TranslateService,
    public featureService: FeatureService,
    public coursesService: CoursesService,
    public projectsService: ProjectsService
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

  // Method to open modal for creation
  openCreateModal(type: string) {
    this.type = type as any;
    this.mode = 'create';
    this.element = {};
    this.isModalOpen = true;
  }

  // Method to open modal for editing
  openEditModal(type: string, elementToEdit: any) {
    this.type = type as any;
    this.mode = 'edit';
    this.element = elementToEdit;
    this.isModalOpen = true;
  }

  // Method to open modal for deletion
  openDeleteModal(type: string, elementToDelete: any) {
    this.type = type as any;
    this.mode = 'delete';
    this.element = elementToDelete;
    this.isModalOpen = true;
  }

  // Method to handle close event of modal
  onClose() {
    this.mode = null;
    this.type = null;
    this.element = null;
    this.isModalOpen = true;
  }

  onModalClosed() {
    this.isModalOpen = false;
  }

  toggleSection(section: string) {
    this.activeSection = this.activeSection === section ? null : section;
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

    // Get all tasks
    this.tasks$ = this.taskService.getAllTasks();
    this.tasks$.subscribe((tasks) => {
      this.tasksList = tasks;
    });

    // Get all features
    this.features$ = this.featureService.getAllFeatures();
    this.features$.subscribe((features) => {
      this.featuresList = features;
    });

    // Get all stack items
    this.stackItems$ = this.stackService.getAllStackItems();
    this.stackItems$.subscribe((stackItems) => {
      this.stackItemsList = stackItems;
    });

    // Subscribe to language change
    this.langChangeSubscription = this.translate.onLangChange.subscribe(
      (event) => {
        this.currentLanguage = event.lang;
      }
    );

    this.sections = [
      {
        id: 'courses',
        type: 'course',
        translation: 'LABELS.COURSES',
        data$: this.courses$,
      },
      {
        id: 'jobs',
        type: 'job',
        translation: 'LABELS.CAREER_PATH',
        data$: this.jobs$,
      },
      {
        id: 'personal-projects',
        type: 'personal-project',
        translation: 'LABELS.PERSONAL_PROJECTS',
        data$: this.personalProjects$,
      },
      {
        id: 'professional-projects',
        type: 'professional-project',
        translation: 'LABELS.PROFESSIONAL_PROJECTS',
        data$: this.professionalProjects$,
      },
      {
        id: 'tasks',
        type: 'task',
        translation: 'LABELS.TASKSPERFORMED',
        data$: this.tasks$,
      },
      {
        id: 'features',
        type: 'feature',
        translation: 'LABELS.FEATURES',
        data$: this.features$,
      },
      {
        id: 'stack',
        type: 'stack',
        translation: 'LABELS.STACK',
        data$: this.stackItems$,
      },
    ];
  }

  ngOnDestroy() {
    // Unsubscribe from language change
    this.langChangeSubscription?.unsubscribe();
  }
}
