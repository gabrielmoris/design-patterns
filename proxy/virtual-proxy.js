// This kind of proxy shows you that you have a resource
// even though you dont have it yet

class Image {
  constructor(url) {
    this.url = url;
    console.log(`Loading Image from ${url}`);
  }

  draw() {
    console.log(`Drawing Image from ${this.url}`);
  }
}

// If you never call draw() you wasted computational time loading the Image.
// How can I set the things up so when nobody calls draw() the image is not loaded?

function drawImage(img) {
  console.log(`About to draw Image`);
  img.draw();
  console.log("Image has been drawn");
}

let img = new Image("https://source.unsplash.com/random/500x600");

drawImage(img);
// OUTPUT
// Loading Image from https://source.unsplash.com/random/500x600
// About to draw Image
// Drawing Image from https://source.unsplash.com/random/500x600
// Image has been drawn

// Virtual Proxy

class LazyImage {
  constructor(url) {
    this.url = url;
  }

  draw() {
    if (!this.image) {
      this.image = new Image(this.url);
    }

    this.image.draw();
  }
}

let img2 = new LazyImage("https://source.unsplash.com/random/500x600");
drawImage(img2);
// OUTPUT
// About to draw Image
// Loading Image from https://source.unsplash.com/random/500x600
// Drawing Image from https://source.unsplash.com/random/500x600
// Image has been drawn

// The difference is subtile, but that means that 1  I intend to draw, 2 I load die Image.
