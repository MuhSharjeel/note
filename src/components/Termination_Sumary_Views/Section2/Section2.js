import React from 'react'
import './Section2.css'
import { Input } from 'antd';

const { TextArea } = Input;

const Section2 = (props) => {


    return(
        
    <div className="section2">
    
    <h2><b>TERMINATION SUMMARY (continued)</b></h2>
    <b>
    <p>Summary of the Presenting Difficulties:<br/>
    <TextArea rows={3} onChange={props.difficultychange} className="input"/>
    </p>
    <p>Other Areas Addressed During Treatment:<br/>
    <TextArea rows={3} onChange={props.historychange} className="input"/>
    </p>
    <p>Overview of the Treatment Process:<br/>
    <TextArea rows={3} onChange={props.backgroundchange} className="input"/>
    </p>
    <p>Nature of the Termination:<br/>
    <TextArea rows={3} onChange={props.medicalchange} className="input"/>
    </p>
    <p style={{float:"right"}}><b>[Continued next section:]</b></p>
    </b>
    </div>
    );
}


export default Section2;