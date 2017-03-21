function Brick(options){
  this.x = options.x
  this.y = options.y
  this.width = options.width
  this.height = options.height
  this.hit = options.hit;

  this.colors=["cyan","ruby","yellowgreen","black","orange"]
  this.colorLevel = 0
  this.color = this.colors[this.colorLevel]
}
Brick.prototype.draw = function(ctx){
  ctx.fillStyle = this.color
  ctx.fillRect(this.x, this.y, this.width, this.height)
  return this;
}

module.exports = Brick;
