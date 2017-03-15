var Paddle =  require("./paddle.js");
var Ball =  require("./ball.js");
var Brick =  require("./brick.js");

//create a world object just to house data in. It doesn't need to exist physically on screen, but it needs to be able to hold our objects.

function World(width, height){
  this.width = width;
  this.height = height;
  this.paddle = new Paddle({x: 225, y:450, width: 50, height: 10});
  this.ball = new Ball({x: this.paddle.x + 25, y: 455, radius: 5, startCircle: 0, endCircle: 2*Math.PI, color: 'red'});
  this.brick = new Brick({x: 225, y:50, width: 40, height: 15});
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

//  Ball.prototype.move = function(){
//  if(this.x + this.xx > 500 || this.x + this.xx < 0) {
//   this.xx = (this.xx)*-1
//   }
//   if(this.y + this.yy < 0 ){
//   this.yy = (this.yy)*-1
//   }
//
//   this.x += this.xx;
//   this.y += this.yy;
//   return this
// }
//
World.prototype.b2pcollision = function (){
  //if world.ball x and y are the same as world. paddle x and y then bounce
  if (this.ball.x >= this.paddle.x && this.ball.x <= this.paddle.x +50 && this.ball.y <= 450 && this.ball.y >= 460){
    this.ball.xx = (this.ball.xx)*-1;
    this.ball.yy = (this.ball.yy)*-1;
  }
}


module.exports = World;
