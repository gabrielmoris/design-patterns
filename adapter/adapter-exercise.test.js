const {
  SquareToRectangleAdapter,
  Square,
  area,
} = require("./adapter-exercise");

describe("adapter", function () {
  it("should adapt things, duh!", function () {
    let sq = new Square(11);
    let adapter = new SquareToRectangleAdapter(sq);
    expect(area(adapter)).toEqual(121);
  });
});
