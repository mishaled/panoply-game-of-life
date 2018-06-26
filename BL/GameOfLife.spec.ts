import 'mocha';
import { expect } from 'chai';
import { Cell, Board } from '../Model';
import { GameOfLife } from './';
import sinon = require('sinon');

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

    describe('ComputeNextState', () => {

        let computeNextStateBaseCheck = function (matrix: boolean[][], expected: boolean) {
            let expectedBoard = new Board(matrix);

            let game = new GameOfLife(expectedBoard);
            let nextBoard = game.ComputeNextState();

            let cell = new Cell(1, 1);
            let currentState = nextBoard.GetCurrentCellState(cell);

            expect(currentState).to.be.deep.equal(expected);
        }

        describe('Living cell', () => {
            it('with 0 living neighbors - should die', () => {
                let matrix =
                    [[false, false, false],
                    [false, true, false],
                    [false, false, false]];

                computeNextStateBaseCheck(matrix, false);
            });

            it('with 1 living neighbor - should die', () => {
                let matrix =
                    [[false, false, false],
                    [true, true, false],
                    [false, false, false]];

                computeNextStateBaseCheck(matrix, false);
            });

            it('with 2 living neighbors - should live', () => {
                let matrix =
                    [[true, true, false],
                    [false, true, false],
                    [false, false, false]];

                computeNextStateBaseCheck(matrix, true);
            });

            it('with 3 living neighbors - should live', () => {
                let matrix =
                    [[true, true, false],
                    [true, true, false],
                    [false, false, false]];

                computeNextStateBaseCheck(matrix, true);
            });

            it('with 4 living neighbors - should die', () => {
                let matrix =
                    [[true, true, false],
                    [true, true, false],
                    [true, false, false]];

                computeNextStateBaseCheck(matrix, false);
            });

            it('with 5 living neighbors - should die', () => {
                let matrix =
                    [[true, true, false],
                    [true, true, false],
                    [true, true, false]];

                computeNextStateBaseCheck(matrix, false);
            });

            it('with 6 living neighbors - should die', () => {
                let matrix =
                    [[true, true, false],
                    [true, true, false],
                    [true, true, true]];

                computeNextStateBaseCheck(matrix, false);
            });

            it('with 7 living neighbors - should die', () => {
                let matrix =
                    [[true, true, false],
                    [true, true, true],
                    [true, true, true]];

                computeNextStateBaseCheck(matrix, false);
            });

            it('with 8 living neighbors - should die', () => {
                let matrix =
                    [[true, true, true],
                    [true, true, true],
                    [true, true, true]];

                computeNextStateBaseCheck(matrix, false);
            });
        });

        describe('Dead cell', () => {
            it('with 0 living neighbors - should die', () => {
                let matrix =
                    [[false, false, false],
                    [false, false, false],
                    [false, false, false]];

                computeNextStateBaseCheck(matrix, false);
            });

            it('with 1 living neighbor - should die', () => {
                let matrix =
                    [[false, false, false],
                    [true, false, false],
                    [false, false, false]];

                computeNextStateBaseCheck(matrix, false);
            });

            it('with 2 living neighbors - should die', () => {
                let matrix =
                    [[true, true, false],
                    [false, false, false],
                    [false, false, false]];

                computeNextStateBaseCheck(matrix, false);
            });

            it('with 3 living neighbors - should live', () => {
                let matrix =
                    [[true, true, false],
                    [true, false, false],
                    [false, false, false]];

                computeNextStateBaseCheck(matrix, true);
            });

            it('with 4 living neighbors - should die', () => {
                let matrix =
                    [[true, true, false],
                    [true, false, false],
                    [true, false, false]];

                computeNextStateBaseCheck(matrix, false);
            });

            it('with 5 living neighbors - should die', () => {
                let matrix =
                    [[true, true, false],
                    [true, false, false],
                    [true, true, false]];

                computeNextStateBaseCheck(matrix, false);
            });

            it('with 6 living neighbors - should die', () => {
                let matrix =
                    [[true, true, false],
                    [true, false, false],
                    [true, true, true]];

                computeNextStateBaseCheck(matrix, false);
            });

            it('with 7 living neighbors - should die', () => {
                let matrix =
                    [[true, true, false],
                    [true, false, true],
                    [true, true, true]];

                computeNextStateBaseCheck(matrix, false);
            });

            it('with 8 living neighbors - should die', () => {
                let matrix =
                    [[true, true, true],
                    [true, false, true],
                    [true, true, true]];

                computeNextStateBaseCheck(matrix, false);
            });
        });
    });

    describe('Run', () => {
        it('should call ComputeNextState correct number of times', () => {
            let matrix =
                [[false, false, false],
                [false, true, false],
                [false, false, false]];

            let expectedBoard = new Board(matrix);

            let game = new GameOfLife(expectedBoard);

            let computeNextStateSpy = sinon.spy(game, 'ComputeNextState');
            let expectedIterationCount = 3;
            let nextBoard = game.Run(expectedIterationCount);

            expect(computeNextStateSpy.callCount).to.be.equal(expectedIterationCount);

        });
    });
});
