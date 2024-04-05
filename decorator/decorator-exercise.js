class Bird {
  constructor(age = 0) {
    this.age = age;
  }

  fly() {
    return this.age < 10 ? "flying" : "too old";
  }
}

class Lizard {
  constructor(age = 0) {
    this.age = age;
  }

  crawl() {
    return this.age > 1 ? "crawling" : "too young";
  }
}

class Dragon {
  constructor(age = 0) {
    this.age = age;
    this.bird = new Bird();
    this.lizard = new Lizard();
  }

  get age() {
    return this.age;
  }

  set age(val) {
    this.bird = new Bird(val);
    this.lizard = new Lizard(val);
  }

  fly() {
    return this.bird.fly();
  }

  crawl() {
    return this.lizard.crawl();
  }
}

module.exports = { Dragon };
