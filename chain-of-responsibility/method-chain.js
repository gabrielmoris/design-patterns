class Creature {
  constructor(name, attack, defense) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
  }

  toString() {
    return `${this.name} (${this.attack}/${this.defense})`;
  }
}

class CreatureModifier {
  constructor(creature) {
    this.creature = creature;
    this.next = null; // linked list
  }

  add(modifier) {
    if (this.next) this.next.add(modifier);
    else this.next = modifier;
  }

  handle() {
    if (this.next) this.next.handle();
  }
}

class DoubleAttackModifier extends CreatureModifier {
  constructor(creature) {
    super(creature);
  }

  handle() {
    console.log(`Doubling ${this.creature.name}'s Attack.`);
    this.creature.attack *= 2;
    super.handle();
  }
}

class IncreaseDefenseModifier extends CreatureModifier {
  constructor(creature) {
    super(creature);
  }

  handle() {
    if (this.creature.attack <= 2) {
      console.log(`Doubling ${this.creature.name}'s Defense.`);
      this.creature.defense++;
    }
    super.handle();
  }
}

class NoBonusesModifier extends CreatureModifier {
  constructor(creature) {
    super(creature);
  }

  handle() {
    console.log("No bonuses for you.");
  }
}

let goblin = new Creature("goblin", 1, 1);
console.log(goblin.toString());

let root = new CreatureModifier(goblin);

root.add(new NoBonusesModifier(goblin));
// root.add(new DoubleAttackModifier(goblin)); // If I add this class no bonu will be added to this creature.
console.log(goblin.toString());

root.add(new IncreaseDefenseModifier(goblin));
root.handle(); // do it only once at end

console.log(goblin.toString());
