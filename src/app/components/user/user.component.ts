import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  // template: '<h2>John Doe</h2>',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  //Properties
  firstName: string;
  lastName: string;
  age: number;
  address;
  foo: any; //can be cast to anything
  hasKids: boolean;
  numberArray: number[];
  mixedArray: any; //can put anything inside(string,number,boolean)

  //Methodes
  constructor() {
    this.firstName = 'John';
    this.lastName = 'Doe';
    this.age = 30;
    this.address = {
      street: '50 Main st',
      city: 'Boston',
      state: 'MASS',
    };

    this.foo = true;
    this.hasKids = true;
    this.numberArray = [1, 2, 3];
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
