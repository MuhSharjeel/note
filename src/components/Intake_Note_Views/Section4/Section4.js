import React from 'react'
import './Section4.css'

const Section4 = (props) => {


    return(
        
    <div>

    <h2>INTAKE NOTE (continued)</h2>
 
    <p>Description of Treatment Contract and Informed Consent / Additional Comments:</p><br/>
    <input type="text" onChange={props.namechange} placeholder="Name:" className=""/><br/>

    </div>
    );
}


export default Section4;