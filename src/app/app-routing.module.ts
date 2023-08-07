import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MyJourneyComponent } from './pages/my-journey/my-journey.component';
import { CurriculumVitaeComponent } from './pages/curriculum-vitae/curriculum-vitae.component';
import { ProfessionalProjectsComponent } from './pages/professional-projects/professional-projects.component';
import { PersonalProjectsComponent } from './pages/personal-projects/personal-projects.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: 'journey', component: MyJourneyComponent },
  { path: 'cv', component: CurriculumVitaeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'professional-projects', component: ProfessionalProjectsComponent },
  { path: 'personal-projects', component: PersonalProjectsComponent },
  { path: 'personal-projects/:id', component: ProjectDetailsComponent },
  { path: 'professional-projects/:id', component: ProjectDetailsComponent },
  { path: 'admin', component: AdminPanelComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
