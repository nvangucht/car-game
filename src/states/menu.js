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
    let game = this.game;
    this.game.stage.backgroundColor = '#005493';

    let screen = game.add.sprite(20, 0, "titlescreen");
    screen.scale.setTo(0.5, 0.5);

    this.music = this.game.add.audio('menu_song');
    this.music.play();
  }

  update () {
    var cursors = this.game.input.keyboard.createCursorKeys();
    if (cursors.up.isDown) {
      this.startGame();
    }
  }

  startGame () {
    this.music.stop();
    this.game.state.start('game');
  }

}
