import React from 'react'
import './Section3.css'

const Section3 = (props) => {


    return(
        
    <div>

    <h2>INTAKE NOTE (continued)</h2>
 
    <p>Clinical Observations and Impressions:</p><br/>
    <input type="text" className=""/>
    
    <p>Diagnostic Impressions:</p><br/>
    <input type="text" className=""/>
        
    <p>Preliminary Clinical Formulation::</p><br/>
    <input type="text" className=""/>
                
    <p>Recommendations and Preliminary Treatment Plan:</p><br/>
    <input type="text" className=""/>  

    <p>[Continued next section:]</p>

    </div>
    );
}


export default Section3;