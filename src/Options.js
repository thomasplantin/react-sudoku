import React, { Component } from 'react'

class Options extends Component {

    constructor(props) {
        super(props);
        this.numClick = this.numClick.bind(this);
    }

    numClick(num) {
        this.props.state.selectedNum = num;
        this.props.state.selectedNumTS = Date.now();
        this.props.numClick();
    }

    render() {
        if(this.props.enabled) {
            return (
                <>
                    <div className="Options">
                        <button className="Num-btn btn btn-light" type="button" onClick={() => this.numClick(1)}>1</button>
                        <button className="Num-btn btn btn-light" type="button" onClick={() => this.numClick(2)}>2</button>
                        <button className="Num-btn btn btn-light" type="button" onClick={() => this.numClick(3)}>3</button>
                        <button className="Num-btn btn btn-light" type="button" onClick={() => this.numClick(4)}>4</button>
                        <button className="Num-btn btn btn-light" type="button" onClick={() => this.numClick(5)}>5</button>
                        <button className="Num-btn btn btn-light" type="button" onClick={() => this.numClick(6)}>6</button>
                        <button className="Num-btn btn btn-light" type="button" onClick={() => this.numClick(7)}>7</button>
                        <button className="Num-btn btn btn-light" type="button" onClick={() => this.numClick(8)}>8</button>
                        <button className="Num-btn btn btn-light" type="button" onClick={() => this.numClick(9)}>9</button>
                    </div>
                    <div className="Options">
                        <button className="Num-btn btn btn-light" type="button" onClick={() => this.numClick(' ')}><i className="fas fa-eraser"></i></button>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className="Options">
                        <button className="Num-btn btn btn-light" type="button" disabled>1</button>
                        <button className="Num-btn btn btn-light" type="button" disabled>2</button>
                        <button className="Num-btn btn btn-light" type="button" disabled>3</button>
                        <button className="Num-btn btn btn-light" type="button" disabled>4</button>
                        <button className="Num-btn btn btn-light" type="button" disabled>5</button>
                        <button className="Num-btn btn btn-light" type="button" disabled>6</button>
                        <button className="Num-btn btn btn-light" type="button" disabled>7</button>
                        <button className="Num-btn btn btn-light" type="button" disabled>8</button>
                        <button className="Num-btn btn btn-light" type="button" disabled>9</button>
                    </div>
                    <div className="Options">
                        <button className="Num-btn btn btn-light" type="button" disabled><i className="fas fa-eraser"></i></button>
                    </div>
                </>
            );
        }
    }
}

export default Options;