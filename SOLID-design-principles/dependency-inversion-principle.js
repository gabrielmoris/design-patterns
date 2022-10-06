//Defines a relationship that you should have between low level modules and high level modules.
let Relationship = Object.freeze({
  parent: 0,
  child: 1,
  siblin: 2,
});

class Person {
  constructor(name) {
    this.name = name;
  }
}

//We want to store the relationships between different people
//The data store mechanism is called: LOW-LEVEL MODULE

class Relationships {
  constructor() {
    this.data = [];
  }
  addParentAndChild(parent, child) {
    this.data.push({
      from: parent,
      type: Relationship.parent,
      to: child,
    });
  }
}

let parent = new Person("Juan");
let child1 = new Person("Christian");
let child2 = new Person("Mateo");

let rels = new Relationships();

rels.addParentAndChild(parent, child1);
rels.addParentAndChild(parent, child2);

//the data getter mechanism is called: HIGH-LEVEL MODULE
class Research {
  constructor(relationships) {
    //find all children of Juan
    let relations = relationships.data;
    for (let rel of relations.filter(
      (r) => r.from.name === "Juan" && r.type === Relationship.parent
    )) {
      console.log(`Juan has a child named ${rel.to.name}`);
    }
  }
}

new Research(rels);

// This dependency inversion means: High level modules shouldn't depend on low level modules
// If I want to change something in Relationships I will have to change Research. That shouldn't happen
//With dependency inversion principle:

//LOW LEVEL MODULE
class RelationshipBrowser {
  constructor() {
    if (this.constructor.name === "RelationshipBrowser") {
      throw new Error("RelationshipBrowser is abstract");
    }
  }
  findAllChildrenOf(name) {}
}

class RelationshipsDI extends RelationshipBrowser {
  constructor() {
    super();
    this.data = [];
  }
  addParentAndChild(parent, child) {
    this.data.push({
      from: parent,
      type: Relationship.parent,
      to: child,
    });
  }
  findAllChildrenOf(name) {
    return this.data
      .filter((r) => r.from.name === name && r.type === Relationship.parent)
      .map((r) => r.to);
  }
}

// HIGH LEVEL MODULE
class ResearchDI {
  constructor(browser) {
    for (let p of browser.findAllChildrenOf("Alberto")) {
      console.log(`Alberto has a child called ${p.name}`);
    }
  }
}
let parentDI = new Person("Alberto");
let child1DI = new Person("Matilda");
let child2DI = new Person("Sofia");

let relsDI = new RelationshipsDI();
relsDI.addParentAndChild(parentDI, child1DI);
relsDI.addParentAndChild(parentDI, child2DI);
new ResearchDI(relsDI);
