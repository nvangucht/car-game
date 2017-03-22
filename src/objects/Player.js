export default class Player extends Phaser.Sprite {
    constructor(game, x = 0, y = 0) {
        super(game, x, y, 'car');

        this.velocity = 0,
        this.angleRotation = 0.01745,
        this.maxSpeed = 250;
        this.worldBoundaryCollisionY = 250;
        this.scale.setTo(0.5, 0.5);

        game.physics.p2.enable(this);
        game.stage.addChild(this);
    }

    create () {
    }

    updatePlayer(cursors) {

        if (cursors.up.isDown && this.velocity <= this.maxSpeed) {
          this.velocity += 7;
        } else if (cursors.down.isDown && this.velocity >= (this.maxSpeed * -1)) {
          this.velocity -= 7;
        }

        if (this.body.y <= this.worldBoundaryCollisionY) {
            this.body.y += 1;
            this.velocity = 0;
        }

        // /*Rotation of Car*/
        if (cursors.left.isDown) {
            this.body.angularVelocity = -5 * (this.velocity / 1000);
        }
        else if (cursors.right.isDown) {
            this.body.angularVelocity = 5 * (this.velocity / 1000);
        }
        else {
            this.body.angularVelocity = 0;
        }

        // /*Set X and Y Speed of Velocity*/
        this.body.velocity.x = this.velocity * Math.cos((this.angle - 90) * this.angleRotation);
        this.body.velocity.y = this.velocity * Math.sin((this.angle - 90) * this.angleRotation);
    }

}
