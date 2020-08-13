import React from 'react'
import './Prescription.css'

const Prescription = (props) => {

    return(
    <div className="pres">

    Prescription!!
    <br/>
    
    <p>Name: {props.name}</p>
    <p>Initial Comment: {props.init_comment}</p>
    <p>Final Comment: {props.final_comment}</p>
    <p>Date: {props.date}</p>
    
    </div>
    );
}


export default Prescription;