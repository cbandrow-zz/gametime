

function World(width, height){
this.width = width
this.height = height
}


World.prototype.draw = function(ctx){
  ctx.fillStyle = "green"
  ctx.fillRect(0,0,this.width,this.height)
  return this
}



module.exports = World
