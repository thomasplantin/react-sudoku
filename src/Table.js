import React, { Component } from 'react';
import Row from './Row';

let size = 9;
var rows = [];

for(var i = 0; i < size; i++) {
    var cells = [];
    for(var j = 0; j < size; j++) {
        var mutable = Math.random() > 0.5;
        var bold;
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
            value: 'X',
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
