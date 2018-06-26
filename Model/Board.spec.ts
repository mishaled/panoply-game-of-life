import 'mocha';
import * as lodash from 'lodash';
import { expect } from 'chai';
import { Board } from './';

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

            let actualNumber = board.GetNumberOfLivingNeighbors(0, 0);
            let expectedNumber = 3;

            expect(actualNumber).to.be.equal(expectedNumber);
        });

        it('cell in top right corner - should return correct number', () => {
            let matrix =
                [[false, true, false],
                [false, true, true],
                [false, false, false]];

            let board = new Board(matrix);

            let actualNumber = board.GetNumberOfLivingNeighbors(0, 2);
            let expectedNumber = 3;

            expect(actualNumber).to.be.equal(expectedNumber);
        });

        it('cell in bottom left corner - should return correct number', () => {
            let matrix =
                [[false, false, false],
                [true, true, false],
                [false, true, false]];

            let board = new Board(matrix);

            let actualNumber = board.GetNumberOfLivingNeighbors(2, 0);
            let expectedNumber = 3;

            expect(actualNumber).to.be.equal(expectedNumber);
        });

        it('cell in bottom right corner - should return correct number', () => {
            let matrix =
                [[false, false, false],
                [false, true, true],
                [false, true, false]];

            let board = new Board(matrix);

            let actualNumber = board.GetNumberOfLivingNeighbors(2, 2);
            let expectedNumber = 3;

            expect(actualNumber).to.be.equal(expectedNumber);
        });

        it('cell in middle - should return correct number', () => {
            let matrix =
                [[true, true, true],
                [true, false, true],
                [true, true, true]];

            let board = new Board(matrix);

            let actualNumber = board.GetNumberOfLivingNeighbors(1, 1);
            let expectedNumber = 8;

            expect(actualNumber).to.be.equal(expectedNumber);
        });

        it('the cell itself should not be included', () => {
            let matrix =
                [[true, true, true],
                [true, true, true],
                [true, true, true]];

            let board = new Board(matrix);

            let actualNumber = board.GetNumberOfLivingNeighbors(1, 1);
            let expectedNumber = 8;

            expect(actualNumber).to.be.equal(expectedNumber);
        });

        it('cell on top in the middle- should return correct number', () => {
            let matrix =
                [[true, false, true],
                [true, true, true],
                [false, false, false]];

            let board = new Board(matrix);

            let actualNumber = board.GetNumberOfLivingNeighbors(0, 1);
            let expectedNumber = 5;

            expect(actualNumber).to.be.equal(expectedNumber);
        });

        it('cell in left in the middle- should return correct number', () => {
            let matrix =
                [[true, true, false],
                [false, true, false],
                [true, true, false]];

            let board = new Board(matrix);

            let actualNumber = board.GetNumberOfLivingNeighbors(1, 0);
            let expectedNumber = 5;

            expect(actualNumber).to.be.equal(expectedNumber);
        });

        it('cell in right in the middle- should return correct number', () => {
            let matrix =
                [[false, true, true],
                [false, true, false],
                [false, true, true]];

            let board = new Board(matrix);

            let actualNumber = board.GetNumberOfLivingNeighbors(1, 2);
            let expectedNumber = 5;

            expect(actualNumber).to.be.equal(expectedNumber);
        });

        it('cell on the bottom in the middle- should return correct number', () => {
            let matrix =
                [[false, false, false],
                [true, true, true],
                [true, false, true]];

            let board = new Board(matrix);

            let actualNumber = board.GetNumberOfLivingNeighbors(2, 1);
            let expectedNumber = 5;

            expect(actualNumber).to.be.equal(expectedNumber);
        });
    });
});