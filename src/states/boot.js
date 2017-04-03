export default class Boot extends Phaser.State {

  constructor() {
    super();
  }

  preload() {
    // images

    this.game.load.image('road','./assets/images/road.png');

    // cars
    this.game.load.spritesheet('car','./assets/images/white_car.png');
    this.game.load.spritesheet('orng_car','./assets/images/orng_car.png');
    this.game.load.spritesheet('purple_car','./assets/images/purple_car.png');
    this.game.load.spritesheet('turq_car','./assets/images/turq_car.png');
    this.game.load.spritesheet('blue_car','./assets/images/blue_car.png');
    this.game.load.spritesheet('black_car','./assets/images/black_car.png');
    this.game.load.spritesheet('green_car','./assets/images/green_car.png');
    this.game.load.spritesheet('cop_car','./assets/images/cop_car.png');
    this.game.load.spritesheet('semi_truck','./assets/images/semi.png');

    //obstacles
    this.game.load.spritesheet('banana','./assets/images/banana.png');
    // audio
    this.game.load.audio('themesong', './assets/audio/themesong.ogg');
    this.game.load.audio('game_over', './assets/audio/game_over.ogg');
    this.game.load.audio('vroom', './assets/audio/vroom.ogg');
    this.game.load.audio('brake', './assets/audio/brake.ogg');
    this.game.load.audio('semi_honk_long', './assets/audio/semi_honk_long.ogg');
    this.game.load.audio('semi_honk_med', './assets/audio/semi_honk_med.ogg');
    this.game.load.audio('spinout', './assets/audio/spinout.ogg');
    this.game.load.audio('car_hit', './assets/audio/car_hit.ogg');
    this.game.load.audio('cop_siren', './assets/audio/cop_siren.ogg');
    this.game.load.audio('pot_hole_clunk', './assets/audio/pot_hole_clunk.ogg');
  }

  create() {
    this.initGlobalVariables();
    this.game.state.start('menu');
  }

  update() {
  }

  initGlobalVariables(){
    var themesong = this.game.add.audio('themesong');
    var gameOverSong = this.game.add.audio('game_over');
    this.game.global = {
        active: true,
        themesong: themesong,
        gameOverSong: gameOverSong,
        traffic: null,
        road: null,
        distance: 0,
        carGerationSpeed: .9,
        carSpeed: 190,
        playerWon: false,
        duration: 60
    };
  }

}
