class GamerOver extends Phaser.State {

  constructor() {
    super();
  }
  create() {
    console.log(this.game.player);
    this.game.stage.backgroundColor = '#005493';

    var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, '', {
      font: '42px silkscreennormal', fill: '#ffffff', align: 'center'
    });
    text.anchor.set(0.5);

    this.saveVarsToLocalStorage();

    this.input.onDown.add(this.restartGame, this);
  }

  render () {
    var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, 'Game Over', {
      font: '42px silkscreennormal', fill: '#ffffff', align: 'center'
    });
    text.anchor.set(0.5);
    text.setText("Game Over \n \n  Press Click to Restart");
  }

  saveVarsToLocalStorage(){

  }

  resetGlobalVariables(){

  }

  update() {}

  restartGame () {
    this.resetGlobalVariables();
    this.game.state.start('game');
  }

}

export default GamerOver;
