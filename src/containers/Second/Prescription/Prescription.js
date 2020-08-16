import React from 'react'
import './Prescription.css'

const Prescription = (props) => {

    return(
    <div className="pres">
    <br/><br/><br/><br/>
    <button className="export"><b>Export</b></button>
    <button className="copy"><b>Copy</b></button>
    <button className="save"><b>Save</b></button>

    <center><h2> Intake Note</h2></center>
    
    <p><b>Name: </b>{props.name}</p>
    <p><b> Home Address: </b>{props.address !=="" ? props.address:""}</p>
    <p><b>Session Date:     </b>{props.date !=="" ? props.date:""}</p>
    <p><b>Phone Number:     </b>{props.number !=="" ? props.number:""}</p>
    <p>                     {props.birthdate !=="" ? props.birthdate:""}</p>
    <p>                     {props.leavemessage !=="" ? props.leavemessage:""}</p>
    <p>                     {props.status !=="" ? props.status:""}</p>
    <p>                     {props.emergency !=="" ? props.emergency:""}</p>
                <p>         {props.living !=="" ? props.living:""}</p>
                <p>         {props.referral !=="" ? props.referral:""}</p>
                <p>         {props.occupation !=="" ? props.occupation:""}</p>
                <p>         {props.difficulty !=="" ? props.difficulty:""}</p>
                <p>         {props.history !=="" ? props.history:""}</p>
                <p>         {props.background !=="" ? props.background:""}</p>
                <p>         {props.medical !=="" ? props.medical:""}</p>
                <p>         {props.observation !=="" ? props.observation:""}</p>
                <p>         {props.impression !=="" ? props.impression:""}</p>
                <p>         {props.recommendation !=="" ? props.recommendation:""}</p>
                <p>         {props.formulation !=="" ? props.formulation:""}</p>
                <p>         {props.description !=="" ? props.description:""}</p>
                
    </div>
    );
}


export default Prescription;