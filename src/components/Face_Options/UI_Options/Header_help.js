import React from 'react'
import './UI_Options.css'
import {Link} from 'react-router-dom'
import {AiFillCloseCircle} from 'react-icons/ai'

const UI_Options = (props) => {

    return(

    <div
        className="Modal"
        style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
 
        <p className="right" onClick={props.remove}><AiFillCloseCircle /></p>
        <h2 style={{color: '#3498db'}}>Help with Note Designer </h2>
        <hr/>
        {/*<p>Choose Note Type: </p>
        */}
            <p>
            Welcome to Note Designer:<br/>
            Here will be the Data Regarding Help. </p>
        <div>
        <button className="cansel" onClick = {props.remove}>Cansel</button>
        
        </div>
    </div>
    );
}


export default UI_Options;