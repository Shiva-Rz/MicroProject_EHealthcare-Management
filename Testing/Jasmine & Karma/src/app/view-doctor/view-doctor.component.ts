import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../service/user.service';
import { User } from '../model/User';
import { DoctorService } from '../service/doctor.service';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css']
})
export class ViewDoctorComponent {
  title = "viewdoctor";
  doctor: User;
  result: string = "";
  docList: User[] = [];
  constructor(private service: DoctorService) {
    this.doctor = new User;
    this.viewAllDoctor();
  }

  viewAllDoctor() {
    this.service.viewAllDoctors().subscribe(doctor => this.docList = doctor);

  }
}
