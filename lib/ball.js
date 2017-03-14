function Ball(){


}
Ball.prototype.draw= function(ctx){
 let x = 250;
 let y = 250;
 ctx.fillStyle = "black"
 ctx.beginPath();
 ctx.arc(x,y,5,0,2*Math.PI);
 ctx.stroke();
 ctx.fill();
}

module.exports = Ball;
