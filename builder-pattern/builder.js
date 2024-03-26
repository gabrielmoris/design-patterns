// Component which provides an API for constructing an Object

// Example: HTML Builder
class Tag {
  static get indentSize() {
    return 4;
  }

  constructor(name = "", text = "") {
    this.name = name;
    this.text = text;
    this.children = [];
  }

  toStringImpl(indent) {
    let html = [];
    let i = " ".repeat(indent * Tag.indentSize);
    html.push(`${i}<${this.name}>\n`);
    if (this.text.length > 0) {
      html.push(" ".repeat(Tag.indentSize * (indent + 1)));
      html.push(this.text);
      html.push("\n");
    }

    for (let child of this.children) html.push(child.toStringImpl(indent + 1));

    html.push(`${i}</${this.name}>\n`);
    return html.join("");
  }

  toString() {
    return this.toStringImpl(0);
  }

  static create(name) {
    return new HtmlBuilder(name);
  }
}

class HtmlBuilder {
  constructor(rootName) {
    this.root = new Tag(rootName);
    this.rootName = rootName;
  }

  // non-fluent
  addChild(childName, childText) {
    let child = new Tag(childName, childText);
    this.root.children.push(child);
  }

  // fluent (returning THIS)
  addChildFluent(childName, childText) {
    let child = new Tag(childName, childText);
    this.root.children.push(child);
    return this;
  }

  toString() {
    return this.root.toString();
  }

  clear() {
    this.root = new Tag(this.rootName);
  }

  build() {
    return this.root;
  }
}
const words = ["hello", "world"];
let builder = new HtmlBuilder("ul");
for (let word of words) {
  builder.addChild("li", word);
}

// console.log(builder.root);
// console.log(builder.build().toString());

// with the new create() method
let builder2 = Tag.create("div");
for (let word of words) {
  builder2.addChild("h3", word);
}

console.log("After I create: \n", builder2.toString());
builder2.clear();
console.log("After I clear: \n", builder2.toString());
//I can use concurrently addChildFluent because I return this!
builder2
  .addChildFluent("h1", "Title")
  .addChildFluent("h3", "Subtitle")
  .addChildFluent("p", "Lorem ipsum paragraphum writum randum thinghsum"); //I can do it because i return this
console.log("After I add childs fluently: \n", builder2.toString());
