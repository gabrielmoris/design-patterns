// I want to pass a text processor and use different strategies

let OutputFormat = Object.freeze({
  markdown: ".md",
  html: ".html",
});

class ListStrategy {
  start(buffer) {}
  end(buffer) {}
  addListItem(buffer, item) {}
}

class MarkdownStrategy extends ListStrategy {
  constructor() {
    super();
  }
  addListItem(buffer, item) {
    buffer.push(` * ${item}`);
  }
}

class HTMLStrategy extends ListStrategy {
  constructor() {
    super();
  }

  start(buffer) {
    buffer.push("<ul>");
  }
  end(buffer) {
    buffer.push("</ul>");
  }
  addListItem(buffer, item) {
    buffer.push(`  <li>${item}</li>`);
  }
}

class TextProcessor {
  constructor(outputFormat) {
    this.buffer = [];
    this.setOutputFormat(outputFormat);
  }

  setOutputFormat(format) {
    switch (format) {
      case OutputFormat.markdown:
        this.listStrategy = new MarkdownStrategy();
        break;
      case OutputFormat.html:
        this.listStrategy = new HTMLStrategy();
        break;
      default:
        throw new Error(
          `I can only format ${OutputFormat.markdown} or ${OutputFormat.html}`
        );
    }
  }

  // Here is the strategy.
  appendList(items) {
    this.listStrategy.start(this.buffer);
    for (let item of items) {
      this.listStrategy.addListItem(this.buffer, item);
    }
    this.listStrategy.end(this.buffer);
  }

  clear() {
    this.buffer.length = 0;
  }

  toString() {
    return this.buffer.join("\n");
  }
}

let tp = new TextProcessor(OutputFormat.markdown);

tp.appendList(["First", "Second", "Third"]);
console.log(tp.toString());
tp.clear();
tp.setOutputFormat(OutputFormat.html);
tp.appendList(["First", "Second", "Third"]);
console.log(tp.toString());
