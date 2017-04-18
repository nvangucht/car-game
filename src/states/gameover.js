class GamerOver extends Phaser.State {

  constructor() {
    super();
    this.music = null;
  }

  create() {
    let game = this.game;
    this.game.global.player.destroy();
    this.game.global.traffic.destroy();
    this.game.stage.backgroundColor = '#005493';

    let screen = game.add.sprite(0, 0, "gameoverscreen");
    screen.scale.setTo(0.5, 0.5);

    this.saveVarsToLocalStorage();

    this.input.onDown.add(this.restartGame, this);
  }

  render () {
    var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, 'Game Over', {
      font: '42px silkscreennormal', fill: '#ffffff', align: 'center'
    });
    text.anchor.set(0.5);

    if (this.game.global.playerWon) {
      text.setText("You did it! \n \n  Press Up to Restart");
    } else {
      text.setText("Game Over \n \n  Press Up to Restart");
    }

  }

  saveVarsToLocalStorage(){

  }

  resetGlobalVariables(){
    this.game.global.distance = 0;
    this.game.global.active = true;
  }

  update() {
     var cursors = this.game.input.keyboard.createCursorKeys();
      if (cursors.up.isDown) {
        this.restartGame();
      }
  }

  restartGame () {
    this.resetGlobalVariables();
    this.game.state.start('game');
  }

}

export default GamerOver;
