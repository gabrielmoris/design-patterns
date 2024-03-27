// Iimplement Line.deepCopy()
// to perform a deep copy of the given Line object.
// This method should return a copy of a Line that
// contains copies of its start/end points.

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Line {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  deepCopy() {
    const lineStart = new Point(this.start.x, this.start.y);
    const lineEnd = new Point(this.end.x, this.end.y);
    return new Line(lineStart, lineEnd);
  }
}

module.exports = { Line, Point };
