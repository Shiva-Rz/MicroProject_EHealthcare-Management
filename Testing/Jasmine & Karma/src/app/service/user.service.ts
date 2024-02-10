import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Prescription } from '../model/Prescription';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = "http://localhost:8055";
 
  constructor(private http: HttpClient) { }
  register(user: User) {
    this.http.post(this.url + '/RegisterUser', user).subscribe();
    return "Record Inserted";
  }

  login(user: any) {
    return this.http.post(this.url + "/Login", user);
  }

  edit(user: User) {
    this.http.put(this.url + "/EditUser", user).subscribe();
    return "Record Updated";
  }

  delete(user: User) {
    this.http.delete(this.url + "/RemoveUser/" + user.userId).subscribe();
    return "Record Deleted"
  }

  view(user: User) {
    this.http.get(this.url + "/ViewUser/" + user.userId).subscribe()
    return user;
  }

  viewAll() {
    return this.http.get<User[]>(this.url + "/ViewAllUsers");
  }

  
}

