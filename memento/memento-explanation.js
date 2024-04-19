// Originator: This class represents the object whose state we want to manage. It includes methods to create and restore mementos of its state.
class Document {
  constructor(content) {
    this.content = content;
  }

  // Creates a memento with the current state
  createMemento() {
    return new DocumentMemento(this.content);
  }

  // Restores the originator's state from a memento object
  restoreFromMemento(memento) {
    this.content = memento.getContent();
  }

  getContent() {
    return this.content;
  }
}

// Memento: This class stores the state of the Document. It's designed to be immutable, meaning once it's created, its state cannot be changed.
class DocumentMemento {
  constructor(content) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }
}

// Caretaker: Manages saving and restoring the Document's state through mementos. It keeps a history stack of mementos, allowing multiple undos.
class HistoryManager {
  constructor() {
    this.history = [];
  }

  // Saves the current state of the document
  push(document) {
    this.history.push(document.createMemento());
  }

  // Restores the last saved state of the document
  pop() {
    if (this.history.length === 0) return null;
    return this.history.pop();
  }
}

// Usage
(function runDocumentEditor() {
  const editor = new Document("Initial content");
  const historyManager = new HistoryManager();

  // Save initial state
  historyManager.push(editor);

  // Modify the document
  editor.content = "Updated content";
  historyManager.push(editor); // Save updated state

  // Restore to the previous state
  editor.restoreFromMemento(historyManager.pop());

  console.log(editor.getContent()); // Output: "Initial content"
})();
