class Preloader extends Phaser.State {

  constructor() {
    super();
  }

  create () {
    this.game.state.start('menu');
  }
}

export default Preloader;
