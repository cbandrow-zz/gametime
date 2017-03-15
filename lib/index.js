var World =  require("./world.js")
var Ball = require('./ball.js')
var Paddle = require("./paddle.js");
var canvas = document.getElementById('game')
var ctx = canvas.getContext('2d')
var ball = new Ball()
var paddle = new Paddle(250, 450, "blue");
var world = new World(canvas.width, canvas.height)

requestAnimationFrame(function gameLoop(){

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  world.draw(ctx);
  paddle.draw(ctx);
  ball.draw(ctx)
  requestAnimationFrame(gameLoop);
})
