import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
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
import { MatCardModule } from '@angular/material/card';
import { AddprescriptionComponent } from './addprescription.component';

describe('Prescription Insert Component Test', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddprescriptionComponent],
      imports: [
        BrowserModule,
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
        { provide: MatDialogRef, useValue: {} }

      ]
    }).compileComponents();
  });

  it('Insert Component Test', () => {
    const fixture = TestBed.createComponent(AddprescriptionComponent);
    const prescription = fixture.componentInstance;
    expect(prescription).toBeTruthy();
  });

  it('Insert Form Input GUI count', () => {
    const fixture = TestBed.createComponent(AddprescriptionComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#myform");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(5);
  });
  it('Insert Form Button GUI count', () => {
    const fixture = TestBed.createComponent(AddprescriptionComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#myform");
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(1);
  });

  it('Insert Form initial values', () => {
    const fixture = TestBed.createComponent(AddprescriptionComponent);
    const prescription = fixture.componentInstance;
    const prescriptionFormGroup = prescription.myform;
    const prescriptionFormValues = {
      prescriptionId: '',
      prescriptionDate: '',
      prescriptionTablets: '',
      userId: '',
      userType: '',
    }
    expect(prescriptionFormGroup.value).toEqual(prescriptionFormValues);
  });

  it('Testing Form valid', () => {
    const fixture = TestBed.createComponent(AddprescriptionComponent);
    const prescription = fixture.componentInstance;
    prescription.myform.controls?.['prescriptionId'].setValue("200");
    prescription.myform.controls?.['prescriptionDate'].setValue("10.02.2024");
    prescription.myform.controls?.['prescriptionTablets'].setValue("paracetamol 500");
    prescription.myform.controls?.['userId'].setValue("23");
    prescription.myform.controls?.['userType'].setValue("Patient");
    expect(prescription.myform.valid).toBeTruthy();
  });
});
