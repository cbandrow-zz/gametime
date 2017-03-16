function Brick(options){
this.x = options.x;
this.y = options.y;
this.width = options.width;
this.height =options.height;
this.hit = options.hit;
this.color = "cyan"
}

// function BricksArray(){
//   var bricks = [];
//   for (var i = 0; i< 24; i++){
//     var x = 30 + (i % 8) * 30;
//     var y = 30 + (i % 3) * 30;
//     bricks.push(new Brick({x: x, y: y, width: 30, height: 15, hit: false}));
//     console.log(bricks);
//   }
//   return bricks;
// }
// let brickArr = bricksArray();

Brick.prototype.draw = function(ctx){
  ctx.fillStyle = this.color
  ctx.fillRect(this.x, this.y, this.width, this.height)
  return this;
}



// Brick.prototype.destroy = function(){
//   //if ball.x and ball.y = brick.x and brick.y
//   //then brick.hit = true;
//   //array slice() based on indeces and hit = true;
//   //return changes to block[]
//   //store false in new array destroyed[]
//   //destroyed[i].width and destroyed[i].height = 0;
//
//
// }
module.exports = Brick;
