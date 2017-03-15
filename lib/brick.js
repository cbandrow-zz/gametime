function Brick(options){
this.x = options.x;
this.y = options.y;
this.width = options.width;
this.height =options.height;
this.color = "cyan"
this.block=[];
}

Brick.prototype.draw = function(ctx){
  ctx.fillStyle = this.color
  ctx.fillRect(250, 50, this.width, this.height)
  return this;
}
module.exports = Brick
