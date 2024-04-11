const { Game, Goblin, GoblinKing } = require("./ch-of-responsability-exercise");

describe("chain of responsibility", function () {
  it("should handle many goblins", function () {
    let game = new Game();
    let goblin = new Goblin(game);

    expect(goblin.attack).toEqual(1);
    expect(goblin.defense).toEqual(1);

    let goblin2 = new Goblin(game);

    expect(goblin.attack).toEqual(1);
    expect(goblin.defense).toEqual(2);

    let goblin3 = new GoblinKing(game);

    expect(goblin.attack).toEqual(2);
    expect(goblin.defense).toEqual(3);
  });
});
