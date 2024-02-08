import { Component } from '@angular/core';
import { User } from '../model/User';
import { Prescription } from '../model/Prescription';
import { PrescriptionService } from '../service/prescription.service';

@Component({
  selector: 'app-viewprescription',
  templateUrl: './viewprescription.component.html',
  styleUrls: ['./viewprescription.component.css']
})
export class ViewprescriptionComponent {
  prescription: Prescription;
  result: string = "";
  prescList: Prescription[] = [];
  constructor(private service: PrescriptionService) {
    this.prescription = new Prescription;
    this.getAllPrescription();
  }

  getAllPrescription() {
    this.service.getPrescription().subscribe(prescription => this.prescList = prescription);

  }
}