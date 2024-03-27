const { Line, Point } = require("./exercise-prototype");

describe("prototype", function () {
  it("test", function () {
    let line1 = new Line(new Point(3, 3), new Point(10, 10));

    let line2 = line1.deepCopy();
    line1.start.x = line1.end.x = line1.end.x = line1.end.y = 0;

    expect(line2.start.x).toEqual(3);
    expect(line2.start.y).toEqual(3);
    expect(line2.end.x).toEqual(10);
    expect(line2.end.y).toEqual(10);
  });
});
