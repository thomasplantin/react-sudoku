import React, { Component } from 'react';
import Cell from './Cell';

class Row extends Component {

    constructor(props) {
        super(props);
        this.muteAll = this.muteAll.bind(this);
        this.aimed = this.aimed.bind(this);
    }

    muteAll(exceptCoordinate) {
        // Forward function to Parent (Table.js)
        this.props.muteAll(exceptCoordinate);
    }

    aimed(coordinate) {
        // Forward function to Parent (Table.js)
        this.props.aimed(coordinate);
    }

    render() {
        return (
            <tr>
                {this.props.cells.map((cell) => {
                    return <Cell key={cell.coordinate} cell={cell} muteAll={this.muteAll} aimed={this.aimed} />
                })}
            </tr>
        );
    }
}

export default Row;
