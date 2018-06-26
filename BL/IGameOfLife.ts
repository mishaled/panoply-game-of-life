import { Board } from "../Model";

export interface IGameOfLife {
    GetCurrentState(): Board;
    ComputeNextState(): Board;
}