import Enemy from "./Enemy";
export default class SemiTruck extends Enemy {
    constructor(game, x, y, player, speed) {
        super(game, x, y, "semi_truck", player, -500);
    }

    create () {
        this.body.mass = this.mass;
        this.body.bounce = new Phaser.Point(1, 1);
    }

    update() {
        this.game.physics.arcade.collide(this.player, this);
        this.body.velocity.y = this.speed;

        if (this.body.y === 700) {
            this.destroy();
        }
    }
}
