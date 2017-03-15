function Paddle(options){
this.x = options.x;
this.y = options.y;
this.width = options.width;
this.height = options.height;
this.color = "#991122"
}

Paddle.prototype.draw = function(ctx, mouseX){
  var locationX = mouseX || this.x;
  ctx.fillStyle = this.color;
  ctx.fillRect(locationX, this.y, this.width, this.height)
  this.move(locationX);
  return this;
}

Paddle.prototype.move = function(location){
  this.x = location;
}

module.exports = Paddle
