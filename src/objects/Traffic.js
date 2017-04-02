import Enemy from './Enemy';

export default class Traffic extends Phaser.Group {
    constructor(game, player) {
        super();
        this.game = game;
        this.player = player;
        this.traffic;
        this.makeway;
    }

    create() {
      this.traffic = this.game.add.group();

      this.game.time.events.repeat(Phaser.Timer.SECOND, Infinity, this.addCar, this);
    }

    addCar () {
      if (!this.game.global.paused) {
        let colors = [ "orng_car", "turq_car", "purple_car", "black_car", "green_car", "blue_car"];
        let coords = [ { x : 369, y : -160}, { x : 430, y : -160}, { x : 492, y: -160}, { x : 552, y : -160} ],
            randomColor = Math.floor(Math.random() * 6),
            randomCoord = Math.floor(Math.random() * 4),
            color,
            location = coords[randomCoord];

        let makeway = false;
        let randomRange = Math.floor(Math.random() * 100);

        if (randomRange <= 2) {
            color = "cop_car";
            // this.siren.play();
        } else {
            color = colors[randomColor];
        }

        var semi = new SemiTruck(this.game, 600, 600, this.player);

        // if (this.makeway) {
        //   this.traffic.add(new SemiTruck(this.game, 552, 600, color, this.player));
        //   this.makeway = false;
        // } else {
           this.traffic.add(new Enemy(this.game, location.x, location.y, color, this.player));
        // }

        // if (color === "semi_truck") {
        //   // if (Math.floor(Math.random() * 4) === 0) {
        //     this.semiHonkLong.play();
        //   // }
        // }
      }
    }

    update() {
      this.game.physics.arcade.collide(this.player, this);
      this.game.physics.arcade.collide(this);
    }
}