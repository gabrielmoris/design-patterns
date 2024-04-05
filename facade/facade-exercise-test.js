const { MagicSquareGenerator } = require("./facade-exercise");

describe("facade", function () {
  it("should generate good magic squares", function () {
    let gen = new MagicSquareGenerator();
    let square = gen.generate(3);

    let adder = function (p, c) {
      return p + c;
    };

    let first = square[0].reduce(adder);

    for (let row of square) expect(row.reduce(adder)).toEqual(first);
  });
});
