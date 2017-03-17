var World =  require("./world.js")
var canvas = document.getElementById('game')
var ctx = canvas.getContext('2d')
var world = new World(canvas.width, canvas.height)

var playBtn= document.getElementById('play-btn')

playBtn.addEventListener('click',function(){
  world.lives=3
  world.ball.xx=4
  world.ball.yy=-3
})

canvas.addEventListener('mousemove', function(e){
  var mouseX = e.offsetX;
  world.paddle.draw(ctx, mouseX);
});

requestAnimationFrame(function gameLoop(){

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  world.paddle.draw(ctx);
  world.ball.draw(ctx);
  // world.original();
  world.middleCollision();
  world.changeAccelerationLeft();
  world.changeAccelerationRight();
  for (var i = 0; i < world.brick.length; i++){
    if(world.brick[i].hit===false){
     world.brick[i].draw(ctx);
     world.loseLife()
     var score = document.getElementById('score').innerHTML=world.score;
     var lives = document.getElementById('lives').innerHTML=world.lives;
     world.gameOver()
   }
  }
  world.ballToBrick();
  requestAnimationFrame(gameLoop);
})
//if world.ball x and y are the same as world. paddle x and y then bounce
