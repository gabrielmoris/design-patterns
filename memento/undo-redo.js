class Memento {
  constructor(balance) {
    this.balance = balance;
  }
}

class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
    this.changes = [new Memento(this.balance)];
    this.current = 0;
  }

  deposit(amount) {
    this.balance += amount;
    const m = new Memento(this.balance);
    this.changes.push(m);
    this.current++;
    return m;
  }

  restore(m) {
    if (m) {
      this.balance = m.balance;
      this.changes.push(m);
      this.current = this.changes.count - 1;
    }
  }

  undo() {
    if (this.current > 0) {
      let m = this.changes[--this.current];
      this.balance = m.balance;
      return m;
    }
    return "Not possible";
  }

  redo() {
    if (this.current + 1 < this.changes.length) {
      let m = this.changes[++this.current];
      this.balance = m.balance;
      return m;
    }
    return "Not possible";
  }

  toString() {
    return `Balance: ${this.balance}`;
  }
}

let ba = new BankAccount();

let m1 = ba.deposit(50);
let m2 = ba.deposit(20);
console.log("Deposit 2 times: ", ba.toString());

ba.undo();
console.log("Undo1: ", ba.toString());
ba.undo();
ba.undo();
console.log("Undo2 (2 times): ", ba.toString());

ba.redo();
ba.redo();
ba.redo();
console.log("Redo (3 times): ", ba.toString());
