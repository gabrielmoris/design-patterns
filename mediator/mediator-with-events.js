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

class PlayerScoredEventsArgs {
  constructor(playerName, goalsScoredSoFar) {
    this.playerName = playerName;
    this.goalsScoredSoFar = goalsScoredSoFar;
  }

  print() {
    console.log(
      `${this.playerName} has scored his ${this.goalsScoredSoFar} goal.`
    );
  }
}

class Game {
  constructor() {
    this.events = new Event();
  }
}

class Player {
  constructor(name, game) {
    this.name = name;
    this.game = game;
    this.goalsScored = 0;
  }

  score() {
    this.goalsScored++;
    let args = new PlayerScoredEventsArgs(this.name, this.goalsScored);
    this.game.events.fire(this, args);
  }
}

class Coach {
  constructor(game) {
    game.events.subscribe((sender, args) => {
      if (args instanceof PlayerScoredEventsArgs && args.goalsScoredSoFar > 2) {
        console.log(`Coach says: Well done, ${args.playerName} !!`);
      }
    });
  }
}

let game = new Game();
let player = new Player("Donato", game);
let coach = new Coach(game);

player.score();
player.score();
player.score();
