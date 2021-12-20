import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  // template: '<h2>John Doe</h2>',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  //Properties
  firstName = 'john';
  lastName = 'Doe';
  age = 30;
  //methodes
  constructor() {
    // this.sayHello();
  }

  sayHello() {
    console.log(`hello ${this.firstName}`);
  }

  hasBirthDay() {
    this.age += 1;
  }
}
