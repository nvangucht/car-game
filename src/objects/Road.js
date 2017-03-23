export default class Road extends Phaser.Sprite {
    constructor(game, x, y) {
        super(game, x, y, 'road');
        // this.scale.setTo(, 0.5);
        // body.enable = false;
        game.stage.addChild(this);
        // game.physics.p2.enable(this);

    }

    create () {
    	// this.body.enable = false;
    	// game.stage.addChild(this);
    }

    update () {
    }
}
