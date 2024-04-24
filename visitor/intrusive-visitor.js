// Imagine you want to represent wit OOP this numeric expression and evaluate it
// 1 + (2 + 3 )

class NumberExpression {
  constructor(value) {
    this.value = value;
  }

  print(buffer) {
    buffer.push(this.value.toString());
  }
}

class AdditionExpression {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  print(buffer) {
    buffer.push("(");
    this.left.print(buffer);
    buffer.push("+");
    this.right.print(buffer);
    buffer.push(")");
  }
}

let e = new AdditionExpression(
  new NumberExpression(1),
  new AdditionExpression(new NumberExpression(2), new NumberExpression(3))
);

let buffer = [];

e.print(buffer);

console.log(buffer.slice(1, buffer.length - 1).join("")); // I Slice because it is (1+(2+3))
