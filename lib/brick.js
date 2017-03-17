function Brick(options){
  this.x = options.x
  this.y = options.y
  this.width = options.width
  this.height = options.height
// this.hit = options.hit;
// this.color = "cyan"
}

Brick.prototype.draw = function(ctx){
  ctx.fillStyle = this.color
  ctx.fillRect(this.x, this.y, this.width, this.height)
  return this;
}

Brick.prototype.destroy = function(){
  this.width =0
  this.height = 0
  this.hit = true
}

// Brick.prototype.destroy = function(){
//   //if ball.x and ball.y = brick.x and brick.y
//   //then brick.hit = true;
//   //array slice() based on indeces and hit = true;
//   //return changes to block[]
//   //store false in new array destroyed[]
//   //destroyed[i].width and destroyed[i].height = 0;
// }

module.exports = Brick;
