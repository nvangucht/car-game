import TextHelper from '../helpers/TextHelper';

export default class Menu extends Phaser.State {

  constructor() {
    super();
  }

  create() {
      this.game.stage.backgroundColor = '#005493';

      var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, '', {
        font: '42px silkscreennormal', fill: '#ffffff', align: 'center'
      });
      text.anchor.set(0.5);

      this.input.onDown.add(this.startGame, this);
    }

    render () {
      var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, '', {
        font: '42px silkscreennormal', fill: '#ffffff', align: 'center'
      });
      text.anchor.set(0.5);
      text.setText("GET TO WORK! \n\nPress Click to play");
    }

  startGame () {
    this.game.state.start('game');
  }

}
