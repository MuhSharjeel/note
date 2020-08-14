import React from 'react'
import './Prescription.css'

const Prescription = (props) => {

    return(
    <div className="pres">

    <center><h2> Prescription!!</h2></center>
    <br/>
    
    <p><h4>Name: </h4>{props.name}</p>
    <p><h4> Home Address: </h4>{props.address !="" ? props.address:""}</p>
    <p>Session Date:         {props.date !="" ? props.date:""}</p>
    <p>         {props.number !="" ? props.number:""}</p>
    <p>         {props.birthdate !="" ? props.birthdate:""}</p>
    <p>         {props.leavemessage !="" ? props.leavemessage:""}</p>
    <p>         {props.status !="" ? props.status:""}</p>
    <p>         {props.emergency !="" ? props.emergency:""}</p>
    <p>         {props.living !="" ? props.living:""}</p>
    <p>         {props.referral !="" ? props.referral:""}</p>
    <p>         {props.occupation !="" ? props.occupation:""}</p>
    
    </div>
    );
}


export default Prescription;