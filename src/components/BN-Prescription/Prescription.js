import React from 'react'
import './Prescription.css'
import { FaFileSignature, FaRegCopy,FaFileExport } from "react-icons/fa";
import { AiOutlineClear } from "react-icons/ai";
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
// Default export is a4 paper, portrait, using millimeters for units


const Prescription = (props) => {

    const doc = new jsPDF();
    doc.text("Hello world!", 10, 10);
    
    return(
    <div className="pres">
    
    <button className="export" onClick={() => doc.save("Intake-Note.pdf") }><b><FaFileExport/> Export</b></button>
    <button className="copy"><b><FaRegCopy/> Copy</b></button>
    
    <button className="save"><b><FaFileSignature/> Final Edit</b></button>
    <button className="clear" onClick={() =>alert("Are you sure to clear content")}><b><AiOutlineClear/> Clear</b></button>

    <center><h1> Blank Note</h1></center>
    
    <p><b>Name: </b>{props.name}</p>
    <p>         {props.address !=="" ? <span> <b>Home Address:</b> {props.address}</span>:""}</p>
    <p>         {props.date !=="" ? <span><b>Date of Session: </b> {props.date}</span>:""}</p>
    <p>         {props.number !=="" ? <span><b>Session Fee: </b> {props.number}</span>:""}</p>
    <p>         {props.birthdate !=="" ? <span><b>Session Duration: </b> {props.birthdate}</span>:""}</p>
    <p>         {props.leavemessage !=="" ? <span><b>Introductory comments, if any: </b> {props.leavemessage}</span>:""}</p>
    <p>         {props.difficulty !=="" ? <span><b>Overall functioning: </b> {props.difficulty}</span>:""}</p>
    <p>         {props.history !=="" ? <span><b>Affective and emotion state: </b> {props.history}</span>:""}</p>
    <p>         {props.background !=="" ? <span><b>Mental state: </b> {props.background}</span>:""}</p>
    <p>         {props.medical !=="" ? <span><b>Main themes of the session: </b> {props.medical}</span>:""}</p>
    <p>         {props.observation !=="" ? <span><b>Main Therapeutic interventions: </b> {props.observation}</span>:""}</p>
    <p>         {props.impression !=="" ? <span><b>Therapeutic Developments: </b> {props.impression}</span>:""}</p>
    <p>         {props.recommendation !=="" ? <span><b>Treatment Plan: </b> {props.recommendation}</span>:""}</p>
    <p>         {props.formulation !=="" ? <span><b>Outlook and Ongoing Issues: </b> {props.formulation}</span>:""}</p>
    <p>         {props.description !=="" ? <span><b>Additional Comments: </b> {props.description}</span>:""}</p>
                
    </div>
    );
}


export default Prescription;