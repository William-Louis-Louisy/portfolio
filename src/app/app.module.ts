import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyJourneyComponent } from './pages/my-journey/my-journey.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CurriculumVitaeComponent } from './pages/curriculum-vitae/curriculum-vitae.component';
import { ProfessionalProjectsComponent } from './pages/professional-projects/professional-projects.component';
import { PersonalProjectsComponent } from './pages/personal-projects/personal-projects.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { HeaderComponent } from './components/header/header.component';
import { CoursesService } from './services/courses.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ProjectsNavigationComponent } from './components/projects-navigation/projects-navigation.component';
import { SliderTestimonialsComponent } from './components/slider-testimonials/slider-testimonials.component';
import { CustomSelectComponent } from './components/custom-select/custom-select.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { ModalComponent } from './components/modal/modal.component';

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
    CustomSelectComponent,
    ContactComponent,
    LoginComponent,
    CustomTableComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
