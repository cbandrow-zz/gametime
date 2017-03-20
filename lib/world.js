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
// var blocksLeft =[false,false,false,false].filter(collision => return !collision)
//
// this.brick = blocksLeft

World.prototype.brickHitMid = function(){
  for(let i=0;i<this.brick.length;i++){
  if (this.ball.x >= this.brick[i].x-1
    && this.ball.x <= this.brick[i].x+50
    && this.ball.y >= this.brick[i].y-1
    && this.ball.y <= this.brick[i].y+26
    && this.brick[i].hit===false) {

      if (this.brick[i].hit===false){
       this.score +=10
     }
     this.ball.yy= (this.ball.yy)*-1
     this.brick[i].hit=true
   }
  }
}

World.prototype.brickHitLeft = function(){
  for(let i=0;i<this.brick.length;i++){
    if (this.ball.x >= this.brick[i].x - 1
      && this.ball.x <= this.brick[i].x + 10
      && this.ball.y >= this.brick[i].y - 1
      && this.ball.y <= this.brick[i].y + 26
      && this.brick[i].hit===false){
      this.collideLeft();
      if (this.brick[i].hit===false){
       this.score +=10
     }
     this.brick[i].hit=true
    }
  }
}

World.prototype.brickHitRight = function(){
  for(let i=0;i<this.brick.length;i++){
    if (this.ball.x >= this.brick[i].x + 40
      && this.ball.x <= this.brick[i].x + 51
      && this.ball.y >= this.brick[i].y - 1
      && this.ball.y <= this.brick[i].y + 26
      && this.brick[i].hit===false){
      this.collideRight();
      if (this.brick[i].hit===false){
       this.score +=10
     }
     this.brick[i].hit=true
    }
  }
}

World.prototype.loseLife = function(){
  if(this.ball.y>500){
    this.lives--
    this.ball.x =250
    this.ball.y =250
    this.ball.y = (this.ball.yy)*-1
    console.log(this.lives)
  }
}
//use determineXX and determineYY functions on assoiated values to //give some randomness when new ball starts?
//with lets play ball button, give back the trajectory shit

World.prototype.gameOver = function(){
  if(this.lives ===0){
  console.log("Game-over!")
    this.ball.x = 250
    this.ball.y = 250
    this.ball.yy = 0
    this.ball.xx = 0
  }
}
// document.getElementById('play-btn').setAttribute("disable", false)
//   //probably need to have either a alert or a html change to say game over
  //disable lets play ball

World.prototype.levelUp = function(){
  let total =0
  console.log(this.level)

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
   this.brick.colorLevel=this.level
   for(let i=0;i<total;i++){
     this.brick[i].hit=false
    }
  }
}
// document.getElementById('play-btn').setAttribute("disable", false)
//   //probably need to have either a alert or a html change to say game over
  //disable lets play ball

  World.prototype.original = function(){
    if (this.ball.x >= this.paddle.x -2
      && this.ball.x <= this.paddle.x + 77
      && this.ball.y >= this.paddle.y -2
      && this.ball.y <= this.paddle.y + 10){
        this.ball.yy = (this.ball.yy)* -1;
        }
    }

  World.prototype.changeAccelerationLeft = function(){
    if (this.ball.x >= this.paddle.x -2
      && this.ball.x <= this.paddle.x + 15
      && this.ball.y >= this.paddle.y -2
      && this.ball.y <= this.paddle.y + 10){
      this.collideLeft();
      }
    }

  World.prototype.middleCollision = function (){
    if (this.ball.x >= this.paddle.x + 16
      && this.ball.x <= this.paddle.x + 59
      && this.ball.y >= this.paddle.y -2
      && this.ball.y <= this.paddle.y + 10){
        this.collideMiddle();
      }
    }
  World.prototype.changeAccelerationRight = function(){
    if (this.ball.x >= this.paddle.x + 60
      && this.ball.x <= this.paddle.x + 77
      && this.ball.y >= this.paddle.y -2
      && this.ball.y <= this.paddle.y + 10){
        this.collideRight();
      }
    }

    function determineXReverse(){
      var xRoll = Math.floor(Math.random() * 10);
      return xRoll;
    }
    function determineRadicalReverse(){
      var radRoll = Math.floor(Math.random()* 10);
      return radRoll;
    }

  World.prototype.collideMiddle = function(){
    if (this.ball.yy > 7.5 ||this.ball.yy < -7.5){
      this.ball.yy = (this.ball.yy)*-0.375;
    } else if (this.ball.yy < 7.5 && this.ball.yy > -7.5){
      this.ball.yy = (this.ball.yy)*-1;
    }
    if (this.ball.xx > 7.5 ||this.ball.xx < -7.5){
      this.ball.xx = (this.ball.xx)*-0.3;
    } else if (this.ball.xx < 7.5 && this.ball.xx > -7.5){
      this.ball.xx = (this.ball.xx)*-1;
    }
    this.ball.xx = (this.ball.xx)*-1;
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


  // World.prototype.collideSides = function(){
  //   let shift = determineRadicalReverse();
  //   console.log("hit sides" + this.ball.yy);
  //   if (this.ball.yy > 7.5 || this.ball.yy < -7.5){
  //     this.ball.yy = (this.ball.yy)* -1
  //     if(shift >= 5){
  //       this.ball.yy = (this.ball.yy) * 0.6;
  //       this.ball.xx = (this.ball.xx) * 1.7
  //     }
  //   } else if (this.ball.yy < 7.5 && this.ball.yy > -7.5){
  //     this.ball.yy = (this.ball.yy)* -1.2
  //   }
  //   this.ball.xx = (this.ball.xx) * -1;
  // }

module.exports = World;


  // Dry Evaluative Functions. Repeat once, go home

    // World.prototype.canCollideMiddle = function(){
    //     this.ball.x >= this.paddle.x + 16
    //     && this.ball.x <= this.paddle.x + 59
    //     && this.ball.y >= this.paddle.y -2
    //     && this.ball.y <= this.paddle.y + 10
    //     return true
    // }
    //
    // World.prototype.canCollideLeft = function(){
    //     this.ball.x >= this.paddle.x -2
    //     && this.ball.x <= this.paddle.x + 15
    //     && this.ball.y >= this.paddle.y -2
    //     && this.ball.y <= this.paddle.y + 10
    //     return true;
    // }
    //
    // World.prototype.canCollideRight = function(){
    //     this.ball.x >= this.paddle.x + 60
    //     && this.ball.x <= this.paddle.x + 77
    //     && this.ball.y >= this.paddle.y -2
    //     && this.ball.y <= this.paddle.y + 10
    //      return true;
    //
