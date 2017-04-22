
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
    game.stage.backgroundColor = '#0096FF';
    game.add.sprite(20, -10, "titlescreen").scale.setTo(0.5, 0.5);

    this.music = game.add.audio('menu_song');
    this.music.play();

    this.enterkey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
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
