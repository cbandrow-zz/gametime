function Paddle(x, y, color){
this.x = x;
this.y = 450;
this.width = 40;
this.height = 15;
this.color = color
}

Paddle.prototype.draw = function(ctx){
  ctx.fillStyle = this.color;
  ctx.fillRect(250, 450, this.width, this.height)
  return this;
}

module.exports = Paddle
