import { Component, Input } from '@angular/core';
import { Project } from 'src/app/types/project.model';

@Component({
  selector: 'app-projects-navigation',
  templateUrl: './projects-navigation.component.html',
  styleUrls: ['./projects-navigation.component.css'],
})
export class ProjectsNavigationComponent {
  // Define the projects list
  @Input() projectsList: Project[] = [];
  // Define the current project id
  @Input() currentProjectId: string | null = null;

  // On init
  ngOnInit(): void {
    // Set the current project id
    this.currentProjectId = this.projectsList[0]._id;
  }

  // Scroll to project
  scrollToProject(projectId: string): void {
    // Get the element
    const element = document.getElementById(projectId);
    // Define the header offset
    const headerOffset = 64;

    // Scroll to the element
    if (element) {
      // Set the current project id
      this.currentProjectId = projectId;
      // Define the element position
      const elementPosition = element.offsetTop;
      // Define the offset position
      const offsetPosition = elementPosition - headerOffset;

      // Scroll to the element
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }
}
