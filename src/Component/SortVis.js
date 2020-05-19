import React from 'react'
import './SortVis.css'
import ToolBar from './ToolBar';
export default class SortVis extends React.Component {
    constructor() {
        super();
        this.state = {
            arr: []
            , isRunning: false
        };
    }
    updateRunning = async (keepArray, run) => {
        this.setState({
            arr: keepArray,
            isRunning: run
        })

    };
    updateSize = async (size) => {
        if (!this.state.isRunning) {
            this.setState({
                arr: createArray(size)
            })
        }

    };
    componentDidMount() {
        this.reset();
    }
    reset() {
        this.setState({
            arr: createArray(100)
        });
    }
    resetArray() {
        if (!this.state.isRunning) {
            this.setState({
                arr: createArray(this.state.arr.length)
            });

            const arrbars = document.getElementsByClassName('bar');
            for (let i = 0; i < arrbars.length; i++) {
                arrbars[i].style.backgroundColor = 'rgb(163, 241, 225)';
            }
        }
    }
    render() {

        const arr = this.state.arr;
        const ret = [];
        const wid = (window.screen.width);
        for (let i = 0; i < arr.length; i++) {
            ret.push(
                <div className="bar" key={i} style={{ height: `${arr[i]}px`, width: `${wid / arr.length}px` }}>
                </div>
            )

        }

        return (
            <div className="container" >
                <div style={{ height: `720px` }}></div>
                {ret}
                <button onClick={() => this.resetArray()}>Generate New Array</button>
                <ToolBar array={this.state.arr} UpIsRunning={this.updateRunning} isRunning={this.state.isRunning} upSize={this.updateSize} />
            </div>
        )
    }
}

function createArray(size) {
    const arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(randomInt(5, 300));
    }
    return arr;
}
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
