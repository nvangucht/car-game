export default class Enemy extends Phaser.Sprite {
    constructor(game, x, y) {
        super(game, x, y, 'enemy_car');

        this.scale.setTo(0.5, 0.5);
        this.speed = 2;
        game.physics.arcade.enable(this);
    }

    create () {
        this.body.immovable = true;
        this.body.mass = -100;
    }

    update() {
        let cursors = this.cursors;

         this.body.y += this.speed;
    }
}
