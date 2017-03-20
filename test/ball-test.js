
require("locus");
const assert = require('chai').assert
const World = require('../lib/world.js')
const Ball = require('../lib/ball.js')
const Paddle = require('../lib/paddle.js')

describe('balls attributes', () => {

  it('there should be a ball', () =>{
    var ball = new Ball({})
    assert.instanceOf(ball, Ball, 'ball is an instance of Ball and is bouncey');
  })

  it('it should exist in the world', () =>{
    var world = new World(500, 500);
    assert.instanceOf(world.ball, Ball, 'ball exists in the world');
  })

  it('it should have an x starting point', () =>{
    var world = new World(500, 500);
    assert.equal(world.ball.x, 237);
  })

  it('it should have an y starting point', () =>{
    var world = new World(500, 500);
    world.ball.y = 450;
    assert.equal(world.ball.y, 450);
  })

  it('it should have a default velocity', () =>{
    var world = new World(500, 500);
    assert.equal(world.ball.xx, 3);
    assert.equal(world.ball.yy, -3);
  })

  it('it should collide with the center of the platform', () =>{
    var world = new World(500, 500);
    world.ball.x = 254;
    world.ball.y = 452;
    assert.equal(world.ball.x, 254);
    world.bounceMiddle();
    assert.equal(world.ball.yy, 3);
  })

  it('it should collide with the Left of the platform', () =>{
    var world = new World(500, 500);
    world.ball.x = 215;
    world.ball.y = 452;
    assert.equal(world.ball.x, 215);
    assert.equal(world.ball.yy, -3);
    world.bounceLeft();
    assert.equal(world.ball.xx, -3);
  })

  it('it should collide with the Right of the platform', () =>{
    var world = new World(500, 500);
    world.ball.x = 275;
    world.ball.y = 452;
    assert.equal(world.ball.x, 275);
    assert.equal(world.ball.yy, -3);
    world.bounceRight();
    assert.equal(world.ball.xx, 3);
    assert.equal(world.ball.yy, 3);
  })

})
