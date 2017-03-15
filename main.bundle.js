/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var World = __webpack_require__(1);
	var Ball = __webpack_require__(3);
	var Brick = __webpack_require__(4);
	var Paddle = __webpack_require__(2);
	var canvas = document.getElementById('game');
	var ctx = canvas.getContext('2d');
	var ball = new Ball();
	var brick = new Brick();
	var paddle = new Paddle(250, 450, "blue");
	var world = new World(canvas.width, canvas.height);

	requestAnimationFrame(function gameLoop() {

	  // ctx.clearRect(0, 0, canvas.width, canvas.height);
	  world.draw(ctx);
	  paddle.draw(ctx);
	  ball.draw(ctx);
	  brick.draw(ctx);
	  requestAnimationFrame(gameLoop);
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Paddle = __webpack_require__(2);

	function World(width, height) {
	  this.width = width;
	  this.height = height;
	}

	World.prototype.draw = function (ctx) {
	  ctx.fillStyle = "green";
	  ctx.fillRect(0, 0, this.width, this.height);
	  return this;
	};

	requestAnimationFrame(function gameLoop(ctx, canvas) {
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

/***/ },
/* 2 */
/***/ function(module, exports) {

	function Paddle(x, y, color) {
	  this.x = x;
	  this.y = 450;
	  this.width = 40;
	  this.height = 15;
	  this.color = color;
	}

	Paddle.prototype.draw = function (ctx) {
	  ctx.fillStyle = this.color;
	  ctx.fillRect(250, 450, this.width, this.height);
	  return this;
	};

	module.exports = Paddle;

/***/ },
/* 3 */
/***/ function(module, exports) {

	function Ball() {
	  this.x = 250;
	  this.y = 450;
	  this.yy = -2.5;
	  this.xx = 2.5;
	}
	Ball.prototype.draw = function (ctx, canvas) {
	  ctx.fillStyle = "red";
	  ctx.beginPath();
	  ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI);
	  ctx.stroke();
	  ctx.fill();
	  this.move();
	};

	Ball.prototype.move = function () {

	  if (this.x + this.xx > 500 || this.x + this.xx < 0) {
	    this.xx = this.xx * -1;
	  }
	  if (this.y + this.yy < 0) {
	    this.yy = this.yy * -1;
	  }

	  this.x += this.xx;
	  this.y += this.yy;
	  return this;
	};

	module.exports = Ball;

/***/ },
/* 4 */
/***/ function(module, exports) {

	function Brick() {
	    this.width = 40;
	    this.height = 15;
	    this.color = "yellow";
	    this.block = [];
	    for (let x = 0; x < 3; x++) {
	        block[x] = [];
	        for (let y = 0; y < 2; y++) {
	            block[x][y] = { x: 0, y: 0 };
	        }
	    }
	}

	Brick.prototype.draw = function (ctx) {
	    ctx.fillStyle = this.color;
	    ctx.fillRect(250, 50, this.width, this.height);
	    return this;
	};
	module.exports = Brick;

/***/ }
/******/ ]);