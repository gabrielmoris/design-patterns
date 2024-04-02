class GraphicObject {
  constructor(name = `Group ${GraphicObject.count++}`) {
    this._name = name;
    this.color = undefined;
    this.children = [];
  }

  get name() {
    return this._name;
  }

  print(buffer, depth) {
    buffer.push("*".repeat(depth));
    if (depth > 0) {
      buffer.push(" ");
    }

    if (this.color) {
      buffer.push(this.color + " ");
    }

    buffer.push(this.name);
    buffer.push("\n");

    for (let child of this.children) {
      child.print(buffer, depth + 1);
    }
  }

  toString() {
    let buffer = [];
    this.print(buffer, 0);
    return buffer.join("");
  }
}

GraphicObject.count = 0;

class Circle extends GraphicObject {
  constructor(color) {
    super("Circle");
    this.color = color;
  }
}

class Square extends GraphicObject {
  constructor(color) {
    super("Square");
    this.color = color;
  }
}

let drawing = new GraphicObject();

drawing.children.push(new Square("red"));
drawing.children.push(new Circle("blue"));

// Until here it is not composite pattern ↑↑↑

let group = new GraphicObject();
group.children.push(new Circle("magenta"));
group.children.push(new Square("magenta"));

// Cyrcles, and squares are threated as an uniformed manner ↓↓↓
drawing.children.push(group);

console.log(drawing.toString());
