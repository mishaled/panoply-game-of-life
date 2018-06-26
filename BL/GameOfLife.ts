import { Board } from '../Model';
import { IGameOfLife } from './IGameOfLife';

export class GameOfLife implements IGameOfLife {
    private _board: Board;

    public constructor(seed: Board) {

    }

    GetCurrentState(): Board {
        throw new Error("Method not implemented.");
    }
    
    ComputeNextState(): Board {
        throw new Error("Method not implemented.");
    }
}