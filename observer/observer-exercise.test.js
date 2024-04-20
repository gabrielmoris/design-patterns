const { Game, Rat } = require("./observer-exercise");

describe("observer", function () {
  it("single rat test", function () {
    let game = new Game();
    let rat = new Rat(game);
    expect(rat.attack).toEqual(1);
  });

  it("two rat test", function () {
    let game = new Game();
    let rat = new Rat(game);
    let rat2 = new Rat(game);
    expect(rat.attack).toEqual(2);
    expect(rat2.attack).toEqual(2);
  });

  it("three rats one dies", function () {
    let game = new Game();

    let rat = new Rat(game);
    expect(rat.attack).toEqual(1);

    let rat2 = new Rat(game);
    expect(rat.attack).toEqual(2);
    expect(rat2.attack).toEqual(2);

    let rat3 = new Rat(game);
    expect(rat.attack).toEqual(3);
    expect(rat2.attack).toEqual(3);
    expect(rat3.attack).toEqual(3);
    rat3.die();

    expect(rat.attack).toEqual(2);
    expect(rat2.attack).toEqual(2);
  });
});
