import Player from '../objects/Player';
import Enemy from '../objects/Enemy';
// import Enemy from 'MathExtensions';

export default class Boot extends Phaser.State {

  constructor() {
    super();

    let cursors,
        trafficGroup,
        player,
        enemy;
  }

  random(min, max) {
      return Math.random() * (max - min) + min;
  }


  preload() {
    this.game.load.spritesheet('car','./assets/car.png');
  }

  create() {
    this.game.stage.backgroundColor = '#124184';

    this.cursors = this.game.input.keyboard.createCursorKeys();

    
    this.world.setBounds(0, 0, 1400, 1200);
    this.game.camera.y = 200;

    this.game.physics.startSystem(Phaser.Physics.P2JS);

    // this.game.physics.p2.gravity.y = -150;

    this.trafficGroup = this.game.add.group();

    this.player = new Player(this.game, 300, 400);
    this.enemy = new Enemy(this.game, 500, 400);

    // for (let i = 0, len = 100; i <= len; i++) {
    //   this.trafficGroup.add(new Enemy(this.game, this.random(100, 300), 800));
    // }

    this.trafficGroup.add(this.player);
    this.trafficGroup.add(this.enemy);

    this.game.world.bringToTop(this.trafficGroup);
  }

  update() {
    this.player.updatePlayer(this.cursors);
    this.enemy.updatePlayer(this.cursors);
  }

  initGlobalVariables(){
    this.game.global = {

    };
  }

}
