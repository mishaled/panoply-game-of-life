import 'mocha';
import { expect } from 'chai';
import { Board } from './';
import { Cell } from './Cell';

describe('Board', () => {
    describe('constructor', () => {
        it('not enough rows - should throw error', () => {
            let matrix = [[false, false]];
            let constructorFunction = function () { new Board(matrix); };

            expect(constructorFunction).to.throw('Board does not have enough rows!');
        });

        it('not enough columns - should throw error', () => {
            let matrix = [[false], [false]];
            let constructorFunction = function () { new Board(matrix); };

            expect(constructorFunction).to.throw('Board does not have enough columns!');
        });

        it('good dimensions - should not throw exception', () => {
            let matrix =
                [[false, false],
                [false, false]];

            new Board(matrix);
        });
    });

    describe('GetNumberOfLivingNeighbors', () => {
        it('cell in top left corner - should return correct number', () => {
            let matrix =
                [[false, true, false],
                [true, true, false],
                [false, false, false]];

            let board = new Board(matrix);
            let cell = new Cell(0, 0);
            let actualNumber = board.GetNumberOfLivingNeighbors(cell);
            let expectedNumber = 3;

            expect(actualNumber).to.be.equal(expectedNumber);
        });

        it('cell in top right corner - should return correct number', () => {
            let matrix =
                [[false, true, false],
                [false, true, true],
                [false, false, false]];

            let board = new Board(matrix);
            let cell = new Cell(0, 2);
            let actualNumber = board.GetNumberOfLivingNeighbors(cell);
            let expectedNumber = 3;

            expect(actualNumber).to.be.equal(expectedNumber);
        });

        it('cell in bottom left corner - should return correct number', () => {
            let matrix =
                [[false, false, false],
                [true, true, false],
                [false, true, false]];

            let board = new Board(matrix);
            let cell = new Cell(2, 0);
            let actualNumber = board.GetNumberOfLivingNeighbors(cell);
            let expectedNumber = 3;

            expect(actualNumber).to.be.equal(expectedNumber);
        });

        it('cell in bottom right corner - should return correct number', () => {
            let matrix =
                [[false, false, false],
                [false, true, true],
                [false, true, false]];

            let board = new Board(matrix);
            let cell = new Cell(2, 2);
            let actualNumber = board.GetNumberOfLivingNeighbors(cell);
            let expectedNumber = 3;

            expect(actualNumber).to.be.equal(expectedNumber);
        });

        it('cell in middle - should return correct number', () => {
            let matrix =
                [[true, true, true],
                [true, false, true],
                [true, true, true]];

            let board = new Board(matrix);
            let cell = new Cell(1, 1);
            let actualNumber = board.GetNumberOfLivingNeighbors(cell);
            let expectedNumber = 8;

            expect(actualNumber).to.be.equal(expectedNumber);
        });

        it('the cell itself should not be included', () => {
            let matrix =
                [[true, true, true],
                [true, true, true],
                [true, true, true]];

            let board = new Board(matrix);
            let cell = new Cell(1, 1);
            let actualNumber = board.GetNumberOfLivingNeighbors(cell);
            let expectedNumber = 8;

            expect(actualNumber).to.be.equal(expectedNumber);
        });

        it('cell on top in the middle- should return correct number', () => {
            let matrix =
                [[true, false, true],
                [true, true, true],
                [false, false, false]];

            let board = new Board(matrix);
            let cell = new Cell(0, 1);
            let actualNumber = board.GetNumberOfLivingNeighbors(cell);
            let expectedNumber = 5;

            expect(actualNumber).to.be.equal(expectedNumber);
        });

        it('cell in left in the middle- should return correct number', () => {
            let matrix =
                [[true, true, false],
                [false, true, false],
                [true, true, false]];

            let board = new Board(matrix);
            let cell = new Cell(1, 0);
            let actualNumber = board.GetNumberOfLivingNeighbors(cell);
            let expectedNumber = 5;

            expect(actualNumber).to.be.equal(expectedNumber);
        });

        it('cell in right in the middle- should return correct number', () => {
            let matrix =
                [[false, true, true],
                [false, true, false],
                [false, true, true]];

            let board = new Board(matrix);
            let cell = new Cell(1, 2);
            let actualNumber = board.GetNumberOfLivingNeighbors(cell);
            let expectedNumber = 5;

            expect(actualNumber).to.be.equal(expectedNumber);
        });

        it('cell on the bottom in the middle- should return correct number', () => {
            let matrix =
                [[false, false, false],
                [true, true, true],
                [true, false, true]];

            let board = new Board(matrix);
            let cell = new Cell(2, 1);
            let actualNumber = board.GetNumberOfLivingNeighbors(cell);
            let expectedNumber = 5;

            expect(actualNumber).to.be.equal(expectedNumber);
        });
    });

    describe('SetCell', () => {
        it('cell does not exist - should throw exception', () => {
            let matrix =
                [[false, true, false],
                [true, true, false],
                [false, false, false]];

            let board = new Board(matrix);
            let cell = new Cell(-1, -1);
            let cellExistsFunction = function () { board.SetCell(cell, false) };

            expect(cellExistsFunction).to.throw('Cell does not exist!');
        });

        it('set to true - should return true', () => {
            let matrix =
                [[false, true, false],
                [true, true, false],
                [false, false, false]];

            let board = new Board(matrix);
            let cell = new Cell(0, 0);
            let expectedState = true;
            board.SetCell(cell, expectedState);
            let actualState = board.GetCurrentCellState(cell);

            expect(actualState).to.be.equal(expectedState);
        });

        it('set to false - should return false', () => {
            let matrix =
                [[false, true, false],
                [true, true, false],
                [false, false, false]];

            let board = new Board(matrix);
            let cell = new Cell(1, 0);
            let expectedState = false;
            board.SetCell(cell, expectedState);
            let actualState = board.GetCurrentCellState(cell);

            expect(actualState).to.be.equal(expectedState);
        });
    });

    describe('GetCurrentCellState', () => {
        it('cell does not exist - should throw exception', () => {
            let matrix =
                [[false, true, false],
                [true, true, false],
                [false, false, false]];

            let board = new Board(matrix);
            let cell = new Cell(-1, -1);
            let cellExistsFunction = function () { board.GetCurrentCellState(cell) };

            expect(cellExistsFunction).to.throw('Cell does not exist!');
        });

        it('cell is dead - should return false', () => {
            let matrix =
                [[false, true, false],
                [true, true, false],
                [false, false, false]];

            let board = new Board(matrix);
            let cell = new Cell(0, 0);
            let actualState = board.GetCurrentCellState(cell);
            let expectedState = false;

            expect(actualState).to.be.equal(expectedState);
        });

        it('cell is alive - should return true', () => {
            let matrix =
                [[false, true, false],
                [true, true, false],
                [false, false, false]];

            let board = new Board(matrix);
            let cell = new Cell(1, 0);
            let actualState = board.GetCurrentCellState(cell);
            let expectedState = true;

            expect(actualState).to.be.equal(expectedState);
        });
    });
});