import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  private url: string = 'http://localhost:8055';

  addDoctors(data: any): Observable<any> {
    return this.http.post(this.url + "/RegisterUser", data);
  }

  removeDoctors(id: number): Observable<any> {
    return this.http.delete(this.url + "/RemoveUser/" + id);
  }

  editDoctors(id: number, data: any): Observable<any> {
    return this.http.put(this.url + "/EditUser", data);
  }

  viewDoctors(): Observable<any> {
    return this.http.get(this.url + "/ViewAllUsers");
  }

  viewAllDoctors(): Observable<any> {
    return this.http.get(this.url + "/ViewAllDoctors");
  }
  
}
