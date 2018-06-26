"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var chai_1 = require("chai");
var _1 = require("./");
describe('Board', function () {
    describe('constructor', function () {
        it('not enough rows - should throw error', function () {
            var matrix = [[false, false]];
            var constructorFunction = function () { new _1.Board(matrix); };
            chai_1.expect(constructorFunction).to.throw('Board does not have enough rows!');
        });
        it('not enough columns - should throw error', function () {
            var matrix = [[false], [false]];
            var constructorFunction = function () { new _1.Board(matrix); };
            chai_1.expect(constructorFunction).to.throw('Board does not have enough columns!');
        });
        it('good dimensions - should not throw exception', function () {
            var matrix = [[false, false],
                [false, false]];
            new _1.Board(matrix);
        });
    });
    describe('GetNumberOfLivingNeighbors', function () {
        it('cell in top left corner - should return correct number', function () {
            var matrix = [[false, true, false],
                [true, true, false],
                [false, false, false]];
            var board = new _1.Board(matrix);
            var actualNumber = board.GetNumberOfLivingNeighbors(0, 0);
            var expectedNumber = 3;
            chai_1.expect(actualNumber).to.be.equal(expectedNumber);
        });
        it('cell in top right corner - should return correct number', function () {
            var matrix = [[false, true, false],
                [false, true, true],
                [false, false, false]];
            var board = new _1.Board(matrix);
            var actualNumber = board.GetNumberOfLivingNeighbors(0, 2);
            var expectedNumber = 3;
            chai_1.expect(actualNumber).to.be.equal(expectedNumber);
        });
        it('cell in bottom left corner - should return correct number', function () {
            var matrix = [[false, false, false],
                [true, true, false],
                [false, true, false]];
            var board = new _1.Board(matrix);
            var actualNumber = board.GetNumberOfLivingNeighbors(2, 0);
            var expectedNumber = 3;
            chai_1.expect(actualNumber).to.be.equal(expectedNumber);
        });
        it('cell in bottom right corner - should return correct number', function () {
            var matrix = [[false, false, false],
                [false, true, true],
                [false, true, false]];
            var board = new _1.Board(matrix);
            var actualNumber = board.GetNumberOfLivingNeighbors(2, 2);
            var expectedNumber = 3;
            chai_1.expect(actualNumber).to.be.equal(expectedNumber);
        });
        it('cell in middle - should return correct number', function () {
            var matrix = [[true, true, true],
                [true, false, true],
                [true, true, true]];
            var board = new _1.Board(matrix);
            var actualNumber = board.GetNumberOfLivingNeighbors(1, 1);
            var expectedNumber = 8;
            chai_1.expect(actualNumber).to.be.equal(expectedNumber);
        });
        it('the cell itself should not be included', function () {
            var matrix = [[true, true, true],
                [true, true, true],
                [true, true, true]];
            var board = new _1.Board(matrix);
            var actualNumber = board.GetNumberOfLivingNeighbors(1, 1);
            var expectedNumber = 8;
            chai_1.expect(actualNumber).to.be.equal(expectedNumber);
        });
        it('cell on top in the middle- should return correct number', function () {
            var matrix = [[true, false, true],
                [true, true, true],
                [false, false, false]];
            var board = new _1.Board(matrix);
            var actualNumber = board.GetNumberOfLivingNeighbors(0, 1);
            var expectedNumber = 5;
            chai_1.expect(actualNumber).to.be.equal(expectedNumber);
        });
        it('cell in left in the middle- should return correct number', function () {
            var matrix = [[true, true, false],
                [false, true, false],
                [true, true, false]];
            var board = new _1.Board(matrix);
            var actualNumber = board.GetNumberOfLivingNeighbors(1, 0);
            var expectedNumber = 5;
            chai_1.expect(actualNumber).to.be.equal(expectedNumber);
        });
        it('cell in right in the middle- should return correct number', function () {
            var matrix = [[false, true, true],
                [false, true, false],
                [false, true, true]];
            var board = new _1.Board(matrix);
            var actualNumber = board.GetNumberOfLivingNeighbors(1, 2);
            var expectedNumber = 5;
            chai_1.expect(actualNumber).to.be.equal(expectedNumber);
        });
        it('cell on the bottom in the middle- should return correct number', function () {
            var matrix = [[false, false, false],
                [true, true, true],
                [true, false, true]];
            var board = new _1.Board(matrix);
            var actualNumber = board.GetNumberOfLivingNeighbors(2, 1);
            var expectedNumber = 5;
            chai_1.expect(actualNumber).to.be.equal(expectedNumber);
        });
    });
});

//# sourceMappingURL=Board.spec.js.map
