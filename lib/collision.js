var World =  require("./world.js")

var sendFunctions = function(){



// Dry Evaluative Functions. Don't repeat yo self

  // World.prototype.canCollideMiddle = function(){
  //     this.ball.x >= this.paddle.x + 16
  //     && this.ball.x <= this.paddle.x + 59
  //     && this.ball.y >= this.paddle.y -2
  //     && this.ball.y <= this.paddle.y + 10)
  // }
  //
  // World.prototype.canCollideLeft = function(){
  //   if (this.ball.x >= this.paddle.x -2
  //     && this.ball.x <= this.paddle.x + 15
  //     && this.ball.y >= this.paddle.y -2
  //     && this.ball.y <= this.paddle.y + 10){
  //     }
  // }
  //
  // World.prototype.canCollideRight = function(){
  //   if (this.ball.x >= this.paddle.x + 60
  //     && this.ball.x <= this.paddle.x + 77
  //     && this.ball.y >= this.paddle.y -2
  //     && this.ball.y <= this.paddle.y + 10){
  //     }
  // }

World.prototype.collideMiddle = function(){
  console.log(this);
  if (this.ball.yy > 7.5 ||this.ball.yy < -7.5){
    this.ball.yy = (this.ball.yy)*-0.375;
  } else if (this.ball.yy < 7.5 && this.ball.yy > -7.5){
    this.ball.yy = (this.ball.yy)*-1;
  }
  if (this.ball.xx > 7.5 ||this.ball.xx < -7.5){
    this.ball.xx = (this.ball.xx)*-0.3;
  }
  let xValue = determineXReverse();
  if (xValue >=8){
    this.ball.xx = (this.ball.xx)*-1;
  }
}

World.prototype.collideSides = function(){
  let shift = determineRadicalReverse();
  console.log("left"+ shift)
  if (this.ball.yy > 7.5 || this.ball.yy < -7.5){
    this.ball.yy = (this.ball.yy)* -1
    if(shift >= 9){
      this.ball.yy = (this.ball.yy) * 0.4;
      this.ball.xx = (this.ball.xx) * 1.65
    }
  } else if (this.ball.yy < 7.5 && this.ball.yy > -7.5){
    this.ball.yy = (this.ball.yy)* -1.2
  }
  this.ball.xx = (this.ball.xx) * -1;
}

World.prototype.safeguardCheck = function(){
  this.ball.x >= this.paddle.x -2
  && this.ball.x <= this.paddle.x + 77
  && this.ball.y >= this.paddle.y + 1
  && this.ball.y <= this.paddle.y + 9
}

World.prototype.safeguard = function(){
  this.ball.yy = (this.ball.yy)* -1
  this.ball.x = this.ball.x
  this.ball.y = this.ball.y - 3
}

World.prototype.original = function(){
  if (this.ball.x >= this.paddle.x -2
    && this.ball.x <= this.paddle.x + 77
    && this.ball.y >= this.paddle.y -2
    && this.ball.y <= this.paddle.y + 10){
      this.ball.yy = (this.ball.yy)* -1;
      }
  }

  function determineXReverse(){
    var xRoll = Math.floor(Math.random() * 10);
    return xRoll;
  }

  function determineRadicalReverse(){
    var radRoll = Math.floor(Math.random()* 15);
    return radRoll;
  }
}

module.exports = sendFunctions;
