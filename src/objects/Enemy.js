export default class Enemy extends Phaser.Sprite {
    constructor(game, x, y, color, player) {
        super(game, x, y, color);

        this.player = player;
        this.scale.setTo(0.5, 0.5);
        this.speed = 140;
        this.mass = 100;
        game.physics.arcade.enable(this);

        this.create();
    }

    create () {
        this.body.mass = this.mass;
        this.body.bounce = new Phaser.Point(1, 1);
    }

    update() {
        this.game.physics.arcade.collide(this.player, this);
        this.body.velocity.y = this.speed;
    }
}
