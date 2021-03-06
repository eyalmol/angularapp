import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  // template: '<h2>John Doe</h2>',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  //Properties
  user: User | any;

  //Methodes
  constructor() {}
  ngOnInit(): void {
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      address: {
        street: '50 Main st',
        city: 'Boston',
        state: 'MA',
      },
    };
  }
}
