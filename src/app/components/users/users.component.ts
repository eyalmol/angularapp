import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] | any;
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '50 Main st',
          city: 'Boston',
          state: 'MA',
        },
        isActive: true,
        registered: new Date('01/02/2018'),
        hide: true,
      },
      {
        firstName: 'Kevin',
        lastName: 'Jonshon',
        age: 34,
        address: {
          street: '20 schill st',
          city: 'Lynn',
          state: 'MA',
        },
        isActive: true,
        registered: new Date('13/11/2017'),
        hide: true,
      },
      {
        firstName: 'karen',
        lastName: 'Williams',
        age: 26,
        address: {
          street: '55 Mill st',
          city: 'Miami',
          state: 'Florida',
        },
        isActive: true,
        registered: new Date('11/02/2016'),
        hide: true,
      },
    ];
    this.loaded = true;
  }

  addUser(user: User) {
    this.users.push(user);
  }

  toggleHide(user: User) {
    user.hide = !user.hide;
  }
}
