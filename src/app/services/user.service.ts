import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[];
  data: Observable<any> | any;
  constructor() {
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
  }
  // getData() {
  //   this.data = new Observable((observer) => {
  //     setTimeout(() => {
  //       observer.next(1);
  //     }, 1000);
  //     setTimeout(() => {
  //       observer.next(2);
  //     }, 2000);
  //     setTimeout(() => {
  //       observer.next(3);
  //     }, 3000);
  //     setTimeout(() => {
  //       observer.next(4);
  //     }, 4000);
  //   });
  //   return this.data;
  // }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
