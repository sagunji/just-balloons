function Position(width, height) {
  // var x = null;
  // var y = null;

  var width = width;
  var height = height;

  // var that = this;

  this.create = function () {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
  };
}
