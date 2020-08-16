import React from 'react'
import './UI_Option.css'
import {Link} from 'react-router-dom'
const UI_Option = (props) => {


    return(

    <div show={props.blank} className="container">
    <br/><br/>
    <div className="center">
        <button className="mbtn" onClick={props.note}>New Note</button><br/><br/>
        <Link to="/dashboard"><button className="mbtn">Dashboard</button></Link><br/>
                 
    </div>
    </div>
    );
}


export default UI_Option;