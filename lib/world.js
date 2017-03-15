var Paddle =  require("./paddle.js");
var Ball =  require("./ball.js");
var Brick =  require("./brick.js");

//create a world object just to house data in. It doesn't need to exist physically on screen, but it needs to be able to hold our objects.

function World(){
  this.width = 500;
  this.height = 500;
  this.paddle = new Paddle({x: 250, y:450, width: 50, height: 10});
  this.ball = new Ball({x: this.paddle.x + 25, y: 455, radius: 5, startCircle: 0, endCircle: 2*Math.PI, color: 'red'});
  this.brick = new Brick({x: 250, y:50, width: 40, height: 15});
}


module.exports = World;
