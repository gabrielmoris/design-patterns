//  Base class for executing operations and undoing them.
class Command {
  constructor(execute, undo, value) {
    this.execute = execute;
    this.undo = undo;
    this.value = value;
  }
}

const add = (x, y) => x + y;
const sub = (x, y) => x - y;

// AddCommand and SubCommand are concrete commands that implement addition and subtraction, respectively
class AddCommand extends Command {
  constructor(value) {
    super(add, sub, value);
  }
}

class SubCommand extends Command {
  constructor(value) {
    super(sub, add, value);
  }
}

// Invoker that can execute commands and undo the last command.
class Calculator {
  constructor() {
    this.current = 0;
    this.commands = [];
  }

  execute(command) {
    this.current = command.execute(this.current, command.value);
    this.commands.push(command);
  }

  undo() {
    const command = this.commands.pop();
    this.current = command.undo(this.current, command.value);
  }

  getCurrentValue() {
    return this.current;
  }
}
