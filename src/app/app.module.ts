import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyJourneyComponent } from './my-journey/my-journey.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { ProfessionalProjectsComponent } from './professional-projects/professional-projects.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HeaderComponent } from './header/header.component';
import { CoursesService } from './courses.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ProjectsNavigationComponent } from './projects-navigation/projects-navigation.component';
import { SliderTestimonialsComponent } from './slider-testimonials/slider-testimonials.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    MyJourneyComponent,
    HomepageComponent,
    CurriculumVitaeComponent,
    ProfessionalProjectsComponent,
    PersonalProjectsComponent,
    ProjectDetailsComponent,
    AdminPanelComponent,
    HeaderComponent,
    ProjectsNavigationComponent,
    SliderTestimonialsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
