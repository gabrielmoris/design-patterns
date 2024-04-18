const { Mediator, Participant } = require("./mediator-exercise");

describe("mediator", function () {
  it("should handle number alerts", function () {
    let mediator = new Mediator();
    let p1 = new Participant(mediator);
    let p2 = new Participant(mediator);

    expect(p1.value).toEqual(0);
    expect(p2.value).toEqual(0);

    p1.say(2);

    expect(p1.value).toEqual(0);
    expect(p2.value).toEqual(2);

    p2.say(4);

    expect(p1.value).toEqual(4);
    expect(p2.value).toEqual(2);
  });
});
