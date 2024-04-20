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
    this.property_changed = new Event();
  }

  get age() {
    return _age;
  }

  set age(value) {
    if (!value || this._age === value) {
      return;
    }

    let oldCanVote = this.canVote;

    this._age = value;
    this.property_changed.fire(this, new PropertyChangedArgs("age", value));

    if (oldCanVote !== this.canVote) {
      this.property_changed.fire(this, new PropertyChangedArgs("canVote", this.canVote));
    }
  }

  get canVote() {
    return this._age >= 18;
  }
}

class VotingChecker {
  constructor(person) {
    this.person = person;
    this.person.property_changed.subscribe(this.votingChanged.bind(this));
  }

  votingChanged(sender, args) {
    if (sender === this.person && args.name === "canVote") {
      console.log(`You are more than 18, from now you can vote.`);
    }
  }
}

let person = new Person("John");
let checker = new VotingChecker(person);
for (let i = 10; i < 20; ++i) {
  console.log(`Changing age to ${i}`);
  person.age = i;
}
