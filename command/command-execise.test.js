const { Account, Command, Action } = require("./command-exercise");

describe("command", function () {
  it("should be processed correctly", function () {
    let a = new Account();

    console.log("depositing $100");
    let command = new Command(Action.deposit, 100);
    a.process(command);

    expect(a.balance).toEqual(100);
    expect(command.success).toEqual(true);

    console.log("withdrawing $50");
    command = new Command(Action.withdraw, 50);
    a.process(command);

    expect(a.balance).toEqual(50);
    expect(command.success).toEqual(true);

    console.log("attempting to withdraw $150");
    command.amount = 150;
    a.process(command);

    expect(a.balance).toEqual(50);
    expect(command.success).toEqual(false);
  });
});
