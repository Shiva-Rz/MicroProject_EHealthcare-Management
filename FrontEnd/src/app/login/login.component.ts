import { Component } from '@angular/core';
import { User } from '../model/User';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User;
  myform: FormGroup;
  result: string = "";

  constructor(private service: UserService, private router: Router) {
    this.user = new User;
    // this.getAlldetails();
    this.myform = new FormGroup(
      {
        userEmail: new FormControl('', [Validators.required]),
        userPassword: new FormControl('', [Validators.required]),
      }
    );
  }

  login(data: any) {
    this.user.userEmail = data.userEmail;
    this.user.userPassword = data.userPassword;
    this.service.login(this.user).subscribe((resultdata: any) => {
      console.log(resultdata);


      if (resultdata.message == 'Admin Success') {
        this.router.navigate(['/Admin'])
      } else if (resultdata.message == 'Doctor Success') {
        this.router.navigate(['/Doctor']);
      } else if (resultdata.message == 'Patient Success') {
        this.router.navigate(['/Patient']);
      } else {
        alert("Invalid User"); 
      }
    });
  }

}
