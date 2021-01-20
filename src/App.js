import React, { Component } from 'react'
import Sudoku from './Sudoku';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numsEnabled: false
    }
    this.activateNumBar = this.activateNumBar.bind(this);
  }

  activateNumBar() {
    this.setState({
      numsEnabled: true
    });
  }

  render() {
    return (
      <Sudoku state={this.state} activateNumBar={this.activateNumBar} />
    );
  }
}

export default App;
