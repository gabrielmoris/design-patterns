let Action = Object.freeze({
  deposit: 0,
  withdraw: 1,
});

class Command {
  constructor(action, amount) {
    this.action = action;
    this.amount = amount;
    this.success = false;
  }
}

class Account {
  constructor() {
    this.balance = 0;
  }

  process(cmd) {
    switch (cmd.action) {
      case Action.deposit:
        this.deposit(cmd.amount);
        cmd.success = true;
        break;
      case Action.withdraw:
        cmd.success = this.withdraw(cmd.amount);
        break;
    }
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (this.balance - amount < 0) {
      return false;
    }
    this.balance -= amount;
    return true;
  }
}

module.exports = { Account, Command, Action };
