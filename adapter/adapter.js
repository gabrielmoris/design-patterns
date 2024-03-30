class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `${this.x},${this.y}`;
  }
}

class Line {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  toString() {
    return `${this.start.toString()}->${this.end.toString()}`;
  }
}

class VectorObject extends Array {}
class VectorRectangle extends VectorObject {
  constructor(x, y, width, height) {
    super();
    this.push(new Line(new Point(x, y), new Point(x + width, y)));
    this.push(
      new Line(new Point(x + width, y), new Point(x + width, y + height))
    );
    this.push(new Line(new Point(x, y), new Point(x, y + height)));
    this.push(
      new Line(new Point(x, y + height), new Point(x + width, y + height))
    );
  }
}

// I have to work with this
let drawPoint = function (point) {
  process.stdout.write(".");
};

// But I have lines

let vectorObjects = [
  new VectorRectangle(1, 1, 10, 10),
  new VectorRectangle(3, 3, 6, 6),
];

// I crate an Adapter
class LineToPointAdapter extends Array {
  constructor(line) {
    super();
    console.log(
      `${LineToPointAdapter.count++}: Generating points for line ${line.toString()} (no caching)`
    );

    let left = Math.min(line.start.x, line.end.x);
    let right = Math.max(line.start.x, line.end.x);
    let top = Math.min(line.start.y, line.end.y);
    let bottom = Math.max(line.start.y, line.end.y);

    if (right - left === 0) {
      for (let i = top; i <= bottom; i++) {
        this.push(new Point(left, i));
      }
    } else if (line.end.y - line.start.y === 0) {
      for (let j = left; j <= right; j++) {
        this.push(new Point(j, top));
      }
    }
  }
}

LineToPointAdapter.count = 0;

let drawPoints = function () {
  for (let vectorObject of vectorObjects) {
    for (let line of vectorObject) {
      let adapter = new LineToPointAdapter(line);
      adapter.forEach(drawPoint);
    }
  }
};
console.log(
  "=========================FIRST drawpoints() CALL NO CACHE========================="
);
drawPoints();
console.log(
  "=========================SECOND CALL drawpoints() NO CACHE========================="
);
drawPoints(); // If I have no catchin it will keep in memory all the former points becaus uses temporary data

// To avoid the poblem of no catching:

// This functions gives a unique 32 integer for each string
String.prototype.hashCode = function () {
  if (Array.prototype.reduce) {
    return this.split("").reduce(function (a, b) {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);
  }
  let hash = 0;
  if (this.length === 0) return hash;
  for (let i = 0; i < this.length; i++) {
    const character = this.charCodeAt(i);
    hash = (hash << 5) - hash + character;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return hash;
};

class NewLineToPointAdapter {
  constructor(line) {
    this.hash = JSON.stringify(line).hashCode();
    if (NewLineToPointAdapter.cache[this.hash]) return; // It is already in cache

    console.log(
      `${NewLineToPointAdapter.count++}: Generating ` +
        `points for line ${line.toString()} (with caching)`
    );

    let points = []; // Instead of Extends array

    let left = Math.min(line.start.x, line.end.x);
    let right = Math.max(line.start.x, line.end.x);
    let top = Math.min(line.start.y, line.end.y);
    let bottom = Math.max(line.start.y, line.end.y);

    if (right - left === 0) {
      for (let y = top; y <= bottom; ++y) {
        points.push(new Point(left, y));
      }
    } else if (line.end.y - line.start.y === 0) {
      for (let x = left; x <= right; ++x) {
        points.push(new Point(x, top));
      }
    }

    NewLineToPointAdapter.cache[this.hash] = points;
  }

  get items() {
    return NewLineToPointAdapter.cache[this.hash];
  }
}
NewLineToPointAdapter.count = 0;
NewLineToPointAdapter.cache = {};

let newDrawPoints = function () {
  for (let vectorObject of vectorObjects) {
    for (let line of vectorObject) {
      let adapter = new NewLineToPointAdapter(line);
      adapter.items.forEach(drawPoint);
    }
  }
};

console.log(
  "=========================THIRD drawpoints() CALL WITH CACHE========================="
);
newDrawPoints();
console.log(
  "=========================FOURTH drawpoints() CALL WITH CACHE========================="
);
newDrawPoints();

// Takeaway: Sometimes this pattern makes you use temporaryobjects and makes sense to try to count down the number of objects I generate. Like using a cache
