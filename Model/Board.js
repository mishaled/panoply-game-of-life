"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var Board = /** @class */ (function () {
    function Board(matrix) {
        this._rowsCount = matrix.length;
        if (this._rowsCount < 2) {
            throw "Board does not have enough rows!";
        }
        this._columnsCount = matrix[0].length;
        if (this._columnsCount < 2) {
            throw "Board does not have enough columns!";
        }
        this._matrix = matrix;
    }
    Board.prototype.GetNumberOfLivingNeighbors = function (cell) {
        var numberOfLivingNeighbors = 0;
        if (cell.i >= this._rowsCount || cell.j >= this._columnsCount) {
            throw "No such cell!";
        }
        for (var i = cell.i - 1; i <= cell.i + 1; i++) {
            for (var j = cell.j - 1; j <= cell.j + 1; j++) {
                var neightbor = new _1.Cell(i, j);
                if (!this.DoesNeighborExistAndNotTheCellItself(neightbor, cell)) {
                    continue;
                }
                numberOfLivingNeighbors += Number(this._matrix[i][j]);
            }
        }
        return numberOfLivingNeighbors;
    };
    Board.prototype.GetCurrentCellState = function (cell) {
        if (!this.DoesCellExist(cell)) {
            throw 'Cell does not exist!';
        }
        return this._matrix[cell.i][cell.j];
    };
    Board.prototype.SetCell = function (cell, newState) {
        if (!this.DoesCellExist(cell)) {
            throw 'Cell does not exist!';
        }
        this._matrix[cell.i][cell.j] = newState;
    };
    Board.prototype.GetAllCells = function () {
        var cells = [];
        for (var i = 0; i < this._rowsCount; i++) {
            for (var j = 0; j < this._columnsCount; j++) {
                var currentCell = new _1.Cell(i, j, this._matrix[i][j]);
                cells.push(currentCell);
            }
        }
        return cells;
    };
    Board.prototype.DoesNeighborExistAndNotTheCellItself = function (neighbor, cell) {
        return this.DoesCellExist(neighbor) &&
            !this.IsTheSameCell(neighbor, cell);
    };
    Board.prototype.IsTheSameCell = function (cell1, cell2) {
        return cell1.i == cell2.i &&
            cell1.j == cell2.j;
    };
    Board.prototype.DoesCellExist = function (cell) {
        return cell.i >= 0 &&
            cell.j >= 0 &&
            cell.i <= this._rowsCount - 1 &&
            cell.j <= this._columnsCount - 1;
    };
    return Board;
}());
exports.Board = Board;

//# sourceMappingURL=Board.js.map
