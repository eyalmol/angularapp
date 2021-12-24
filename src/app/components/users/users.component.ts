import { Component, OnInit, ViewChild } from '@angular/core';
import { Form } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
  };
  users: User[] | any;
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  data: any;
  //inject the users
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // this.dataService.getData().subscribe((data: any) => console.log(data));
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      this.loaded = true;
    });
  }

  onSubmit({ value, valid }: { value: User; valid: boolean | any }) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      // this.users.unshift(value);
      //adding user from the service
      this.userService.addUser(value);

      this.form.reset();
    }
  }
}
