var counter;

// Function to check if the grid is full
export function checkGrid(grid) {
    for(var row = 0; row < 9; row++) {
        for(var col = 0; col < 9; col++) {
            if(grid[row][col] === 0) {
                return false;
            }
        }
    }
    // The grid is complete
    return true;
}

function getSquare(grid, row1, row2, col1, col2) {
    var square = [];
    for(var i = row1; i < row2; i++) {
        var rowArr = [];
        for(var j = col1; j < col2; j++) {
            rowArr.push(grid[i][j]);
        }
        square.push(rowArr);
    }
    return square;
}

export function solveGrid(grid) {
    for(var i = 0; i < 81; i++) {
        var row = Math.floor(i/9);
        var col = i%9;
        if(grid[row][col] === 0) {
            for(var value = 1; value < 10; value ++) {
                if(!grid[row].includes(value)) {
                    var thisCol = new Array(9);
                    for(var x = 0; x < 9; x++)
                        thisCol.push(grid[x][col]);
                    if(!thisCol.includes(value)) {
                        let square;
                        if(row < 3) {
                            if(col < 3) {
                                square = getSquare(grid, 0, 3, 0, 3);
                            } else if(col < 6) {
                                square = getSquare(grid, 0, 3, 3, 6);
                            } else {
                                square = getSquare(grid, 0, 3, 6, 9);
                            } 
                        } else if(row < 6) {
                            if(col < 3) {
                                square = getSquare(grid, 3, 6, 0, 3);
                            } else if(col < 6) {
                                square = getSquare(grid, 3, 6, 3, 6);
                            } else {
                                square = getSquare(grid, 3, 6, 6, 9);
                            } 
                        } else {
                            if(col < 3) {
                                square = getSquare(grid, 6, 9, 0, 3);
                            } else if(col < 6) {
                                square = getSquare(grid, 6, 9, 3, 6);
                            } else {
                                square = getSquare(grid, 6, 9, 6, 9);
                            } 
                        }
                        if(!(square[0].concat(square[1].concat(square[2]))).includes(value)) {
                            grid[row][col] = value;
                            if(checkGrid(grid)) {
                                counter++;
                                break;
                            } else {
                                if(solveGrid(grid)) {
                                    return true;
                                }
                            }
                        }
                    }
                }
            }
            break;
        }
    }
    grid[row][col] = 0;
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

var numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export function fillGrid(grid) {
    for(var i = 0; i < 81; i++) {
        var row = Math.floor(i/9);
        var col = i%9;
        if(grid[row][col] === 0) {
            shuffleArray(numberList);
            for(var value of numberList) {
                if(!grid[row].includes(value)) {
                    var thisCol = new Array(9);
                    for(var x = 0; x < 9; x++)
                        thisCol.push(grid[x][col]);
                    if(!thisCol.includes(value)) {
                        let square;
                        if(row < 3) {
                            if(col < 3) {
                                square = getSquare(grid, 0, 3, 0, 3);
                            } else if(col < 6) {
                                square = getSquare(grid, 0, 3, 3, 6);
                            } else {
                                square = getSquare(grid, 0, 3, 6, 9);
                            } 
                        } else if(row < 6) {
                            if(col < 3) {
                                square = getSquare(grid, 3, 6, 0, 3);
                            } else if(col < 6) {
                                square = getSquare(grid, 3, 6, 3, 6);
                            } else {
                                square = getSquare(grid, 3, 6, 6, 9);
                            } 
                        } else {
                            if(col < 3) {
                                square = getSquare(grid, 6, 9, 0, 3);
                            } else if(col < 6) {
                                square = getSquare(grid, 6, 9, 3, 6);
                            } else {
                                square = getSquare(grid, 6, 9, 6, 9);
                            } 
                        }
                        if(!(square[0].concat(square[1].concat(square[2]))).includes(value)) {
                            grid[row][col] = value;
                            if(checkGrid(grid)) {
                                return true;
                            } else {
                                if(fillGrid(grid)) {
                                    return true;
                                }
                            }
                        }
                    }
                }
            }
            break;
        }
    }
    grid[row][col] = 0;
}

export function stripValues(grid) {
    var attempts = 3;
    counter = 1;
    while(attempts > 0) {
        var row = Math.floor(Math.random()*9);
        var col = Math.floor(Math.random()*9);
        while(grid[row][col] === 0) {
            row = Math.floor(Math.random()*9);
            col = Math.floor(Math.random()*9);
        }
        var backup = grid[row][col];
        grid[row][col] = 0;
        
        var copyGrid = [];
        for(var r = 0; r < 9; r++) {
            copyGrid.push([]);
            for(var c = 0; c < 9; c++) {
                copyGrid[r].push(grid[r][c])
            }
        }
        counter = 0;
        solveGrid(copyGrid);
        if(counter !== 1) {
            grid[row][col] = backup;
            attempts--;
        }
    }
}

export function isValidBoard(board) {
    const obj = {
        tabRows: {},
        tabCols: {},
        tabSquares: {}
    };
    for(var row of board) {
        for(var cell of row.cells) {
            if(cell.value !== ' ') {
                let rowNumber = cell.coordinate.charAt(0);
                let colNumber = cell.coordinate.charAt(2);
                // Check that in each row there are no 2 cells with repeating values
                if(!obj.tabRows.hasOwnProperty(rowNumber)) {
                    obj.tabRows[rowNumber] = [];
                    obj.tabRows[rowNumber].push(cell.value);
                } else if(!obj.tabRows[rowNumber].includes(cell.value)){
                    obj.tabRows[rowNumber].push(cell.value);
                } else {
                    return false;
                }
                // Check that in each column there are no 2 cells with repeating values
                if(!obj.tabCols.hasOwnProperty(colNumber)) {
                    obj.tabCols[colNumber] = [];
                    obj.tabCols[colNumber].push(cell.value);
                } else if(!obj.tabCols[colNumber].includes(cell.value)) {
                    obj.tabCols[colNumber].push(cell.value);
                } else {
                    return false;
                }
                // Check that in each 3x3 square there are no 2 cells with repeating values
                let x = Math.floor(parseInt(colNumber)/3);
                let y = Math.floor(parseInt(rowNumber)/3);
                let squareKey = `${x}${y}`;
                if(!obj.tabSquares.hasOwnProperty(squareKey)) {
                    obj.tabSquares[squareKey] = [];
                    obj.tabSquares[squareKey].push(cell.value);
                } else if(!obj.tabSquares[squareKey].includes(cell.value)) {
                    obj.tabSquares[squareKey].push(cell.value);
                } else {
                    return false;
                }
            }
        }
    }
    return true;
}