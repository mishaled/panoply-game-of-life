import { Board } from "../Model";

export interface IGameOfLife {
    Run(maxIterations? : number);
    GetCurrentState(): Board;
    ComputeNextState(): Board;
}