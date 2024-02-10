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
import { DoctoroperationComponent } from './doctoroperation.component';
import { MatCardModule } from '@angular/material/card';

describe('Doctor Insert Component Test', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctoroperationComponent],
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
    const fixture = TestBed.createComponent(DoctoroperationComponent);
    const Doctor = fixture.componentInstance;
    expect(Doctor).toBeTruthy();
  });

  it('Insert Form Input GUI count', () => {
    const fixture = TestBed.createComponent(DoctoroperationComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#doctorForm");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(6);
  });
  it('Insert Form Button GUI count', () => {
    const fixture = TestBed.createComponent(DoctoroperationComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#doctorForm");
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(2);
  });

  it('Insert Form initial values', () => {
    const fixture = TestBed.createComponent(DoctoroperationComponent);
    const doctor = fixture.componentInstance;
    const doctorFormGroup = doctor.doctorForm;
    const doctorFormValues = {
      userId: '',
      userType: '',
      userEmail: '',
      userPassword: '',
      userName: '',
      userMobileNumber: ''
    }
    expect(doctorFormGroup.value).toEqual(doctorFormValues);
  });

  it('Testing Form valid', () => {
    const fixture = TestBed.createComponent(DoctoroperationComponent);
    const doctor = fixture.componentInstance;
    doctor.doctorForm.controls?.['userId'].setValue("2000");
    doctor.doctorForm.controls?.['userType'].setValue("Doctor");
    doctor.doctorForm.controls?.['userEmail'].setValue("ajay@gmail.com");
    doctor.doctorForm.controls?.['userPassword'].setValue("aj12345");
    doctor.doctorForm.controls?.['userName'].setValue("Ajay");
    doctor.doctorForm.controls?.['userMobileNumber'].setValue("9348124331");
    expect(doctor.doctorForm.valid).toBeTruthy();
  });
});





describe('Doctor Update Component Test', () => {


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctoroperationComponent],
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
    const fixture = TestBed.createComponent(DoctoroperationComponent);
    const Doctor = fixture.componentInstance;
    expect(Doctor).toBeTruthy();
  });


  it('Update Form Input GUI count', () => {
    const fixture = TestBed.createComponent(DoctoroperationComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#doctorForm");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(6);
  });
  it('Update Form Button GUI count', () => {
    const fixture = TestBed.createComponent(DoctoroperationComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#doctorForm");
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(2);
  });


  it('Update Form initial values', () => {
    const fixture = TestBed.createComponent(DoctoroperationComponent);
    const doctor = fixture.componentInstance;
    const doctorFormGroup = doctor.doctorForm;
    const doctorFormValues = {
      userId: '',
      userType: '',
      userEmail: '',
      userPassword: '',
      userName: '',
      userMobileNumber: ''
    }
    expect(doctorFormGroup.value).toEqual(doctorFormValues);
  });


  it('Testing Form valid', () => {
    const fixture = TestBed.createComponent(DoctoroperationComponent);
    const doctor = fixture.componentInstance;
    doctor.doctorForm.controls?.['userId'].setValue("2000");
    doctor.doctorForm.controls?.['userType'].setValue("Doctor");
    doctor.doctorForm.controls?.['userEmail'].setValue("ajay@gmail.com");
    doctor.doctorForm.controls?.['userPassword'].setValue("aj12345");
    doctor.doctorForm.controls?.['userName'].setValue("Ajay");
    doctor.doctorForm.controls?.['userMobileNumber'].setValue("9348124331");
    expect(doctor.doctorForm.valid).toBeTruthy();
  });
});


describe('Doctor Delete Component Test', () => {


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctoroperationComponent],
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
    const fixture = TestBed.createComponent(DoctoroperationComponent);
    const doctor = fixture.componentInstance;
    expect(doctor).toBeTruthy();
  });


  it('Delete Form button GUI count', () => {
    const fixture = TestBed.createComponent(DoctoroperationComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#doctorForm");
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(2);
  });

  describe('Doctor Component ViewAll Test', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [DoctoroperationComponent],
        imports:
          [
            BrowserModule,
            ReactiveFormsModule, HttpClientModule,
            MatToolbarModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatCardModule,
            MatSelectModule, MatInputModule, BrowserAnimationsModule
          ],

      }).compileComponents();
    });


    it('Testing Form for ViewAll', () => {
      const fixture = TestBed.createComponent(DoctoroperationComponent);
      const doctor = fixture.componentInstance;
      expect(doctor.doctorForm.valid).toBeFalsy();
    });
  });
});
