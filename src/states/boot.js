export default class Boot extends Phaser.State {

  constructor() {
    super();
  }

  preload() {
    let loader = this.game.load;
    // images

    loader.image('road','./assets/images/road.png');
    loader.image('titlescreen','./assets/images/titlescreen.png');
    loader.image('gameoverscreen','./assets/images/gameoverscreen.png');
    loader.image('victoryscreen','./assets/images/victoryscreen.png');

    // cars
    loader.spritesheet('car','./assets/images/white_car.png');
    loader.spritesheet('orng_car','./assets/images/orng_car.png');
    loader.spritesheet('purple_car','./assets/images/purple_car.png');
    loader.spritesheet('turq_car','./assets/images/turq_car.png');
    loader.spritesheet('blue_car','./assets/images/blue_car.png');
    loader.spritesheet('black_car','./assets/images/black_car.png');
    loader.spritesheet('green_car','./assets/images/green_car.png');
    loader.spritesheet('cop_car','./assets/images/cop_car.png');
    loader.spritesheet('semi_truck','./assets/images/semi.png');

    // audio
    loader.audio('themesong', './assets/audio/themesong.ogg');
    loader.audio('game_over', './assets/audio/game_over.ogg');
    loader.audio('vroom', './assets/audio/vroom.ogg');
    loader.audio('brake', './assets/audio/brake.ogg');
    loader.audio('semi_honk_long', './assets/audio/semi_honk_long.ogg');
    loader.audio('car_hit', './assets/audio/car_hit.ogg');
    loader.audio('cop_siren', './assets/audio/cop_siren.ogg');
  }

  create() {
    this.initGlobalVariables();
    this.game.state.start('menu');
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
