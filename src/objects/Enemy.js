export default class Enemy extends Phaser.Sprite {
  constructor(game, x, y, color, player, speed = 185) {
    super(game, x, y, color);

    this.player = player;
    this.scale.setTo(0.5, 0.5);
    this.speed = game.global.carSpeed;
    game.physics.arcade.enable(this);

    this.create();
  }

  create() {
    let body = this.body;
    this.anchor.setTo(0.5, 0.5);

    body.mass = 0.1;
    body.bounce = new Phaser.Point(0.1, 0.1);
  }

  update() {
    let game = this.game;
    let body = this.body;

    game.physics.arcade.collide(this.player, this);
    body.velocity.y = game.global.active ? this.speed : 0;

    if (body.y >= 800) {
      this.destroy();
    }
  }
}
