import Player from '../objects/Player';
import Enemy from '../objects/Enemy';
import SemiTruck from '../objects/SemiTruck';
import Traffic from '../objects/Traffic';
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
    this.makeway;
    this.openLane;
    this.makeway = false;
    this.gameTimer;
    this.coords = [ { x : 385, y : -300}, { x : 447, y : -300}, { x : 510, y: -300}, { x : 570, y : -300} ];
  }

  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.game.global.themesong.play();

    this.semiHonkLong = this.game.add.audio('semi_honk_long');
    this.semiHonkLong.volume = 1;

    this.siren = this.game.add.audio('cop_siren');

    this.siren.volume = .85;

    this.crashSound = this.game.add.audio('car_hit');

    this.cursors = this.game.input.keyboard.createCursorKeys();

    this.game.global.road = new Road(this.game);
    this.game.global.road.create();

    this.game.global.player = new Player(this.game, this.road, 510, 300);
    this.createTraffic();

    this.gameTimer = new GameTimer(this.game, this.player);
    this.gameTimer.start();
  }

  createTraffic() {
    this.traffic = this.game.add.group();

    this.game.time.events.repeat(Phaser.Timer.SECOND * .95, Infinity, this.createCar, this);
  }

  update() {
    var game = this.game,
        cursors = this.cursors;
    this.gameTimer.render();

    game.global.road.update();

    if (game.global.active) {
      this.game.global.player.updatePlayer(cursors);
      this.game.physics.arcade.collide(this.game.global.player, this.traffic, function (player) {
        player.playCrashSounce();

        game.global.active = false;
        player.playCrashSounce();

        game.global.themesong.stop();
        game.global.gameOverSong.play();
        setTimeout(function () {
          game.state.start('gameover');
        }, 2000);
      });
    } else {
      this.game.physics.arcade.collide(this.game.global.player, this.traffic, function (player) {});
    }
    this.game.physics.arcade.collide(this.traffic);
  }

  createCar () {
    let colors = [ "orng_car", "turq_car", "purple_car", "black_car", "green_car", "blue_car" ];
    let coords = this.coords,
        randomColor = Math.floor(Math.random() * colors.length),
        randomCoord = Math.floor(Math.random() * 4),
        color,
        location = coords[randomCoord];

    let randomRange = Math.floor(Math.random() * 100);

    if (randomRange <= 4) {
        color = "cop_car";
        this.siren.play();
        if (!this.game.global.active && this.game.global.player.body.y <= 125) {
          var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, 'SPEEDING! \n BUSTED!', {
            font: '42px Arial', fill: '#ffffff', align: 'center'
          });
          text.anchor.set(0.5);
          this.game.world.bringToTop(text);
        }
    } else if (randomRange > 5 && randomRange <= 10) {
      color = "semi_truck";
      this.semiHonkLong.play();
    } else {
        color = colors[randomColor];
    }

    this.traffic.add(new Enemy(this.game, location.x, location.y, color, this.player));
  }

  endGame() {
    if (this.game.global.distance) {
      console.log("you win!");
    } else {
      console.log("You lose!");
    }
    this.game.global.themesong.stop();
    this.game.state.start('gameover');
  }

}

export default Game;
