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
    this.generalId = 0;
  }
  createPerson(name) {
    const newPerson = new Person(this.generalId, name);
    this.generalId++;
    return newPerson;
  }
}

const personsCreator = new PersonFactory();
let person1 = personsCreator.createPerson("Antonio");
let person2 = personsCreator.createPerson("Francisco");

console.log(person1);
console.log(person2);
