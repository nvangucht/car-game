import Boot from './states/boot';
import Game from './states/game';
import Menu from './states/menu';
import Gameover from './states/gameover';

var game = new Phaser.Game(1000, 500, Phaser.AUTO, 'Go To Work!');

game.state.add('boot', new Boot());
game.state.add('menu', new Menu());
game.state.add('game', new Game());
game.state.add('gameover', new Gameover());

game.state.start('boot');