import { Component } from '@angular/core';
import { User } from '../model/User';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-viewpatient',
  templateUrl: './viewpatient.component.html',
  styleUrls: ['./viewpatient.component.css']
})
export class ViewpatientComponent {
  title = "view patient"
  patient: User;
  result: string = "";
  patList: User[] = [];
  constructor(private service: PatientService) {
    this.patient = new User;
    this.viewAllPatients();
  }

  viewAllPatients() {
    this.service.viewAllpatients().subscribe(patient => this.patList = patient);

  }
}
