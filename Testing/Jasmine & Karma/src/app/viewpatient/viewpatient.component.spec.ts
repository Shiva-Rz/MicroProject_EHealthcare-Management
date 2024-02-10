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
import { ViewpatientComponent } from './viewpatient.component';

describe('View Patient Component Test', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewpatientComponent],
      imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        MatSnackBarModule,
        MatCardModule

      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();
  });


  it('View patient Component Test', () => {
    const fixture = TestBed.createComponent(ViewpatientComponent);
    const home = fixture.componentInstance;
    expect(home).toBeTruthy();
  });


  it(`should have as title 'View Patient Form Component'`, () => {
    const fixture = TestBed.createComponent(ViewpatientComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('view patient');
  });


  describe('Patient Component ViewAll Test', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ViewpatientComponent],
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
      const fixture = TestBed.createComponent(ViewpatientComponent);
      const patient = fixture.componentInstance;
      expect(patient.patList.values).toBeTruthy();
    });
  });
});
