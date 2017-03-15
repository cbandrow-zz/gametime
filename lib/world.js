var Paddle =  require("./paddle.js");
var Ball =  require("./ball.js");
var Brick =  require("./brick.js");

//create a world object just to house data in. It doesn't need to exist physically on screen, but it needs to be able to hold our objects.

function World(width, height){
  this.width = width;
  this.height = height;
  this.paddle = new Paddle({x: 212, y:450, width: 75, height: 10});
  this.ball = new Ball({x: this.paddle.x + 25, y: 450, radius: 5, startCircle: 0, endCircle: 2*Math.PI, color: 'red'});
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

World.prototype.b2pcollision = function (){
  //if world.ball x and y are the same as world. paddle x and y then bounce
  if (this.ball.x + this.ball.xx >= this.paddle.x
    && this.ball.x +this.ball.xx <= this.paddle.x + 75
    && this.ball.y + this.ball.yy >= this.paddle.y
    && this.ball.y + this.ball.yy <= this.paddle.y + 10){
      console.log("WOOT WOOT MOTHERFUCKER");
      this.ball.yy = (this.ball.yy)*-1;
  }
}

World.prototype.changeAcceleration = function(){
  //if ball's x hits paddle's x between x and x + 10

  //then bounce other direction at different angle.
}


module.exports = World;
