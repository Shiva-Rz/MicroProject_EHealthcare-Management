import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


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
import { AppRoutingModule } from '../app-routing.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { RegisterComponent } from './register.component';


describe('Register Component Test', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
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


  it('Register Component Test', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const login = fixture.componentInstance;
    expect(login).toBeTruthy();
  });


  // it(`should have as title 'Register Form Component'`, () => {
  //   const fixture = TestBed.createComponent(RegisterComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('Register Form');
  // });


  it('Register Form Input GUI count', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#myform");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(6);
  });


  it('Register Form Button GUI count', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#myform");
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(0);
  });


  it('Testing Form initial values', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const register = fixture.componentInstance;
    const registerFormGroup = register.myform;
    const registeFormValues = {
      userId: '',
      userType: '',
      userEmail: '',
      userPassword: '',
      userName: '',
      userMobileNumber: '',
    }
    expect(registerFormGroup.value).toEqual(registeFormValues);
  });


  it('Testing Form valid', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const login = fixture.componentInstance;
    login.myform.controls?.['userId'].setValue("1000");
    login.myform.controls?.['userType'].setValue("Patient");
    login.myform.controls?.['userEmail'].setValue("domnic@gmail.com");
    login.myform.controls?.['userPassword'].setValue("dom12345");
    login.myform.controls?.['userName'].setValue("Domnic");
    login.myform.controls?.['userMobileNumber'].setValue("9348344331");
    expect(login.myform.valid).toBeTruthy();
  });
});
