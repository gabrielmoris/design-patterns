// In JavaScript, the Proxy pattern is implemented using the built-in Proxy object,
// which enables you to create an object that can intercept and redefine fundamental operations for the target object

// Target Object
const target = {
  message1: "hello",
  message2: "everyone",
};

// Handler Object the handler object defines a get trap that intercepts attempts
// to access properties in the target. The get function returns "world" instead of the actual property values.
const handler = {
  get(target, prop, receiver) {
    return "world";
  },
};

// Proxy Object
const proxy = new Proxy(target, handler);

console.log(proxy.message1); // "world"
console.log(proxy.message2); // "world"
