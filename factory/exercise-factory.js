//implement a  PersonFactory that has a non-static
// createPerson()  method that takes a person's name and
// returns a person initialized with this name and an id.
class Person {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class PersonFactory {
  constructor() {
    this.id = 0;
  }
  createPerson(name) {
    const person = new Person(this.id, name);
    this.id += 1;
    return person;
  }
}

module.exports = { PersonFactory };
