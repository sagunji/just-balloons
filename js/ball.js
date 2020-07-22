class Ball {
  constructor(container) {
    this.intervalId = null;

    this.container = container;

    this.isDeletable = false;

    this.isDeleted = false;
    this.ball = document.createElement("div");
  }

  create() {
    var ballColor = (color[parseInt(Math.random() * color.length)]);
    this.ball.style.backgroundColor = ballColor;

    this.ball.style.position = "absolute";
    this.ball.style.borderRadius = "50%";

    this.ball.addEventListener(
      "click",
      (function () {
        let that = this;

        return function () {
          if (that.isDeletable) {
            that.container.style.backgroundColor =
              that.ball.style.backgroundColor;

            that.remove();
          }
        };
      }).bind(this)(),
    );
  }

  remove() {
    this.container.removeChild(this.ball);

    clearInterval(this.intervalId);

    this.isDeleted = true;
  }

  setDimensions(w, h) {
    this.ball.style.width = w + "px";
    this.ball.style.height = h + "px";
  }

  setPosition(x, y) {
    this.ball.style.left = x + "px";
    this.ball.style.top = y + "px";
  }

  getPosition() {
    return {
      x: parseInt(this.ball.style.left),
      y: parseInt(this.ball.style.top),
    };
  }

  move() {
    this.isDeletable = true;

    var movement = Math.ceil(Math.random() * 5);

    var direction = 1;

    var height = parseInt(this.ball.style.height);

    this.intervalId = setInterval(
      (function () {
        var myBall = this.ball;

        return function () {
          var currentTop = myBall.style.top;

          var nextTop = parseInt(currentTop) + movement * direction;

          myBall.style.top = nextTop + "px";

          if (nextTop >= (window.innerHeight - height) || nextTop <= 0) {
            direction *= -1;
          }
        };
      }).bind(this)(),
      1000 / 60,
    );
  }
}
