// Subject:  has methods to subscribe and unsubscribe observers,
// as well as a notify method to send updates to all registered observers

class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

// Observer:  has an update method that is called by the Subject when it notifies its observers.
class Observer {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(`${this.name} received update: ${data}`);
  }
}

// Usage
const subject = new Subject();

const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");
const observer3 = new Observer("Observer 3");

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.subscribe(observer3);

subject.notify("Hello, world!");
// Output:
// Observer 1 received update: Hello, world!
// Observer 2 received update: Hello, world!
// Observer 3 received update: Hello, world!

subject.unsubscribe(observer2);
subject.notify("Another update");
// Output:
// Observer 1 received update: Another update
// Observer 3 received update: Another update
