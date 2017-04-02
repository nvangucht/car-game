export default class GameTimer {
    constructor(game, player) {
        this.game = game;
        this.player = player;
        this.timer = this.game.time.create();
        this.timerEvent = this.timer.add(Phaser.Timer.SECOND * 30, this.endTimer, this);
        this.timeText = "";
    }

    start() {
        this.timer.start();
        this.timerText = this.game.add.text(10, 10, this.formatTime(Math.round((this.timerEvent.delay - this.timer.ms) / 1000)), {
          font: '42px silkscreennormal', fill: '#ffffff', align: 'center'
        });
    }

    endTimer() {
        this.game.global.themesong.stop();

        if (this.game.global.distance > 2000) {
          console.log("you win!");
        } else {
          console.log("You lose!");
        }
        this.timer.stop();
        this.player.destroy();
        this.game.state.start('gameover');
    }

    formatTime(s) {
        var minutes = "0" + Math.floor(s / 60);
        var seconds = "0" + (s - minutes * 60);
        return minutes.substr(-1) + ":" + seconds.substr(-2);
    }

    render() {
        this.timerText.setText(this.formatTime(Math.round((this.timerEvent.delay - this.timer.ms) / 1000)));
    }
}