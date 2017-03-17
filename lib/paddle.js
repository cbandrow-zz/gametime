function Paddle(options){
this.x = options.x;
this.y = options.y;
this.width = options.width;
this.height = options.height;
this.color = "#991122"
this.target = "#e07808"
}

Paddle.prototype.draw = function(ctx, mouseX){
  var locationX = mouseX || this.x;
  ctx.fillStyle = this.color;
  ctx.fillRect(locationX, this.y, this.width, this.height)
  ctx.fillStyle = this.target;
  ctx.fillRect(locationX + 17 , this.y, 43 , this.height)
  this.move(locationX);
  return this;
}

Paddle.prototype.move = function(location){
  this.x = location;
  if (this.x + 75 >= 500){
    this.x = 425;
  } else if (this.x <=448){
    return this.x;
  }
}

module.exports = Paddle
