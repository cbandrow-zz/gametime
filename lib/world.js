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

World.prototype.original = function(){
  if (this.ball.x >= this.paddle.x -2
    && this.ball.x <= this.paddle.x + 77
    && this.ball.y >= this.paddle.y - 2
    && this.ball.y <= this.paddle.y + 10){
      console.log("Middle Hit!");
      this.ball.yy = (this.ball.yy)* -1;
      console.log(this.ball.yy);
    }
  }



World.prototype.changeAccelerationLeft = function(){
  if (this.ball.x >= this.paddle.x -2
    && this.ball.x <= this.paddle.x + 19
    && this.ball.y >= this.paddle.y - 2
    && this.ball.y <= this.paddle.y + 10){
      this.ball.yy = ((this.ball.yy)* -1) + (3 * -1);
      console.log("Left Hit!" + this.ball.yy);
      if (this.ball.yy >= 10.5){
        this.ball.yy = -10.5
      } else if (this.ball.yy <= -10.5){
        this.ball.yy = 10.5
      }
    }
  }

World.prototype.middleCollision = function (){
  if (this.ball.x >= this.paddle.x + 20
    && this.ball.x <= this.paddle.x + 54
    && this.ball.y >= this.paddle.y
    && this.ball.y <= this.paddle.y + 10){
      console.log("Middle Hit!");
      this.ball.yy = (this.ball.yy)*-1;
      if (this.ball.yy >= 7.5){
        this.ball.yy = -4.5;
      } else if (this.ball.yy <= -7.5){
        this.ball.yy = 4.5;
      }
    }
  }

World.prototype.changeAccelerationRight = function(){
  if (this.ball.x >= this.paddle.x + 55
    && this.ball.x <= this.paddle.x + 77
    && this.ball.y >= this.paddle.y - 2
    && this.ball.y <= this.paddle.y + 10){
      this.ball.yy = ((this.ball.yy)* -1) + (3 * -1);
      console.log("Right Hit! " + this.ball.yy);
      if (this.ball.yy >= 10.5){
        this.ball.yy = -10.5
      } else if (this.ball.yy <= -10.5){
        this.ball.yy = 10.5
      }
    }
  }


module.exports = World;
