import Player from '../objects/Player';
import Enemy from '../objects/Enemy';
import Road from '../objects/Road';
import random from '../MathExtensions';

class Game extends Phaser.State {

  constructor() {
    super();

    let cursors,
        player,
        enemy,
        road;
  }

  create() {
    this.game.physics.startSystem(Phaser.Physics.P2JS);

    this.game.sound.play('themesong');

    this.cursors = this.game.input.keyboard.createCursorKeys();

    this.createMap();
    this.createTraffic();
  }

  createMap() {
    this.game.stage.backgroundColor = '#005493';

    // this.world.setBounds(0, 0, 1000, 1000);

    this.road = this.game.add.tileSprite(0, 0, 1920, 1080, 'road');
    this.road.scale.setTo(0.5, 0.5);

    console.log(this.road.y);
  }

  createTraffic() {
    let trafficGroup = this.game.add.group();
    this.player = new Player(this.game, this.road, 500, 300);
    // this.enemy = new Enemy(this.game, 500, 400);

    // trafficGroup.add(this.player);
    // trafficGroup.add(this.enemy);

    // this.game.world.bringToTop(trafficGroup);
  }

  update() {
    this.player.updatePlayer(this.cursors);
  }

  endGame() {
    this.game.state.start('gameover');
  }

}

export default Game;
