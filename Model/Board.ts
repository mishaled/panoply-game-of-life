import { Cell } from './';

export class Board {
    private _matrix: boolean[][];
    private _rowsCount: number;
    private _columnsCount: number;

    public constructor(matrix: boolean[][]) {
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

    public GetNumberOfLivingNeighbors(cell: Cell): number {
        let numberOfLivingNeighbors = 0;

        if (cell.i >= this._rowsCount || cell.j >= this._columnsCount) {
            throw "No such cell!";
        }

        for (let i = cell.i - 1; i <= cell.i + 1; i++) {
            for (let j = cell.j - 1; j <= cell.j + 1; j++) {
                let neightbor = new Cell(i, j);
                if (!this.DoesNeighborExistAndNotTheCellItself(neightbor, cell)) {
                    continue;
                }

                numberOfLivingNeighbors += Number(this._matrix[i][j]);
            }
        }

        return numberOfLivingNeighbors;
    }

    public GetCurrentCellState(cell: Cell): boolean {
        if (!this.DoesCellExist(cell)) {
            throw 'Cell does not exist!';
        }

        return this._matrix[cell.i][cell.j];
    }

    public SetCell(cell: Cell, newState: boolean) {
        if (!this.DoesCellExist(cell)) {
            throw 'Cell does not exist!';
        }

        this._matrix[cell.i][cell.j] = newState;
    }

    public GetAllCells() {
        let cells: Cell[] = [];

        for (let i = 0; i < this._rowsCount; i++) {
            for (let j = 0; j < this._columnsCount; j++) {
                let currentCell = new Cell(i, j, this._matrix[i][j]);
                cells.push(currentCell);
            }
        }

        return cells;
    }

    private DoesNeighborExistAndNotTheCellItself(neighbor: Cell, cell: Cell): boolean {
        return this.DoesCellExist(neighbor) &&
            !this.IsTheSameCell(neighbor, cell);

    }

    private IsTheSameCell(cell1: Cell, cell2: Cell): boolean {
        return cell1.i == cell2.i &&
            cell1.j == cell2.j;
    }

    private DoesCellExist(cell: Cell): boolean {
        return cell.i >= 0 &&
            cell.j >= 0 &&
            cell.i <= this._rowsCount - 1 &&
            cell.j <= this._columnsCount - 1;
    }
}