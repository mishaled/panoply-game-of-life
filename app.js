"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameOfLife_1 = require("./BL/GameOfLife");
var Model_1 = require("./Model");
var matrix = [[false, false, false],
    [false, true, false],
    [false, false, false]];
var expectedBoard = new Model_1.Board(matrix);
var game = new GameOfLife_1.GameOfLife(expectedBoard);
game.Run();
//# sourceMappingURL=app.js.map