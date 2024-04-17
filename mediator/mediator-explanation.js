// Mediator:  the ChatRoomMediator class acts as the mediator,
// handling the communication between the User objects (the colleagues).
class ChatRoomMediator {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
    user.mediator = this;
  }

  sendMessage(message, user) {
    this.users.forEach((u) => {
      if (u !== user) {
        u.receive(message);
      }
    });
  }
}

// Colleague: The User objects don't need to know about each other's implementation details;
// they only need to interact with the mediator.

class User {
  constructor(name) {
    this.name = name;
    this.mediator = null;
  }

  send(message) {
    this.mediator.sendMessage(message, this);
  }

  receive(message) {
    console.log(`${this.name} received message: ${message}`);
  }
}

// Usage
const mediator = new ChatRoomMediator();

const user1 = new User("John");
const user2 = new User("Jane");
const user3 = new User("Bob");

mediator.addUser(user1);
mediator.addUser(user2);
mediator.addUser(user3);

user1.send("Hello, everyone!");
// Output:
// Jane received message: Hello, everyone!
// Bob received message: Hello, everyone!
