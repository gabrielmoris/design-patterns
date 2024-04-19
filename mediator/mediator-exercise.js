class Event {
  constructor() {
    this.handlers = new Map();
    this.count = 0;
  }

  subscribe(handler) {
    this.handlers.set(this.count++, handler);
    return this.count;
  }

  unsubscribe(index) {
    this.handlers.delete(index);
  }

  fire(sender, args) {
    this.handlers.forEach((v, k) => {
      v(sender, args);
    });
  }
}

class Mediator {
  constructor() {
    this.alert = new Event();
  }

  broadcast(sender, message) {
    this.alert.fire(sender, message);
  }
}
let participantID = 0;
class Participant {
  constructor(mediator, id = participantID) {
    this.value = 0;
    this.id = id;
    this.mediator = mediator;
    mediator.alert.subscribe(this.alert.bind(this)); // the alert need to have the enviroment from here
  }

  alert(sender, n) {
    if (sender !== this) this.value += n;
  }

  say(n) {
    this.mediator.broadcast(this, n);
  }
}

module.exports = { Mediator, Participant };
