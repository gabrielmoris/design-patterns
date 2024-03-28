// getInstance checks if an instance already exists; if not, it creates one and stores it for future reference.
// All subsequent calls to getInstance will return the stored instance
var ClassicSingleton = (function () {
  var instance;

  function createInstance() {
    var object = new Object("I am the instance");
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// A more advanced and less common method involves using a constructor function with a twist. By checking for an existing
//instance in the constructor and returning it if it exists,
// this method ensures that new instances are not created after the first one:
function ConstructorSingleton() {
  if (typeof ConstructorSingleton.instance === "object") {
    return ConstructorSingleton.instance;
  }
  ConstructorSingleton.instance = this;
  return this;
}
