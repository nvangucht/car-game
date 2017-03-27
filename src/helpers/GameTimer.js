export default class GameTimer {
    constructor(game) {
        this.game = game;
        this.timer = this.game.time.create();
        this.timerEvent = this.timer.add(Phaser.Timer.SECOND * 60, this.endTimer, this);
        this.timeText = "";
    }

    start() {
        this.timer.start();
        this.timerText = this.game.add.text(10, 10, this.formatTime(Math.round((this.timerEvent.delay - this.timer.ms) / 1000)), {
          font: '42px silkscreennormal', fill: '#ffffff', align: 'center'
        });
    }

    endTimer() {
      this.timer.stop();
    }

    formatTime(s) {
        var minutes = "0" + Math.floor(s / 60);
        var seconds = "0" + (s - minutes * 60);
        // return minutes.substr(-2) + ":" + seconds.substr(-2);
        return seconds.substr(-2);
    }

    render() {
        this.timerText.setText(this.formatTime(Math.round((this.timerEvent.delay - this.timer.ms) / 1000)));
    }

    endGame() {
      this.game.state.start('gameover');
    }
}