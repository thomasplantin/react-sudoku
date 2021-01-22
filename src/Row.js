import React, { Component } from 'react';
import Cell from './Cell';

class Row extends Component {

    constructor(props) {
        super(props);
        this.muteAll = this.muteAll.bind(this);
    }

    muteAll(exceptCoordinate) {
        // Forward function to Parent (Table.js)
        this.props.muteAll(exceptCoordinate);
    }

    render() {
        return (            
            <tr>
                {this.props.cells.map((cell) => {
                    return <Cell key={cell.coordinate} cell={cell} muteAll={this.muteAll} />
                })}
            </tr>
        );
    }
}

export default Row;
