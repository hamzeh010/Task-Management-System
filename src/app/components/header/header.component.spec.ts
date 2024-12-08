import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  // Mock ActivatedRoute
  const mockActivatedRoute = {
    snapshot: { data: {} },
    params: of({})
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,    // For routing-related dependencies
        BrowserAnimationsModule, // Handles animations, if any
        HeaderComponent         // Import standalone component
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute } // Mock ActivatedRoute
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
