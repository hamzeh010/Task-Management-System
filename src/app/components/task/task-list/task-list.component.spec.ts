import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskListComponent } from './task-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  // Mock ActivatedRoute
  const mockActivatedRoute = {
    params: of({ id: 1 }), // Example parameter
    snapshot: { data: {} }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule, // For handling animations
        TaskListComponent        // Import the standalone TaskListComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute } // Provide ActivatedRoute mock
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
