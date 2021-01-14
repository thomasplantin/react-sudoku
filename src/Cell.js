import React, { Component } from 'react'


function handleClick(e) {
    console.log(e);
}

class Cell extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        alert(this.props.cell.coordinate);
    }

    render() {
        if(this.props.cell.mutable) {
            return (
                <td className={`Table-cell ${this.props.cell.bold}`}>
                    <input className="Cell-input" type="button" value={this.props.cell.coordinate} onClick={this.handleClick} />
                </td>
            );
        } else {
            return (
                <td className={`Table-cell ${this.props.cell.bold}`}>
                    <input className="Cell-input" type="button" value={this.props.cell.value} disabled />
                </td>
            );
        }
    }
}

export default Cell;
