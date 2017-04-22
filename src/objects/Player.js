export default class Player extends Phaser.Sprite {
  constructor(game, road, x = 0, y = 0) {
    super(game, x, y, 'car');

    this.road = road;
    this.velocity = 0,
    this.angleRotation = 0.01745,
    this.maxSpeed = 250;
    this.scale.setTo(0.5, 0.5);
    this.distanceTraveled = 0;
    this.brake;
    this.brakeSpeed = 90;
    this.vroom;
    this.crashSound;

    game.physics.arcade.enable(this);
    game.stage.addChild(this);
    this.create();
  }

  create () {
    this.anchor.setTo(0.5, 0.5);
    this.body.collideWorldBounds = true;
    this.body.mass = 0.1;
    this.brake = this.game.add.audio('brake');
    this.vroom = this.game.add.audio('vroom');
    this.brake.volume = 0.35;
    this.crashSound = this.game.add.audio('car_hit');
    this.body.bounce = new Phaser.Point(0.1, 0.1);
  }

  updatePlayer(cursors) {
    let game = this.game;
    let body = this.body;

    if (game.global.active) {
      body.velocity.x = 0;
      body.velocity.y = 0;
      game.global.distance += 1;

      if (cursors.left.isDown && body.x >= 370) {
        body.velocity.x = -110;
      } else if (cursors.right.isDown && body.x <= 550) {
        body.velocity.x = + 110;
      }

      if (cursors.up.isDown) {
        body.velocity.y = -50;
        game.global.distance += 2;
      } else if (cursors.down.isDown) {
        body.velocity.y += 200;
      }

      if (cursors.down.downDuration(1)) {
        this.brake.play();
      }

      if (cursors.up.downDuration(1)) {
        this.vroom.play();
      }
    }
  }

  playCrashSounce () {
    this.crashSound.play();
  }

}
