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

var firstTouch = true;

Solver.fillGrid(grid);
Solver.stripValues(grid);

for(var i = 0; i < size; i++) {
    var cells = [];
    for(var j = 0; j < size; j++) {
        var mutable = grid[i][j] === 0;
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
            bold: bold,
            isClicked: false
        });
    }
    rows.push({
        key: i,
        cells: cells
    })
}

class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rows: rows,
            selectedCoordinate: ' ',
            selectedCoordinateTS: ' '
        }
        this.muteAll = this.muteAll.bind(this);
    }

    muteAll(exceptCoordinate) {
        // this.props.activateCell(exceptCoordinate);
        for(var row of this.state.rows) {
            for(var cell of row.cells) {
                if(cell.coordinate === exceptCoordinate) {
                    cell.isClicked = true;
                } else {
                    cell.isClicked = false;
                }
            }
        }
        // Avoid reactivating the num bar on every render
        if(firstTouch) {
            this.props.activateNumBar(); // Activate Numbers bar
            firstTouch = false;
        }
        // Render the page by changing the state of rows
        this.setState(state => ({
            rows: state.rows,
            selectedCoordinate: exceptCoordinate,
            selectedCoordinateTS: Date.now()
        }));
    }

    updateCell(coordinate, value) {
        for(var row of this.state.rows) {
            for(var cell of row.cells) {
                if(cell.coordinate === coordinate) {
                    cell.value = value;
                }
            }
        }
    }

    render() {
        if(this.props.state.selectedNumTS > this.state.selectedCoordinateTS) {
            this.updateCell(this.state.selectedCoordinate, this.props.state.selectedNum);
        }
        return (
            <table>
                <tbody id="table-body" className="Table-body">
                    {this.state.rows.map((row) => {
                        return <Row key={row.key} cells={row.cells} muteAll={this.muteAll} />
                    })}
                </tbody>
            </table>
        );
    }
}

export default Table;
