import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; // Mock routing module
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent, // Import the standalone AppComponent
        RouterTestingModule // Provides mock router dependencies
      ],
      providers: [
        {
          provide: ActivatedRoute, // Provide a mock ActivatedRoute
          useValue: {
            snapshot: { params: { id: '1' } }, // Mock route params
            queryParams: of({ query: 'test' }) // Mock query params
          }
        }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'task-manager' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('task-manager');
  });
});
