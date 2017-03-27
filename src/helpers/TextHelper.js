export default class TextHelper {
    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
    }

    addText(value) {
        this.game.stage.backgroundColor = '#005493';
        this.game.add.text(this.x, this.y, value, {
          font: '42px silkscreennormal', fill: '#ffffff', align: 'center'
        });
    }
}