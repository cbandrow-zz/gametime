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

	// var World =  require("./world.js")
	// var world = new World(canvas.width, canvas.height)
	// world.draw(ctx);
	var Ball = __webpack_require__(1);
	var Paddle = __webpack_require__(2);
	var canvas = document.getElementById('game');
	var ctx = canvas.getContext('2d');
	var ball = new Ball();
	var paddle = new Paddle(250, 450, "blue");

	requestAnimationFrame(function gameLoop() {

	  ctx.clearRect(0, 0, canvas.width, canvas.height);
	  paddle.draw(ctx);
	  ball.draw(ctx);
	  requestAnimationFrame(gameLoop);
	});

/***/ },
/* 1 */
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

/***/ }
/******/ ]);