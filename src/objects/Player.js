export default class Player extends Phaser.Sprite {
    constructor(game, road, x = 0, y = 0) {
        super(game, x, y, 'car');

        this.road = road;
        this.velocity = 0,
        this.angleRotation = 0.01745,
        this.maxSpeed = 250;
        this.worldBoundaryCollisionY = 250;
        this.scale.setTo(0.5, 0.5);

        game.physics.arcade.enable(this);
        game.stage.addChild(this);
    }

    create () {
        this.body.immovable = false;
    }

    updatePlayer(cursors) {
        this.body.velocity.x = 0;
        this.body.velocity.y = 0;

        if (this.body.y <= 420) {
            this.body.y += 2.5;
        }

        if (cursors.left.isDown && this.body.x >= 370) {
            this.body.velocity.x = -200;
        } else if (cursors.right.isDown && this.body.x <= 550) {
            this.body.velocity.x = 200;
        }

        if (cursors.up.isDown && this.body.y >= 10) {
            this.road.tilePosition.y += 6;
            this.body.velocity.y = -200;
        } else if (cursors.down.isDown) {
            this.body.velocity.y += 2;
        }
    }
}
