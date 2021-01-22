import React, { Component } from 'react'

class Cell extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // Pass functions to Parent (Row.js)
        this.props.muteAll(this.props.cell.coordinate);
    }

    render() {
        if(this.props.cell.mutable) {
            return (
                <td className={`Table-cell ${this.props.cell.bold}`}>
                    <input className={`Cell-input ${this.props.cell.state}`} type="button" value={this.props.cell.value} onClick={this.handleClick} />
                </td>
            );
        } else {
            return (
                <td className={`Table-cell ${this.props.cell.bold}`}>
                    <input className={`Cell-input Cell-immutable ${this.props.cell.state}`} type="button" value={this.props.cell.value} disabled />
                </td>
            );
        }
    }
}

export default Cell;
