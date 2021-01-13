import React, { Component } from 'react';
import Row from './Row';

let size = 9;
var rows = [];

for(var i = 0; i < size; i++) {
    var cells = [];
    for(var j = 0; j < size; j++) {
        let mutable = true;
        cells.push({
            coordinate: i+','+j,
            value: 'X',
            mutable: mutable,
            bold: null
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
