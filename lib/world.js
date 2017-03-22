var Paddle =  require("./paddle.js");
var Ball =  require("./ball.js");
var Brick =  require("./brick.js");

function World(width, height) {
  this.lives = 3;
  this.level= 1;
  this.score = 0;
  this.width = width;
  this.height = height;
  this.paddle = new Paddle({x: 212, y: 450, width: 75, height: 10});
  this.ball = new Ball({x: this.paddle.x + 25, y: 445, radius: 7, startCircle: 0, endCircle: 2*Math.PI, color: 'red'});
  this.brick = brickArray();
}

function brickArray() {
  var bricks = [];

  for (var i = 0; i< 24; i++) {
    var x = 15 + (i % 8) * 60;
    var y = 20 + (i % 3) * 30;

    bricks.push(new Brick({x: x, y: y, width: 50, height: 26, hits: 1}));
  }
  return bricks;
}

World.prototype.brickCheckCollision = function(i, left, right, up, down){
  if (this.ball.x >= this.brick[i].x - left
    && this.ball.x <= this.brick[i].x + right
    && this.ball.y >= this.brick[i].y - up
    && this.ball.y <= this.brick[i].y + down
    && this.brick[i].hits>0) {
      return true;
    }
}

World.prototype.brickHitMid = function() {
  for (let i=0;i<this.brick.length;i++) {
    if(this.brickCheckCollision(i, 1, 50, 1, 26)){
      if (this.brick[i].hits>0) {
        this.score +=10
        this.increaseSpeed();
      }
      this.ball.yy= (this.ball.yy)*-1
      this.brick[i].hits--
    }
  }
}

World.prototype.brickHitLeft = function() {
  for (let i=0;i<this.brick.length;i++) {
    if(this.brickCheckCollision(i, 1, 3, 1, 26)){
      this.collideLeft();
      if (this.brick[i].hits>1) {
        this.score +=10
        this.increaseSpeed();
      }
      this.brick[i].hits--
    }
  }
}

World.prototype.brickHitRight = function() {
  for (let i=0;i<this.brick.length;i++) {
    if(this.brickCheckCollision(i, -48, 51, 1, 26)){
      this.collideRight();
      if (this.brick[i].hits>0) {
        this.score +=10
        this.increaseSpeed();
      }
      this.brick[i].hits--
    }
  }
}

World.prototype.increaseSpeed = function() {
  if (this.score % 20 == 0) {
    this.ball.xx = (this.ball.xx) * 1.08
    this.ball.yy = (this.ball.yy) * 1.08
  }
}

World.prototype.loseLife = function() {
  if (this.ball.y>500) {
    this.lives--
    this.ball.x =this.paddle.x+10
    this.ball.y =this.paddle.y-5
    this.ball.yy=0
    this.ball.xx=0
  }
}

World.prototype.prepareLaunch= function() {
  if (this.ball.yy===0 && this.ball.xx===0) {
    this.ball.x=this.paddle.x+40
    this.ball.y=this.paddle.y-5
  }
}


World.prototype.gameOver = function() {
  if (this.lives ===0) {
    this.ball.x = 250
    this.ball.y = 250
    this.ball.yy = 0
    this.ball.xx = 0
    this.level= 0
    for (let i=0;i<24;i++) {
      this.brick[i].hits=this.level
      this.brick[i].color=this.brick[i].colors[this.level]
    }
  }
}

World.prototype.levelUp = function() {
  let total = 0

  this.brick.forEach(function(i) {
    if (i.hits===0) {
      return total++
    }
  })
  if (total===24) {
    this.ball.x=250
    this.ball.y=250
    this.ball.xx=0
    this.ball.yy=0
    this.level++
    for (let i=0;i<total;i++) {
      this.brick[i].hits=this.level
      this.brick[i].color=this.brick[i].colors[this.brick[i].hits+1]

    }
  }
}

World.prototype.bounceLeft = function() {
  if (this.canCollideLeft()) {
    this.collideLeft();
  }
}

World.prototype.bounceMiddle = function () {
  if (this.canCollideMiddle()) {
    this.collideMiddle();
  }
}

World.prototype.bounceRight = function() {
  if (this.canCollideRight()) {
    this.collideRight();
  }
}

World.prototype.canCollideLeft = function() {
  if (this.paddleBallCollide(2, 15, 2, 10)) {
    return true;
  }
}

World.prototype.canCollideMiddle = function() {
  if (this.paddleBallCollide(-16, 59, 2, 10)) {
    return true;
  }
}
World.prototype.canCollideRight = function() {
  if (this.paddleBallCollide(-60, 77, 2, 10)) {
    return true;
  }
}

World.prototype.collideMiddle = function() {
  this.ball.yy = (this.ball.yy)*-1;
}

World.prototype.collideLeft = function() {
  if (this.ball.xx < 0) {
    this.ball.yy = (this.ball.yy) * -1
    this.ball.xx = this.ball.xx
  } else if (this.ball.xx >0) {
    this.ball.yy = (this.ball.yy) * -1
    this.ball.xx = (this.ball.xx) * -1
  }
}

World.prototype.collideRight = function() {
  if (this.ball.xx < 0) {
    this.ball.yy = (this.ball.yy) * -1
    this.ball.xx = (this.ball.xx) * -1
  } else if (this.ball.xx >0) {
    this.ball.yy = (this.ball.yy) * -1
    this.ball.xx = this.ball.xx
  }
}

World.prototype.paddleBallCollide = function(left, right, up, down){
  if(this.ball.x >= this.paddle.x -left
    && this.ball.x <= this.paddle.x + right
    && this.ball.y >= this.paddle.y -up
    && this.ball.y <= this.paddle.y + down) {
    return true;
  }
}

module.exports = World;
