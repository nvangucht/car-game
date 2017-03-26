  createObstacles() {
    this.obstacles = this.game.add.group();

    this.game.time.events.repeat(Phaser.Timer.SECOND * 10, Infinity, this.createTrap, this);
  }

  createTrap () {
    let coords = [ { x : 369, y : -160}, { x : 430, y : -160}, { x : 492, y: -160}, { x : 552, y : -160} ],
        randomCoord = Math.floor(Math.random() * 4),
        location = coords[randomCoord];

    this.traffic.add(new Enemy(this.game, location.x, location.y, "banana", this.player));
  }
