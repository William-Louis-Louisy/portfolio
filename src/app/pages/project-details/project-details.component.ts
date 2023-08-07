import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { TranslateService } from '@ngx-translate/core';
import { Project } from 'src/app/types/project.model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
})
export class ProjectDetailsComponent implements OnInit {
  // Id
  private id!: string;

  // Professional project
  private professionalProject$!: Observable<Project>;

  // Personal project
  private personalProject$!: Observable<Project>;

  // Subscription to paramMap
  private paramMapSubscription?: Subscription;

  // Current language
  currentLanguage: string;

  langChangeSubscription?: Subscription;

  // Selected task id
  selectedTaskId?: string | null = null;

  //Select task
  selectTask(taskId: string) {
    this.selectedTaskId = this.selectedTaskId === taskId ? null : taskId;
  }

  taskVisibility: { [key: string]: boolean } = {};

  toggleTaskVisibility(taskId: string) {
    this.taskVisibility[taskId] = !this.taskVisibility[taskId];
  }

  constructor(
    public projectsService: ProjectsService,
    private translate: TranslateService,
    private route: ActivatedRoute
  ) {
    // Initialize currentLanguage
    this.currentLanguage = translate.currentLang;
  }

  ngOnInit() {
    // Get id from route
    this.paramMapSubscription = this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.id = id;

        // Get professional project by id
        this.professionalProject$ =
          this.projectsService.getProfessionalProjectById(this.id);

        // Get personal project by id
        this.personalProject$ = this.projectsService.getPersonalProjectById(
          this.id
        );
      }
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

    // Unsubscribe from paramMap
    if (this.paramMapSubscription) {
      this.paramMapSubscription.unsubscribe();
    }
  }

  // Getter for professional project
  get professionalProject() {
    return this.professionalProject$;
  }

  // Getter for personal project
  get personalProject() {
    return this.personalProject$;
  }
}
