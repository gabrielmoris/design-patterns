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
    this.handlers.forEach((v, k) => v(sender, args));
  }
}

class Game {
  constructor() {
    this.ratEnters = new Event();
    this.ratDies = new Event();
    this.notifyRat = new Event();
  }

  newRat(sender) {
    this.ratEnters.fire(sender);
  }

  dieRat(sender) {
    this.ratDies.fire(sender);
  }

  firenotifyRat(sender, rat) {
    this.notifyRat.fire(sender, rat);
  }
}

class Rat {
  constructor(game) {
    this.game = game;
    this.attack = 1;
    game.ratEnters.subscribe(this.handleRatEnters.bind(this));
    game.ratDies.subscribe(this.handleRatDies.bind(this));
    game.notifyRat.subscribe(this.handleNotifyRat.bind(this));
    game.newRat(this);
  }

  handleRatEnters(sender) {
    if (sender !== this) {
      this.attack++;
      this.game.firenotifyRat(this, sender);
    }
  }

  handleRatDies() {
    this.attack--;
  }

  handleNotifyRat(sender = null, rat) {
    if (rat === this) {
      this.attack++;
    }
  }

  die() {
    this.game.dieRat(this);
  }
}

module.exports = { Game, Rat };
