import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects-navigation',
  templateUrl: './projects-navigation.component.html',
  styleUrls: ['./projects-navigation.component.css'],
})
export class ProjectsNavigationComponent {
  @Input() projectsList: any;

  currentProjectId: string | null = null;

  ngOnInit(): void {
    console.log('LISTE DE PROJETS : ', this.projectsList);
    this.currentProjectId = this.projectsList[0]._id;
  }

  scrollToProject(projectId: string): void {
    const element = document.getElementById(projectId);
    const headerOffset = 64;

    if (element) {
      this.currentProjectId = projectId;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }
}
