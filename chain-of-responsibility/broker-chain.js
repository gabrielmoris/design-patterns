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

const WhatToQuery = Object.freeze({
  attack: 1,
  defense: 2,
});

class Query {
  constructor(creatureName, whatToQuery, value) {
    this.creatureName = creatureName;
    this.whatToQuery = whatToQuery;
    this.value = value;
  }
}

// This is the event Broker: A centralized object that exposes some shared event (queries) and everyone can subscribe to those events.
class Game {
  constructor() {
    this.queries = new Event();
  }

  performQuery(sender, query) {
    this.queries.fire(sender, query);
  }
}

class Creature {
  constructor(game, name, attack, defense) {
    this.name = name;
    this.game = game;
    this.initial_attack = attack;
    this.initial_defense = defense;
  }

  get attack() {
    let q = new Query(this.name, WhatToQuery.attack, this.initial_attack);

    this.game.performQuery(this, q);
    return q.value;
  }

  get defense() {
    let q = new Query(this.name, WhatToQuery.defense, this.initial_defense);

    this.game.performQuery(this, q);
    return q.value;
  }

  toString() {
    return `${this.name} (${this.attack}/${this.defense})`;
  }
}

// Modifiers

class CreatureModifier {
  constructor(game, creature) {
    this.game = game;
    this.creature = creature;
    this.token = game.queries.subscribe(this.handle.bind(this));
  }

  handle(sender, query) {
    // Abstract: implement in inheritors
  }

  dispose() {
    game.queries.unsubscribe(this.token);
  }
}

class DoubleAttackModifier extends CreatureModifier {
  constructor(game, creature) {
    super(game, creature);
  }

  handle(sender, query) {
    if (
      query.creatureName === this.creature.name &&
      query.whatToQuery === WhatToQuery.attack
    ) {
      query.value *= 2;
    }
  }
}

class IncreaseDefenseModifier extends CreatureModifier {
  constructor(game, creature) {
    super(game, creature);
  }

  handle(sender, query) {
    if (
      query.creatureName === this.creature.name &&
      query.whatToQuery === WhatToQuery.defense
    ) {
      query.value += 2;
    }
  }
}

let game = new Game();
let goblin = new Creature(game, "Mr. Goblin", 2, 2);
console.log(goblin.toString());

let dam = new DoubleAttackModifier(game, goblin);
console.log(goblin.toString());

let idm = new IncreaseDefenseModifier(game, goblin);
console.log(goblin.toString());
idm.dispose();

dam.dispose();
console.log(goblin.toString());
