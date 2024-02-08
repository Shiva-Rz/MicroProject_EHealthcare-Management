import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SnackbarService } from '../service/snackbar.service';
import { PatientService } from '../service/patient.service';
import { PatientoperationComponent } from '../patientoperation/patientoperation.component';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css',]
})
export class PatientComponent {


  displayedColumns: string[] = ['userId', 'userType', 'userEmail', 'userPassword', 'userName', 'userMobileNumber', 'action'];
  dataSource!: MatTableDataSource<any>


  constructor(private patient: PatientService, private dialog: MatDialog, private snackbar: SnackbarService) { }


  ngOnInit(): void {
    this.viewPatient(); //To get the values
  }


  addPatient() {
    const dialogRef = this.dialog.open(PatientoperationComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.viewPatient();
        }
      },
      error: console.log
    });
  }

  editPatient(data: any) {
    const dialogRef = this.dialog.open(PatientoperationComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.viewPatient();
        }
      },
      error: console.log
    });
  }

  removePatient(userId: number) {
    this.patient.removePatient(userId).subscribe({
      next: (res) => {
        this.snackbar.openSnackBar("Record Deleted", "Done");
        this.viewPatient();
      }
    });
  }

  viewPatient() {
    this.patient.viewAllpatients().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
      }
    });
  }
  

}
