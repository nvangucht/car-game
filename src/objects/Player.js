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
        this.vroom;

        game.physics.arcade.enable(this);
        game.stage.addChild(this);
        this.create();
    }

    create () {
        this.anchor.setTo(0.5, 0.5);
        this.body.collideWorldBounds = true;
        this.body.mass = 0.5;
        this.brake = this.game.add.audio('brake');
        this.vroom = this.game.add.audio('vroom');
        this.brake.volume = 0.35;
    }

    updatePlayer(cursors) {
        this.body.velocity.x = 0;
        this.body.velocity.y = 0;

        if (cursors.left.isDown && this.body.x >= 370) {
            this.body.velocity.x = -100;
        } else if (cursors.right.isDown && this.body.x <= 550) {
            this.body.velocity.x = + 100;
        }

        if (cursors.up.isDown) {
            this.road.tilePosition.y += 4;
            this.body.velocity.y = -30;
            this.distanceTraveled += 1;
        } else if (cursors.down.isDown) {
            this.body.velocity.y += 200;
            this.body.angle += 1;
        }

        if (cursors.down.downDuration(1)) {
            this.road.tilePosition.y -= 8;

            this.brake.play();
        }

        if (cursors.up.downDuration(1)) {
            this.vroom.play();
        }
    }
}
