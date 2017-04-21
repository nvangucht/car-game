
export default class Menu extends Phaser.State {

  constructor() {
    super();
    this.music = null;
    this.enterkey;
  }

  preload () {
    this.game.load.audio('menu_song', './assets/audio/menu.ogg');
  }

  create() {
    let game = this.game;
    this.game.stage.backgroundColor = '#0096FF';

    this.enterkey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

    let screen = game.add.sprite(20, -10, "titlescreen");
    screen.scale.setTo(0.5, 0.5);

    this.music = this.game.add.audio('menu_song');
    this.music.play();
  }

  update () {
    if (this.enterkey.isDown) {
      this.startGame();
    }
  }

  startGame () {
    this.music.stop();
    this.game.state.start('game');
  }

}
