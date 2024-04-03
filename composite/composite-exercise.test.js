const { SingleValue, ManyValues, sum } = require("./composite-exercise");

describe("composite", function () {
  it("should sum up different objects", function () {
    let singleValue = new SingleValue(11);
    let otherValues = new ManyValues();
    otherValues.push(22);
    otherValues.push(33);
    expect(sum([singleValue, otherValues])).toEqual(66);
  });
});
