import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerCodeComponent } from './worker-code.component';

describe('WorkerCodeComponent', () => {
  let component: WorkerCodeComponent;
  let fixture: ComponentFixture<WorkerCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
