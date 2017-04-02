class GamerOver extends Phaser.State {

  constructor() {
    super();
    this.music = null;
  }

  create() {
    this.game.global.player.destroy();
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
    this.game.global.distance = 0;
    this.game.global.active = true;
  }

  update() {}

  restartGame () {
    this.resetGlobalVariables();
    this.game.state.start('game');
  }

}

export default GamerOver;
