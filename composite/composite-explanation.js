// In JavaScript, since we don't have interfaces or abstract classes as in other languages like Java, we can define
// a Component class with methods that both Leaf and Composite will override.

class FileSystemComponent {
  constructor(name) {
    this.name = name;
  }

  add(component) {
    throw new Error("This method must be overridden");
  }

  remove(component) {
    throw new Error("This method must be overridden");
  }

  display(indent = 0) {
    throw new Error("This method must be overridden");
  }
}

// Implement Leaf

class File extends FileSystemComponent {
  constructor(name, size) {
    super(name);
    this.size = size;
  }

  display(indent = 0) {
    console.log(`${" ".repeat(indent)}File: ${this.name}, Size: ${this.size}`);
  }
}

// Implement Composite
class Directory extends FileSystemComponent {
  constructor(name) {
    super(name);
    this.children = [];
  }

  add(component) {
    this.children.push(component);
  }

  remove(component) {
    const index = this.children.indexOf(component);
    if (index > -1) {
      this.children.splice(index, 1);
    }
  }

  display(indent = 0) {
    console.log(`${" ".repeat(indent)}Directory: ${this.name}`);
    this.children.forEach((child) => child.display(indent + 2));
  }
}

// Use the Composite pattern

const root = new Directory("root");
const file1 = new File("file1.txt", 10);
const file2 = new File("file2.txt", 20);
const subDir1 = new Directory("subDir1");
const subDir2 = new Directory("subDir2");
const file3 = new File("file3.txt", 30);
const file4 = new File("file4.txt", 40);
const file5 = new File("file5.txt", 50);

root.add(file1);
root.add(file2);
root.add(subDir1);
subDir1.add(file3);
subDir1.add(subDir2);
subDir2.add(file4);
subDir2.add(file5);
root.display();

// In this example, both File and Directory classes extend the FileSystemComponent class,
// which acts as the Component. The File class represents a Leaf, having no children and implementing
// the display method to show its details. The Directory class represents a Composite, capable of
// adding or removing children (which can be either File or Directory instances) and implementing
// the display method to recursively display its contents and those of its children.
