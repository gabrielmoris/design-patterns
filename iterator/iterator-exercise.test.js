const { Node } = require("./iterator-exercise");

describe("iterator", function () {
  it("does preorder traversal", function () {
    let node = new Node(
      "a",
      new Node("b", new Node("c"), new Node("d")),
      new Node("e")
    );

    let values = [];
    for (let value of node.preorder()) values.push(value);

    expect(values.join("")).toEqual("abcde");
  });
});
