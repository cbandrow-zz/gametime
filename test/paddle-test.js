require("locus")

const assert = require('chai').assert
const World = require('../lib/world.js')
const Paddle = require('../lib/paddle.js')
const Ball = require('../lib/ball.js')

describe("Paddle should have attributes",()=>{
const paddle = new Paddle({x:15,y:200,width:15,height:10})

it("should have a width of 15",()=>{
  assert.equal(paddle.width,15)
})

it("should have a height of 10",()=>{
  assert.equal(paddle.height,10)

})

it("should have a x value of 15",()=>{
  assert.equal(paddle.x,15)

})

it("should have a y value of 200",()=>{
  assert.equal(paddle.y,200)
})

})


describe("Paddle should move and interact",()=>{
  const world = new World()

  it("Should start at this location",()=>{
    assert.equal(world.paddle.x, 212)
    assert.equal(world.paddle.y,450)
  })

  it("Should move to the left location",()=>{
    world.paddle.x = 100;
    world.paddle.move(20)
    assert.equal(world.paddle.x, 20)
  })

  it("Should move to the  right location",()=>{
    world.paddle.x = 100;
    world.paddle.move(50)
    assert.equal(world.paddle.x, 50)
  })




})
