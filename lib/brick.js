class Brick {
  constructor(options) {
    this.x = options.x
    this.y = options.y
    this.width = options.width
    this.height = options.height
    this.hit = options.hit;
    this.colors=["cyan", "ruby", "yellowgreen", "black", "orange", "black", "blue"]
    this.colorLevel = 0
    this.color = this.colors[this.colorLevel]
  }
  draw(ctx) {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
    return this;
  }
}

module.exports = Brick;
