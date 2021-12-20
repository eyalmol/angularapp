import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  // template: '<h2>John Doe</h2>',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  //Properties
  firstName = 'John';
  lastName = 'Doe';
  age = 30;
  //methodes
  address = {
    street: '50 main st',
    city: 'Boston',
    state: 'mass',
  };
  constructor() {
    // this.sayHello();
  }

  sayHello() {
    console.log(`hello ${this.firstName}`);
  }

  hasBirthDay() {
    this.age += 1;
  }

  showAge() {
    return this.age + 2;
  }
}
