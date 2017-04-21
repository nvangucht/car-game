class GamerOver extends Phaser.State {

  constructor() {
    super();
    this.music = null;
    this.enterkey;
  }

  create() {
    let game = this.game;
    this.game.global.player.destroy();
    this.game.global.traffic.destroy();
    this.game.stage.backgroundColor = '#0096FF';

    this.enterkey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    if (this.game.global.playerWon) {
      this.music = this.game.add.audio('menu_song');
      this.music.play();
    }
  }

  render () {
    var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, '', {
      font: '42px silkscreennormal', fill: '#ffffff', align: 'center'
    });
    text.anchor.set(0.5);


    if (this.game.global.playerWon) {
      let screen = this.game.add.sprite(0, -10, "victoryscreen");
      screen.scale.setTo(0.5, 0.5);
    } else {
      let screen = this.game.add.sprite(0, -10, "gameoverscreen");
      screen.scale.setTo(0.5, 0.5);
    }

  }

  resetGlobalVariables(){
    this.game.global.distance = 0;
    this.game.global.active = true;
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
