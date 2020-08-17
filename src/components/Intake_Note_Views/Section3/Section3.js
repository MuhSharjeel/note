import React from 'react'
import './Section3.css'
import { Input } from 'antd';

const { TextArea } = Input;

const Section3 = (props) => {

    return(
        
    <div className="section3">

    <h2>INTAKE NOTE (continued)</h2>
    <b>
    <p>Clinical Observations and Impressions:<br/>
    <TextArea rows={3} onChange={props.observationchange} className="input"/>
    </p>
    
    <p>Diagnostic Impressions:<br/>
    <TextArea rows={3} onChange={props.impressionchange} className="input"/>
    </p>

    <p>Preliminary Clinical Formulation::<br/>
    <TextArea rows={3} onChange={props.recommendationchange} className="input"/>
    </p>        
    
    <p>Recommendations and Preliminary Treatment Plan:<br/>
    <TextArea rows={3} onChange={props.formulationchange} className="input"/>
    </p>
    
    <p style={{float:"right"}}><b>[Continued next section:]</b></p>
    </b>
    </div>
    );
}


export default Section3;