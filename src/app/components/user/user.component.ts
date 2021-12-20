import { Component } from '@angular/core';
import { User } from '../../models/User';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  // template: '<h2>John Doe</h2>',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  //Properties
  user: User;

  //Methodes
  constructor() {
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
