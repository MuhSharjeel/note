import React from 'react'
import './Section3.css'

const Section3 = (props) => {

    return(
        
    <div className="section3">

    <h2>INTAKE NOTE (continued)</h2>
    <b>
    <p>Clinical Observations and Impressions:</p>
    <input type="text" onChange={props.observationchange}/>
    
    <p>Diagnostic Impressions:</p>
    <input type="text" onChange={props.impressionchange}/>
        
    <p>Preliminary Clinical Formulation::</p>
    <input type="text" onChange={props.recommendationchange}/>
                
    <p>Recommendations and Preliminary Treatment Plan:</p>
    <input type="text" onChange={props.formulationchange}/>

    <p style={{float:"right"}}><b>[Continued next section:]</b></p>
    </b>
    </div>
    );
}


export default Section3;