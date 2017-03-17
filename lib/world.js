var Paddle =  require("./paddle.js");
var Ball =  require("./ball.js");
var Brick =  require("./brick.js");


function World(width, height){
  this.score = 0
  this.width = width;
  this.height = height;
  this.paddle = new Paddle({x: 212, y:450, width: 75, height: 10});
  this.ball = new Ball({x: this.paddle.x + 25, y: 450, radius: 7, startCircle: 0, endCircle: 2*Math.PI, color: 'red'});
  this.brick = brickArray();
  // this.brick = new Brick({x: 250, y: 20, width: 30, height: 15, hit: false});
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




// var blocksLeft =[false,false,false,false].filter(collision => return !collision)
//
// this.brick = blocksLeft

World.prototype.ballToBrick = function(){

  for(let i=0;i<this.brick.length;i++){
  if (this.ball.x >= this.brick[i].x-1
    && this.ball.x <= this.brick[i].x+50
    && this.ball.y >= this.brick[i].y-1
    && this.ball.y <= this.brick[i].y+15)
    {
      if (this.brick[i].hit===false){
       this.score +=10}

      this.brick[i].hit=true
      console.log(this.score)
      }
    }
}

World.prototype.lifeLost = function(){

}


World.prototype.original = function(){
  if (this.ball.x >= this.paddle.x -2
    && this.ball.x <= this.paddle.x + 77
    && this.ball.y >= this.paddle.y -2
    && this.ball.y <= this.paddle.y + 10){
      this.ball.yy = (this.ball.yy)* -1;
      let xChance = determineXX();
      let yChance = determineYY();
      }
  }

World.prototype.changeAccelerationLeft = function(){
  if (this.ball.x >= this.paddle.x -2
    && this.ball.x <= this.paddle.x + 20
    && this.ball.y >= this.paddle.y -2
    && this.ball.y <= this.paddle.y + 10){
      if (this.ball.yy > 7.5 || this.ball.yy < -7.5){
        this.ball.yy = (this.ball.yy)* -1
        this.ball.xx = (this.ball.xx) * -1;
      } else if (this.ball.yy < 7.5 && this.ball.yy > -7.5){
        this.ball.yy = (this.ball.yy)* -1.2
        this.ball.xx = (this.ball.xx) * -1;
      }
    }
    else if (this.ball.x >= this.paddle.x -2
      && this.ball.x <= this.paddle.x + 77
      && this.ball.y >= this.paddle.y + 1
      && this.ball.y <= this.paddle.y + 9){
        this.ball.yy = (this.ball.yy)* -1
        this.ball.x = this.ball.x;
        this.ball.y = this.ball.y - 3;
      }
  }

World.prototype.middleCollision = function (){
  if (this.ball.x >= this.paddle.x + 21
    && this.ball.x <= this.paddle.x + 56
    && this.ball.y >= this.paddle.y -2
    && this.ball.y <= this.paddle.y + 10){
      if (this.ball.yy > 7.5 ||this.ball.yy < -7.5){
        this.ball.yy = (this.ball.yy)*-0.375;
        this.ball.xx = (this.ball.xx) * -1;
      } else if (this.ball.yy < 7.5 && this.ball.yy > -7.5){
        this.ball.yy = (this.ball.yy)*-1;
        this.ball.xx = (this.ball.xx) * -1;
      }
    } else if (this.ball.x >= this.paddle.x -2
      && this.ball.x <= this.paddle.x + 77
      && this.ball.y >= this.paddle.y + 1
      && this.ball.y <= this.paddle.y + 9){
        this.ball.yy = (this.ball.yy)* -1
        this.ball.x = this.ball.x;
        this.ball.y = this.ball.y -3
      }
  }
World.prototype.changeAccelerationRight = function(){
  if (this.ball.x >= this.paddle.x + 57
    && this.ball.x <= this.paddle.x + 77
    && this.ball.y >= this.paddle.y -2
    && this.ball.y <= this.paddle.y + 10){
      if (this.ball.yy > 7.5 || this.ball.yy < -7.5){
        this.ball.yy = (this.ball.yy)* -1
        this.ball.xx = (this.ball.xx) * -1;
      } else if (this.ball.yy < 7.5 && this.ball.yy > -7.5){
        this.ball.yy = (this.ball.yy)* -1.2
        this.ball.xx = (this.ball.xx) * -1;
      }
    } else if (this.ball.x >= this.paddle.x -2
      && this.ball.x <= this.paddle.x + 77
      && this.ball.y >= this.paddle.y + 1
      && this.ball.y <= this.paddle.y + 9){
        this.ball.yy = (this.ball.yy)* -1
        this.ball.x = this.ball.x
        this.ball.y = this.ball.y - 3
      }
  }

  function determineXX(){
    var xRoll = Math.floor(Math.random() * 10);
    return xRoll;
  }

  function determineYY(){
    var yRoll = Math.floor(Math.random()* 10);
    return yRoll;
  }




module.exports = World;
