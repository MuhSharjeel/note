import React from 'react'
import './Section2.css'

const Section2 = (props) => {


    return(
        
    <div>
    
    <h2>INTAKE NOTE (continued)</h2>
 
    <p>Presenting Difficulties:</p><br/>
    <input type="text" onChange={props.difficultychange} placeholder="Name:" className="" />
    
    <p>History of the Presenting Difficulties:</p><br/>
    <input type="text" onChange={props.historychange} placeholder="Name:" className="" />
        
    <p>Significant Life History and Background Information:</p><br/>
    <input type="text" onChange={props.backgroundchange} placeholder="Name:" className=""/>

    <p>Significant Medical History:</p><br/>
    <input type="text" onChange={props.medicalchange} placeholder="Name:" className=""/>

    <p>[Continued next section:]</p>

    </div>
    );
}


export default Section2;