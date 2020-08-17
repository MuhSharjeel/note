import React from 'react'
import './Prescription.css'
import { FaFileSignature, FaRegCopy,FaFileExport } from "react-icons/fa";
import { AiOutlineClear } from "react-icons/ai";
import { jsPDF } from "jspdf";

// Default export is a4 paper, portrait, using millimeters for units


const Prescription = (props) => {

    const doc = new jsPDF();

    
    
    return(
    <div className="pres">
    
    <button className="export" onClick={() => doc.save("a4.pdf") }><b><FaFileExport/> Export</b></button>
    <button className="copy"><b><FaRegCopy/> Copy</b></button>
    
    <button className="save"><b><FaFileSignature/> Final Edit</b></button>
    <button className="clear" onClick={() => alert("Are you sure to clear content")}><b><AiOutlineClear/> Clear</b></button>

    <center><h2> Intake Note</h2></center>
    
    <p><b>Name: </b>{props.name}</p>
    <p>         {props.address !=="" ? <span> <b>Home Address:</b> {props.address}</span>:""}</p>
    <p>         {props.date !=="" ? <span><b>Session Date: </b> {props.date}</span>:""}</p>
    <p>         {props.number !=="" ? <span><b>Phone Number: </b> {props.number}</span>:""}</p>
    <p>         {props.birthdate !=="" ? <span><b>Date of Birth: </b> {props.birthdate}</span>:""}</p>
    <p>         {props.leavemessage !=="" ? <span><b>Ok to Leave Message? </b> {props.leavemessage}</span>:""}</p>
    <p>         {props.status !=="" ? <span><b>Marital Status: </b> {props.status}</span>:""}</p>
    <p>         {props.emergency !=="" ? <span><b>Emergency Contact and Number: </b> {props.emergency}</span>:""}</p>
    <p>         {props.living !=="" ? <span><b>Living Arrangement: </b> {props.living}</span>:""}</p>
    <p>         {props.referral !=="" ? <span><b>Referral Source: </b> {props.referral}</span>:""}</p>
    <p>         {props.occupation !=="" ? <span><b>Occupation:    </b> {props.occupation}</span>:""}</p>
    <p>         {props.difficulty !=="" ? <span><b>Presenting Difficulties: </b> {props.difficulty}</span>:""}</p>
    <p>         {props.history !=="" ? <span><b>History of the Presenting Difficulties: </b> {props.history}</span>:""}</p>
    <p>         {props.background !=="" ? <span><b>Significant Life History and Background Information: </b> {props.background}</span>:""}</p>
    <p>         {props.medical !=="" ? <span><b>Significant Medical History: </b> {props.medical}</span>:""}</p>
    <p>         {props.observation !=="" ? <span><b>Clinical Observations and Impressions: </b> {props.observation}</span>:""}</p>
    <p>         {props.impression !=="" ? <span><b>Diagnostic Impressions: </b> {props.impression}</span>:""}</p>
    <p>         {props.formulation !=="" ? <span><b>Preliminary Clinical Formulation: </b> {props.formulation}</span>:""}</p>
    <p>         {props.recommendation !=="" ? <span><b>Recommendations and Preliminary Treatment Plan: </b> {props.recommendation}</span>:""}</p>
    <p>         {props.description !=="" ? <span><b>Description of Treatment Contract and Informed Consent / Additional Comments: </b> {props.description}</span>:""}</p>
                
    </div>
    );
}


export default Prescription;