class GamerOver extends Phaser.State {

  constructor() {
    super();
    this.music = null;
    this.enterkey;
  }

  create() {
    let game = this.game;
    let screenType = game.global.playerWon ? "victoryscreen" : "gameoverscreen";

    game.global.player.destroy();
    game.global.traffic.destroy();
    game.stage.backgroundColor = '#0096FF';

    this.enterkey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

    if (game.global.playerWon) {
      this.music = game.add.audio('menu_song');
      this.music.play();
    }

    game.add.sprite(0, -10, screenType).scale.setTo(0.5, 0.5);
  }

  resetGlobalVariables() {
    let game = this.game;

    game.global.playerWon = false;
    game.global.distance = 0;
    game.global.active = true;
  }

  update() {
    if (this.enterkey.isDown) {
      this.restartGame();
    }
  }

  restartGame () {
    this.resetGlobalVariables();
    this.game.state.start('game');
  }

}

export default GamerOver;
