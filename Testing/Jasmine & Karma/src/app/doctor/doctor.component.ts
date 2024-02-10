import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SnackbarService } from '../service/snackbar.service';
import { DoctorService } from '../service/doctor.service';
import { DoctoroperationComponent } from '../doctoroperation/doctoroperation.component';
import { style } from '@angular/animations';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css',]
})
export class DoctorComponent {


  displayedColumns: string[] = ['userId', 'userType', 'userEmail', 'userPassword', 'userName', 'userMobileNumber', 'action'];
  dataSource!: MatTableDataSource<any>


  constructor(private doctor: DoctorService, private dialog: MatDialog, private snackbar: SnackbarService) { }


  ngOnInit(): void {
    this.viewDoctor(); //To get the values
  }


  addDoctor() {
    const dialogRef = this.dialog.open(DoctoroperationComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.viewDoctor();
        }
      },
      error: console.log
    });
  }

  editDoctor(data: any) {
    const dialogRef = this.dialog.open(DoctoroperationComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.viewDoctor();
        }
      },
      error: console.log
    });
  }

  viewDoctor() {
    this.doctor.viewAllDoctors().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
      }
    });
  }


  removeDoctor(userId: number) {
    this.doctor.removeDoctors(userId).subscribe({
      next: (res) => {
        this.snackbar.openSnackBar("Record Deleted", "Done");
        this.viewDoctor();
      }
    });
  }
  




}
