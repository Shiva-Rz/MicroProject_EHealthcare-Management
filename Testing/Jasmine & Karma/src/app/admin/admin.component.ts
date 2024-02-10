import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  myForm: FormGroup;
  user: User;
  result: string = "";
  userList: User[] = [];
  constructor(private service: UserService) {
    this.myForm = new FormGroup(
      {
        userId: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
        userType: new FormControl('', [Validators.required]),
        userEmail: new FormControl('', [Validators.required]),
        userPassword: new FormControl('', [Validators.required]),
        userName: new FormControl('', [Validators.required]),
        userMobileNumber: new FormControl('', [Validators.required])
      }
    ),
      this.user = new User();
    this.getAllUsers();
  }

  registerUser(data: any) {
    this.user.userId = data.userId;
    this.user.userType = data.userType;
    this.user.userEmail = data.userEmail;
    this.user.userPassword = data.userPassword;
    this.user.userName = data.userName;
    this.user.userMobileNumber = data.userMobileNumber;
    this.result = this.service.register(this.user);
    this.getAllUsers();
  }

  updateUser(data: any) {
    this.user.userId = data.userId;
    this.user.userType = data.userType;
    this.user.userEmail = data.userEmail;
    this.user.userPassword = data.userPassword;
    this.user.userName = data.userName;
    this.user.userMobileNumber = data.userMobileNumber;
    this.result = this.service.edit(this.user);
    this.getAllUsers();
  }
  deleteUser(data: any) {
    this.user.userId = data.userId;

    this.result = this.service.delete(this.user);
    this.getAllUsers();
  }

  getAllUsers() {
    this.service.viewAll().subscribe(user => this.userList = user);
  }


}
