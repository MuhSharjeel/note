import React from 'react'
import './Tabs.css'

const Tabs = (props) => {

    return(
    <div className="header">
    <br/>
    <input type="text" onChange={props.namechange} placeholder="Name:" className=""/><br/>
    <input type="date" onChange={props.datechange} className="date"/><br/>
    <input type="time" onChange={props.datechange} className="time"/><br/>
    <input type="time" onChange={props.datechange} className="time"/><br/>
    <input type="text" onChange={props.typechange} placeholder="Fee:" className=""/><br/>
    <input type="text" onChange={props.addresschange} placeholder="Initial Comments:" className=""/><br/>
    <input type="text" onChange={props.typechange} placeholder="Closing Comments:" className=""/><br/>
    
    
    </div>
    );
}


export default Tabs;