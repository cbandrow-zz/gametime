require("locus");
const assert = require('chai').assert
const World = require('../lib/world.js')
const Brick = require('../lib/brick.js')

describe('Brick should be an object. It should have a width and height, but also an X and Y value. It should exist within an array.', () => {

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
    // eval(locus);
    assert.equal(Array.isArray(world.brick), true)
  })




})
