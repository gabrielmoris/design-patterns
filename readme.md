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

### [Iterator Pattern](iterator/iterator-explanation.js)

Behavioral pattern that provides a way to access the elements of an aggregate object (such as an array, list, or tree) sequentially without exposing its underlying representation.

he key components of the Iterator pattern are:

- **Iterator:** The Iterator is an object that provides a standard way to traverse the elements of a collection. It has methods like next(), hasNext(), first(), and reset() to control the iteration process.
- **Iterable:** The Iterable is the collection of data that would be iterated over. It provides a way to create an Iterator for itself, usually through a getIterator() method.
- **Client:** The Client is the object that uses the Iterator to access the elements of the Iterable.

The main benefits of the Iterator pattern in JavaScript are:

- **Encapsulation:** The Iterator pattern encapsulates the underlying structure of the data, allowing the client to access the elements of the collection without knowing its internal implementation.
- **Flexibility:** The Iterator pattern allows for the creation of different types of iterators for the same collection, enabling different traversal algorithms to be used.
- **Separation of Concerns:** The Iterator pattern separates the responsibility of accessing and traversing the elements from the aggregate object, making the code more modular and maintainable.
- **Lazy Evaluation:** Iterators can be used to implement lazy evaluation, where elements are generated or retrieved only when they are needed, rather than all at once.

The Iterator pattern is widely used in JavaScript, especially with the introduction of the Symbol.iterator and for...of constructs in ES6, which provide built-in support for iterables and iterators.

**Motivation:** When it is neccesary to traverse over a data structure.

### [Mediator Pattern](mediator/mediator-explanation.js)

Behavioral design pattern that promotes loose coupling between objects by encapsulating how they communicate with each other. It provides a centralized communication channel between different objects, allowing them to interact without needing to know about each other's implementation details.

The benefits of the Mediator Pattern include:

- **Loose Coupling:** The colleagues (in this case, the User objects) are not directly dependent on each other, making the system more flexible and easier to maintain.
- **Centralized Communication:** The mediator handles all the communication between the colleagues, making it easier to understand and modify the interaction logic.
- **Reusability:** The mediator can be reused across different parts of the application, promoting code reuse.

**Motivation:** The Mediator Pattern is particularly useful in scenarios where you have a complex system with many objects that need to communicate with each other, and you want to avoid the "spaghetti code" that can arise from direct object-to-object communication.
This pattern is also useful when components may go in and out of a system at any time (like a chatroom)

### [Memento Pattern](memento/memento-explanation.js)

Behavioral pattern used in programming to capture and externalize the internal state of an object without exposing its internal structure.
This allows the object's state to be saved and restored at a later time, providing functionality such as undo or redo operations, or saving state checkpoints in applications.

Components of the Memento Pattern:

- **Originator:** This is the object whose state needs to be saved and restored. It creates a memento containing a snapshot of its current internal state.
- **Memento:** This object holds the internal state of the originator at a particular time. The memento is passive; it doesn't do anything on its own but simply holds the state given to it by the originator.
- **Caretaker:** This component is responsible for the lifecycle of the memento. It saves and retrieves mementos but does not modify them or directly interact with their contents.

**Motivation:** This implementation showcases how the Memento pattern can be used in JavaScript to provide undo functionality in applications like text editors, where users might want to revert to previous states of a document.

### [Observer Pattern](observer/observer-explanation.js)

Design pattern in JavaScript that allows an object (the subject) to maintain a list of its dependents (observers) and automatically notify them of any state changes, without tightly coupling the subject and the observers. It is an intrusive approach because we need to make modifications in the class.

The Observer Pattern consists of three main components:

- **Subject**: The object that holds the state and notifies its observers when the state changes.
- **Observer**: An object that wants to be notified when the subject's state changes.(Consumer)
- **Observable**: The interface that the subject implements to allow observers to subscribe, unsubscribe, and be notified of changes. (Generator)

The key steps are:

- The subject maintains a list of its observers.
- Observers register (subscribe) with the subject to receive notifications.
- When the subject's state changes, it notifies all its registered observers by calling their update method.
- Observers can also unsubscribe from the subject when they no longer want to receive notifications.

This pattern promotes loose coupling between the subject and its observers, making the code more modular and easier to maintain. It's commonly used in event-driven programming, where the subject acts as the event emitter and the observers are the event listeners

**Motivation:** When we need to be informed about certain events (Object property changes, actions..)

### [State Pattern](state/state-explanation.js)

Behavioral design pattern that allows an object to alter its behavior when its internal state changes. It encapsulates different states and the logic associated with each state into separate objects, allowing the object to change its behavior by changing its internal state object.

The key benefits of the State pattern are:

- **Encapsulation:** The state-specific behavior is encapsulated within the state objects, making the code more modular and easier to maintain.
- **Flexibility:** Adding new states or modifying existing states is easy, as it only requires creating a new state class or modifying an existing one, without affecting the Button class.
- **Clarity:** The state-specific logic is clearly separated and organized, making the code more readable and easier to understand.

**Motivation:** The State pattern is particularly useful when you have an object with complex behavior that depends on its internal state, and you want to avoid using a large number of conditional statements to handle the different states.
