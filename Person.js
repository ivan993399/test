class Person {

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return 'Dog';
  }

}

console.log(new Person('Pera', 'Peric').getFullName());