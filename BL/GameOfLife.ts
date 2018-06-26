import { Cell, Board } from '../Model';
import { IGameOfLife } from './IGameOfLife';
import * as lodash from 'lodash';

export class GameOfLife implements IGameOfLife {
    private _currentState: Board;

    public constructor(seed: Board) {
        this._currentState = seed;
    }

    public Run() {
        while (true) {
            this._currentState = this.ComputeNextState();
        }
    }
    
    public GetCurrentState(): Board {
        return this._currentState;
    }

    public ComputeNextState(): Board {
        let cells = this._currentState.GetAllCells();
        let nextState = lodash.cloneDeep(this._currentState);

        lodash.forEach(cells, (cell) => {
            let cellNextState = this.ShouldTheCellBeAliveInTheNextStep(cell, this._currentState);
            nextState.SetCell(cell, cellNextState);
        });

        return nextState;
    }

    private ShouldTheCellBeAliveInTheNextStep(cell: Cell, currentState: Board): boolean {
        let numberOfNeighbors = currentState.GetNumberOfLivingNeighbors(cell);
        let currentCellState = cell.state;

        if (currentCellState) {
            return this.ComputeLivingCellNextState(numberOfNeighbors);
        }

        return this.ComputeDeadCellNextState(numberOfNeighbors);
    }

    private ComputeLivingCellNextState(numberOfNeighbors: number): boolean {
        if (numberOfNeighbors < 2) {
            return false;
        }

        if (numberOfNeighbors == 2 || numberOfNeighbors == 3) {
            return true;
        }

        return false;
    }

    private ComputeDeadCellNextState(numberOfNeighbors: number): boolean {
        if (numberOfNeighbors == 3) {
            return true;
        }

        return false;
    }
}