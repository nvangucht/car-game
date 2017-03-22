export default class Road extends Phaser.Sprite {
    constructor(game, x, y) {
        super(game, x, y, 'road');
        this.scale.setTo(0.5, 0.5);
        game.stage.addChild(this);
    }

    create () {
    }
}
