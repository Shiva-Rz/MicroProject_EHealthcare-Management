import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackbarService } from '../service/snackbar.service';
import { PatientService } from '../service/patient.service';
import { PatientComponent } from '../patient/patient.component';

@Component({
  selector: 'app-patientoperation',
  templateUrl: './patientoperation.component.html',
  styleUrls: ['./patientoperation.component.css']
})
export class PatientoperationComponent implements OnInit {
  patientForm: FormGroup;
  constructor(private patient: PatientService, private _dialogRef: MatDialogRef<PatientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _snackbar: SnackbarService) {


    this.patientForm = new FormGroup({
      userId: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      userType: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z\\s]+')]),
      userEmail: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]),
      userPassword: new FormControl('', [Validators.required]),
      userName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z\\s]+')]),
      userMobileNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')])
    });
  }
  ngOnInit(): void {
    this.patientForm.patchValue(this.data); //To view the existing data when click update
  }


  onSubmit() {

    if (this.patientForm.valid) {
      if (this.data) {
        this.patient.editPatient(this.data.id, this.patientForm.value).subscribe({
          next: (val) => {
            this._snackbar.openSnackBar("Patient details Updated", "Done")
            this._dialogRef.close(true);
          }
        })
      } else {
        this.patient.addPatient(this.patientForm.value).subscribe({
          next: (val) => {
            this._snackbar.openSnackBar("Patient Added", "Done")
            this._dialogRef.close(true);
          }
        });
      }

    }
  }

}
