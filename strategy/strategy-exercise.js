class Creature {
  constructor(attack, health) {
    this.attack = attack;
    this.health = health;
    this.alive = this.health > 0;
    this.id = Creature.id++;
  }
}
Creature.id = 0;

class Game {
  constructor(damageStrategy) {
    this.damageStrategy = damageStrategy;
  }

  springTrapOn(creature) {
    this.damageStrategy.damage(creature);
    return creature.alive;
  }
}

class DamageStrategy {
  damage(creature) {
    if (creature.health <= 0) {
      creature.alive = false;
    }
  }
}

class ConstantDamageStrategy extends DamageStrategy {
  damage(creature) {
    creature.health--;
    super.damage(creature);
  }
}

class GrowingDamageStrategy extends DamageStrategy {
  constructor() {
    super();
    this.creaturesDamaged = {};
  }
  damage(creature) {
    if (!this.creaturesDamaged[creature.id]) {
      this.creaturesDamaged[creature.id] = 1;
      creature.health--;
    } else {
      this.creaturesDamaged[creature.id]++;
      creature.health -= this.creaturesDamaged[creature.id];
    }
    super.damage(creature);
    console.log(creature);
  }
}
// GrowingDamageStrategy.impact = {};

module.exports = {
  ConstantDamageStrategy,
  Creature,
  Game,
  GrowingDamageStrategy,
};
