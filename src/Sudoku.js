import React, { Component } from 'react';
import './Sudoku.css';
import Table from './Table';
import Options from './Options';

class Sudoku extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedNum: ' ',
            selectedNumTS: ' '
        };
        this.activateNumBar = this.activateNumBar.bind(this);
        this.numClick = this.numClick.bind(this);
    }

    activateNumBar() {
        this.props.activateNumBar();
    }

    numClick() {
        this.setState((state) => ({
            selectedNum: state.selectedNum,
            selectedNumTS: state.selectedNumTS
        }));
    }

    render() {
        return (
            <div className="Main">
                <header className="App-header">
                    <h1 className="Main-title">React Sudoku</h1>
                    <Table state={this.state} activateNumBar={this.activateNumBar} />
                    <Options state={this.state} numClick={this.numClick} enabled={this.props.state.numsEnabled}/>
                </header>
            </div>
        );
    }
}

export default Sudoku;
