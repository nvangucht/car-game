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
        this.game.global.playerWon = true;
        this.game.global.themesong.stop();
        this.timer.stop();
        this.game.global.player.destroy();
        this.game.state.start('gameover');
    }

    formatTime(s) {
        var minutes = "0" + Math.floor(s / 60);
        var seconds = "0" + (s - minutes * 60);
        return minutes.substr(-1) + ":" + seconds.substr(-2);
    }

    render() {
        if (this.game.global.active) {
            this.timerText.setText(this.formatTime(Math.round((this.timerEvent.delay - this.timer.ms) / 1000)));
        }
    }
}