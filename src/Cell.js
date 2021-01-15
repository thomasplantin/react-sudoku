import React, { Component } from 'react'

class Cell extends Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        if(this.props.cell.mutable) {
            return (
                <td className={`Table-cell ${this.props.cell.bold}`}>
                    <input className="Cell-input" type="button" value={this.state.isToggleOn ? this.props.cell.value : 'N'} onClick={this.handleClick} />
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
