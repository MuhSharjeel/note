import React from 'react'
import './UI_Options.css'

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
                <input type="radio"/> <span className="dist"/>Intake Note <br/>
                <input type="radio"/> <span className="dist"/>Treatment Note <br/>
                <input type="radio"/> <span className="dist"/>Termination Summary <br/>
                <input type="radio"/> <span className="dist"/>Blank Note <br/>
                <input type="radio"/> <span className="dist"/>SOAP <br/>
            </p>
        <div>
        <button className="cansel" onClick = {props.remove}>Cansel</button>
        <button className="start" onClick = {props.blanknote}>Start Note</button>
        </div>
    </div>
    );
}


export default UI_Options;