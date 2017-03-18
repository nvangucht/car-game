class Game extends Phaser.State {

  constructor() {
    super();
  }

  create() {
    var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, 'It\'s time to go to work!', {
      font: '42px Arial', fill: '#ffffff', align: 'center'
    });
    text.anchor.set(0.5);

    this.input.onDown.add(this.endGame, this);
  }

  update() {

  }

  
              
  // var game = new Phaser.Game(1280, 839, Phaser.AUTO, 'main_game', { preload: preload, create: create, update: update });

  // function preload() {
  //     game.load.spritesheet('map','assets/map.jpg');
  //     game.load.spritesheet('car','assets/car.png');
  //     game.load.spritesheet('building','assets/building.png');
  //     game.load.physics("collision","assets/collision.json");
  // }

  // var cursors;
  // var velocity = 0;
  // function create() {
      
  //     /*Enable Phyics Engine*/
  //     game.physics.startSystem(Phaser.Physics.P2JS);
  //     /*Adding Map*/
  //     var map = game.add.sprite(0,0,'map');
  //     /*Adding car*/
  //     car = game.add.sprite(570,100,'car');
  //     game.physics.p2.enable(car);
  //     car.body.angle = 90;
      
  //     cursors = game.input.keyboard.createCursorKeys();
      
  //     /*Create Collision Groups*/
  //     var carCollisionGroup = game.physics.p2.createCollisionGroup();
  //     var buildingCollisionGroup = game.physics.p2.createCollisionGroup();
  //     game.physics.p2.updateBoundsCollisionGroup();
      
  //     /*Adding Building*/
  //     var building = game.add.sprite(640,420,'building');
  //     game.physics.p2.enable(building);
  //     building.body.kinematic = true; //Building is static
  //     building.body.clearShapes(); //Remove standard Bounding Box
  //     building.body.loadPolygon('collision','building'); //Load Bounding Box from Physics Editor File
      
  //     //Set Collision Groups
  //     car.body.setCollisionGroup(carCollisionGroup);
  //     building.body.setCollisionGroup(buildingCollisionGroup);
      
  //     //Set Collision
  //     car.body.collides([carCollisionGroup,buildingCollisionGroup]);
  //     building.body.collides([buildingCollisionGroup,carCollisionGroup]);
  // }

  // function update()
  // {
  //     /*Update Velocity*/
  //     if (cursors.up.isDown && velocity <= 400) {
  //             velocity+=7;
  //     }
  //     else {
  //         if (velocity >= 7)
  //             velocity -= 7;
  //     }
              
  //     /*Set X and Y Speed of Velocity*/
  //     car.body.velocity.x = velocity * Math.cos((car.angle-90)*0.01745);
  //     car.body.velocity.y = velocity * Math.sin((car.angle-90)*0.01745);
      
  //     /*Rotation of Car*/
  //     if (cursors.left.isDown)
  //         car.body.angularVelocity = -5*(velocity/1000);
  //     else if (cursors.right.isDown)
  //         car.body.angularVelocity = 5*(velocity/1000);
  //     else
  //         car.body.angularVelocity = 0;
  // }

  endGame() {
    this.game.state.start('gameover');
  }

}

export default Game;
