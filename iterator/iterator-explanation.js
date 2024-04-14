// IterableInterface
class IterableInterface {
  getIterator() {}
}

// ConcreteIterable: represents the collection of data that needs to be iterated over.
class ConcreteIterable extends IterableInterface {
  constructor(items) {
    this.items = items;
  }

  getIterator() {
    // obtain an instance of the ConcreteIterator
    return new ConcreteIterator(this.items);
  }
}

// IteratorInterface
class IteratorInterface {
  // access the elements of the collection.
  hasNext() {}
  next() {}
}

// ConcreteIterator: provides the implementation of the iterator.
class ConcreteIterator extends IteratorInterface {
  constructor(items) {
    this.items = items;
    this.index = 0;
  }

  hasNext() {
    return this.index < this.items.length;
  }

  next() {
    return this.items[this.index++];
  }
}

// Client
const iterable = new ConcreteIterable([1, 2, 3, 4, 5]);
const iterator = iterable.getIterator();

while (iterator.hasNext()) {
  console.log(iterator.next()); // Output: 1, 2, 3, 4, 5
}
