import React from 'react'
import './UI_Options.css'
import {Link} from 'react-router-dom'

const UI_Options = (props) => {


    return(
        
    <div
        className="Modal"
        style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
 
        <p className="right" onClick={props.remove}>close</p>
        <br/>
        <h3>Start a new Note</h3>
        <hr/>
        <p>Choose Note Type: </p>
        <br/>

            <p><input type="radio"/> <span className="dist"/>Blank Note <br/>
                <input type="radio"/> <span className="dist"/><Link to="/intake-note">Intake Note</Link><br/>
                <input type="radio"/> <span className="dist"/>Treatment Note <br/>
                <input type="radio"/> <span className="dist"/>Termination Summary <br/>
                <input type="radio"/> <span className="dist"/>Blank Note <br/>
                <input type="radio"/> <span className="dist"/>SOAP <br/>
            </p>
        <div>
        <button className="cansel" onClick = {props.remove}>Cansel</button>
        <Link to="/intake-note">
        <button className="start">Start Note</button>
        </Link>
        </div>
    </div>
    );
}


export default UI_Options;