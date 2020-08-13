import React from 'react'
import './UI_Option.css'

const UI_Option = (props) => {


    return(

    <div show={props.blank}>
    <br/><br/>
    <button className="new" onClick={props.note}>New Note</button><br/><br/>
    <button className="dashboard">Dashboard</button>
    </div>
    );
}


export default UI_Option;