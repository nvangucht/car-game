import Enemy from "./Enemy";
export default class SemiTruck extends Enemy {
    constructor(game, x, y, player, speed) {
        super(game, x, y, "semi_truck", player, -500);


        // this.player = player;
        // this.scale.setTo(0.5, 0.5);
        // this.speed = 150;
        // this.mass = 100;
        // game.physics.arcade.enable(this);

        // this.create();
    }

    create () {
        this.body.mass = this.mass;
        this.body.bounce = new Phaser.Point(1, 1);
    }

    update() {
        this.game.physics.arcade.collide(this.player, this);
        this.body.velocity.y = this.speed;

        // this.semiHonkLong.play();
        if (this.body.y === 700) {
            this.destroy();
        }
    }
}
