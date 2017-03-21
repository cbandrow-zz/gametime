require("locus");
const assert = require('chai').assert
const World = require('../lib/world.js')
const Brick = require('../lib/brick.js')
const Paddle = require('../lib/paddle.js')


describe('Bricks attributes' ,() => {
  let brick = new Brick({x:50,y:15,width:50,height:15})
  let world = new World(50, 50);

  it('there should be a brick', () =>{
    assert.instanceOf(brick, Brick, 'brick is an instance of Brick');
  })

  it('should have a x value', () =>{

    assert.deepEqual(brick.x, 50);
  })

  it('should have a y value', () =>{
    assert.deepEqual(brick.y, 15);
  })


  it('should have a width', () =>{
    assert.deepEqual(brick.width, 50);
  })

  it('should have a height', () =>{
    assert.deepEqual(brick.height, 15);
  })

  it('should be part of an array of bricks', () =>{
    assert.equal(Array.isArray(world.brick), true)
  })

  it('There should be 24 bricks orginally', () =>{
    assert.equal(world.brick.length,24 )
  })

  it('bricks should have a hit value of false', () =>{
    for(let i= 0; i<world.brick.length;i++){
    assert.equal(world.brick[i].hit,false)
  }
  })

})
