export default class Traffic  {
    constructor(game) {
        this.game = game;
    }

    createTraffic() {
      this.traffic = this.game.add.physicsGroup();

      this.traffic.enableBody = true;

      this.game.time.events.repeat(Phaser.Timer.SECOND * 4, Infinity, this.createCar, this);
    }

    createCar () {
      let coords = [{x: 490, y: -200}, {x: 369, y: -200}];
      let index = Math.floor((Math.random() * 2) + 1) - 1;
      let location = coords[index];
      let enemy = this.traffic.create(location.x, location.y, "enemy_car");

      enemy.scale.setTo(0.5, 0.5);
    }
}