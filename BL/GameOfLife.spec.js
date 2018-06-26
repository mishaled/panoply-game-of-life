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
});

//# sourceMappingURL=GameOfLife.spec.js.map
