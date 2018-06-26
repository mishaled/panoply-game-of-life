import { Board } from "../Model";

export interface IGameOfLife {
    Run();
    GetCurrentState(): Board;
    ComputeNextState(): Board;
}