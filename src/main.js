// import Boot from './states/boot';
// import Game from './states/game';
// import Menu from './states/menu';
// import Preloader from './states/preloader';
// import Gameover from './states/gameover';


// const game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'Go To Work!');
// game.physics.startSystem(Phaser.Physics.P2JS);
// game.state.add('boot', new Boot());
// game.state.add('game', new Game());
// game.state.add('menu', new Menu());
// game.state.add('preloader', new Preloader());
// game.state.add('gameover', new Gameover());

// game.state.start('boot');


var game = new Phaser.Game(1280, 800, Phaser.AUTO, 'Go To Work!', { preload: preload, create: create, update: update });

function preload() {
  // game.load.spritesheet('map','assets/map.jpg');
  game.load.spritesheet('car','assets/car.png');
}

var sprite;
var bmd;

var cursors;
var velocity = 0;
var car;

var angleRotation = 0.01745;
var maxSpeed = 250;

function create() {

	//	Enable p2 physics
	game.physics.startSystem(Phaser.Physics.P2JS);

	game.stage.backgroundColor = '#124184';

	bmd = game.add.bitmapData(800, 600);
	bmd.context.fillStyle = '#ffffff';

	var bg = game.add.sprite(0, 0, bmd);

	game.physics.p2.gravity.y = -50;
    // game.physics.p2.restitution = 0.8;

	sprite = game.add.sprite(32, 450, 'car');
	car = game.add.sprite(570, 700, 'car');

	game.physics.p2.enable(sprite);

	sprite.body.fixedRotation = true;

	game.physics.p2.enable(car);
	cursors = game.input.keyboard.createCursorKeys();

}

function update() {
  /*Update Velocity*/

  car.body.gravity.y = -100;

  if (cursors.up.isDown && velocity <= maxSpeed - 100) {
    velocity += 7;
  } else if (cursors.down.isDown && velocity <= maxSpeed) {
  	velocity -= 7;
  }

  /*Set X and Y Speed of Velocity*/
  car.body.velocity.x = velocity * Math.cos((car.angle - 90) * angleRotation);
  car.body.velocity.y = velocity * Math.sin((car.angle - 90) * angleRotation);
  /*Rotation of Car*/
  if (cursors.left.isDown)
      car.body.angularVelocity = -5 * (velocity / 1000);
  else if (cursors.right.isDown)
      car.body.angularVelocity = 5 * (velocity / 1000);
  else
      car.body.angularVelocity = 0;
}

function render() {
}
