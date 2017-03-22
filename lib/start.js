class Start {
  constructor() {
    this.x = 250
    this.y = 250;
    this.state = true;
  }
  draw(ctx) {
    if (this.state == true) {
      ctx.fillStyle = "#ffffff";
      ctx.font =  "21px Play"
      ctx.fillText("Press SPACE or ENTER to play SPACE BREAKOUT", 22, 395);
      ctx.fillText("Move the Mouse to move the Paddle", 92, 420);
    }
  }
}

module.exports = Start;
