export default class Player extends Phaser.Sprite {
    constructor(game, x, y) {
        super(game, x, y, 'car');

        this.velocity = 0,
        this.angleRotation = 0.01745,
        this.maxSpeed = 250;

        game.physics.p2.enable(this);
        game.stage.addChild(this);
    }

    static loadSounds(game) {
        // game.load.audio('playerJump', 'assets/Player/jump.ogg');
    }

    updatePlayer(cursors) {
        this.body.gravity.y = -100;

        this._handleInput(cursors);
    }

    _handleInput(cursors, contacts, delta) {
        if (cursors.up.isDown && this.velocity <= this.maxSpeed - 100) {
          this.velocity += 7;
        } else if (cursors.down.isDown && this.velocity <= this.maxSpeed) {
          this.velocity -= 7;
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
