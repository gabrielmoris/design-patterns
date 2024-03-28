class Singleton {
  constructor() {
    // 1. We try to get the instance and we succeed
    const instance = this.constructor.instance;
    if (instance) {
      // 2. Instead of the constructor I return the instance
      return instance;
    }
    // 3. This first instance will be always returned
    this.constructor.instance = this;
  }
}

let s1 = new Singleton();
let s2 = new Singleton();

s1.foo = () => {
  console.log("I was just created for S1");
};

s2.foo();
console.log(s1 === s2);
