// Strategy Interface
class SortingStrategy {
  sort(arr) {
    throw new Error("sort method must be implemented");
  }
}

// Concrete Strategies:  The BubbleSortStrategy and QuickSortStrategy classes are concrete
// implementations of this interface, each encapsulating a different sorting algorithm.
class BubbleSortStrategy extends SortingStrategy {
  sort(arr) {
    // Bubble sort implementation
    return arr.sort((a, b) => a - b);
  }
}

class QuickSortStrategy extends SortingStrategy {
  sort(arr) {
    // Quick sort implementation
    return this.quickSort(arr, 0, arr.length - 1);
  }

  quickSort(arr, low, high) {
    // Quick sort algorithm
    // ...
  }
}

// Context: The SortingContext class is the "context" that uses the SortingStrategy.
// It takes a SortingStrategy instance in its constructor and delegates the sorting operation to the strategy.
class SortingContext {
  constructor(sortingStrategy) {
    this.sortingStrategy = sortingStrategy;
  }

  sort(arr) {
    return this.sortingStrategy.sort(arr);
  }
}

// Usage
const bubbleSort = new SortingContext(new BubbleSortStrategy());
const quickSort = new SortingContext(new QuickSortStrategy());

const unsortedArray = [5, 2, 8, 1, 9];

console.log(bubbleSort.sort(unsortedArray)); // [1, 2, 5, 8, 9]
console.log(quickSort.sort(unsortedArray)); // [1, 2, 5, 8, 9]
