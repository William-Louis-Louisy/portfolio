import { NgModule } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterModule,
  RouterStateSnapshot,
  Routes,
  UrlTree,
} from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MyJourneyComponent } from './pages/my-journey/my-journey.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { CurriculumVitaeComponent } from './pages/curriculum-vitae/curriculum-vitae.component';
import { PersonalProjectsComponent } from './pages/personal-projects/personal-projects.component';
import { ProfessionalProjectsComponent } from './pages/professional-projects/professional-projects.component';
import { CanActivateAuth } from './services/auth.guard';
import { inject } from '@angular/core';

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  // Journey
  { path: 'journey', component: MyJourneyComponent },
  // Resume
  { path: 'cv', component: CurriculumVitaeComponent },
  // Projects
  { path: 'professional-projects', component: ProfessionalProjectsComponent },
  { path: 'personal-projects', component: PersonalProjectsComponent },
  { path: 'personal-projects/:id', component: ProjectDetailsComponent },
  { path: 'professional-projects/:id', component: ProjectDetailsComponent },
  // Contact
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  // Admin
  {
    path: 'admin',
    component: AdminPanelComponent,
    canActivate: [() => inject(CanActivateAuth).canActivateFunction()],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [CanActivateAuth],
  exports: [RouterModule],
})
export class AppRoutingModule {}
