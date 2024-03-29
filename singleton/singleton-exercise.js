class SingletonTester
{
  static isSingleton(generator)
  {
    let instance1 = generator();
    let instance2 = generator();

    return instance1 === instance2;
  }
}

module.exports = { SingletonTester };
