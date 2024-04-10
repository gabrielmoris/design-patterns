// Suppose we are developing a system to handle customer support requests,
//  where each request can be handled by different levels of support depending on its complexity.

// Handler that acts as the base class for all handlers, providing the mechanism to set the
//  next handler in the chain and to pass the request along if necessary.
class SupportHandler {
  constructor() {
    this.nextHandler = null;
  }

  setNextHandler(handler) {
    this.nextHandler = handler;
  }

  handleRequest(request) {
    if (this.nextHandler) {
      this.nextHandler.handleRequest(request);
    } else {
      console.log("End of chain, request cannot be handled.");
    }
  }
}

// We have three levels of support (LevelOneSupport, LevelTwoSupport, and LevelThreeSupport),
//  each capable of handling requests of certain difficulties. Requests are passed along the chain until they are handled.

// Concrete Handlers
class LevelOneSupport extends SupportHandler {
  handleRequest(request) {
    if (request.difficulty <= 1) {
      console.log("Level One handled the request.");
    } else {
      console.log("Level One passed to Level Two.");
      super.handleRequest(request);
    }
  }
}

class LevelTwoSupport extends SupportHandler {
  handleRequest(request) {
    if (request.difficulty <= 2) {
      console.log("Level Two handled the request.");
    } else {
      console.log("Level Two passed to Level Three.");
      super.handleRequest(request);
    }
  }
}

class LevelThreeSupport extends SupportHandler {
  handleRequest(request) {
    console.log("Level Three handled the request.");
  }
}

// Client code
const levelOne = new LevelOneSupport();
const levelTwo = new LevelTwoSupport();
const levelThree = new LevelThreeSupport();

levelOne.setNextHandler(levelTwo);
levelTwo.setNextHandler(levelThree);

const request = { difficulty: 2 };
levelOne.handleRequest(request);
