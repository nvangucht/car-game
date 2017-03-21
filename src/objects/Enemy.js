export default class Enemy extends Phaser.Sprite {
    constructor(game, x, y, player) {
        super(game, x, y, 'car');

        this.velocity = 1,
        this.angleRotation = 0.01745,
        this.maxSpeed = 5;

        game.physics.p2.enable(this);
        // this.body.collidesWith(player);
        // this.body.collideWorldBounds=false;
    }

    static loadSounds(game) {
        // game.load.audio('playerJump', 'assets/Player/jump.ogg');
    }

    updatePlayer(cursors) {
        if (this.body.velocity.y <= this.maxSpeed) {
            this.body.velocity.y -= this.velocity;
        }
    }
}
