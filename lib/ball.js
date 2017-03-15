function Ball(options){

 this.x = options.x;
 this.y = options.y;
 this.radius = options.radius;
 this.startCircle = options.firstAngle;
 this.endCircle = options.endCircle;
 this.color = options.color;
 this.yy = -5.5
 this.xx= 5.5

}
Ball.prototype.draw= function(ctx,canvas){
 ctx.fillStyle = "red"
 ctx.beginPath();
   ctx.arc(this.x,this.y,5,0,2*Math.PI);
 // ctx.arc(this.x, this.y, this.radius, this.startCircle, this.endCircle)
 ctx.stroke();
 ctx.fill();
 this.move()
}

 Ball.prototype.move = function(){
 if(this.x + this.xx > 500 || this.x + this.xx < 0) {
  this.xx = (this.xx)*-1
  }
  if(this.y + this.yy < 0 ){
  this.yy = (this.yy)*-1
} else if (this.y > 500){
  this.y = 510;
  this.yy = 0;
  this.xx = 0;
}

  this.x += this.xx;
  this.y += this.yy;
  return this
}


module.exports = Ball;
