import { Component } from '@angular/core';
import { User } from '../model/User';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User;
  myform: FormGroup;
  result: string = "";

  constructor(private service:UserService) {
    this.user = new User;
    // this.getAlldetails();
    this.myform = new FormGroup(
      {
        userId: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
        userType: new FormControl('', [Validators.required]),
        userEmail: new FormControl('', [Validators.required]),
        userPassword: new FormControl('', [Validators.required]),
        userName: new FormControl('', [Validators.required]),
        userMobileNumber: new FormControl('', [Validators.required])
      }
    )
  }

  registerUser(data: any) {
    this.user.userId = data.userId;
    this.user.userType = data.userType;
    this.user.userEmail = data.userEmail;
    this.user.userPassword = data.userPassword;
    this.user.userName = data.userName;
    this.user.userMobileNumber = data.userMobileNumber;
    this.result = this.service.register(this.user);
  }
}
