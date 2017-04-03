export default class Enemy extends Phaser.Sprite {
    constructor(game, x, y, color, player, speed = 185) {
        super(game, x, y, color);

        this.player = player;
        this.scale.setTo(0.5, 0.5);
        this.speed = this.game.global.carSpeed;
        this.mass = 100;
        game.physics.arcade.enable(this);

        this.create();
    }

    create () {
        this.anchor.setTo(0.5, 0.5);
        this.body.mass = this.mass;
        this.body.bounce = new Phaser.Point(1, 1);
    }

    update() {
        let game = this.game;
        game.physics.arcade.collide(this.player, this);
        if (game.global.active) {
            this.body.velocity.y = this.speed;
        } else  {
            this.body.velocity.y = 0;
        }

        if (this.body.y >= 800) {
            this.destroy();
        }
    }
}
