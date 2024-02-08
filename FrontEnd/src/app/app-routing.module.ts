import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AdminComponent } from './admin/admin.component';
import { PatientComponent } from './patient/patient.component';
import { AddprescriptionComponent } from './addprescription/addprescription.component';
import { ViewprescriptionComponent } from './viewprescription/viewprescription.component';
import { HomeComponent } from './home/home.component';
import { DoctoroperationComponent } from './doctoroperation/doctoroperation.component';
import { PatientoperationComponent } from './patientoperation/patientoperation.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { ViewpatientComponent } from './viewpatient/viewpatient.component';
import { ViewalluserComponent } from './viewalluser/viewalluser.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Doctor', component: DoctorComponent },
  { path: 'Admin', component: AdminComponent },
  { path: 'Patient', component: PatientComponent },
  { path: 'AddPrescription', component: AddprescriptionComponent },
  { path: 'viewprescription', component: ViewprescriptionComponent },
  { path: 'doctoroperation', component: DoctorComponent },
  { path: 'patientoperation', component: PatientoperationComponent },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'ViewDoctorComponent', component: ViewDoctorComponent },
  { path: 'viewpatient', component: ViewpatientComponent },
  { path: 'viewAllUser', component: ViewalluserComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
