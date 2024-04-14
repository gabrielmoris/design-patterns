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

### [Prototype Pattern](prototype/prototype-explanation.js)

Design pattern that allows you to create objects that are clones of other objects. This pattern is useful when you want to create a large number of objects that share the same properties and methods, but have different values for those properties.

The Prototype Pattern works by creating a prototype object that contains the properties and methods that you want to share among your objects. You then create new objects by cloning the prototype object, and modifying the properties and methods as needed.

**Motivation:** Complicated objects shoulm't be designed from scratch.

### [Singleton Pattern](singleton/singleton-explanation.js)

Design pattern that ensures a class has only one instance and provides a global point of access to that instance.
It is used in scenarios where exactly one object is needed to coordinate actions across the system. This pattern is particularly useful in JavaScript due to its ability to limit namespace pollution and reduce the risk of name collisions, which is crucial given JavaScript's global nature.

**Motivation:** Some components only makes sense to have one in the system. (Database repository, Object Factory...). Sometimes the constructor call is expensive, so the initialzation should happen only once.

### [Adapter Pattern](adapter/adapter-explanation.js)

The Adapter pattern is a design pattern that allows two incompatible interfaces to work together by converting the interface of one object so that it matches the interface of another object.

**Motivation:** It is used to make existing classes work with others without modifying their source code. An example would be a plug adaptor for plugs from other countries.

### [Bridge Pattern](bridge/bridge-explanation.js)

The Bridge design pattern aims to decouple an abstraction from its implementation, allowing the two to vary independently. It is a powerful tool in software development, especially useful in scenarios where system components can have multiple variations. By separating the interface (abstraction) from its implementation, it provides a more flexible and maintainable codebase. This pattern is particularly beneficial in JavaScript applications, where dynamic typing and object composition are common

**Motivation:** Avoid Exponential Class explosion, where variations of abstraction and implementation make an exponential growth in the number of classes.

The Bridge pattern is composed of several key components:

- **Abstraction**: This is the interface that the client interacts with. It contains a reference to the Implementor but does not implement the details itself.
- **Refined Abstraction**: Extends or refines the interface defined by Abstraction to provide more specific interactions.
- **Implementor**: Defines the interface for the concrete implementations. This is where the actual implementation details reside.
- **Concrete Implementor**: Provides specific implementations of the Implementor interface.

### [Composite Pattern](composite/composite-explanation.js)

Structural design pattern that allows you to organize objects into tree structures to represent part-whole hierarchies. This pattern enables clients to treat individual objects and compositions of objects uniformly. In the context of JavaScript, the Composite Pattern is particularly useful for managing UI components, file systems, and other hierarchical structures in a flexible and efficient manner.

**Motivation:** Objects use fields/methods though inheritance and composition. The Composite Pattern's power lies in its ability to treat both simple (Leaf) and composite objects uniformly. This simplifies client code, as it can work with individual objects and compositions of objects without distinguishing between them.

At the core of the Composite Pattern are three main components:

- **Component**: This is an interface or an abstract class that declares common operations for both simple and composite objects. It ensures that all concrete classes (both leaves and composites) implement a common set of behaviors.
- **Leaf**: It represents the end objects of a composition. A leaf has no children. It defines behavior for primitive objects in the composition.
- **Composite**: A composite is an object that has child components, which could be other composites or leaves. It stores child components and implements child-related operations in the Component interface, such as adding and removing children.

A good example is in machine learning using [Neural Networks](composite/neural-networks.js)

### [Decorator Pattern](decorator/decorator-explanation.js)

Pattern used in object-oriented programming that allows behavior to be added to individual objects, either statically or dynamically, without affecting the behavior of other objects from the same class.

In JavaScript, the Decorator pattern can be implemented in various ways due to the language's flexible nature and its first-class functions. JavaScript allows for the dynamic addition of properties and methods to objects, which aligns well with the decorator pattern's goals.

**Motivation:** When we want to extend or alter the functionality of objects without needing to alter their structure or creating subclasses and affecting the rest. Alter the object would break the open-closed principle, once it is done it shouldn't need to be modified.

