import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppRoutingModule } from '../app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { ViewprescriptionComponent } from './viewprescription.component';



describe('Prescription Component ViewAll Test', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewprescriptionComponent],
      imports:
        [
          BrowserModule,
          AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule,
          MatToolbarModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatCardModule,
          MatSelectModule, MatInputModule, BrowserAnimationsModule
        ],

    }).compileComponents();
  });


  it('Testing Form for ViewAll', () => {
    const fixture = TestBed.createComponent(ViewprescriptionComponent);
    const patient = fixture.componentInstance;
    expect(patient.getAllPrescription).toBeTruthy();
  });
});
