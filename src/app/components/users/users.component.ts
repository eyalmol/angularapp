import { Component, OnInit, ViewChild } from '@angular/core';
import { Form } from '@angular/forms';
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
  constructor() {}

  ngOnInit(): void {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018'),
        hide: true,
      },
      {
        firstName: 'Kevin',
        lastName: 'Jonshon',
        email: 'kevin@gmail.com',
        isActive: true,
        registered: new Date('13/11/2017'),
        hide: true,
      },
      {
        firstName: 'karen',
        lastName: 'Williams',
        email: 'karen@gmail.com',
        isActive: true,
        registered: new Date('11/02/2016'),
        hide: true,
      },
    ];
    this.loaded = true;
  }

  onSubmit({ value, valid }: { value: User; valid: boolean | any }) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.users.unshift(value);
      this.form.reset();
    }
  }
}
