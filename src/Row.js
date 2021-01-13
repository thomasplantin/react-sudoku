import React, { Component } from 'react';
import Cell from './Cell';

class Row extends Component {

    render() {
        return (
            <tr>
                {this.props.cells.map((cell) => {
                    return <Cell key={cell.coordinate} cell={cell}/>
                })}
            </tr>
        );
    }
}

export default Row;
