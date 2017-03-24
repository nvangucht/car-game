export default class Boot extends Phaser.State {

  constructor() {
    super();
  }

  preload() {
    this.game.load.spritesheet('car','./assets/white_car.png');
    this.game.load.spritesheet('orng_car','./assets/orng_car.png');
    this.game.load.spritesheet('purple_car','./assets/purple_car.png');
    this.game.load.spritesheet('turq_car','./assets/turq_car.png');
    this.game.load.spritesheet('semi_truck','./assets/semi_truck.png');
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
