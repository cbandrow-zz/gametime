class Brick {
  constructor(options) {
    this.x = options.x
    this.y = options.y
    this.width = options.width
    this.height = options.height
    this.hits = options.hits;
    this.colors=["cyan", "red", "blue", "white", "orange", "yellow", "pink"]
  }
  draw(ctx) {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
    return this;
  }
}

module.exports = Brick;
