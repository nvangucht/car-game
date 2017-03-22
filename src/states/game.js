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
    this.game.stage.backgroundColor = '#124184';

    this.world.setBounds(0, 0, 1400, 1200);
    this.game.camera.y = 200;

    this.road = new Road(this.game, 400, 400);
    this.game.world.bringToTop(this.road);
  }

  createTraffic() {
    let trafficGroup = this.game.add.group();
    this.player = new Player(this.game, 300, 600);
    this.enemy = new Enemy(this.game, 500, 400);

    trafficGroup.add(this.player);
    trafficGroup.add(this.enemy);

    // this.game.world.bringToTop(trafficGroup);
  }

  update() {
    this.player.updatePlayer(this.cursors);
    this.enemy.updatePlayer(this.cursors);
  }

  endGame() {
    this.game.state.start('gameover');
  }

}

export default Game;
