import 'mocha';
import { expect } from 'chai';
import { Cell, Board } from '../Model';
import { GameOfLife } from './';

describe('GameOfLife', () => {
    describe('constructor', () => {
        it('should initialize seed correctly', () => {
            let matrix =
                [[false, true, false],
                [true, true, false],
                [false, false, false]];

            let expectedBoard = new Board(matrix);

            let game = new GameOfLife(expectedBoard);
            let actualBoard = game.GetCurrentState();

            expect(actualBoard).to.be.deep.equal(expectedBoard);
        });
    });
});
