import { GameOfLife } from './BL/GameOfLife';
import { Board } from './Model';

let matrix =
    [[false, false, false],
    [false, true, false],
    [false, false, false]];

let expectedBoard = new Board(matrix);

let game = new GameOfLife(expectedBoard);

game.Run();