import React, { Component } from 'react'
import './Poster.css'
import { Style } from 'react-style-tag'

class Poster extends Component {

    render() {
        return(
            <main>
            <div className="header">
                <h1>kraftwerk</h1>
            </div> 
            <div id="line"></div>
            <div className="row">
                <div className="artists">
                <ul>
                    <li>
                        Ralf Hütter
                    </li>
                    <li>
                        Henning Schmitz
                    </li>
                    <li>
                        Fritz Hilpert
                    </li>
                    <li>
                        Falk Grieffenhagen
                    </li>
                </ul>
        </div>
                <div className="location">
                <ul>
                    <li>
                        Zürich
                    </li>
                    <li>
                        Stadium Letzigrund
                    </li>
                    <li>
                        21. August '87
                    </li>
                </ul>
        </div>
                <div className="einlass">
                    <ul>
                        <li>
                            Einlass: 20 Uhr
                        </li>
                        <li>
                            Beginn: 22 Uhr
                        </li>
                    </ul>
                </div>
            </div>
            <div className="graphic">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="karten">
                    <p>
                        Eintrittskarten im Vorverkauf an  <br /> allen
                        gängingen Verkaufsstellen erhältlich.
                    </p>
                </div>

                <Style>
                    {`{
                        span {
                            display: block;
                            width: 8.2%;
                            height: 20px;
                            margin-right: 2%;
                            background: white;
                            animation: audio-wave ${this.props.speed / 30}s infinite ease-in-out;
                        }

                        @keyframes audio-wave {
                            0% {height:20px;transform:translateY(0px);}
                            60% {height:${this.props.amplitude * 4}px;transform:translateY(-${this.props.axis * 2}px);}
                        }
                    }`}
                </Style>
            </main>
    
        )
    }
}

export default Poster;