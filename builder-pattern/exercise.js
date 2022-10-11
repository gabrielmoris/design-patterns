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
      classArr.push(`  constructor(${constructorArg.join(", ")}) { \n`);
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
