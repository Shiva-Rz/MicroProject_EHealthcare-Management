import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackbarService } from '../service/snackbar.service';
import { DoctorService } from '../service/doctor.service';
import { DoctorComponent } from '../doctor/doctor.component';

@Component({
  selector: 'app-doctoroperation',
  templateUrl: './doctoroperation.component.html',
  styleUrls: ['./doctoroperation.component.css']
})
export class DoctoroperationComponent implements OnInit {
  doctorForm:FormGroup;
  constructor(private doctor:DoctorService, private _dialogRef:MatDialogRef<DoctorComponent>,
    @Inject (MAT_DIALOG_DATA) public data:any, private _snackbar: SnackbarService){


    this.doctorForm = new FormGroup ({
      userId: new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
      userType: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z\\s]+')]),  
      userEmail: new FormControl('',[Validators.required, Validators.pattern ('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]),
      userPassword: new FormControl('',[Validators.required]),
      userName: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z\\s]+')]),
      userMobileNumber: new FormControl('',[Validators.required, Validators.pattern('[0-9]+')])
    });
  }
  ngOnInit(): void {
      this.doctorForm.patchValue(this.data); //To view the existing data when click update
  }


  onSubmit(){
   
    if(this.doctorForm.valid){
      if(this.data){// Update Vehicle
        this.doctor.editDoctors(this.data.id,this.doctorForm.value).subscribe({
          next:(val) => {
            this._snackbar.openSnackBar("Doctor details Updated","Done")
            this._dialogRef.close(true);
          }
        })
      }else{// Add Vehicle
        this.doctor.addDoctors(this.doctorForm.value).subscribe({
          next: (val) => {
            this._snackbar.openSnackBar("Doctor Added","Done")
            this._dialogRef.close(true);
          }
        });
      }
   
    }
  }

}
