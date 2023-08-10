import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { FeatureService } from 'src/app/services/feature.service';
import { ProjectsService } from 'src/app/services/projects.service';
import { StackService } from 'src/app/services/stack.service';
import { TaskService } from 'src/app/services/task.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() type!:
    | 'course'
    | 'job'
    | 'personal-project'
    | 'professional-project'
    | 'stack'
    | 'task'
    | 'feature'
    | null;
  @Input() mode!: 'create' | 'edit' | 'delete' | null;
  @Input() element: any;
  @Input() isModalOpen!: boolean;
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() actionCompleted = new EventEmitter<any>();

  // Define error message
  errorMessage = '';

  constructor(
    private coursesService: CoursesService,
    private featureService: FeatureService,
    private projectsService: ProjectsService,
    private tasksService: TaskService,
    private stackService: StackService
  ) {}

  onSubmit() {
    if (this.type === 'course') {
      if (this.mode === 'create') {
        this.coursesService
          .createCourse(this.element)
          .pipe(
            catchError((error) => {
              this.errorMessage =
                'An error occurred while creating the course.';
              console.error(error);
              return of(null);
            })
          )
          .subscribe((result) => {
            this.onActionCompleted(result);
          });
      } else if (this.mode === 'edit') {
        this.coursesService
          .updateCourse(this.element)
          .pipe(
            catchError((error) => {
              this.errorMessage = 'An error occurred while editing the course.';
              console.error(error);
              return of(null);
            })
          )
          .subscribe((result) => {
            this.onActionCompleted(result);
          });
      } else if (this.mode === 'delete') {
        this.coursesService
          .deleteCourse(this.element._id)
          .pipe(
            catchError((error) => {
              this.errorMessage =
                'An error occurred while deleting the course.';
              console.error(error);
              return of(null);
            })
          )
          .subscribe((result) => {
            this.onActionCompleted(result);
          });
      }
    } else if (this.type === 'feature') {
      if (this.mode === 'create') {
        this.featureService
          .createFeature(this.element)
          .pipe(
            catchError((error) => {
              this.errorMessage =
                'An error occurred while creating the feature.';
              console.error(error);
              return of(null);
            })
          )
          .subscribe((result) => {
            this.onActionCompleted(result);
          });
      } else if (this.mode === 'edit') {
        this.featureService
          .updateFeature(this.element)
          .pipe(
            catchError((error) => {
              this.errorMessage =
                'An error occurred while editing the feature.';
              console.error(error);
              return of(null);
            })
          )
          .subscribe((result) => {
            this.onActionCompleted(result);
          });
      } else if (this.mode === 'delete') {
        this.featureService
          .deleteFeature(this.element._id)
          .pipe(
            catchError((error) => {
              this.errorMessage =
                'An error occurred while deleting the feature.';
              console.error(error);
              return of(null);
            })
          )
          .subscribe((result) => {
            this.onActionCompleted(result);
          });
      }
    } else if (this.type === 'personal-project') {
      if (this.mode === 'create') {
        this.projectsService
          .createPersonalProject(this.element)
          .pipe(
            catchError((error) => {
              this.errorMessage =
                'An error occurred while creating the personal project.';
              console.error(error);
              return of(null);
            })
          )
          .subscribe((result) => {
            this.onActionCompleted(result);
          });
      } else if (this.mode === 'edit') {
        this.projectsService
          .updatePersonalProject(this.element)
          .pipe(
            catchError((error) => {
              this.errorMessage =
                'An error occurred while editing the personal project.';
              console.error(error);
              return of(null);
            })
          )
          .subscribe((result) => {
            this.onActionCompleted(result);
          });
      } else if (this.mode === 'delete') {
        this.projectsService

          .deletePersonalProject(this.element._id)
          .pipe(
            catchError((error) => {
              this.errorMessage =
                'An error occurred while deleting the personal project.';
              console.error(error);
              return of(null);
            })
          )
          .subscribe((result) => {
            this.onActionCompleted(result);
          });
      }
    } else if (this.type === 'professional-project') {
      if (this.mode === 'create') {
        this.projectsService
          .createProfessionalProject(this.element)
          .pipe(
            catchError((error) => {
              this.errorMessage =
                'An error occurred while creating the professional project.';
              console.error(error);
              return of(null);
            })
          )
          .subscribe((result) => {
            this.onActionCompleted(result);
          });
      } else if (this.mode === 'edit') {
        this.projectsService
          .updateProfessionalProject(this.element)
          .pipe(
            catchError((error) => {
              this.errorMessage =
                'An error occurred while editing the professional project.';
              console.error(error);
              return of(null);
            })
          )
          .subscribe((result) => {
            this.onActionCompleted(result);
          });
      } else if (this.mode === 'delete') {
        this.projectsService
          .deleteProfessionalProject(this.element._id)
          .pipe(
            catchError((error) => {
              this.errorMessage =
                'An error occurred while deleting the professional project.';
              console.error(error);
              return of(null);
            })
          )
          .subscribe((result) => {
            this.onActionCompleted(result);
          });
      }
    } else if (this.type === 'stack') {
      if (this.mode === 'create') {
        this.stackService
          .createStackItem(this.element)
          .pipe(
            catchError((error) => {
              this.errorMessage =
                'An error occurred while creating the stack item.';
              console.error(error);
              return of(null);
            })
          )
          .subscribe((result) => {
            this.onActionCompleted(result);
          });
      } else if (this.mode === 'edit') {
        this.stackService
          .updateStackItem(this.element)
          .pipe(
            catchError((error) => {
              this.errorMessage =
                'An error occurred while editing the stack item.';
              console.error(error);
              return of(null);
            })
          )
          .subscribe((result) => {
            this.onActionCompleted(result);
          });
      } else if (this.mode === 'delete') {
        this.stackService
          .deleteStackItem(this.element._id)
          .pipe(
            catchError((error) => {
              this.errorMessage =
                'An error occurred while deleting the stack item.';
              console.error(error);
              return of(null);
            })
          )
          .subscribe((result) => {
            this.onActionCompleted(result);
          });
      }
    } else if (this.type === 'task') {
      if (this.mode === 'create') {
        this.tasksService
          .createTask(this.element)
          .pipe(
            catchError((error) => {
              this.errorMessage = 'An error occurred while creating the task.';
              console.error(error);
              return of(null);
            })
          )
          .subscribe((result) => {
            this.onActionCompleted(result);
          });
      } else if (this.mode === 'edit') {
        this.tasksService
          .updateTask(this.element)
          .pipe(
            catchError((error) => {
              this.errorMessage = 'An error occurred while editing the task.';
              console.error(error);
              return of(null);
            })
          )
          .subscribe((result) => {
            this.onActionCompleted(result);
          });
      } else if (this.mode === 'delete') {
        this.tasksService
          .deleteTask(this.element._id)
          .pipe(
            catchError((error) => {
              this.errorMessage = 'An error occurred while deleting the task.';
              console.error(error);
              return of(null);
            })
          )
          .subscribe((result) => {
            this.onActionCompleted(result);
          });
      }
    } else if (this.type === 'job') {
      if (this.mode === 'create') {
        this.coursesService
          .createJob(this.element)
          .pipe(
            catchError((error) => {
              this.errorMessage = 'An error occurred while creating the job.';
              console.error(error);
              return of(null);
            })
          )
          .subscribe((result) => {
            this.onActionCompleted(result);
          });
      } else if (this.mode === 'edit') {
        this.coursesService
          .updateJob(this.element)
          .pipe(
            catchError((error) => {
              this.errorMessage = 'An error occurred while editing the job.';
              console.error(error);
              return of(null);
            })
          )
          .subscribe((result) => {
            this.onActionCompleted(result);
          });
      } else if (this.mode === 'delete') {
        this.coursesService
          .deleteJob(this.element._id)
          .pipe(
            catchError((error) => {
              this.errorMessage = 'An error occurred while deleting the job.';
              console.error(error);
              return of(null);
            })
          )
          .subscribe((result) => {
            this.onActionCompleted(result);
          });
      }
    }

    this.closeModal();
  }

  onActionCompleted(result: any) {
    this.actionCompleted.emit(result);
  }

  closeModal() {
    this.isModalOpen = false;
    this.closeModalEvent.emit();
  }
}
