// The Adapter Pattern involves creating a function or class that adapts the properties and methods
//  of one interface into another. This adapter function or class acts as a translator, allowing two
//  different interfaces to communicate with each other.

// Old interface: represents an existing system with its own interface.
class OldCalculator {
    constructor() {
      this.operations = function(term1, term2, operation) {
        switch (operation) {
          case 'add':
            return term1 + term2;
          case 'sub':
            return term1 - term2;
          default:
            return NaN;
        }
      };
    }
  }
  
  // New interface: represents a new system with a different interface.
  class NewCalculator {
    constructor() {
      this.add = function(term1, term2) {
        return term1 + term2;
      };
      this.sub = function(term1, term2) {
        return term1 - term2;
      };
    }
  }
  
  // Adapter Class:  is the adapter that allows the old system to use the new system's methods without any changes to its code
  class CalcAdapter {
    constructor() {
      const newCalc = new NewCalculator();
  
      this.operations = function(term1, term2, operation) {
        switch (operation) {
          case 'add':
            return newCalc.add(term1, term2);
          case 'sub':
            return newCalc.sub(term1, term2);
          default:
            return NaN;
        }
      };
    }
  }
  
  // Usage
  const oldCalc = new OldCalculator();
  console.log(oldCalc.operations(10, 5, 'add')); // 15
  
  const newCalc = new NewCalculator();
  console.log(newCalc.add(10, 5)); // 15
  
  const adaptedCalc = new CalcAdapter();
  console.log(adaptedCalc.operations(10, 5, 'add')); // 15
  