"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var chai_1 = require("chai");
var Model_1 = require("../Model");
var _1 = require("./");
describe('GameOfLife', function () {
    describe('constructor', function () {
        it('should initialize seed correctly', function () {
            var matrix = [[false, true, false],
                [true, true, false],
                [false, false, false]];
            var expectedBoard = new Model_1.Board(matrix);
            var game = new _1.GameOfLife(expectedBoard);
            var actualBoard = game.GetCurrentState();
            chai_1.expect(actualBoard).to.be.deep.equal(expectedBoard);
        });
    });
    describe('ComputeNextState', function () {
        var computeNextStateBaseCheck = function (matrix, expected) {
            var expectedBoard = new Model_1.Board(matrix);
            var game = new _1.GameOfLife(expectedBoard);
            var nextBoard = game.ComputeNextState();
            var cell = new Model_1.Cell(1, 1);
            var currentState = nextBoard.GetCurrentCellState(cell);
            chai_1.expect(currentState).to.be.deep.equal(expected);
        };
        describe('Living cell', function () {
            it('with 0 living neighbors - should die', function () {
                var matrix = [[false, false, false],
                    [false, true, false],
                    [false, false, false]];
                computeNextStateBaseCheck(matrix, false);
            });
            it('with 1 living neighbor - should die', function () {
                var matrix = [[false, false, false],
                    [true, true, false],
                    [false, false, false]];
                computeNextStateBaseCheck(matrix, false);
            });
            it('with 2 living neighbors - should live', function () {
                var matrix = [[true, true, false],
                    [false, true, false],
                    [false, false, false]];
                computeNextStateBaseCheck(matrix, true);
            });
            it('with 3 living neighbors - should live', function () {
                var matrix = [[true, true, false],
                    [true, true, false],
                    [false, false, false]];
                computeNextStateBaseCheck(matrix, true);
            });
            it('with 4 living neighbors - should die', function () {
                var matrix = [[true, true, false],
                    [true, true, false],
                    [true, false, false]];
                computeNextStateBaseCheck(matrix, false);
            });
            it('with 5 living neighbors - should die', function () {
                var matrix = [[true, true, false],
                    [true, true, false],
                    [true, true, false]];
                computeNextStateBaseCheck(matrix, false);
            });
            it('with 6 living neighbors - should die', function () {
                var matrix = [[true, true, false],
                    [true, true, false],
                    [true, true, true]];
                computeNextStateBaseCheck(matrix, false);
            });
            it('with 7 living neighbors - should die', function () {
                var matrix = [[true, true, false],
                    [true, true, true],
                    [true, true, true]];
                computeNextStateBaseCheck(matrix, false);
            });
            it('with 8 living neighbors - should die', function () {
                var matrix = [[true, true, true],
                    [true, true, true],
                    [true, true, true]];
                computeNextStateBaseCheck(matrix, false);
            });
        });
        describe('Dead cell', function () {
            it('with 0 living neighbors - should die', function () {
                var matrix = [[false, false, false],
                    [false, false, false],
                    [false, false, false]];
                computeNextStateBaseCheck(matrix, false);
            });
            it('with 1 living neighbor - should die', function () {
                var matrix = [[false, false, false],
                    [true, false, false],
                    [false, false, false]];
                computeNextStateBaseCheck(matrix, false);
            });
            it('with 2 living neighbors - should die', function () {
                var matrix = [[true, true, false],
                    [false, false, false],
                    [false, false, false]];
                computeNextStateBaseCheck(matrix, false);
            });
            it('with 3 living neighbors - should live', function () {
                var matrix = [[true, true, false],
                    [true, false, false],
                    [false, false, false]];
                computeNextStateBaseCheck(matrix, true);
            });
            it('with 4 living neighbors - should die', function () {
                var matrix = [[true, true, false],
                    [true, false, false],
                    [true, false, false]];
                computeNextStateBaseCheck(matrix, false);
            });
            it('with 5 living neighbors - should die', function () {
                var matrix = [[true, true, false],
                    [true, false, false],
                    [true, true, false]];
                computeNextStateBaseCheck(matrix, false);
            });
            it('with 6 living neighbors - should die', function () {
                var matrix = [[true, true, false],
                    [true, false, false],
                    [true, true, true]];
                computeNextStateBaseCheck(matrix, false);
            });
            it('with 7 living neighbors - should die', function () {
                var matrix = [[true, true, false],
                    [true, false, true],
                    [true, true, true]];
                computeNextStateBaseCheck(matrix, false);
            });
            it('with 8 living neighbors - should die', function () {
                var matrix = [[true, true, true],
                    [true, false, true],
                    [true, true, true]];
                computeNextStateBaseCheck(matrix, false);
            });
        });
    });
});

//# sourceMappingURL=GameOfLife.spec.js.map
