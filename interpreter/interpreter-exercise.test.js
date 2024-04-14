const { ExpressionProcessor } = require("./interpreter-exercise");

describe("interpreter", function () {
  it("calculate expressions with variables", function () {
    let ep = new ExpressionProcessor();
    ep.variables["x"] = 5;
    console.log(ep.calculate("1+2"));

    expect(ep.calculate("1")).toEqual(1);
    expect(ep.calculate("1+2")).toEqual(3);
    expect(ep.calculate("1+x")).toEqual(6);
    expect(ep.calculate("1+xy")).toEqual(0);
  });
});
