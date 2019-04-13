import React, { Component } from 'react'
import Poster from './components/Poster'
import Controls from './components/Controls'
import { Row, Col, Container } from 'react-bootstrap'
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
        speed: 40,
        amplitude: 70,
        axis: 35
    }
    
    this.onAxisChange = this.onAxisChange.bind(this);
    this.onSpeedChange = this.onSpeedChange.bind(this);
    this.onAmpChange = this.onAmpChange.bind(this);
  }

  onAxisChange(value) {
    this.setState({axis: value})
  }

  onSpeedChange(value) {
    this.setState({speed: value})
  }

  onAmpChange(value) {
    this.setState({amplitude: value})
  }

  render() {
    return (
        <Container id='main'>
          <Row>
            <Col xl={6} className='left text-right'>
              <h1 id='title' >Create Your Own Kraftwerk Concert Poster</h1>
              <Controls axis={this.state.axis} onAxisChange={this.onAxisChange} amp={this.state.amplitude} onAmpChange={this.onAmpChange} speed={this.state.speed} onSpeedChange={this.onSpeedChange}/>            
            </Col>
            <Col xl={6}>
              <Poster axis={this.state.axis} speed={this.state.speed} amplitude={this.state.amplitude}/>
            </Col>
          </Row>
        </Container>
    );
  }
}

export default App;
