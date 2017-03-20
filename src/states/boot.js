import Player from '../objects/Player';
import Enemy from '../objects/Enemy';
// import Enemy from 'MathExtensions';

export default class Boot extends Phaser.State {

  constructor() {
    super();

    var cursors,
        trafficGroup,
        player,
        enemy;
  }

  preload() {
    this.game.load.spritesheet('car','assets/car.png');
  }

  create() {
    this.game.stage.backgroundColor = '#124184';

    this.cursors = this.game.input.keyboard.createCursorKeys();

    this.game.world.setBounds(0, 0, 2000, 2000);
    this.game.camera.y = 200;

    this.game.physics.startSystem(Phaser.Physics.P2JS);

    this.game.physics.p2.gravity.y = -50;

    this.trafficGroup = this.game.add.group();

    this.player = new Player(this.game, 300, 400);
    this.enemy = new Enemy(this.game, 500, 400);

    // for (let i = 0, len = 10; i <= len; i++) {
    //   this.trafficGroup.add(new Enemy(this.game, this.random(100, 300), 800));
    // }

    this.trafficGroup.add(this.enemy);

    this.game.world.bringToTop(this.trafficGroup);
  }

  update() {
    this.player.updatePlayer(this.cursors);
  }

  initGlobalVariables(){
    this.game.global = {

    };
  }

}
