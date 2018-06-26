"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash = require("lodash");
var GameOfLife = /** @class */ (function () {
    function GameOfLife(seed) {
        this._currentState = seed;
    }
    GameOfLife.prototype.Run = function (maxIterations) {
        if (maxIterations == 0) {
            return;
        }
        this._currentState = this.ComputeNextState();
        this.Run(maxIterations == undefined ? maxIterations : maxIterations - 1);
    };
    GameOfLife.prototype.GetCurrentState = function () {
        return this._currentState;
    };
    GameOfLife.prototype.ComputeNextState = function () {
        var _this = this;
        var cells = this._currentState.GetAllCells();
        var nextState = lodash.cloneDeep(this._currentState);
        lodash.forEach(cells, function (cell) {
            var cellNextState = _this.ShouldTheCellBeAliveInTheNextStep(cell, _this._currentState);
            nextState.SetCell(cell, cellNextState);
        });
        return nextState;
    };
    GameOfLife.prototype.ShouldTheCellBeAliveInTheNextStep = function (cell, currentState) {
        var numberOfNeighbors = currentState.GetNumberOfLivingNeighbors(cell);
        var currentCellState = cell.state;
        if (currentCellState) {
            return this.ComputeLivingCellNextState(numberOfNeighbors);
        }
        return this.ComputeDeadCellNextState(numberOfNeighbors);
    };
    GameOfLife.prototype.ComputeLivingCellNextState = function (numberOfNeighbors) {
        if (numberOfNeighbors < 2) {
            return false;
        }
        if (numberOfNeighbors == 2 || numberOfNeighbors == 3) {
            return true;
        }
        return false;
    };
    GameOfLife.prototype.ComputeDeadCellNextState = function (numberOfNeighbors) {
        if (numberOfNeighbors == 3) {
            return true;
        }
        return false;
    };
    return GameOfLife;
}());
exports.GameOfLife = GameOfLife;
//# sourceMappingURL=GameOfLife.js.map