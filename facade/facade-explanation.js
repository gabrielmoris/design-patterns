// In this code, SubsystemA, SubsystemB, and SubsystemC represent complex parts of a system.
class SubsystemA {
  method() {
    console.log("This is a method of Subsystem-A");
  }
}

class SubsystemB {
  method() {
    console.log("This is a method of Subsystem-B");
  }
}

class SubsystemC {
  method() {
    console.log("This is a method of Subsystem-C");
  }
}

// The Facade class provides a commonInterface method that clients can call to interact with these subsystems
// without understanding the details of their implementations.

class Facade {
  constructor() {
    this.subsystemA = new SubsystemA();
    this.subsystemB = new SubsystemB();
    this.subsystemC = new SubsystemC();
  }

  commonInterface() {
    this.subsystemA.method();
    this.subsystemB.method();
    this.subsystemC.method();
  }
}

const facade = new Facade();
facade.commonInterface();
