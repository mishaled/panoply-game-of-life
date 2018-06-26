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

    public GetNumberOfLivingNeighbors(cellRow: number, cellColumn: number): number {
        let numberOfLivingNeighbors = 0;

        if (cellRow >= this._rowsCount || cellColumn >= this._columnsCount) {
            throw "No such cell!";
        }

        for (let i = cellRow - 1; i <= cellRow + 1; i++) {
            for (let j = cellColumn - 1; j <= cellColumn + 1; j++) {
                if (!this.DoesNeighborExistAndNotTheCellItself(i, j, cellRow, cellColumn)) {
                    continue;
                }

                numberOfLivingNeighbors += Number(this._matrix[i][j]);
            }
        }

        return numberOfLivingNeighbors;
    }

    private DoesNeighborExistAndNotTheCellItself(i: number, j: number, cellRow: number, cellColumn: number): boolean {
        return this.DoesCellExist(i, j) &&
            !this.IsTheSameCell(i, j, cellRow, cellColumn);

    }

    private IsTheSameCell(i: number, j: number, cellRow: number, cellColumn: number): boolean {
        return cellRow == i &&
            cellColumn == j;
    }

    private DoesCellExist(cellRow: number, cellColumn: number): boolean {
        return cellRow >= 0 &&
            cellColumn >= 0 &&
            cellRow <= this._rowsCount - 1 &&
            cellColumn <= this._columnsCount - 1;
    }
}