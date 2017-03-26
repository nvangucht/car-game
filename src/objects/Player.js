export default class Player extends Phaser.Sprite {
    constructor(game, road, x = 0, y = 0) {
        super(game, x, y, 'car');

        this.road = road;
        this.velocity = 0,
        this.angleRotation = 0.01745,
        this.maxSpeed = 250;
        this.scale.setTo(0.5, 0.5);
        this.distanceTraveled = 0;
        this.brake;
        this.brakeSpeed = 90;

        game.physics.arcade.enable(this);
        game.stage.addChild(this);
        this.create();
    }

    create () {
        this.anchor.setTo(0.5, 0.5);
        this.body.collideWorldBounds = true;
        this.body.mass = 1;
        this.brake = this.game.add.audio('brake');
        this.brake.volume = 0.65;
    }

    updatePlayer(cursors) {
        this.body.velocity.x = 0;
        this.body.velocity.y = 0;

        if (cursors.left.isDown && this.body.x >= 370) {
            this.body.velocity.x = -90;
        } else if (cursors.right.isDown && this.body.x <= 550) {
            this.body.velocity.x = this.brakeSpeed;
        }

        if (cursors.up.isDown) {
            this.road.tilePosition.y += 4;
            this.body.velocity.y = -30;
            this.distanceTraveled += 1;
        } else if (cursors.down.isDown) {
            this.body.velocity.y += 200;
        }

        if (cursors.down.downDuration(1)) {
            this.road.tilePosition.y -= 8;
            this.brake.play();
        }
    }
}
