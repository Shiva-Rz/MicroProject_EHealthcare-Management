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
import { PatientoperationComponent } from './patientoperation.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatCardModule } from '@angular/material/card';





describe('Patient Insert Component Test', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientoperationComponent],
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
      ],
      providers: [

        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }

      ]
    }).compileComponents();
  });

  it('Insert Component Test', () => {
    const fixture = TestBed.createComponent(PatientoperationComponent);
    const Patient = fixture.componentInstance;
    expect(Patient).toBeTruthy();
  });

  it('Insert Form Input GUI count', () => {
    const fixture = TestBed.createComponent(PatientoperationComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#patientForm");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(6);
  });
  it('Insert Form Button GUI count', () => {
    const fixture = TestBed.createComponent(PatientoperationComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#patientForm");
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(2);
  });

  it('Insert Form initial values', () => {
    const fixture = TestBed.createComponent(PatientoperationComponent);
    const patient = fixture.componentInstance;
    const patientFormGroup = patient.patientForm;
    const patientFormValues = {
      userId: '',
      userType: '',
      userEmail: '',
      userPassword: '',
      userName: '',
      userMobileNumber: ''
    }
    expect(patientFormGroup.value).toEqual(patientFormValues);
  });

  it('Testing Form valid', () => {
    const fixture = TestBed.createComponent(PatientoperationComponent);
    const patient = fixture.componentInstance;
    patient.patientForm.controls?.['userId'].setValue("1000");
    patient.patientForm.controls?.['userType'].setValue("Patient");
    patient.patientForm.controls?.['userEmail'].setValue("domnic@gmail.com");
    patient.patientForm.controls?.['userPassword'].setValue("dom12345");
    patient.patientForm.controls?.['userName'].setValue("Domnic");
    patient.patientForm.controls?.['userMobileNumber'].setValue("9348344331");
    expect(patient.patientForm.valid).toBeTruthy();
  });
});


describe('Patient Update Component Test', () => {


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientoperationComponent],
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
      ],
      providers: [

        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }

      ]
    }).compileComponents();
  });


  it('Update Component Test', () => {
    const fixture = TestBed.createComponent(PatientoperationComponent);
    const Patient = fixture.componentInstance;
    expect(Patient).toBeTruthy();
  });


  it('Update Form Input GUI count', () => {
    const fixture = TestBed.createComponent(PatientoperationComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#patientForm");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(6);
  });
  it('Update Form Button GUI count', () => {
    const fixture = TestBed.createComponent(PatientoperationComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#patientForm");
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(2);
  });

  it('Update Form Button GUI count', () => {
    const fixture = TestBed.createComponent(PatientoperationComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#patientForm");
    const buttonElements = formElement.querySelectorAll("button");
    expect(buttonElements.length).toEqual(2);

  });

  it('Update Form initial values', () => {
    const fixture = TestBed.createComponent(PatientoperationComponent);
    const patient = fixture.componentInstance;
    const patientFormGroup = patient.patientForm;
    const patientFormValues = {
      userId: '',
      userType: '',
      userEmail: '',
      userPassword: '',
      userName: '',
      userMobileNumber: ''
    }
    expect(patientFormGroup.value).toEqual(patientFormValues);
  });


  it('Testing Form valid', () => {
    const fixture = TestBed.createComponent(PatientoperationComponent);
    const patient = fixture.componentInstance;
    patient.patientForm.controls?.['userId'].setValue("1000");
    patient.patientForm.controls?.['userType'].setValue("Patient");
    patient.patientForm.controls?.['userEmail'].setValue("domnic@gmail.com");
    patient.patientForm.controls?.['userPassword'].setValue("dom12345");
    patient.patientForm.controls?.['userName'].setValue("Domnic");
    patient.patientForm.controls?.['userMobileNumber'].setValue("9348344331");
    expect(patient.patientForm.valid).toBeTruthy();
  });
});


describe('Patient Delete Component Test', () => {


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientoperationComponent],
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
      ],
      providers: [

        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }

      ]
    }).compileComponents();
  });

  it('Delete Testing Component', () => {
    const fixture = TestBed.createComponent(PatientoperationComponent);
    const patient = fixture.componentInstance;
    expect(patient).toBeTruthy();
  });


  it('Delete Form button GUI count', () => {
    const fixture = TestBed.createComponent(PatientoperationComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#patientForm");
    const inputElements = formElement.querySelectorAll("button");
    const buttonElements = formElement.querySelectorAll("button");
    expect(buttonElements.length).toEqual(2);
    expect(inputElements.length).toEqual(2);
  });

  it('Delete Form button GUI count', () => {
    const fixture = TestBed.createComponent(PatientoperationComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#patientForm");
    const buttonElements = formElement.querySelectorAll("button");
    expect(buttonElements.length).toEqual(2);
  });

  describe('Patient Component ViewAll Test', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [PatientoperationComponent],
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
      const fixture = TestBed.createComponent(PatientoperationComponent);
      const patient = fixture.componentInstance;
      expect(patient.patientForm.valid).toBeFalsy();
    });
  });
});
