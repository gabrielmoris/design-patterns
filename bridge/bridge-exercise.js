// This would be the way of doing things without bridge
// class Shape {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Triangle extends Shape {
//   constructor() {
//     super("triangle");
//   }
// }

// class Square extends Shape {
//   constructor() {
//     super("square");
//   }
// }

// class VectorSquare extends Square {
//   toString() {
//     return `Drawing square as lines`;
//   }
// }

// class RasterSquare extends Square {
//   toString() {
//     return `Drawing square as pixels`;
//   }
// }

// imagine VectorTriangle and RasterTriangle are here too

class Shape {
  constructor(renderer, name) {
    this.name = name;
    this.renderer = renderer;
  }

  toString() {
    return `Drawing ${this.name} as ${this.renderer.whatToRenderAs}`;
  }
}

class Triangle extends Shape {
  constructor(renderer) {
    super(renderer, "triangle");
  }
}

class Square extends Shape {
  constructor(renderer) {
    super(renderer, "square");
  }
}

class VectorRenderer {
  get whatToRenderAs() {
    return "lines";
  }
}

class RasterRenderer {
  get whatToRenderAs() {
    return "pixels";
  }
}

module.exports = {
  VectorRenderer,
  RasterRenderer,
  Square,
  Triangle,
};
