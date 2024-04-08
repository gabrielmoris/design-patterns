const { Sentence } = require("./flyweight-exercise");

describe("flyweight", function () {
  it("should let us capitalize words", function () {
    let s = new Sentence("alpha beta gamma");
    s.at(1).capitalize = true;
    expect(s.toString()).toEqual("alpha BETA gamma");
  });
});
