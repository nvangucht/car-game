export default class Boot extends Phaser.State {

  constructor() {
    super();
  }

  preload() {
    this.game.load.spritesheet('car','./assets/white_car.png');
    this.game.load.image('road','./assets/road.png');
    this.game.load.audio('themesong', './assets/Get-to-Work-WIP.ogg');
  }

  create() {
    this.game.state.start('game');
  }

  update() {
  }

  initGlobalVariables(){
    this.game.global = {

    };
  }

}
