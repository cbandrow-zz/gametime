// var World =  require("./world.js")
// var world = new World(canvas.width, canvas.height)
// world.draw(ctx);
var Paddle = require("./paddle.js");

var canvas = document.getElementById('game')
var ctx = canvas.getContext('2d')



var paddle = new Paddle(250, 450, "blue");

requestAnimationFrame(function gameLoop(){

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  paddle.draw(ctx);

  requestAnimationFrame(gameLoop);
})
