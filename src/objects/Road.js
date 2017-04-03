export default class Road {
    constructor(game) {
    	this.game = game;
    	this.road;
    }

    create () {
    	this.game.stage.backgroundColor = '#005493';

    	this.road = this.game.add.tileSprite(0, 0, 1920, 1080, 'road');
    	this.road.scale.setTo(0.5, 0.5);
    }

    update () {
        let game = this.game;
        if (game.global.active) {
        	this.road.tilePosition.y += 15;
        }
    }
}
