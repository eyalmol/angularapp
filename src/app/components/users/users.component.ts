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
  currentClasses = {};
  currentStyle: {} | any;
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
        image: 'http://lorempixel.com/600/600/people/3',
        isActive: true,
        balance: 100,
        registered: new Date('01/02/2018'),
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
        image: 'http://lorempixel.com/600/600/people/2',
        isActive: true,
        balance: 200,
        registered: new Date('13/11/2017'),
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
        image: 'http://lorempixel.com/600/600/people/1',
        isActive: true,
        balance: 50,
        registered: new Date('11/02/2016'),
      },
    ];
    this.loaded = true;

    this.addUser({
      firstName: 'David',
      lastName: 'Jackson',
    });
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended,
    };
  }

  setCurrentStyles() {
    this.currentStyle = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px',
    };
  }
}
