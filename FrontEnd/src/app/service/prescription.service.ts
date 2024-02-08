import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prescription } from '../model/Prescription';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  private url: string = "http://localhost:8055";


  constructor(private http: HttpClient) { }


  addprescription(prescription: Prescription) {
    this.http.post(this.url + "/AddPrescription", prescription).subscribe();
    return "Prescription Added Successfully";
  }

  getPrescription() {
    return this.http.get<Prescription[]>(this.url + "/ViewAllPrescription");

  }

}
