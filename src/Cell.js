import React, { Component } from 'react'

class Cell extends Component {
    render() {
        return (
            <td className="Table-cell">
                <input className="Cell-input" type="submit" value={this.props.cell.coordinate}></input>
            </td>
        );
    }
}

export default Cell;
