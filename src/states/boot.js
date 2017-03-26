export default class Boot extends Phaser.State {

  constructor() {
    super();
  }

  preload() {
    this.game.load.spritesheet('car','./assets/images/white_car.png');
    this.game.load.spritesheet('orng_car','./assets/images/orng_car.png');
    this.game.load.spritesheet('purple_car','./assets/images/purple_car.png');
    this.game.load.spritesheet('turq_car','./assets/images/turq_car.png');
    this.game.load.spritesheet('semi_truck','./assets/images/semi_truck.png');
    this.game.load.image('road','./assets/images/road.png');
    this.game.load.audio('themesong', './assets/audio/Get-to-Work-WIP.ogg');
    this.game.load.audio('brake', './assets/audio/brake.ogg');
    this.game.load.audio('semi_honk_long', './assets/audio/semi_honk_long.ogg');
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
