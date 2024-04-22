const { CombinationLock } = require("./state-exercise");

describe("state", function () {
  it("test success", function () {
    let cl = new CombinationLock([1, 2, 3, 4, 5]);
    expect(cl.status).toEqual("LOCKED");
    cl.enterDigit(1);
    expect(cl.status).toEqual("1");
    cl.enterDigit(2);
    expect(cl.status).toEqual("12");
    cl.enterDigit(3);
    expect(cl.status).toEqual("123");
    cl.enterDigit(4);
    expect(cl.status).toEqual("1234");
    cl.enterDigit(5);
    expect(cl.status).toEqual("OPEN");
  });

  it("test failure", function () {
    let cl = new CombinationLock([1, 2, 3]);
    expect(cl.status).toEqual("LOCKED");
    cl.enterDigit(1);
    expect(cl.status).toEqual("1");
    cl.enterDigit(2);
    expect(cl.status).toEqual("12");
    cl.enterDigit(5);
    expect(cl.status).toEqual("ERROR");
  });
});
