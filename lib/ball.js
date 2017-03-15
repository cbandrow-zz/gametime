function Ball(){
 this.x = 250
 this.y = 450
 this.yy = -2.5
 this.xx= 2.5

}
Ball.prototype.draw= function(ctx,canvas){
 ctx.fillStyle = "red"
 ctx.beginPath();
 ctx.arc(this.x,this.y,5,0,2*Math.PI);
 ctx.stroke();
 ctx.fill();
 this.move()
}

 Ball.prototype.move = function(){

   if(this.x + this.xx > 500 || this.x + this.xx < 0) {
    this.xx = (this.xx)*-1
}
if(this.y + this.yy < 0 ){
    this.yy = (this.yy)*-1
}

this.x += this.xx;
this.y += this.yy;
return this
}


module.exports = Ball;
