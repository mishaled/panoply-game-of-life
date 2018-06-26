"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    Board.prototype.GetNumberOfLivingNeighbors = function (cellRow, cellColumn) {
        var numberOfLivingNeighbors = 0;
        if (cellRow >= this._rowsCount || cellColumn >= this._columnsCount) {
            throw "No such cell!";
        }
        for (var i = cellRow - 1; i <= cellRow + 1; i++) {
            for (var j = cellColumn - 1; j <= cellColumn + 1; j++) {
                if (!this.DoesNeighborExistAndNotTheCellItself(i, j, cellRow, cellColumn)) {
                    continue;
                }
                numberOfLivingNeighbors += Number(this._matrix[i][j]);
            }
        }
        return numberOfLivingNeighbors;
    };
    Board.prototype.DoesNeighborExistAndNotTheCellItself = function (i, j, cellRow, cellColumn) {
        return this.DoesCellExist(i, j) &&
            !this.IsTheSameCell(i, j, cellRow, cellColumn);
    };
    Board.prototype.IsTheSameCell = function (i, j, cellRow, cellColumn) {
        return cellRow == i &&
            cellColumn == j;
    };
    Board.prototype.DoesCellExist = function (cellRow, cellColumn) {
        return cellRow >= 0 &&
            cellColumn >= 0 &&
            cellRow <= this._rowsCount - 1 &&
            cellColumn <= this._columnsCount - 1;
    };
    return Board;
}());
exports.Board = Board;

//# sourceMappingURL=Board.js.map
