const { Person, ResponsiblePerson } = require("./proxy-exercise");

describe("proxy", function () {
  it("does its proxy thing", function () {
    let p = new Person(10);
    let rp = new ResponsiblePerson(p);

    expect(rp.drive()).toEqual("too young");
    expect(rp.drink()).toEqual("too young");
    expect(rp.drinkAndDrive()).toEqual("dead");

    rp.age = 20;

    expect(rp.drive()).toEqual("driving");
    expect(rp.drink()).toEqual("drinking");
    expect(rp.drinkAndDrive()).toEqual("dead");
  });
});
