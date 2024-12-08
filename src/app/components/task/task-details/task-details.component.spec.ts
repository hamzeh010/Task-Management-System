import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TaskDetailsComponent } from './task-details.component';

describe('TaskDetailsComponent', () => {
  let component: TaskDetailsComponent;
  let fixture: ComponentFixture<TaskDetailsComponent>;

  // Mock ActivatedRoute
  const mockActivatedRoute = {
    params: of({ id: 1 }), // Example route parameter
    snapshot: { data: {} } // Example snapshot data
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule, // Add BrowserAnimationsModule for any animations
        TaskDetailsComponent     // Import TaskDetailsComponent (if it's standalone)
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute } // Mock ActivatedRoute
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
