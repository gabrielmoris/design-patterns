// codeBuilder.test.js
const { CodeBuilder2, CodeBuilder } = require("./exercise.js"); // Adjust the path accordingly

describe("CodeBuilder2 => Example", function () {
  it("empty test", function () {
    let cb = new CodeBuilder2("Foo");
    expect(cb.toString()).toEqual("class Foo {\n}");
  });

  it("person test", function () {
    let cb = new CodeBuilder2("Person");
    cb.addField("name").addField("age");
    expect(cb.toString()).toEqual(
      "class Person {\n" +
        "  constructor(name, age) {\n" +
        "    this.name = name;\n" +
        "    this.age = age;\n" +
        "  }\n" +
        "}"
    );
  });
});

describe("CodeBuilder => My Exercise", function () {
  it("empty test", function () {
    let cb = new CodeBuilder("Foo");
    expect(cb.toString()).toEqual("class Foo {\n}");
  });

  it("person test", function () {
    let cb = new CodeBuilder("Person");
    cb.addField("name").addField("age");
    expect(cb.toString()).toEqual(
      "class Person {\n" +
        "  constructor(name, age) {\n" +
        "    this.name = name;\n" +
        "    this.age = age;\n" +
        "  }\n" +
        "}"
    );
  });
});
