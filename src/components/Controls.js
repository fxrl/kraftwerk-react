import React, { Component } from 'react'
import Slider from '@material-ui/lab/Slider'
import './Controls.css'

class Controls extends Component {
    constructor(props) {
        super(props);
        this.changeSpeed = this.changeSpeed.bind(this);
        this.changeAmp = this.changeAmp.bind(this);
        this.changeAxis = this.changeAxis.bind(this);
    }

    changeSpeed(event, value) {
        this.props.onSpeedChange(value)
    }
    
    changeAmp(event, value) {
        this.props.onAmpChange(value);
    }
    changeAxis(event, value) {
        this.props.onAxisChange(value);
    }

    render() {
        return (
            <div className='controls'>
                <div>
                    <h2>Speed</h2>
                    <Slider value = {this.props.speed} onChange={this.changeSpeed}/>
                </div>
                <div>
                    <h2>Amplitude</h2>
                    <Slider value = {this.props.amp} onChange={this.changeAmp} />
                </div>
                <div>
                    <h2>Axis</h2>
                    <Slider value = {this.props.axis} onChange={this.changeAxis} />
                </div>
            </div>
        )
    }
}

export default Controls