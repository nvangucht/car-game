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

    this.game.global.themesong.loopFull();

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
    this.game.global.traffic = this.game.add.group();

    this.game.time.events.repeat(Phaser.Timer.SECOND * this.game.global.carGerationSpeed, Infinity, this.createCar, this);
  }

  update() {
    var game = this.game,
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
      game.physics.arcade.collide(player, traffic, function (player) {});
    }
    game.physics.arcade.collide(traffic);
  }

  createCar () {
    let colors = [ "orng_car", "turq_car", "purple_car", "black_car", "green_car", "blue_car" ];
    let coords = this.coords,
        randomColor = Math.floor(Math.random() * colors.length),
        randomCoord = Math.floor(Math.random() * 4),
        color,
        location = coords[randomCoord],
        traffic = this.game.global.traffic;

    let randomRange = Math.floor(Math.random() * 100);

    if (randomRange <= 4) {
        color = "cop_car";
        this.siren.play();
        if (this.game.global.active && this.game.global.player.body.y <= 155) {
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

    if (this.game.global.distance > 10000) {
      traffic.add(new Enemy(this.game, location.x, location.y, color, this.player, 175));
    } else if (this.game.global.distance > 3000) {
       traffic.add(new Enemy(this.game, location.x, location.y, color, this.player, 180));
     } else {
        traffic.add(new Enemy(this.game, location.x, location.y, color, this.player));
    }
  }

  endGame() {
    this.game.global.themesong.stop();
    this.game.state.start('gameover');
  }

}

export default Game;
