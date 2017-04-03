import TextHelper from '../helpers/TextHelper';

export default class Menu extends Phaser.State {

  constructor() {
    super();
    this.music = null;
  }

  preload () {
    this.game.load.audio('menu_song', './assets/audio/menu.ogg');
  }

  create() {
      this.game.stage.backgroundColor = '#005493';

      var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, '', {
        font: '42px silkscreennormal', fill: '#ffffff', align: 'center'
      });
      text.anchor.set(0.5);

      this.music = this.game.add.audio('menu_song');
      this.music.play();
    }

    update () {
      var cursors = this.game.input.keyboard.createCursorKeys();
      if (cursors.up.isDown) {
        this.startGame();
      }
    }

    render () {
      var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, '', {
        font: '42px silkscreennormal', fill: '#ffffff', align: 'center'
      });
      text.anchor.set(0.5);
      text.setText("GET TO WORK! \n\nPress Up to play");
    }

  startGame () {
    this.music.stop();
    this.game.state.start('game');
  }

}
