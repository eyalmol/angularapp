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
      },
    ];
    this.loaded = true;

    this.addUser({
      firstName: 'David',
      lastName: 'Jackson',
    });
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
