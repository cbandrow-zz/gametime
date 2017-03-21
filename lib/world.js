var Paddle =  require("./paddle.js");
var Ball =  require("./ball.js");
var Brick =  require("./brick.js");

function World(width, height){
  this.lives = 3;
  this.level=0
  this.score = 0
  this.width = width;
  this.height = height;
  this.paddle = new Paddle({x: 212, y:450, width: 75, height: 10});
  this.ball = new Ball({x: this.paddle.x + 25, y: 445, radius: 7, startCircle: 0, endCircle: 2*Math.PI, color: 'red'});
  this.brick = brickArray();
}

function brickArray(){
  var bricks = [];
  for (var i = 0; i< 24; i++){
    var x = 10 + (i % 8) * 60;
    var y = 40 + (i % 3) * 30;
    bricks.push(new Brick({x: x, y: y, width: 50, height: 26, hit: false}));
  }
  return bricks;
}

World.prototype.brickHitMid = function(){
  for(let i=0;i<this.brick.length;i++){
  if (this.ball.x >= this.brick[i].x-1
    && this.ball.x <= this.brick[i].x+50
    && this.ball.y >= this.brick[i].y-1
    && this.ball.y <= this.brick[i].y+26
    && this.brick[i].hit===false) {

      if (this.brick[i].hit===false){
        console.log("ball x velocity = "+this.ball.xx)
        console.log("ball y velocity = "+this.ball.yy)
       this.score +=10
       this.increaseSpeed();
     }
     this.ball.yy= (this.ball.yy)*-1
     this.brick[i].hit=true
   }
  }
}

World.prototype.brickHitLeft = function(){
  for(let i=0;i<this.brick.length;i++){
    if (this.ball.x >= this.brick[i].x - 1
      && this.ball.x <= this.brick[i].x + 5
      && this.ball.y >= this.brick[i].y - 1
      && this.ball.y <= this.brick[i].y + 26
      && this.brick[i].hit===false){
      this.collideLeft();
      if (this.brick[i].hit===false){
        console.log("ball x velocity = "+this.ball.xx)
        console.log("ball y velocity = "+this.ball.yy)
       this.score +=10
       this.increaseSpeed();
     }
     this.brick[i].hit=true
    }
  }
}

World.prototype.brickHitRight = function(){
  for(let i=0;i<this.brick.length;i++){
    if (this.ball.x >= this.brick[i].x + 45
      && this.ball.x <= this.brick[i].x + 51
      && this.ball.y >= this.brick[i].y - 1
      && this.ball.y <= this.brick[i].y + 26
      && this.brick[i].hit===false){
      this.collideRight();
      if (this.brick[i].hit===false){
        console.log("ball x velocity = "+this.ball.xx)
        console.log("ball y velocity = "+this.ball.yy)
       this.score +=10
       this.increaseSpeed();
     }
     this.brick[i].hit=true
    }
  }
}

World.prototype.increaseSpeed = function(){
  if (this.score % 20 == 0){
    this.ball.xx = (this.ball.xx) * 1.08
    this.ball.yy = (this.ball.yy) * 1.08
  }
}

World.prototype.loseLife = function(){
  if(this.ball.y>500){
    this.lives--
    this.ball.x =this.paddle.x+10
    this.ball.y =this.paddle.y-5
    this.ball.yy=0
    this.ball.xx=0
    // if(this.ball.yy >= 4.4){
    //   this.ball.yy = 3.779136;
    //   this.ball.yy = (this.ball.yy)*-1
    //   this.ball.xx = 3.779136;
    // } else if (this.ball.yy <= -4.4) {
    //   this.ball.yy = -3.779136;
    //   this.ball.yy = (this.ball.yy)*-1
    //   this.ball.xx = 3.779136;
    //}
  }
}

World.prototype.prepareLaunch= function(){
  if(this.ball.yy===0&this.ball.xx===0){
    this.ball.x=this.paddle.x+40
  this.ball.y=this.paddle.y-5}
}


World.prototype.gameOver = function(){
  if(this.lives ===0){
    this.ball.x = 250
    this.ball.y = 250
    this.ball.yy = 0
    this.ball.xx = 0
    this.level= 0
     for(let i=0;i<24;i++){
    this.brick[i].colorLevel=this.level
    this.brick[i].color=this.brick[i].colors[this.brick[i].colorLevel]
        }
  }
}

World.prototype.levelUp = function(){
  let total = 0
  this.brick.forEach(function(i){
    if(i.hit===true){
      return total++
      }
    })
  if(total===24){
   this.ball.x=250
   this.ball.y=250
   this.ball.xx=0
   this.ball.yy=0
   this.level++
   for(let i=0;i<total;i++){
     this.brick[i].hit=false
     this.brick[i].colorLevel=this.level
     this.brick[i].color=this.brick[i].colors[this.brick[i].colorLevel]

    }
  }
}

  World.prototype.original = function(){
    if (this.ball.x >= this.paddle.x -2
      && this.ball.x <= this.paddle.x + 77
      && this.ball.y >= this.paddle.y -2
      && this.ball.y <= this.paddle.y + 10){
        this.ball.yy = (this.ball.yy)* -1;
        }
    }

  World.prototype.bounceLeft = function(){
    if (this.canCollideLeft()){
      this.collideLeft();
      }
    }

  World.prototype.bounceMiddle = function (){
    if (this.canCollideMiddle()){
        this.collideMiddle();
      }
    }

  World.prototype.bounceRight = function(){
    if (this.canCollideRight()){
        this.collideRight();
      }
    }

  World.prototype.collideMiddle = function(){
    this.ball.yy = (this.ball.yy)*-1;
    }

  World.prototype.collideLeft = function(){
    if (this.ball.xx < 0){
      this.ball.yy = (this.ball.yy) * -1
      this.ball.xx = this.ball.xx
    } else if (this.ball.xx >0){
      this.ball.yy = (this.ball.yy) * -1
      this.ball.xx = (this.ball.xx) * -1
    }
  }

  World.prototype.collideRight = function(){
    if (this.ball.xx < 0){
      this.ball.yy = (this.ball.yy) * -1
      this.ball.xx = (this.ball.xx) * -1
    } else if (this.ball.xx >0){
      this.ball.yy = (this.ball.yy) * -1
      this.ball.xx = this.ball.xx
    }
  }

  World.prototype.canCollideLeft = function(){
      if (this.ball.x >= this.paddle.x -2
      && this.ball.x <= this.paddle.x + 15
      && this.ball.y >= this.paddle.y -2
      && this.ball.y <= this.paddle.y + 10){
      return true;
    }
  }
  World.prototype.canCollideMiddle = function(){
      if (this.ball.x >= this.paddle.x + 16
      && this.ball.x <= this.paddle.x + 59
      && this.ball.y >= this.paddle.y -2
      && this.ball.y <= this.paddle.y + 10){
      return true;
    }
  }
  World.prototype.canCollideRight = function(){
      if (this.ball.x >= this.paddle.x + 60
      && this.ball.x <= this.paddle.x + 77
      && this.ball.y >= this.paddle.y -2
      && this.ball.y <= this.paddle.y + 10){
       return true;
     }
   }


module.exports = World;
