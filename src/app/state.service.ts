import { Injectable } from '@angular/core';

import * as localforage from 'localforage';
import {BehaviorSubject} from 'rxjs';
import {uuid} from '@gewd/utils';

export interface Project {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class StateService {
  projects$ = new BehaviorSubject<Project[]>([]);

  constructor() {
    this.initializeData();
  }

  public addNewProject(name: string): void {
    this.projects$.next([...this.projects$.getValue(), {
      id: uuid(),
      name,
    }]);

    this.saveToLocalForage();
  }


  renameProject(id: string, newName: string): void {
    const stateProject = this.projects$.value.find(p => p.id === id);

    if (stateProject) {
      stateProject.name = newName;
      this.saveToLocalForage();
    }
  }


  deleteProject(id: string): void {
    const projects = this.projects$.value;
    const stateProjectIndex = projects.findIndex(p => p.id === id);

    if (stateProjectIndex !== -1) {
      projects.splice(stateProjectIndex, 1);

      this.projects$.next(projects);
      this.saveToLocalForage();
    }
  }

  public async getWorkerCode(projectId: string): Promise<string> {
    const projectForage = this.getProjectForage(projectId);

    await projectForage.ready();

    return await projectForage.getItem<string>('worker_code') ?? '';
  }

  public async setWorkerCode(projectId: string, workerCode: string): Promise<void> {
    const projectForage = this.getProjectForage(projectId);

    await projectForage.ready();

    projectForage.setItem<string>('worker_code', workerCode);
  }

  private getProjectForage(projectId: string): LocalForage {
    return localforage.createInstance({
      name: `project/${projectId}`
    });
  }

  private async initializeData(): Promise<void> {
    await localforage.ready();

    const projects = await localforage.getItem<Project[]>('projects');

    this.projects$.next(projects ?? []);
  }

  private saveToLocalForage (): void {
    localforage.setItem<Project[]>('projects', this.projects$.value);
  }

}
