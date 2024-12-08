import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskFormComponent } from './task-form.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { TaskService } from '../../../services/TaskService';

// Mock TaskService
class MockTaskService {
  getTasks() {
    return [
      {
        id: 123,
        name: 'Test Task',
        description: 'Description for task',
        details: 'Some details',
        priority: 'Medium',
        status: 'Pending',
        assignedTo: 'Alice',
        dueDate: '2024-06-30',
      },
    ];
  }

  addTask(task: any): void {
    // Mock implementation of addTask
    console.log('Task added:', task);
  }

  updateTask(task: any): void {
    // Mock implementation of updateTask
    console.log('Task updated:', task);
  }
}

describe('TaskFormComponent', () => {
  let component: TaskFormComponent;
  let fixture: ComponentFixture<TaskFormComponent>;
  let taskService: MockTaskService;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TaskFormComponent, // Standalone component
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: TaskService, useClass: MockTaskService },
        { provide: Router, useValue: routerSpy },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => (key === 'id' ? '123' : null), // Mocked paramMap.get('id')
              },
            },
          },
        },
      ],
    }).compileComponents();

    taskService = TestBed.inject(TaskService);
    fixture = TestBed.createComponent(TaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with correct taskId', () => {
    expect(component.taskId).toBe(123);
  });

  it('should load existing task details', () => {
    expect(component.taskName).toBe('Test Task');
    expect(component.taskPriority).toBe('Medium');
    expect(component.taskStatus).toBe('Pending');
  });

  it('should mark form as invalid if required fields are empty', () => {
    component.taskName = '';
    component.taskPriority = '';
    fixture.detectChanges();
    expect(component.isFormInvalid()).toBeTrue();
  });

  it('should save task and navigate to home', () => {
    spyOn(taskService, 'updateTask');
    component.saveTask();

    expect(taskService.updateTask).toHaveBeenCalled();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/']);
  });
});
