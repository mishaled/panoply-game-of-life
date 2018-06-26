export class Cell {
    public i: number;
    public j: number;
    public state: boolean;

    public constructor(row, column, currentState?: boolean) {
        this.i = row;
        this.j = column;
        this.state = currentState;
    }
}