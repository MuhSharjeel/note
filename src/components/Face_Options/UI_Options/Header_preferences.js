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
        <h2 style={{color: '#3498db'}}>Preferences and Advanced Options</h2>
        <hr/><br/>
        {/*<p>Choose Note Type: </p>
        */}
        <p>
        Here will be the Data Regarding Preferences. </p>
            
        <div>
         <button className="cansel" onClick = {props.remove}>Cansel</button> 
        </div>
    </div>
    );
}


export default UI_Options;