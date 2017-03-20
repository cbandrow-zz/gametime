require("locus");
const assert = require('chai').assert
const World = require('../lib/world.js')
const Brick = require('../lib/brick.js')
const Paddle = require('../lib/paddle.js')


describe('Bricks attributes' ,() => {

  it('there should be a brick', () =>{
    var brick = new Brick({})

    assert.instanceOf(brick, Brick, 'brick is an instance of Brick');
  })

  it('should have a x value', () =>{
    var brick = new Brick({x:50})

    assert.deepEqual(brick.x, 50);
  })

  it('should have a y value', () =>{
    var brick = new Brick({y:15})

    assert.deepEqual(brick.y, 15);
  })


  it('should have a width', () =>{
    var brick = new Brick({width:50})

    assert.deepEqual(brick.width, 50);
  })

  it('should have a height', () =>{
    var brick = new Brick({height:15})

    assert.deepEqual(brick.height, 15);
  })

  it('should be part of an array of bricks', () =>{
    let world = new World(50, 50);
    assert.equal(Array.isArray(world.brick), true)
  })

  it('There should be 24 bricks orginally', () =>{
    let world = new World(50, 50);
    assert.equal(world.brick.length,24 )
  })

  it('bricks should have a hit value of false', () =>{
    let world = new World(50, 50);
    for(let i= 0; i<world.brick.length;i++){
    assert.equal(world.brick[i].hit,false)
  }
  })

})
