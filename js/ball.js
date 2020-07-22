function Ball() {
  this.intervalId = null;

  var that = this;

  this.isDeletable = false;

  this.isDeleted = false;

  this.create = function (i) {
    this.ball = document.createElement("div");
    this.ball.id = i;
    var ballColor = (color[parseInt(Math.random() * color.length)]);
    this.ball.style.backgroundColor = ballColor;

    this.ball.style.position = "absolute";
    this.ball.style.borderRadius = "50%";

    this.ball.addEventListener("click", function () {
      if (that.isDeletable) {
        that.remove();
      }
    });
  };

  this.remove = function () {
    document.body.removeChild(that.ball);

    clearInterval(that.intervalId);

    that.isDeleted = true;
  };

  this.setDimensions = function (w, h) {
    this.ball.style.width = w + "px";
    this.ball.style.height = h + "px";
  };

  this.setPosition = function (x, y) {
    this.ball.style.left = x + "px";
    this.ball.style.top = y + "px";
  };

  this.getPosition = function () {
    return {
      x: parseInt(this.ball.style.left),
      y: parseInt(this.ball.style.top),
    };
  };

  this.move = function () {
    this.isDeletable = true;

    var movement = Math.ceil(Math.random() * 5);

    this.intervalId = setInterval(function () {
      var currentTop = that.ball.style.top;

      var nextTop = parseInt(currentTop) + movement;

      that.ball.style.top = nextTop + "px";
    }, 1000 / 60);
  };
}
