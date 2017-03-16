var World =  require("./world.js")
var canvas = document.getElementById('game')
var ctx = canvas.getContext('2d')

var world = new World(canvas.width, canvas.height)

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
  world.ballToBrick();
  for (var i = 0; i < world.brick.length; i++){
    world.brick[i].draw(ctx);
  }
  requestAnimationFrame(gameLoop);
})

//if world.ball x and y are the same as world. paddle x and y then bounce
