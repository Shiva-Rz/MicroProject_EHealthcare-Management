import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatMenuModule } from '@angular/material/menu';

import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { AddprescriptionComponent } from './addprescription/addprescription.component';
import { ViewprescriptionComponent } from './viewprescription/viewprescription.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from './home/home.component';

import { DoctoroperationComponent } from './doctoroperation/doctoroperation.component';
import { PatientoperationComponent } from './patientoperation/patientoperation.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { ViewpatientComponent } from './viewpatient/viewpatient.component';
import { ViewalluserComponent } from './viewalluser/viewalluser.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DoctorComponent,
    PatientComponent,
    AdminComponent,
    AddprescriptionComponent,
    ViewprescriptionComponent,
    HomeComponent,
    DoctoroperationComponent,
    PatientoperationComponent,
    ViewDoctorComponent,
    ViewpatientComponent,
    ViewalluserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule, MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatDialogModule,
    MatSelectModule,
    MatTableModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
