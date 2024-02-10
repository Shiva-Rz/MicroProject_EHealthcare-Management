import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  

  constructor(private http: HttpClient) { }

  private url: string = 'http://localhost:8055';

  addPatient(data: any): Observable<any> {
    return this.http.post(this.url + "/RegisterUser", data);
  }

  removePatient(id: number): Observable<any> {
    return this.http.delete(this.url + "/RemoveUser/" + id);
  }

  editPatient(id: number, data: any): Observable<any> {
    return this.http.put(this.url + "/EditUser", data);
  }

  viewpatients(): Observable<any> {
    return this.http.get(this.url + "/ViewAllUsers");
  }

  viewAllpatients(): Observable<any> {
    return this.http.get(this.url + "/ViewAllPatients");
  }
}
