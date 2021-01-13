import React, { Component } from 'react';
import './Sudoku.css';
import Table from './Table';

class Sudoku extends Component {
    render() {
        return (
            <div className="Main">
                <header className="App-header">
                    <h1>React Sudoku</h1>
                    <Table />
                </header>
            </div>
        );
    }
}

export default Sudoku;
