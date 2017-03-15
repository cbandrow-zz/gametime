var World =  require("./world.js")
var canvas = document.getElementById('game')
var ctx = canvas.getContext('2d')
var world = new World(canvas.width, canvas.height)
console.log(world);

canvas.addEventListener('mousemove', function(e){
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  var mouseX = e.offsetX;
  // debugger;
  world.paddle.draw(ctx, mouseX);
  console.log(mouseX)
});

requestAnimationFrame(function gameLoop(){

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // world.draw(ctx);
  world.paddle.draw(ctx);
  world.ball.draw(ctx);
  world.brick.draw(ctx);
  requestAnimationFrame(gameLoop);
})
