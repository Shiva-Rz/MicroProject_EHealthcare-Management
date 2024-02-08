import { Component } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-viewalluser',
  templateUrl: './viewalluser.component.html',
  styleUrls: ['./viewalluser.component.css']
})
export class ViewalluserComponent {
  user: User;
  result: string = "";
  userList: User[] = [];
  constructor(private service: UserService) {
    this.user = new User;
    this.viewAllUser();
  }

  viewAllUser() {
    this.service.viewAll().subscribe(user => this.userList = user);

  }
}
