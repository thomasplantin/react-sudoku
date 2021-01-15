import React, { Component } from 'react';
import Row from './Row';
import * as Solver from './logic/Solver'

let size = 9;
var rows = [];
var grid = [];
for(var x = 0; x < size; x++) {
    var theRow = [];
    for(var y = 0; y < size; y++) {
        theRow.push(0);
    }
    grid.push(theRow);
}

Solver.fillGrid(grid);
Solver.stripValues(grid);

for(var i = 0; i < size; i++) {
    var cells = [];
    for(var j = 0; j < size; j++) {
        var mutable = true;
        var bold;
        var value = grid[i][j] === 0 ? ' ' : grid[i][j];
        if((i === 2 || i === 5) && (j === 2 || j === 5)) {
            bold = 'Table-cell-bold-right Table-cell-bold-bottom';
        } else if (i === 2 || i === 5) {
            bold = 'Table-cell-bold-bottom';
        } else if (j === 2 || j === 5) {
            bold = 'Table-cell-bold-right';
        } else {
            bold = '';
        }
        cells.push({
            coordinate: i+','+j,
            value: value,
            mutable: mutable,
            bold: bold
        });
    }
    rows.push(<Row key={i} cells={cells} />);
}

class Table extends Component {
    render() {
        return (
            <table>
                <tbody id="table-body" className="Table-body">
                    {rows}
                </tbody>
            </table>
        );
    }
}

export default Table;
