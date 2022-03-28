import React from 'react'
import './ToolBar.css'
import * as Algorithms from './Algorithms.js'
import './SortVis'
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
//import SortVis from './SortVis'
export default class ToolBar extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            speed: 50
        }
    }
    SelectionSort() {
        if (!this.props.isRunning) {
            resetColor();
            var keepArray = this.props.array.slice();
            this.props.UpIsRunning(keepArray, true);
            var animate = [];
            //const javaSorted = this.props.array.slice().sort((a, b) => (a - b));
            const sorted = Algorithms.selectionSort(this.props.array, animate);
            const anim = async () => {
                for (let i = 0; i < animate.length; i++) {
                    const arrbars = document.getElementsByClassName('bar');
                    if (animate[i][2] === 0) {
                        await sleep(getSpeed(this.state.speed));
                        arrbars[animate[i][0]].style.backgroundColor = 'rgb(245,117,88)';
                        arrbars[animate[i][1]].style.backgroundColor = 'rgb(245,117,88)';
                        await sleep(getSpeed(this.state.speed));
                        arrbars[animate[i][0]].style.backgroundColor = 'rgb(163, 241, 225)';
                        arrbars[animate[i][1]].style.backgroundColor = 'rgb(163, 241, 225)';
                    }
                    else {
                        let temp = arrbars[animate[i][1]].style.height;
                        arrbars[animate[i][1]].style.height = arrbars[animate[i][0]].style.height;
                        arrbars[animate[i][0]].style.height = temp;

                        arrbars[animate[i][1]].style.backgroundColor = 'pink';
                    }
                }
                this.props.UpIsRunning(sorted, false);
            }
            anim();
        }
    }
    HeapSort() {
        if (!this.props.isRunning) {
            resetColor();
            var keepArray = this.props.array.slice();
            this.props.UpIsRunning(keepArray, true);
            var animate = [];
            //const javaSorted = this.props.array.slice().sort((a, b) => (a - b));
            const sorted = Algorithms.heapSort(this.props.array, animate);


            const anim = async () => {
                const arrbars = document.getElementsByClassName('bar');
                for (let i = 0; i < animate.length; i++) {

                    if (animate[i][2] === 0) {
                        await sleep(getSpeed(this.state.speed));
                        arrbars[animate[i][0]].style.backgroundColor = 'rgb(245,117,88)';
                        arrbars[animate[i][1]].style.backgroundColor = 'rgb(245,117,88)';
                        await sleep(getSpeed(this.state.speed));
                        arrbars[animate[i][0]].style.backgroundColor = 'rgb(163, 241, 225)';
                        arrbars[animate[i][1]].style.backgroundColor = 'rgb(163, 241, 225)';
                    }
                    else if (animate[i][2] === 1) {
                        let temp = arrbars[animate[i][1]].style.height;
                        arrbars[animate[i][1]].style.height = arrbars[animate[i][0]].style.height;
                        arrbars[animate[i][0]].style.height = temp;

                    }
                    else {
                        let temp = arrbars[animate[i][1]].style.height;
                        arrbars[animate[i][1]].style.height = arrbars[animate[i][0]].style.height;
                        arrbars[animate[i][0]].style.height = temp;

                        arrbars[animate[i][1]].style.backgroundColor = 'pink';

                    }
                }

                this.props.UpIsRunning(sorted, false);
            }
            anim();

        }
    }
    MergeSort() {
        if (!this.props.isRunning) {
            resetColor();
            var keepArray = this.props.array.slice();
            this.props.UpIsRunning(keepArray, true);
            var animate = [];
            //const javaSorted = this.props.array.slice().sort((a, b) => (a - b));
            const sorted = Algorithms.mergeSort(this.props.array, 0, this.props.array.length - 1, animate);
            const anim = async () => {
                const arrbars = document.getElementsByClassName('bar');
                for (let i = 0; i < animate.length; i++) {

                    if (animate[i][2] === 0) {
                        await sleep(getSpeed(this.state.speed));
                        arrbars[animate[i][0]].style.backgroundColor = 'rgb(245,117,88)';
                        arrbars[animate[i][1]].style.backgroundColor = 'rgb(245,117,88)';
                        await sleep(getSpeed(this.state.speed));
                        arrbars[animate[i][0]].style.backgroundColor = 'rgb(163, 241, 225)';
                        arrbars[animate[i][1]].style.backgroundColor = 'rgb(163, 241, 225)';
                    }
                    else {
                        arrbars[animate[i][1]].style.height = `${animate[i][0]}px`;
                        arrbars[animate[i][1]].style.backgroundColor = 'rgb(97, 212, 76)';
                        await sleep(getSpeed(this.state.speed));
                        arrbars[animate[i][1]].style.backgroundColor = 'rgb(163, 241, 225)';

                    }
                }
                for (let i = 0; i < arrbars.length; i++) {
                    arrbars[i].style.backgroundColor = 'pink';
                }
                this.props.UpIsRunning(sorted, false);
            }
            anim();


        }

    }
    QuickSort() {
        if (!this.props.isRunning) {
            resetColor();
            var keepArray = this.props.array.slice();
            this.props.UpIsRunning(keepArray, true);
            var animate = [];
            console.log(this.props.array.length);
            //const javaSorted = this.props.array.slice().sort((a, b) => (a - b));
            const sorted = Algorithms.quickSort(this.props.array, 0, this.props.array.length - 1, animate);
            const anim = async () => {
                for (let i = 0; i < animate.length; i++) {
                    const arrbars = document.getElementsByClassName('bar');
                    if (animate[i][2] === 0) {
                        arrbars[animate[i][0]].style.backgroundColor = 'rgb(245,117,88)';
                        arrbars[animate[i][1]].style.backgroundColor = 'rgb(245,117,88)';
                        await sleep(getSpeed(this.state.speed));
                        arrbars[animate[i][0]].style.backgroundColor = 'rgb(163, 241, 225)';
                        arrbars[animate[i][1]].style.backgroundColor = 'rgb(163, 241, 225)';
                    }
                    else if (animate[i][2] === 1) {
                        let temp = arrbars[animate[i][1]].style.height;
                        arrbars[animate[i][1]].style.height = arrbars[animate[i][0]].style.height;
                        arrbars[animate[i][0]].style.height = temp;
                    }
                    else if (animate[i][2] === 2) {
                        arrbars[animate[i][0]].style.backgroundColor = 'yellow';
                    }
                    else {
                        let temp = arrbars[animate[i][1]].style.height;
                        let tempC = arrbars[animate[i][1]].style.backgroundColor;
                        arrbars[animate[i][1]].style.height = arrbars[animate[i][0]].style.height;
                        arrbars[animate[i][1]].style.backgroundColor = arrbars[animate[i][0]].style.backgroundColor;
                        arrbars[animate[i][0]].style.height = temp;
                        arrbars[animate[i][0]].style.backgroundColor = tempC;

                        arrbars[animate[i][1]].style.backgroundColor = 'pink';
                    }
                }
                this.props.UpIsRunning(sorted, false);
            }
            anim();


        }
    }
    handleSizeChange = (e) => { this.props.upSize(e.target.value);  if(!this.props.isRunning){ resetColor()}; };
    handleSpeedChange = (e) => {
        this.setState({ speed: (e.target.value) })

    };
    render() {
        return (
            <div className="toolbar">
                <br></br>
                <br></br>
                <div style={{ position: `fixed`, left: `150px`, top: `30px`, fontFamily: 'Comic Sans MS' }}>Speed</div>
                <div className="speed">
                    <Slider min={1} max={95} value={this.state.speed} valueLabelDisplay="auto" onChange={this.handleSpeedChange}></Slider>
                    {/* <input type="range" min={1} max={95} value={this.state.speed} onChange={this.handleSpeedChange} /> */}
                </div>
                <div style={{ position: `fixed`, left: `350px`, top: `30px`, fontFamily: 'Comic Sans MS' }}>Size</div>
                <div className="size">
                    <Slider min={5} max={300} step={11} value={this.props.array.length} onChange={this.handleSizeChange} valueLabelDisplay="auto"></Slider>
                    {/* <input type="range" min={5} max={300} step={11} value={this.props.array.length} onChange={this.handleSizeChange} /> */}
                </div>
                <div className="buttons">
                    <Button variant="contained" onClick={() => this.SelectionSort()} style={{ margin: `40px`, fontFamily: 'Comic Sans MS' }}>Selection Sort</Button>
                    <Button variant="contained" onClick={() => this.HeapSort()} style={{ margin: `40px`, fontFamily: 'Comic Sans MS' }}>HeapSort</Button>
                    <Button variant="contained" onClick={() => this.MergeSort()} style={{ margin: `40px`, fontFamily: 'Comic Sans MS' }}>MergeSort</Button>
                    <Button variant="contained" onClick={() => this.QuickSort()} style={{ margin: `40px`, fontFamily: 'Comic Sans MS' }}>QuickSort</Button>
                </div>

            </div>

        );
    }
}
/*function arrayEqual(first, second) {
    if (first.length !== second.length) {
        return false;
    }
    else {
        for (let i = 0; i < first.length; i++) {
            if (first[i] != second[i]) {
                return false;
            }
        }
    }
    return true;
}*/
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function resetColor() {
    const arrbars = document.getElementsByClassName('bar');
    for (let i = 0; i < arrbars.length; i++) {
        arrbars[i].style.backgroundColor = 'rgb(163, 241, 225)';
    }
}
function getSpeed(speed) {
    return 500 - (500 * (speed / 100));
}