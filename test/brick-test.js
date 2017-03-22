require("locus");
const assert = require('chai').assert
const World = require('../lib/world.js')
const Brick = require('../lib/brick.js')

describe('Bricks attributes', () => {
  let brick = new Brick({x: 50, y: 15, width: 50, height: 15})
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

  it(' should have 24 bricks orginally', () =>{
    assert.equal(world.brick.length, 24 )
  })

  it('should have a hit value of false to start', () =>{
    for (let i= 0; i<world.brick.length;i++) {
      assert.equal(world.brick[i].hit, false)
    }
  })

  it('should have their bricks change their hit value to true on contact with ball', ()=>{
    assert.equal(world.brick[21].hit, false)
    world.ball.x= 315
    world.ball.y =20
    world.brickHitMid();
    assert.equal(world.brick[21].hit, true)
  })

})
