import React from 'react'
import './Section3.css'
import { Input } from 'antd';

const { TextArea } = Input;

const Section3 = (props) => {

    return(
        
    <div className="section3">

    <h2><b>BLANK NOTE (continued)</b></h2>
    <b>
    <p>Main themes of the session:    <br/>
    <TextArea rows={3} onChange={props.medicalchange} className="input"/>
    </p>
    
    <p>Main Therapeutic interventions:    <br/>
    <TextArea rows={3} onChange={props.observationchange} className="input"/>
    </p>
    
    <p style={{float:"right"}}><b>[Continued next section:]</b></p>
    </b>
    </div>
    );
}


export default Section3;