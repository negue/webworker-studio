import {Component} from '@angular/core';
import {Project, StateService} from './state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  projects$ = this.state.projects$;

  selectedProject: Project | null = null;

  constructor(private state: StateService) {
  }

  addNewProject(): void {
    var newName = prompt('New Project Name');

    if (newName) {
      this.state.addNewProject(newName);
    }
  }

  selectProject(project: Project): void {
    this.selectedProject = project;
  }

  editProjectName(): void {
    if (!this.selectedProject) {
      return;
    }

    const newName = prompt('New Projects Name: ');

    if (newName) {
      this.state.renameProject(this.selectedProject.id, newName);
    }
  }

  deleteProject(): void {
    if (!this.selectedProject) {
      return;
    }

    if (confirm('Do you want to delete this Project?')) {
      this.state.deleteProject(this.selectedProject.id);
      this.selectedProject = null;
    }
  }
}
