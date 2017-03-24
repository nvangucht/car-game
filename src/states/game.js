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

    this.game.time.events.repeat(Phaser.Timer.SECOND * 2, Infinity, this.createCar, this);
  }

  update() {
    this.player.updatePlayer(this.cursors);
    this.road.tilePosition.y += 5;

    this.traffic.forEach(function (enemy) {
        enemy.body.y += 1;
    });

    this.game.physics.arcade.collide(this.player, this.traffic, function (player, traffic) {});

  }

  createCar () {
    let enemy;
    let location;
    let coords = [{x: 490, y: -200}, {x: 369, y: -200}];
    let index;

    index = (Math.floor((Math.random() * 2) + 1) - 1);
    location = coords[index];
    enemy = this.traffic.create(location.x, location.y, "enemy_car");
    enemy.scale.setTo(0.5, 0.5);
  }

  endGame() {
    this.game.state.start('gameover');
  }

}

export default Game;
