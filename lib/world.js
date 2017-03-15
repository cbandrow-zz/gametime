var Paddle =  require("./paddle.js");
var Ball =  require("./ball.js");
var Brick =  require("./brick.js");

//create a world object just to house data in. It doesn't need to exist physically on screen, but it needs to be able to hold data.

function World(){
  this.width = 500;
  this.height = 500;
  this.paddle = new Paddle({x: 250, y:450, width: 50, height: 10});
  this.ball = new Ball({x: this.paddle.x + 25, y: 455, radius: 5, startCircle: 0, endCircle: 2*Math.PI, color: 'red'});
  this.brick = new Brick({x: 250, y:50, width: 40, height: 15});
}

// World.prototype.draw = function(ctx){
//   ctx.fillStyle = "green";
//   ctx.fillRect(0,0,this.width,this.height);
//   return this;
// }

// requestAnimationFrame(function gameLoop(ctx, canvas){
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   var paddle = new Paddle(250, 250);
//   canvas.addEventListener('mousemove', function (e) {
//   console.log('x: ', e.offsetX);
//   var x = e.offsetX;
//   var newBlock = new Paddle(x, y, 20, 5, "rgba(0, 55, 150, 1)");
//   blocks.push(newBlock);
//   });
//
//   requestAnimationFrame(gameLoop);
// });



module.exports = World;
