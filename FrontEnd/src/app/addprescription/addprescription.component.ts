import { Component } from '@angular/core';
import { User } from '../model/User';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Prescription } from '../model/Prescription';
import { Router } from '@angular/router';
import { PrescriptionService } from '../service/prescription.service';

@Component({
  selector: 'app-addprescription',
  templateUrl: './addprescription.component.html',
  styleUrls: ['./addprescription.component.css']
})
export class AddprescriptionComponent {
  prescription: Prescription;
  myform: FormGroup;
  result: string = "";

  constructor(private service: PrescriptionService, private router: Router) {
    this.prescription = new Prescription();
    // this.getAlldetails();
    this.myform = new FormGroup(
      {
        prescriptionId: new FormControl('', [Validators.required]),
        prescriptionDate: new FormControl('', [Validators.required]),
        prescriptionTablets: new FormControl('', [Validators.required]),
        userId: new FormControl('', [Validators.required]),
        userType: new FormControl('', [Validators.required]),
      }
    );
  }

  addprescription(data: any) {
    this.prescription.prescriptionId = data.prescriptionId;
    this.prescription.prescriptionDate = data.prescriptionDate;
    this.prescription.prescriptionTablets = data.prescriptionTablets;
    this.prescription.userId = data.userId;
    this.prescription.userType = data.userType;
    this.result = this.service.addprescription(this.prescription);
  }
}