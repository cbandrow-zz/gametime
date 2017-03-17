
require("locus");
const assert = require('chai').assert
const World = require('../lib/world.js')
const Ball = require('../lib/ball.js')

describe('ball', () => {

  it('there should be a ball', () =>{
    var ball = new Ball({})

    assert.instanceOf(ball, Ball, 'ball is an instance of Ball and is bouncey');
  })

  it('it should exist in the world', () =>{
    var world = new World(50,50);
    assert.instanceOf(world.ball, Ball, 'ball exists in the world');
  })

  it('it should have an x starting point', () =>{
    var world = new World(50,50);
    assert.equal(world.ball.x, 237);
  })

  it('it should have an y starting point', () =>{
    var world = new World(50,50);
    assert.equal(world.ball.y, 450);
  })

  it('it should have a default velocity', () =>{
    var world = new World(50,50);
    assert.equal(world.ball.xx, 3);
    assert.equal(world.ball.yy, -3);
  })

  it.only('it should collide with the center of the platform', () =>{
    var world = new World(50,50);
    world.ball.x = 254;
    world.ball.y = 452;
    //world.paddle.x = 212
    //world.paddle.y = 450
    // eval(locus);
    assert.equal(world.ball.x, 254);
    assert.equal(world.ball.yy, -3);
    eval(locus);
    world.middleCollision();
    // })
    // assert.equal(world.middleCoillison(), -3.6);
  })

  it.skip('it should collide with the Left of the platform', () =>{
    var world = new World(50,50);
    world.ball.x = 215;
    world.ball.y = 452;
    //world.paddle.x = 212
    //world.paddle.y = 450
    // eval(locus);
    assert.equal(world.ball.x, 254);
    assert.equal(world.ball.yy, -3);
    eval(locus);
    world.middleCollision();
    // })
    // assert.equal(world.middleCoillison(), -3.6);
  })

  it.skip('it should collide with the Right of the platform', () =>{
    var world = new World(50,50);
    world.ball.x = 212;
    world.ball.y = 452;
    //world.paddle.x = 212
    //world.paddle.y = 450
    // eval(locus);
    assert.equal(world.ball.x, 254);
    assert.equal(world.ball.yy, -3);
    eval(locus);
    world.middleCollision();
    // })
    // assert.equal(world.middleCoillison(), -3.6);
  })

})
