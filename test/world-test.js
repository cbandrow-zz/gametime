require("locus");
const assert = require('chai').assert
const World = require('../lib/world.js')
const Brick = require('../lib/brick.js')

describe('There should be a main world object which holds the other objects.', () => {

  it('there should be a world', () =>{
    var world = new World();
    assert.instanceOf(world, World, "we are the world")
  })

  it('it should have a width and a height', () =>{
    var world = new World(500, 500);
    assert.equal(world.width, 500);
    assert.equal(world.height, 500);
  })

  it('the game world should start with 3 lives', () =>{
    var world = new World(500, 500);
    assert.equal(world.lives, 3);
  })

  it('the game world should start at level 0 with a score of 0', () =>{
    var world = new World(500, 500);
    assert.equal(world.level, 0);
    assert.equal(world.score, 0);
  })

  it('should have a paddle', () =>{
    var world = new World(500, 500);
    assert.isObject(world.paddle);
  })

  it('should have a ball', () =>{
    var world = new World(500, 500);
    assert.isObject(world.ball);
  })

  it('should have an array of bricks', () =>{
    var world = new World(500, 500);
    assert.equal(Array.isArray(world.brick), true)
  })

  it('should have a level up state', () =>{
    var world = new World(500, 500);
    assert.equal(Array.isArray(world.brick), true)
    // eval(locus);
    world.brick.forEach(function(i){
      i.hit = true;
    })
    world.levelUp();
    assert.equal(world.level, 1);
  })

});
