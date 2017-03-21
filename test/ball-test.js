
require("locus");
const assert = require('chai').assert
const World = require('../lib/world.js')
const Ball = require('../lib/ball.js')
const Brick = require('../lib/brick.js')
const Paddle = require('../lib/paddle.js')

describe('balls attributes', () => {
  var ball = new Ball({})
  var world = new World(500, 500);

  it('there should be a ball', () =>{
    assert.instanceOf(ball, Ball, 'ball is an instance of Ball and is bouncey');
  })

  it('it should exist in the world', () =>{
    assert.instanceOf(world.ball, Ball, 'ball exists in the world');
  })

  it('it should have an x starting point', () =>{
    assert.equal(world.ball.x, 237);
  })

  it('it should have an y starting point', () =>{
    world.ball.y = 450;
    assert.equal(world.ball.y, 450);
  })

  it('it should have a default velocity', () =>{
    assert.equal(world.ball.xx, 0);
    assert.equal(world.ball.yy, 0);
  })

})

describe('Ball should behave and cooperate with the rest of the world.', () => {

  var ball = new Ball({})
  var world = new World(500, 500);

  it('it should collide with the center of the platform', () =>{
    world.ball.x = 254;
    world.ball.y = 452;
    assert.equal(world.ball.x, 254);
    world.bounceMiddle();
    assert.equal(world.ball.yy, 3);
  })

  it('it should collide with the Left of the platform', () =>{
    world.ball.x = 215;
    world.ball.y = 452;
    assert.equal(world.ball.x, 215);
    assert.equal(world.ball.yy, 3);
    world.bounceLeft();
    assert.equal(world.ball.xx, -3);
  })

  it('it should collide with the Right of the platform', () =>{
    world.ball.x = 275;
    world.ball.y = 452;
    assert.equal(world.ball.x, 275);
    assert.equal(world.ball.yy, -3);
    world.bounceRight();
    assert.equal(world.ball.xx, 3);
    assert.equal(world.ball.yy, 3);
  })

  it("it should make a bricks value changes to true",()=>{
    world.ball.x = 200;
    world.ball.y = 110;
    assert.equal(world.brick[11].hit, false)
    world.brickHitMid();
    assert.equal(world.brick[11].hit, true)
  })

  it("it should increase speed as score increases", ()=>{
    world.increaseSpeed();
    assert.equal(world.ball.xx, 3.24)
    assert.equal(world.ball.xx, 3.24);
  })

  it("it should reset speed if new level state occurs", ()=>{
    world.brick.forEach(i=>i.hit = true)
    world.levelUp();
    assert.equal(world.level, 1);
    assert.equal(world.ball.xx, 0);
  })

  it.skip("it should follow the paddle upon game launch and ball", ()=>{
    
  })

  it.skip("it should launch off the paddle when hitting enter", ()=>{

  })

})
