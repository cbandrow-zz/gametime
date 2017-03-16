var Paddle =  require("./paddle.js");
var Ball =  require("./ball.js");
var Brick =  require("./brick.js");

function World(width, height){
  this.width = width;
  this.height = height;
  this.paddle = new Paddle({x: 212, y:450, width: 75, height: 10});
  this.ball = new Ball({x: this.paddle.x + 25, y: 450, radius: 5, startCircle: 0, endCircle: 2*Math.PI, color: 'red'});
  this.brick = brickArray();
  // this.brick = new Brick({x: 250, y: 20, width: 30, height: 15, hit: false});
  console.log(brickArray());
  console.log(this.brick);
  console.log("BRICK ARRAY " + this.brick)
}

function brickArray(){
  var bricks = [];
  for (var i = 0; i< 24; i++){
    var x = 15 + (i % 8) * 60;
    var y = 30 + (i % 3) * 50;
    bricks.push(new Brick({x: x, y: y, width: 50, height: 15, hit: false}));
  }
  return bricks;
}

World.prototype.b2pcollision = function (){
  if (this.ball.x + this.ball.xx >= this.paddle.x
    && this.ball.x +this.ball.xx <= this.paddle.x + 75
    && this.ball.y + this.ball.yy >= this.paddle.y
    && this.ball.y + this.ball.yy <= this.paddle.y + 10){
      console.log("Big Money!");
      this.ball.yy = (this.ball.yy)*-1;
  }
}

World.prototype.changeAcceleration = function(){
  //if ball's x hits paddle's x between x and x + 10

  //then bounce other direction at different angle.
}


module.exports = World;
