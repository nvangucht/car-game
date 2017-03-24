import Player from '../objects/Player';
import Enemy from '../objects/Enemy';
import Traffic from '../objects/Traffic';

class Game extends Phaser.State {

  constructor() {
    super();

    let cursors,
        player,
        road,
        traffic;
  }

  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.sound.play('themesong');

    this.cursors = this.game.input.keyboard.createCursorKeys();

    this.createMap();
    this.player = new Player(this.game, this.road, 490, 300);
    this.createTraffic();
  }

  createMap() {
    this.game.stage.backgroundColor = '#005493';

    this.road = this.game.add.tileSprite(0, 0, 1920, 1080, 'road');
    this.road.scale.setTo(0.5, 0.5);
  }

  createTraffic() {
    this.traffic = this.game.add.physicsGroup();

    this.traffic.enableBody = true;

    this.game.time.events.repeat(Phaser.Timer.SECOND * 1.35, Infinity, this.createCar, this);
  }

  update() {
    this.player.updatePlayer(this.cursors);
    this.road.tilePosition.y += 9;

    this.traffic.forEach(function (enemy) {
        enemy.body.y += 1;
    });

    this.game.physics.arcade.collide(this.player, this.traffic, function (player, traffic) {});

  }

  createCar () {
    let colors = [ "orng_car", "turq_car", "purple_car" ];
    let coords = [ { x : 369, y : -200}, { x : 430, y : -200}, { x : 492, y: -200}, { x : 552, y : -200} ],
        randomColor = Math.floor(Math.random() * 3),
        randomCoord = Math.floor(Math.random() * 4),
        color = colors[randomColor],
        location = coords[randomCoord],

        enemy = this.traffic.create(location.x, location.y, color);

    enemy.scale.setTo(0.5, 0.5);
  }

  endGame() {
    this.game.state.start('gameover');
  }

}

export default Game;
