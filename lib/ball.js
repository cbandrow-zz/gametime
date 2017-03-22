class Ball {
  constructor(options) {
    this.x = options.x;
    this.y = options.y;
    this.radius = options.radius;
    this.startCircle = options.firstAngle;
    this.endCircle = options.endCircle;
    this.color = options.color;
    this.yy = 0
    this.xx = 0
  }
  draw(ctx) {
    ctx.fillStyle = "#f5f5f5"
    ctx.beginPath();
    ctx.arc(this.x, this.y, 6.5, 0, 2*Math.PI);
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.strokeStyle = "#5d15ff"
    ctx.fill();
    this.move()
  }

  move() {
    // if ball hits walls bounce off
    if (this.x + this.xx > 500 || this.x + this.xx < 0) {
      this.xx = this.xx *- 1
    }

    // hits ceiling bounce off
    if (this.y + this.yy < 0 ) {
      this.yy = this.yy *- 1

    // hits bottom
    } else if (this.y > 500) {
      this.y = 510;
      this.yy = 0;
      this.xx = 0;
    }

    // move ball
    this.x += this.xx;
    this.y += this.yy;

    return this
  }

  hasCollidedSide( brick ) {
    if (brick.hits > 0 &&
        this.x >= brick.x - brick.wiggleLeftX &&
        this.x <= brick.x + brick.wigglerightX &&
        this.y >= brick.y - brick.wiggleTopY &&
        this.y <= brick.y + brick.height) {

      return true;

    } else if (brick.hits > 0 &&
        this.x >= brick.x + brick.width - brick.wiggleLeftX &&
        this.x <= brick.x + brick.width + brick.wigglerightX &&
        this.y >= brick.y - brick.wiggleTopY &&
        this.y <= brick.y + brick.height) {

      return true;
    }

    return false;
  }
  hasCollidedMid( brick ) {
    if (brick.hits > 0 &&
        this.x >= brick.x &&
        this.x <= brick.x + brick.width &&
        this.y >= brick.y - brick.wiggleTopY &&
        this.y <= brick.y + brick.height) {
      return true;
    } else {
      return false;
    }
  }
  hasCollidedPaddleLeft( paddle ) {
    if (this.x >= paddle.x - paddle.wiggleLeftX &&
        this.x <= paddle.x + paddle.wiggleRightX &&
        this.y >= paddle.y - paddle.wiggleTopY &&
        this.y <= paddle.y + paddle.height) {
      return true;
    } else {
      return false;
    }
  }

  hasCollidedPaddleRight( paddle ) {
    if (this.x >= paddle.x + paddle.width - paddle.wiggleRightX &&
        this.x <= paddle.x + paddle.width + paddle.wiggleLeftX &&
        this.y >= paddle.y - paddle.wiggleTopY &&
        this.y <= paddle.y + paddle.height) {
      return true;
    } else {
      return false;
    }
  }

  hasCollidedPaddleMid( paddle ) {
    if (this.x >= paddle.x + paddle.wiggleRightX&&
        this.x <= paddle.x + paddle.width - paddle.wiggleRightX &&
        this.y >= paddle.y - paddle.wiggleTopY &&
        this.y <= paddle.y + paddle.height) {
      return true;
    } else {
      return false;
    }
  }
}



module.exports = Ball;
