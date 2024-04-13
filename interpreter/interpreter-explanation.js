// The first step is to define the grammar of the language we want to interpret. In this case, we'll
// create a simple expression language that supports basic arithmetic operations like addition,
// subtraction, multiplication, and division.

// Base class for all expressions
class Expression {
  evaluate(context) {
    throw new Error("evaluate(context) must be implemented");
  }
}

// Constant expression
class ConstantExpression extends Expression {
  constructor(value) {
    super();
    this.value = value;
  }

  evaluate(context) {
    return this.value;
  }
}

// Variable expression
class VariableExpression extends Expression {
  constructor(name) {
    super();
    this.name = name;
  }

  evaluate(context) {
    return context.get(this.name);
  }
}

// Binary expression (e.g., addition, subtraction, multiplication, division)
class BinaryExpression extends Expression {
  constructor(left, operator, right) {
    super();
    this.left = left;
    this.operator = operator;
    this.right = right;
  }

  evaluate(context) {
    const leftValue = this.left.evaluate(context);
    const rightValue = this.right.evaluate(context);

    switch (this.operator) {
      case "+":
        return leftValue + rightValue;
      case "-":
        return leftValue - rightValue;
      case "*":
        return leftValue * rightValue;
      case "/":
        return leftValue / rightValue;
      default:
        throw new Error(`Unknown operator: ${this.operator}`);
    }
  }
}

// Now that we have defined the grammar, we can create an interpreter that can evaluate expressions in this language.
// The interpreter will take an expression and a context object (which holds the values of the variables)
// and return the result of evaluating the expression.

class Interpreter {
  constructor() {
    this.context = new Map();
  }

  interpret(expression) {
    return expression.evaluate(this.context);
  }

  assign(name, value) {
    this.context.set(name, value);
  }

  get(name) {
    return this.context.get(name);
  }
}

const interpreter = new Interpreter();

// Assign values to variables
interpreter.assign("x", 10);
interpreter.assign("y", 20);

// Create an expression
const expression = new BinaryExpression(
  new VariableExpression("x"),
  "+",
  new BinaryExpression(
    new VariableExpression("y"),
    "-",
    new ConstantExpression(5)
  )
);

// Evaluate the expression
const result = interpreter.interpret(expression);
console.log(result); // Output: 25

// In this example, we create an expression (x + (y - 5)), assign values to the variables x and y,
// and then use the Interpreter to evaluate the expression and get the result.

// The key aspects of the Interpreter Pattern in this example are:

// 1. The definition of the grammar using classes that represent different types of expressions.
// 2. The Interpreter class that manages the context (variable values) and provides the interpret
// method to evaluate an expression.
// 3.The separation of the grammar definition and the interpreter implementation, which allows for
//  easy extensibility and maintainability of the expression language.
