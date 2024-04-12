let WhatToQuery = Object.freeze({
  attack: 1,
  defense: 2,
});

class Query {
  constructor(whatToQuery, result) {
    this.whatToQuery = whatToQuery;
    this.result = result;
  }
}

class Goblin {
  constructor(game, baseAttack = 1, baseDefense = 1) {
    this.game = game;
    game.creatures.push(this);
    this.baseAttack = baseAttack;
    this.baseDefense = baseDefense;
  }

  handleQuery(source, query) {
    if (source === this) {
      switch (query.whatToQuery) {
        case WhatToQuery.attack:
          query.result += this.baseAttack;
          break;
        case WhatToQuery.defense:
          query.result += this.baseDefense;
          break;
      }
    } else if (query.whatToQuery === WhatToQuery.defense) {
      query.result++;
    }
  }

  get defense() {
    let q = new Query(WhatToQuery.defense, 0);
    for (let c of this.game.creatures) c.handleQuery(this, q);
    return q.result;
  }

  get attack() {
    let q = new Query(WhatToQuery.attack, 0);
    for (let c of this.game.creatures) c.handleQuery(this, q);
    return q.result;
  }
}

class GoblinKing extends Goblin {
  constructor(game) {
    super(game, 3, 3);
  }

  handleQuery(source, query) {
    if (source !== this && query.whatToQuery === WhatToQuery.attack) {
      query.result++;
    }
    super.handleQuery(source, query);
  }
}

class Game {
  constructor() {
    this.creatures = [];
  }
}

module.exports = { Game, Goblin, GoblinKing };
