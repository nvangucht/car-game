export default class GameTimer {
  constructor(game, player) {
    this.game = game;
    this.player = player;
    this.timer = this.game.time.create();
    this.timerEvent = this.timer.add(Phaser.Timer.SECOND * this.game.global.duration, this.endTimer, this);
    this.timeText = "";
  }

  start() {
    this.timer.start();
    this.timerText = this.game.add.text(10, 10, this.formatTime(Math.round((this.timerEvent.delay - this.timer.ms) / 1000)), {
      font: '42px silkscreennormal', fill: '#ffffff', align: 'center'
    });
  }

  endTimer() {
    let game = this.game;

    game.global.playerWon = true;
    game.global.themesong.stop();
    this.timer.stop();
    game.global.player.destroy();
    game.state.start('gameover');
  }

  formatTime(s) {
    let minutes = "0" + Math.floor(s / 60);
    let seconds = "0" + (s - minutes * 60);
    return minutes.substr(-1) + ":" + seconds.substr(-2);
  }

  render() {
    let timerText = this.timerText;
    let timerEvent = this.timerEvent;

    if (this.game.global.active) {
      timerText.setText(this.formatTime(Math.round((timerEvent.delay - this.timer.ms) / 1000)));
    }
  }
}
