var Paddle =  require("./paddle.js");


function World(width, height){
this.width = width;
this.height = height;
}


World.prototype.draw = function(ctx){
  ctx.fillStyle = "green";
  ctx.fillRect(0,0,this.width,this.height);
  return this;
} 

requestAnimationFrame(function gameLoop(ctx, canvas){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var paddle = new Paddle(250, 250);
  // canvas.addEventListener('mousemove', function (e) {
  // console.log('x: ', e.offsetX);
  // var x = e.offsetX;
  // var newBlock = new Paddle(x, y, 20, 5, "rgba(0, 55, 150, 1)");
  // blocks.push(newBlock);
  // });

  requestAnimationFrame(gameLoop);
});



module.exports = World;
