class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`${amount} deposited \nNew balance is ${this.balance}€`);
  }

  wothdraw(amount) {
    if (this.balance - amount >= BankAccount.overdraftLimit) {
      this.balance -= amount;
      console.log(`${amount} withdrew \nNew balance is ${this.balance}€`);
    }
  }

  toString() {
    return `Balance: ${this.balance}`;
  }
}

BankAccount.overdraftLimit = -500;

const bank = new BankAccount(100);

bank.deposit(100);

console.log(bank.toString());

// Until here we have no way to audit the information and get track of the movements

// Command

let Action = Object.freeze({
  deposit: "deposit",
  withdraw: "withdraw",
});

class BankAccountCommand {
  constructor(account, action, amount) {
    this.account = account;
    this.action = action;
    this.amount = amount;
    this.commands = [];
  }

  call() {
    switch (this.action) {
      case Action.deposit:
        this.account.deposit(this.amount);
        this.commands.push({ action: this.action, amount: this.amount });
        break;
      case Action.withdraw:
        this.account.withdraw(this.amount);
        this.commands.push({ action: this.action, amount: this.amount });
        break;
    }
  }

  toString() {
    return JSON.stringify(this.commands);
  }
}

const cmd = new BankAccountCommand(bank, Action.deposit, 50);

cmd.call();

console.log(bank.toString());

console.log(cmd.toString());
