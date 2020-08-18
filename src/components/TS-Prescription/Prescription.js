import React from 'react'
import './Prescription.css'
import { FaFileSignature, FaRegCopy,FaFileExport } from "react-icons/fa";
import { AiOutlineClear } from "react-icons/ai";
import { jsPDF } from "jspdf";
import ReactToPrint from 'react-to-print';
// Default export is a4 paper, portrait, using millimeters for units


const Prescription = (props) => {

    
    return(
    <div className="pres">
    
    <button className="export" ><b><FaFileExport/> Export </b></button>
    <button className="copy"><b><FaRegCopy/> Copy</b></button>
    
    <button className="save"><b><FaFileSignature/> Final Edit</b></button>
    <button className="clear" onClick={() => window.location.reload(false)}><b><AiOutlineClear/> Clear</b></button>

    <center><h1> Termination Summary</h1></center>
    
    <p><b>Name: </b>{props.name}</p>
    <p>         {props.address !=="" ? <span> <b>Home Address:</b> {props.address}</span>:""}</p>
    <p>         {props.date !=="" ? <span><b>Date of Termination Summary: </b> {props.date}</span>:""}</p>
    <p>         {props.number !=="" ? <span><b>Date of First Consultation: </b> {props.number}</span>:""}</p>
    <p>         {props.birthdate !=="" ? <span><b>Date of Last Consultation: </b> {props.birthdate}</span>:""}</p>
    <p>         {props.leavemessage !=="" ? <span><b>Duration of the Treatment: </b> {props.leavemessage}</span>:""}</p>
    <p>         {props.difficulty !=="" ? <span><b>Summary of the Presenting Difficulties: </b> {props.difficulty}</span>:""}</p>
    <p>         {props.history !=="" ? <span><b>Other Areas Addressed During Treatment: </b> {props.history}</span>:""}</p>
    <p>         {props.background !=="" ? <span><b>Overview of the Treatment Process: </b> {props.background}</span>:""}</p>
    <p>         {props.medical !=="" ? <span><b>Nature of the Termination: </b> {props.medical}</span>:""}</p>
    <p>         {props.observation !=="" ? <span><b>Gains and Progress Made: </b> {props.observation}</span>:""}</p>
    <p>         {props.impression !=="" ? <span><b>Limitations of the Treatment: </b> {props.impression}</span>:""}</p>
    <p>         {props.formulation !=="" ? <span><b>Remaining Difficulties and/or Concerns: </b> {props.formulation}</span>:""}</p>
    <p>         {props.recommendation !=="" ? <span><b>Recommendations: </b> {props.recommendation}</span>:""}</p>
    <p>         {props.description !=="" ? <span><b>Additional Comments: </b> {props.description}</span>:""}</p>
    
    <br/><br/>
    <span>_________________<br/>
    <p>        Signature   </p></span>
    </div>
    );
}




export default Prescription;