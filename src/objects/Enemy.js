export default class Enemy extends Phaser.Sprite {
    constructor(game, x, y, player) {
        super(game, x, y, 'orng_car');

        this.player = player;
        this.scale.setTo(0.5, 0.5);
        this.speed = 0.5;
        game.physics.arcade.enable(this);
        this.create();
    }

    create () {
        this.body.mass = 4;
        this.body.bounce = new Phaser.Point(1, 1);
    }

    update() {
        this.game.physics.arcade.collide(this.player, this);
        this.body.velocity.y += this.speed;
    }
}
