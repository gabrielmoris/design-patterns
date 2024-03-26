// Builder Coding Exercise
// You are asked to implement the Builder design pattern for rendering simple chunks of code.

// Sample use of the builder you are asked to create:

// let cb = new CodeBuilder('Person');
// cb.addField('name').addField('age');
// console.log(cb.toString());
// The expected output of the above code is:

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// Please observe the same placement of spaces and indentation.

// My version: It is not well implemented because It has everything in the same constructor
class CodeBuilder {
  constructor(className) {
    this.className = className;
    this.fields = [];
    // todo
  }

  addField(name) {
    // todo
    // reminder: we want a fluent interface
    this.fields.push(name);
    return this;
  }

  toString() {
    // todo
    let classArr = [];
    let constructorArg = [];
    let constructorProp = [];
    classArr.push(`class ${this.className} {\n`);
    if (this.fields.length > 0) {
      for (let names of this.fields) {
        constructorArg.push(names);
        constructorProp.push(`this.${names} = ${names};`);
      }
      classArr.push(`  constructor(${constructorArg.join(", ")}) {\n`);
      constructorProp.map((cName) => {
        classArr.push(`    ${cName}\n`);
      });
      classArr.push("  }\n");
    }
    classArr.push("}");
    return classArr.join("");
  }
}

let cb = new CodeBuilder("Person");
cb.addField("name").addField("age");
console.log(cb.toString());
let personClass = `(${cb.toString()})`;
let pc = eval(personClass);
console.log(pc);

// Solution
class Field {
  constructor(name) {
    this.name = name;
  }
}

class Class {
  constructor(name) {
    this.name = name;
    this.fields = [];
  }

  toString() {
    let buffer = [];
    buffer.push(`class ${this.name} {\n`);

    if (this.fields.length > 0) {
      buffer.push(`  constructor(`);
      for (let i = 0; i < this.fields.length; ++i) {
        buffer.push(this.fields[i].name);
        if (i + 1 !== this.fields.length) buffer.push(", ");
      }
      buffer.push(`) {\n`);
      for (let field of this.fields) {
        buffer.push(`    this.${field.name} = ${field.name};\n`);
      }
      buffer.push("  }\n");
    }

    buffer.push("}");
    return buffer.join("");
  }
}

class CodeBuilder2 {
  constructor(className) {
    this._class = new Class(className);
  }

  addField(name) {
    this._class.fields.push(new Field(name));
    return this;
  }

  toString() {
    return this._class.toString();
  }
}

let cb2 = new CodeBuilder2("Person");
cb2.addField("name").addField("age");
console.log(cb2.toString());

module.exports = { CodeBuilder2, CodeBuilder };
