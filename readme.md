# SOLID design Principles

It is a set of design principles introduced by Robert C. Martin.

### [Single Responsability Principle](SOLID-design-principles/single-responsibility-principle.js)

A class should have only one reason to change, meaning it should have only one job or responsibility. That means: a class should have only one reason to change.
It is a separation of concerns. Different classes handle different independent tasks.

### [Open Closed Principle](SOLID-design-principles/open-closed-principle.js)

It states that software entities (like classes, modules, functions, etc.) should be open for extension but closed for modification. This means that the devs should be able to add new features without changing existing code.

### [Liskov Substitution Principle](SOLID-design-principles/liskov-substitution-principle.js)

Objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program. That means you should be able to substitute a base type for a subtype.
In JavaScript, this means that a subclass should be able to extend a parent class and be used interchangeably without introducing errors or changing the expected behavior.

### [Interface Segregation Principle](SOLID-design-principles/interface-segregation-principle.ts)

(This principle is not as relevan in Javascript as in another languages)
No client should be forced to depend on methods it does not use. In other words, it’s about making fine-grained interfaces that are client-specific.
It is related with YAGNI (You Are Not Going To Need It). You shouldnt put too much into an interface, instead, you should split into separate interfaces

### [Dependency Inversion Principle](SOLID-design-principles/dependency-inversion-principle.js)

The DIP states that we should rely on abstractions (such as interfaces or abstract classes) rather than concrete implementations. Which means, high level modules should not depend upon low-level ones.

# Design Patterns

### [Builder Pattern](builder-pattern/builder-explanation.js)

Is a creational design pattern that allows you to construct complex objects step by step while hiding the construction details from the client. It’s particularly useful when an object requires multiple steps or configurations to be created
The Builder pattern allows you to create complex objects while maintaining flexibility and separation of concerns.
By using different builders, you can customize the construction process and create various types of products.

**Motivation:** Some objects require a ot of steps to create. That makes the inizialization tedious. Instead is better to split the construction.

[A good example of implementation](builder-pattern/builder-facets.js)

- To make the builder fluent, return this
- Builder is a separate component for building an object

### [Factory Pattern](factory/factory-explanation.js)

Creational pattern that allows for the creation of objects without exposing the creation logic to the client.
Its goal is to provide a unified interface for creating various types of objects without revealing the intricate details of their construction.
In JavaScript, we can implement the Factory Pattern using factory functions.

**Motivation:** When Object creation logic becomes complicated, for example initializer with "optional parameter hell"

- The [abstract Factory](factory/abstract-factory.js) creational design pattern that provides an interface for creating families of related or dependent objects without specifying their concrete classes. The Abstract Factory pattern is useful when you need to create objects that follow a general structure or pattern, but allow for variations in specific details. It allows for the creation of objects without specifying their concrete classes, which can make the code more flexible and easier to maintain.
