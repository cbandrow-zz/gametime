bounceLeft() {
  if (this.canCollideLeft()) {
    this.collideLeft();
  }
  return this
}
bounceMiddle() {
  if (this.canCollideMiddle()) {
    this.collideMiddle();
  }
  return this
}
bounceRight() {
  if (this.canCollideRight()) {
    this.collideRight();
  }
  return this;
}
canCollideLeft() {
  if (this.paddleBallCollide(2, 15, 2, 10)) {
    return true;
  }
}
canCollideMiddle() {
  if (this.paddleBallCollide(-16, 59, 2, 10)) {
    return true;
  }
}
canCollideRight() {
  if (this.paddleBallCollide(-60, 77, 2, 10)) {
    return true;
  }
}
collideMiddle() {
  this.ball.yy = -this.ball.yy
}

collideBrickSide() {
  this.ball.yy = -this.ball.yy;
  this.ball.xx = -this.ball.xx;
}

collideLeft() {
  if (this.ball.xx < 0) {
    this.ball.yy = -this.ball.yy
    this.ball.xx = this.ball.xx

  } else if (this.ball.xx >= 0) {
    this.ball.yy = -this.ball.yy
    this.ball.xx = -this.ball.xx
  }
}
collideRight() {
  if (this.ball.xx < 0) {
    this.ball.yy = -this.ball.yy
    this.ball.xx = -this.ball.xx

  } else if (this.ball.xx >= 0) {
    this.ball.yy = -this.ball.yy
    this.ball.xx = this.ball.xx
  }
}
}
