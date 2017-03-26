export default class GameTimer {
    constructor(game) {
        this.game = game;
        this.timer = this.game.time.create();
        this.timerEvent = this.timer.add(Phaser.Timer.SECOND * 30, this.endTimer, this);
    }

    start() {
        this.timer.start();
    }

    endTimer() {
      this.timer.stop();
    }

    formatTime(s) {
        var minutes = "0" + Math.floor(s / 60);
        var seconds = "0" + (s - minutes * 60);
        return minutes.substr(-2) + ":" + seconds.substr(-2);
    }

    render() {
       if (this.timer.running) {
            this.game.debug.text(this.formatTime(Math.round((this.timerEvent.delay - this.timer.ms) / 1000)), 2, 14, "#ff0");
        }
        else {
            this.game.debug.text("Done!", 2, 14, "#0f0");
            // this.endGame();
        }
    }

    endGame() {
      this.game.state.start('gameover');
    }
}