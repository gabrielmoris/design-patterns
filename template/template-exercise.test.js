const { Creature, TemporaryCardDamageGame, PermanentCardDamageGame } = require("./template-exercise");

describe("template method", function () {
  it("impasse test", function () {
    let c1 = new Creature(1, 2);
    let c2 = new Creature(1, 2);
    let game = new TemporaryCardDamageGame([c1, c2]);
    expect(game.combat(0, 1)).toEqual(-1);
    expect(game.combat(0, 1)).toEqual(-1);
  });

  it("temporary murder test", function () {
    let c1 = new Creature(1, 1);
    let c2 = new Creature(2, 2);
    let game = new TemporaryCardDamageGame([c1, c2]);
    expect(game.combat(0, 1)).toEqual(1);
  });

  it("double murder test", function () {
    let c1 = new Creature(2, 2);
    let c2 = new Creature(2, 2);
    let game = new TemporaryCardDamageGame([c1, c2]);
    expect(game.combat(0, 1)).toEqual(-1);
  });

  it("permanent damage death test", function () {
    let c1 = new Creature(1, 2);
    let c2 = new Creature(1, 3);
    let game = new PermanentCardDamageGame([c1, c2]);
    expect(game.combat(0, 1)).toEqual(-1);
    expect(game.combat(0, 1)).toEqual(1);
  });
});
