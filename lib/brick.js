function Brick(){
this.width =40
this.height =15
this.color = "yellow"
this.block=[]
}

Brick.prototype.draw = function(ctx){
  ctx.fillStyle = this.color
  ctx.fillRect(250, 50, this.width, this.height)
  return this;
}
module.exports = Brick
