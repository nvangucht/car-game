class Boot extends Phaser.State {

  constructor() {
    super();

    var sprite,
        bmd,
        cursors,
        velocity,
        car,
        angleRotation,
        maxSpeed = 250;
  }

  preload() {
    this.game.load.spritesheet('car','assets/car.png');
  }

  create() {

    this.velocity = 0;

    this.angleRotation = 0.01745;
    this.maxSpeed = 250;
    //  Enable p2 physics
    this.game.physics.startSystem(Phaser.Physics.P2JS);

    this.game.stage.backgroundColor = '#124184';

    this.bmd = this.game.add.bitmapData(800, 600);
    this.bmd.context.fillStyle = '#ffffff';

    var bg = this.game.add.sprite(0, 0, this.bmd);

    this.game.physics.p2.gravity.y = -50;

    this.sprite = this.game.add.sprite(32, 450, 'car');
    this.car = this.game.add.sprite(100, 100, 'car');

    this.game.physics.p2.enable(this.sprite);

    this.sprite.body.fixedRotation = true;

    this.game.physics.p2.enable(this.car);
    this.cursors = this.game.input.keyboard.createCursorKeys();

  }

  update() {
    /*Update Velocity*/

    this.car.body.gravity.y = -100;

    if (this.cursors.up.isDown && this.velocity <= this.maxSpeed - 100) {
      this.velocity += 7;
    } else if (this.cursors.down.isDown && this.velocity <= this.maxSpeed) {
      this.velocity -= 7;
    }

    // /*Set X and Y Speed of Velocity*/
    this.car.body.velocity.x = this.velocity * Math.cos((this.car.angle - 90) * this.angleRotation);
    this.car.body.velocity.y = this.velocity * Math.sin((this.car.angle - 90) * this.angleRotation);
    // /*Rotation of Car*/
    if (this.cursors.left.isDown) {
        this.car.body.angularVelocity = -5 * (this.velocity / 1000);
    }
    else if (this.cursors.right.isDown) {
        this.car.body.angularVelocity = 5 * (this.velocity / 1000);
    }
    else {
        this.car.body.angularVelocity = 0;
    }
  }

  initGlobalVariables(){
    this.game.global = {

    };
  }

}

export default Boot;
