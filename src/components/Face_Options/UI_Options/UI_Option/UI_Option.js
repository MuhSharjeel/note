import React from 'react'
import './UI_Option.css'

const UI_Option = (props) => {


    return(

    <div show={props.blank} className="container">
    <br/><br/>
    <div className="center">
        <button className="new" onClick={props.note}>New Note</button><br/><br/>
        <button className="dashboard">Dashboard</button>
    </div>
    </div>
    );
}


export default UI_Option;