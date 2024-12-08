import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('ConfirmationDialogComponent', () => {
  let component: ConfirmationDialogComponent;
  let fixture: ComponentFixture<ConfirmationDialogComponent>;

  // Mock dependencies for MatDialogRef and MAT_DIALOG_DATA
  const mockDialogRef = { close: jasmine.createSpy('close') };
  const mockDialogData = { message: 'Are you sure?' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,   // Required for Angular Material animations
        MatDialogModule,           // Required for MatDialog components
        ConfirmationDialogComponent // Import standalone component
      ],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef }, // Provide MatDialogRef mock
        { provide: MAT_DIALOG_DATA, useValue: mockDialogData } // Provide mock dialog data
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close the dialog when close method is called', () => {
    component.onCancel(); // Assuming there's a method to close the dialog
    expect(mockDialogRef.close).toHaveBeenCalled();
  });
});
