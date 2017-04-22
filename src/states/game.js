import Player from '../objects/Player';
import Enemy from '../objects/Enemy';
import Road from '../objects/Road';
import GameTimer from '../helpers/GameTimer';

class Game extends Phaser.State {

  constructor() {
    super();

    this.cursors;
    this.player;
    this.road;
    this.traffic;
    this.semiHonkLong;
    this.siren;
    this.crashSound;
    this.music;
    this.gameTimer;
    this.coords = [ { x : 385, y : -300}, { x : 447, y : -300}, { x : 510, y: -300}, { x : 570, y : -300} ];
  }

  create() {
    let game = this.game;
    let gameTimer = this.gameTimer;

    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.global.themesong.loopFull();

    this.semiHonkLong = game.add.audio('semi_honk_long');
    this.semiHonkLong.volume = 1;

    this.siren = game.add.audio('cop_siren');
    this.siren.volume = .85;

    this.crashSound = game.add.audio('car_hit');
    this.cursors = game.input.keyboard.createCursorKeys();

    game.global.road = new Road(game);
    game.global.road.create();

    game.global.player = new Player(game, this.road, 510, 300);

    this.createTraffic();

    this.gameTimer = new GameTimer(game, this.player);
    this.gameTimer.start();
  }

  createTraffic() {
    let game = this.game;

    game.global.traffic = game.add.group();
    game.time.events.repeat(Phaser.Timer.SECOND * game.global.carGerationSpeed, Infinity, this.createCar, this);
  }

  update() {
    let game = this.game,
        cursors = this.cursors,
        player = this.game.global.player,
        traffic = this.game.global.traffic;

    this.gameTimer.render();

    game.global.road.update();

    if (game.global.active) {
      player.updatePlayer(cursors);

      game.physics.arcade.collide(player, traffic, function (player) {
        player.velocity = 0;
        game.global.active = false;
        player.playCrashSounce();


        game.global.themesong.stop();
        game.global.gameOverSong.play();
        setTimeout(function () {
          game.state.start('gameover');
        }, 2000);
      });

    } else {
      game.physics.arcade.collide(player, traffic, () => {});
    }
    game.physics.arcade.collide(traffic);
  }

  createCar () {
    let game = this.game;
    let colors = [ "orng_car", "turq_car", "purple_car", "black_car", "green_car", "blue_car" ];
    let coords = this.coords;
    let randomColor = Math.floor(Math.random() * colors.length);
    let randomCoord = Math.floor(Math.random() * 4);
    let color;
    let location = coords[randomCoord];
    let traffic = this.game.global.traffic;

    let randomRange = Math.floor(Math.random() * 100);

    if (randomRange <= 4) {
      color = "cop_car";
      this.siren.play();
    } else if (randomRange > 5 && randomRange <= 10) {
      color = "semi_truck";
      this.semiHonkLong.play();
    } else {
      color = colors[randomColor];
    }

    if (game.global.distance > 10000) {
      traffic.add(new Enemy(game, location.x, location.y, color, this.player, 175));
    } else if (game.global.distance > 3000) {
      traffic.add(new Enemy(game, location.x, location.y, color, this.player, 180));
     } else {
      traffic.add(new Enemy(game, location.x, location.y, color, this.player));
    }
  }

  endGame() {
    this.game.global.themesong.stop();
    this.game.state.start('gameover');
  }

}

export default Game;
