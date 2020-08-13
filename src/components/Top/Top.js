import React from 'react'
import './Top.css'
import {Link} from 'react-router-dom'

const Top = (props) => {

    return(
    <div className="header">
    <input type="text" onChange={props.namechange} placeholder="Name:" className=""/>
    <input type="date" onChange={props.datechange} className=""/>
    <input type="time" onChange={props.datechange} className=""/>
    <input type="time" onChange={props.datechange} className=""/>
    <input type="text" onChange={props.typechange} placeholder="Fee:" className=""/>
    <input type="text" onChange={props.addresschange} placeholder="Initial Comments:" className=""/>
    <input type="text" onChange={props.typechange} placeholder="Closing Comments:" className=""/>
    
    
    </div>
    );
}


export default Top;