var game = new Phaser.Game(1280, 839, Phaser.AUTO, 'main_game', { preload: preload, create: create, update: update });

function preload() {
  game.load.spritesheet('map','assets/map.jpg');
  game.load.spritesheet('car','assets/car.png');
}

var cursors;
var velocity = 0;
var car;

function create() {
  /*Enable Phyics Engine*/
  game.physics.startSystem(Phaser.Physics.P2JS);
  /*Adding Map*/
  var map = game.add.sprite(0,0,'map');
  /*Adding car*/
  car = game.add.sprite(570,100,'car');
  game.physics.p2.enable(car);
  car.body.angle = 90;
  cursors = game.input.keyboard.createCursorKeys();
}

function update() {
  /*Update Velocity*/
  if (cursors.up.isDown && velocity <= 400) {
    velocity += 7;
  }
  else {
    if (velocity >= 7) {
      velocity -= 7;
    }
  }
  /*Set X and Y Speed of Velocity*/
  car.body.velocity.x = velocity * Math.cos((car.angle-90)*0.01745);
  car.body.velocity.y = velocity * Math.sin((car.angle-90)*0.01745);
  /*Rotation of Car*/
  if (cursors.left.isDown)
      car.body.angularVelocity = -5*(velocity/1000);
  else if (cursors.right.isDown)
      car.body.angularVelocity = 5*(velocity/1000);
  else
      car.body.angularVelocity = 0;
}