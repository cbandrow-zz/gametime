
require("locus");
const assert = require('chai').assert
const World = require('../lib/world.js')
const Ball = require('../lib/ball.js')

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

  var world = new World(500, 500);

  it('it should collide with the center of the platform', () =>{
    world.ball.x = 254;
    world.ball.y = 452;
    world.ball.yy=-3
    assert.equal(world.ball.x, 254);
    world.bounceMiddle();
    assert.equal(world.ball.yy, 3);
  })

  it('it should collide with the Left of the platform', () =>{
    world.ball.x = 215;
    world.ball.y = 452;
    world.ball.xx = 3
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

  it("it should make a bricks hit value change", ()=>{
    world.ball.x = 375;
    world.ball.y = 80;
    assert.equal(world.brick[14].hits, 1)
    world.brickHitMid();
    assert.equal(world.brick[14].hits, 0)
  })

  it("it should increase speed as score increases", ()=>{
    assert.equal(world.ball.xx, 3);
    world.score = 60
    world.increaseSpeed();
    assert.equal(world.ball.xx, 3.18)
  })

  it("it should reset speed if new level state occurs", ()=>{
    world.brick.forEach(i=>i.hits = 0)
    world.levelUp();
    assert.equal(world.level, 2);
    assert.equal(world.ball.xx, 0);
  })

  it("it should follow the paddle upon game launch and ball", ()=>{
    world.ball.xx = 0
    world.ball.yy = 0
    world.prepareLaunch()
    assert.equal(world.ball.x, world.paddle.x+40)
    assert.equal(world.ball.y, world.paddle.y-5)
    world.paddle.x = 100
    world.prepareLaunch()
    assert.equal(world.ball.x, world.paddle.x+40)
    assert.equal(world.ball.y, world.paddle.y-5)


  })

})
