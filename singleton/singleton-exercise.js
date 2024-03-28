class SingletonTester {
  static isSingleton(generator) {
    console.log(generator);
    const object = generator();
    return object instanceof generator;
  }
}

module.exports = { SingletonTester };
