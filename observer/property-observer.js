class Event {
  constructor() {
    this.handlers = new Map();
    this.count = 0;
  }

  subscribe(handler) {
    this.handlers.set(++this.count, handler);
    return this.count;
  }

  unsubscribe(index) {
    this.handlers.delete(index);
  }

  fire(sender, args) {
    this.handlers.forEach((v, k) => v(sender, args));
  }
}

class PropertyChangedArgs {
  constructor(name, newVal) {
    this.name = name;
    this.newValue = newVal;
  }
}

class Person {
  constructor(age) {
    this._age = age;
    this.propertyChanged = new Event();
  }

  get age() {
    return this._age;
  }

  set age(val) {
    if (!val || this._age === val) {
      return;
    }
    this._age = val;
    this.propertyChanged.fire(this, new PropertyChangedArgs("age", val));
  }
}

// this is the notification class
class RegistrationChecker {
  constructor(person) {
    this.person = person;
    this.token = person.propertyChanged.subscribe(this.ageChanged.bind(this));
  }

  ageChanged(sender, args) {
    if (sender === this.person && args.name === "age") {
      if (args.newValue < 13) {
        console.log(`Sorry, you are too young, still ${args.newValue} years old!`);
      } else {
        console.log("You can Register.");
        sender.propertyChanged.unsubscribe(this.token);
      }
    }
  }
}

let person = new Person("Gabriel");

let checkker = new RegistrationChecker(person);

for (let i = 10; i < 15; i++) {
  console.log(`changing the age to ${i}`);
  person.age = i;
}
