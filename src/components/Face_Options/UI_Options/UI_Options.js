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
        <h2 style={{color: '#3498db'}}>Start a new Note</h2>
        <hr/><br/>
        {/*<p>Choose Note Type: </p>
        */}
                 <h4>
                 <div className="container">
                 <Link to="/intake-note"><button className="btn btn1" onClick = {props.remove}>Basic Note</button></Link><br/>
                 <Link to="/intake-note"><button className="btn btn1" onClick = {props.remove}>Intake note</button></Link><br/>
                 <Link to="/intake-note"><button className="btn btn1" onClick = {props.remove}>Treatment Note</button></Link><br/>
                 <Link to="/termination-summary"><button className="btn btn1" onClick = {props.remove}>Termination Summary</button></Link><br/>
                 <Link to="/blank-note"><button className="btn btn1" onClick = {props.remove}>Blank Note</button></Link><br/>
                 <Link to="/intake-note"><button className="btn btn1" onClick = {props.remove}>SOAP</button></Link><br/>
                 </div>
                </h4>
            
        <div>
        <button className="cansel" onClick = {props.remove}>Cansel</button>
        {/*<Link to="/intake-note">
        <button className="start">Start Note</button>
        </Link>*/}
        </div>
    </div>
    );
}


export default UI_Options;