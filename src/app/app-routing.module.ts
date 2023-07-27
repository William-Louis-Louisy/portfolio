import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MyJourneyComponent } from './my-journey/my-journey.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { ProfessionalProjectsComponent } from './professional-projects/professional-projects.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: 'journey', component: MyJourneyComponent },
  { path: 'cv', component: CurriculumVitaeComponent },
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
