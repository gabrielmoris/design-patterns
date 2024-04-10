class Person {
  constructor(age = 0) {
    this.age = age;
  }

  drink() {
    return "drinking";
  }
  drive() {
    return "driving";
  }
  drinkAndDrive() {
    return "driving while drunk";
  }
}

class ResponsiblePerson {
  constructor(person) {
    this.person = person;
  }

  drink() {
    if (this.person.age <= 18) {
      return "too young";
    }
    return this.person.drink();
  }

  drive() {
    if (this.person.age <= 16) {
      return "too young";
    }
    return this.person.drive();
  }

  drinkAndDrive() {
    return "dead";
  }

  set age(age) {
    this.person.age = age;
  }
}

module.exports = { Person, ResponsiblePerson };
