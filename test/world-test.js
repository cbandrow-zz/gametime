require("locus");
const assert = require('chai').assert
const World = require('../lib/world.js')

describe('World object should hold bricks, balls, and paddles.', () => {
  var world = new World(500, 500);

  it('there should be a world', () =>{
    assert.instanceOf(world, World, "we are the world")
  })

  it('it should have a width and a height', () =>{
    assert.equal(world.width, 500);
    assert.equal(world.height, 500);
  })

  it('the game world should start with 3 lives', () =>{
    assert.equal(world.lives, 3);
  })

  it('the game world should start at level 0 with a score of 0', () =>{
    assert.equal(world.level, 0);
    assert.equal(world.score, 0);
  })

  it('should have a paddle', () =>{
    assert.isObject(world.paddle);
  })

  it('should have a ball', () =>{
    assert.isObject(world.ball);
  })

  it('should have an array of bricks', () =>{
    assert.equal(Array.isArray(world.brick), true)
  })

  it('should have a level up state', () =>{
    assert.equal(world.level, 0);

    assert.equal(Array.isArray(world.brick), true)
    world.brick.forEach(i=>i.hit = true)
    world.levelUp();
    assert.equal(world.level, 1);
    assert.equal(Array.isArray(world.brick), true)
    world.brick.forEach(i=>i.hit = true)
    world.levelUp();
    assert.equal(world.level, 2);
  })

});
