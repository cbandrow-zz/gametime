let World =  require("./world.js")
let canvas = document.getElementById('game')
let ctx = canvas.getContext('2d')
let world = new World(canvas.width, canvas.height)
let playBtn= document.getElementById('play-btn')

document.body.onkeyup = (e) => {
  if (e.keyCode == 32 || e.keyCode==13 ) {
    ballStart()
  }
}
playBtn.addEventListener('click', () => {
  ballStart()
})

canvas.addEventListener('mousemove', (e) => {
  let mouseX = e.offsetX;

  if (mouseX>465) {
    mouseX = 465
  }
  if (mouseX<35) {
    mouseX=35
  }
  world.paddle.draw(ctx, mouseX);
});

let ballStart = () => {
  if (world.lives===0) {
    world.score=0
    world.lives=3
    world.level=0

    for (let i=0;i<24;i++) {
      world.brick[i].hits=1
    }
  }
  if (world.ball.xx === 0) {
    if (world.ball.x > 250) {
      world.ball.xx=-3;
      world.ball.yy=-3;
    } else if (world.ball.x < 250) {
      world.ball.xx=3;
      world.ball.yy=-3;
    }
  }
}

requestAnimationFrame(function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  world.paddle.draw(ctx);
  world.ball.draw(ctx);
  world.bounceLeft();
  world.bounceRight();
  world.bounceMiddle();
  world.brickHitLeft();
  world.brickHitRight();
  world.brickHitMid();
  world.loseLife()
  world.gameOver()
  world.levelUp()
  world.prepareLaunch()
  for (let i = 0; i < world.brick.length; i++) {
    if (world.brick[i].hits>0) {
      world.brick[i].draw(ctx)
      world.brick[i].color=world.brick[i].colors[world.brick[i].hits-1]
      let score = document.getElementById('score').innerHTML=world.score;
      let lives = document.getElementById('lives').innerHTML=world.lives;
    }
  }
  requestAnimationFrame(gameLoop);
})
