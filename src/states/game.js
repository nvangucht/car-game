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
    this.music;
    this.makeway;
    this.openLane;
    this.makeway = false;
    this.gameTimer;
  }

  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.music = this.game.add.audio('themesong');
    this.music.loop = true;
    this.music.play();

    this.semiHonkLong = this.game.add.audio('semi_honk_long');
    this.semiHonkLong.volume = 1;

    this.siren = this.game.add.audio('cop_siren');
    this.siren.volume = 1;

    this.cursors = this.game.input.keyboard.createCursorKeys();

    this.road = new Road(this.game);
    this.road.create();

    this.createTraffic();

    this.gameTimer = new GameTimer(this.game);
    this.gameTimer.start();

    this.player = new Player(this.game, this.road, 510, 300);
  }

  createTraffic() {
    this.traffic = this.game.add.group();

     // this.traffic = new Traffic(this.game, this.player);

    this.game.time.events.repeat(Phaser.Timer.SECOND, Infinity, this.createCar, this);
    this.game.time.events.repeat(Phaser.Timer.SECOND * 5, Infinity, this.makeWayForLane, this);
  }

  render() {
    this.gameTimer.render();
  }

  update() {
    let cursors = this.cursors;
    this.player.updatePlayer(cursors);
    this.road.update();

    this.game.physics.arcade.collide(this.player, this.traffic);
    this.game.physics.arcade.collide(this.traffic);
  }

  createCar () {
    let colors = [ "orng_car", "turq_car", "purple_car", "black_car", "green_car", "blue_car"];
    let coords = [ { x : 369, y : -160}, { x : 430, y : -160}, { x : 492, y: -160}, { x : 552, y : -160} ],
        randomColor = Math.floor(Math.random() * 6),
        randomCoord = Math.floor(Math.random() * 4),
        color,
        location = coords[randomCoord];

    let makeway = false;
    let randomRange = Math.floor(Math.random() * 100);

    if (randomRange <= 2) {
        color = "cop_car";
        this.siren.play();
    } else {
        color = colors[randomColor];
    }

    var semi = new SemiTruck(this.game, 600, 600, this.player);

    if (this.makeway) {
      this.traffic.add(new SemiTruck(this.game, 552, 600, color, this.player));
      this.makeway = false;
    } else {
       this.traffic.add(new Enemy(this.game, location.x, location.y, color, this.player));
    }

    // if (color === "semi_truck") {
    //   // if (Math.floor(Math.random() * 4) === 0) {
    //     this.semiHonkLong.play();
    //   // }
    // }
  }

  makeWayForLane () {
    this.makeway = true;
    this.openLane = 1;
  }

  endGame() {
    this.game.state.start('gameover');
  }

}

export default Game;
