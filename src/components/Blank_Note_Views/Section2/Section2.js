import React from 'react'
import './Section2.css'
import { Input } from 'antd';

const { TextArea } = Input;

const Section2 = (props) => {


    return(
        
    <div className="section2">
    
    <h2><b>TERMINATION SUMMARY (continued)</b></h2>
    <b>
    <p>Introductory comments, if any: <br/>
    <TextArea rows={3} onChange={props.leavemessagechange} className="input"/>
    </p>
    <p>Overall functioning: <br/>
    <TextArea rows={3} onChange={props.difficultychange} className="input"/>
    </p>
    <p>Affective and emotion state:    <br/>
    <TextArea rows={3} onChange={props.historychange} className="input"/>
    </p>
    <p>Mental state:    <br/>
    <TextArea rows={3} onChange={props.backgroundchange} className="input"/>
    </p>
    <p style={{float:"right"}}><b>[Continued next section:]</b></p>
    </b>
    </div>
    );
}


export default Section2;