### [Façade Pattern](facade/facade-explanation.js)

Design pattern that provides a simplified interface to a complex subsystem. In the context of JavaScript, it is used to create a single, high-level interface that abstracts the more complex underlying code, making it easier for clients to interact with the system.

It allows developers to create a more manageable and user-friendly interface, which can lead to better maintainability and reusability of code. However, it is essential to consider the trade-offs, such as potential performance overhead and the risk of hiding poor designs, before implementing the pattern

**Motivation:** The primary goal of the Facade pattern is to reduce the complexity of a system for the end user, often by providing a single point of interaction that hides the underlying complexity.

### [Flyweight Pattern](flyweight/flyweight-explanation.js)

Structural design pattern that aims to optimize code by sharing data and minimizing memory usage. It is particularly useful when dealing with repetitive, slow, and inefficiently shared data.

It creates an object that shares repeated data to save memory.

**Motivation:** Avoid redundancy when storing data

### [Proxy Pattern](proxy/proxy-explanation.js)

Pattern that allows you to create a surrogate or placeholder object for another object, controlling access to it. This pattern is particularly useful for managing interactions with the target object, allowing for operations like validation, property access control, performance optimization, and more, without altering the object itself.

A proxy has the same interface as the underlying object. But edits functionality to the redefined member functions.

**Motivation:**

- Validation: Ensuring that only valid data is set on object properties
- Access Control: Controlling access to certain properties of an object
- Lazy Loading: Deferring the loading of an object or its properties until they are actually needed, which can improve performance
- Caching: Implementing caching mechanisms by intercepting property access and returning cached values if available
- Logging and Monitoring: Intercepting operations to log actions or monitor performance metrics

### [Chain of Responsibility Pattern](chain-of-responsibility/chain-of-responsibility-explanation.js)

Behavioral design pattern that allows you to pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.

    Command / Query separation: When we operate on objects, we separate invocations in 2 concepts.
    - Command: send an action or change.
    - Query: the request of information without changing values.
    - CQS: Having separate means of sending commands and queries.

    The Chain of responsability is a pattern that would help to separate this concepts.

**Motivation:** When it is neccesary to process data in different steps. Or for creating a system where multiple objects may handle a request, but the sender of a request does not need to be aware of which object will handle it, thus achieving decoupling between the sender and the receivers of a request.

The Chain of Responsibility pattern involves several key components:

- **Handler Interface or Abstract Class**: This defines a standard interface for handling requests. In JavaScript, since we don't have interfaces or abstract classes as in other languages like Java, we typically use functions or objects to define handlers.
- **Concrete Handlers**: These are specific handlers that process the requests. A concrete handler has two main responsibilities: to process the request if it's capable or to forward the request to the next handler in the chain.
- **Client**: The client sends the request to the first handler in the chain. It does not know which handler will process the request.

### [Command Pattern](command/command-explanation.js)

Behavioral design pattern that encapsulates a request as an object, thereby allowing users to parameterize clients with queues, requests, and operations. It also supports undoable operations. This pattern is particularly useful in JavaScript due to its first-class functions, which allow for a straightforward implementation of the Command Pattern.

The essence of the Command Pattern is to separate the object that issues a request from the one that actually executes it. This is achieved by encapsulating a request as an object, thus allowing for more complex data structures such as command queues and logs. It also makes it easier to extend commands without changing the existing code.

A **Command** Is an object that represents an instruction to perform a particular action. It contains all the informatio for the action to be taken.

**Motivation:** When we want the possibility to record operations to undo some operations. Or to know which function was calling specific operations.

### [Interpreter Pattern](interpreter/interpreter-explanation.js)

Pattern that defines a representation for a grammar and provides an interpreter to interpret sentences in that grammar. In the context of JavaScript, the Interpreter Pattern can be used to create a simple expression evaluator.

An **Interpreter** is a component that processes structured text data by turning it into separate lexical tokens (_lexing_) and then interpreting sequences of this tokens (_parsing_)

**Motivation:** Programming language compilers, numeric / regular expressions.
