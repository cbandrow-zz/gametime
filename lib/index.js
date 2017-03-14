var World =  require("./world.js")
var canvas = document.getElementById('game')
var ctx = canvas.getContext('2d')
var world = new World(canvas.width, canvas.height)

world.draw(ctx);


// var ball() = require("./ball.js")
// var paddle() = require("./paddle.js")
// var bricks() = require("./bricks.js")
