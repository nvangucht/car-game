import Player from '../objects/Player';

class Boot extends Phaser.State {

  constructor() {
    super();

    var sprite,
        cursors,
        velocity,
        car,
        angleRotation,
        maxSpeed,
        group1,
        player;
  }

  preload() {
    this.game.load.spritesheet('car','assets/car.png');
  }

  create() {

    this.velocity = 0;

    this.game.world.setBounds(0, 0, 2000, 2000);
    this.game.camera.y = 200;

    this.angleRotation = 0.01745;
    this.maxSpeed = 250;

    this.game.physics.startSystem(Phaser.Physics.P2JS);

    this.game.stage.backgroundColor = '#124184';

    // this.game.physics.p2.gravity.y = -50;

    this.group1 = this.game.add.group();

    this.player = new Player(this.game, 300, 400);

   

    this.sprite = this.game.add.sprite(32, 450, 'car');
    this.car = this.game.add.sprite(100, 400, 'car');

    this.group1.add(this.car);

    this.game.physics.p2.enable(this.sprite);

    this.sprite.body.fixedRotation = true;

    this.game.physics.p2.enable(this.car);
    this.cursors = this.game.input.keyboard.createCursorKeys();

    this.game.world.bringToTop(this.group1);

  }

  update() {
    this.player.updatePlayer(this.cursors);
    /*Update Velocity*/

    // this.car.body.gravity.y = -100;

    // if (this.cursors.up.isDown && this.velocity <= this.maxSpeed - 100) {
    //   this.velocity += 7;
    // } else if (this.cursors.down.isDown && this.velocity <= this.maxSpeed) {
    //   this.velocity -= 7;
    // }

    // // if(this.sprite.body.y <= 50) {
    // //   this.sprite.kill();
    // //   console.log(this.sprite.body.y);
    // // } 

    // // if (this.car.body <= 300) {
    // //   this.car.body = 401;
    // // }

    // // this.player.updatePlayer(this.cursors, {}, deltaTime);


    // // /*Rotation of Car*/
    // if (this.cursors.left.isDown) {
    //     this.car.body.angularVelocity = -5 * (this.velocity / 1000);
    // }
    // else if (this.cursors.right.isDown) {
    //     this.car.body.angularVelocity = 5 * (this.velocity / 1000);
    // }
    // else {
    //     this.car.body.angularVelocity = 0;
    // }

    // if (this.sprite.body.y <= 50) {
    //   this.sprite.body.y = 600;
    //   this.sprite.body.velocity.y = 10;
    // }

    // // /*Set X and Y Speed of Velocity*/
    // this.car.body.velocity.x = this.velocity * Math.cos((this.car.angle - 90) * this.angleRotation);
    // this.car.body.velocity.y = this.velocity * Math.sin((this.car.angle - 90) * this.angleRotation);
  }

  render() {

  }


  initGlobalVariables(){
    this.game.global = {

    };
  }

}

export default Boot;
