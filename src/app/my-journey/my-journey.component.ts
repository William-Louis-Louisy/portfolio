import { Subscription } from 'rxjs';
import { IJob } from '../types/job.model';
import { ICourse } from '../types/course.model';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-journey',
  templateUrl: './my-journey.component.html',
  styleUrls: ['./my-journey.component.css'],
})
export class MyJourneyComponent implements OnInit {
  // Courses List
  private courses: ICourse[] = [];

  // Joobs List
  private jobs: IJob[] = [];

  // Current language
  currentLanguage: string;

  langChangeSubscription?: Subscription;

  constructor(
    public coursesService: CoursesService,
    private translate: TranslateService
  ) {
    // Initialize currentLanguage
    this.currentLanguage = translate.currentLang;
  }

  ngOnInit() {
    // Get all courses
    this.coursesService
      .getAllCourses()
      .subscribe((retrievedCourses: ICourse[]) => {
        this.courses = retrievedCourses.map((course) => ({
          ...course,
          startDate: this.formatDate(course.startDate),
          endDate: this.formatDate(course.endDate),
        }));
      });

    // Get all jobs
    this.coursesService.getAllJobs().subscribe((retrievedJobs: IJob[]) => {
      this.jobs = retrievedJobs.map((job) => ({
        ...job,
        startDate: this.formatDate(job.startDate),
        endDate: this.formatDate(job.endDate),
      }));
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

  formatDate(timestamp: string): string {
    const date = new Date(Number(timestamp) * 1000);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return `${month.toString().padStart(2, '0')}/${year}`;
  }

  // Getter for courses list
  get coursesList() {
    return this.courses;
  }

  // Getter for jobs list
  get jobsList() {
    return this.jobs;
  }
}
