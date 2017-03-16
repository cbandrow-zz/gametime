const assert = require('chai').assert
const World = require('../lib/world.js')
const Brick = require('../lib/brick.js')

describe('brick', () => {

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
  var brick = new Brick({})

  assert.deepEqual(brick.width, 50);
  })

  it('should have a height', () =>{
  var brick = new Brick({})

  assert.deepEqual(brick.height, 15);
  })


  





})
