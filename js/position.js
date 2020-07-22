class Position {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.x = null;
    this.y = null;
  }

  create() {
    return {
      x: Math.random() * this.width,
      y: Math.random() * this.height,
    };
  }
}
