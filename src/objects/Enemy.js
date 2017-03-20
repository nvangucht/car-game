export default class Enemy extends Phaser.Sprite {
    constructor(game, x, y) {
        super(game, x, y, 'car');

        this.velocity = 0,
        this.angleRotation = 0.01745,
        this.maxSpeed = 250;

        game.physics.p2.enable(this);
    }

    static loadSounds(game) {
        // game.load.audio('playerJump', 'assets/Player/jump.ogg');
    }

    updatePlayer(cursors) {
        this.body.gravity.y = -50;

        // this._handleInput(cursors);
    }
}
