import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {srcToBlobUrl} from '@gewd/utils/worker';
import {StateService} from '../state.service';

@Component({
  selector: 'app-worker-code',
  templateUrl: './worker-code.component.html',
  styleUrls: ['./worker-code.component.scss']
})
export class WorkerCodeComponent implements OnInit, OnChanges {
  @Input()
  projectId = '';

  webworkerCreated = false;
  worker: Worker | null = null;

  responses: string[] = [];

  currentCode = '';

  constructor(private state: StateService) {
  }

  async ngOnInit(): Promise<void> {
    this.readFromState();
  }

  ngOnChanges({projectId}: SimpleChanges): void {
    if (projectId) {
      this.stopWorker();
      this.clearResponses();
      this.readFromState();
    }
  }

  updatedCode($event: string): void {

    this.currentCode = $event;
    this.saveToState();
  }

  createWorker(): void {
    const webWorkerBlobUrl = srcToBlobUrl('superWorker.js', this.currentCode);

    try {
      this.worker = new Worker(webWorkerBlobUrl);
      this.worker.onmessage = (e) => {
        this.responses.push(`<<  ${e.data}`);

        console.log('Message received from worker', e.data);
      };
      this.worker.onmessageerror = ev => {
        this.responses.push('ERR ' + ev.data);

        console.log('Error received from worker', ev.data);
      };
      this.worker.onerror = ev => {
        this.responses.push('ERR ' + JSON.stringify({
          message: ev.message
        }));
      };

      this.webworkerCreated = true;
    } catch (ex) {
      this.responses.push(ex);
    }
  }

  stopWorker(): void {
    this.worker?.terminate();
    this.webworkerCreated = false;
  }

  postMessage(value: string): void {
    if (!this.webworkerCreated) {
      return;
    }

    this.worker?.postMessage(value);

    this.responses.push('>> ' + value);
  }

  clearResponses(): void {
    this.responses.length = 0;
  }

  private async readFromState(): Promise<void> {
    try {
      const value = await this.state.getWorkerCode(this.projectId);

      this.currentCode = value ?? '';
    } catch (err) {
      // This code runs if there were any errors.
      console.log(err);
    }
  }

  private saveToState(): void {
    this.state.setWorkerCode(this.projectId, this.currentCode);
  }
}
