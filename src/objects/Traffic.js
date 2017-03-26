import Enemy from './Enemy';

export default class Traffic extends Phaser.Group {
    constructor(game, player) {
        super();
        this.game = game;
        this.player = player;
    }

    createTraffic() {
      this.traffic = this.game.add.group();

      this.game.time.events.repeat(Phaser.Timer.SECOND, Infinity, this.createCar, this);
    }

    createCar () {
      let colors = [ "orng_car", "turq_car", "purple_car", "semi_truck" ];
      let coords = [ { x : 369, y : -200}, { x : 430, y : -200}, { x : 492, y: -200}, { x : 552, y : -200} ],
          randomColor = Math.floor(Math.random() * 4),
          randomCoord = Math.floor(Math.random() * 4),
          color = colors[randomColor],
          location = coords[randomCoord],
          enemy = new Enemy(this.game, location.x, location.y)
          // enemy = this.traffic.add(new Enemy(this.game, 400, 400)location.x, location.y, color);
          this.traffic.add(enemy);


      // console.log(enemy.body.mass)

      this.traffic.add(enemy);
      if (color === "semi_truck") {
        if (Math.floor(Math.random() * 4) === 0) {
          // this.semiHonkLong.play();
        }
      }
    }

    update() {
      this.game.physics.arcade.collide(this.player, this);
      this.game.physics.arcade.collide(this);
    }
}