import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkerCodeComponent } from './worker-code.component';
import {CodemirrorModule} from '../codemirror/codemirror.module';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [WorkerCodeComponent],
  exports: [
    WorkerCodeComponent
  ],
  imports: [
    CommonModule,
    CodemirrorModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class WorkerCodeModule { }
