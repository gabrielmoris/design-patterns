// Create a prototype object called shape that has properties x, y, and a method move.
var shape = {
  x: 0,
  y: 0,
  move: function (x, y) {
    this.x += x;
    this.y += y;
  },
};

// Create a new object by cloning the prototype. We modify the properties and methods of the circle object as needed,
//  and then use the move method to move the circle to a new position.
var circle = Object.create(shape);
circle.radius = 5;

// Modify the properties and methods of the new object
circle.move(10, 10);
console.log(circle.x, circle.y, circle.radius); // Output: 10 10 5
