class Position {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.x = null;
    this.y = null;
  }

  create() {
    this.x = Math.random() * this.width;
    this.y = Math.random() * this.height;
  }
}
