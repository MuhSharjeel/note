import React from 'react'
import './Section2.css'

const Section2 = (props) => {


    return(
        
    <div className="section2">
    
    <h2>INTAKE NOTE (continued)</h2>
    <b>
    <p>Presenting Difficulties:</p>
    <input type="text" onChange={props.difficultychange} placeholder="" className="" />
    
    <p>History of the Presenting Difficulties:</p>
    <input type="text" onChange={props.historychange} placeholder="" className="" />
        
    <p>Significant Life History and Background Information:</p>
    <input type="text" onChange={props.backgroundchange} placeholder="" className=""/>

    <p>Significant Medical History:</p>
    <input type="text" onChange={props.medicalchange} placeholder="" className=""/>

    <p style={{float:"right"}}><b>[Continued next section:]</b></p>
    </b>
    </div>
    );
}


export default Section2;