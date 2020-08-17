import React from 'react'
import './Section3.css'
import { Input } from 'antd';

const { TextArea } = Input;

const Section3 = (props) => {

    return(
        
    <div className="section3">

    <h2><b>TERMINATION SUMMARY (continued)</b></h2>
    <b>
    <p>Gains and Progress Made:<br/>
    <TextArea rows={3} onChange={props.observationchange} className="input"/>
    </p>
    
    <p>Limitations of the Treatment:<br/>
    <TextArea rows={3} onChange={props.impressionchange} className="input"/>
    </p>

    <p>Remaining Difficulties and/or Concerns:<br/>
    <TextArea rows={3} onChange={props.recommendationchange} className="input"/>
    </p>        
    
    <p>Recommendations:<br/>
    <TextArea rows={3} onChange={props.formulationchange} className="input"/>
    </p>
    
    <p style={{float:"right"}}><b>[Continued next section:]</b></p>
    </b>
    </div>
    );
}


export default Section3;