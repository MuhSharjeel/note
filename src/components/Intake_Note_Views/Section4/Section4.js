import React from 'react'
import './Section4.css'

const Section4 = (props) => {


    return(
        
    <div className="section4">

    <h2>INTAKE NOTE (continued)</h2>
    <b>
    <p>Description of Treatment Contract and Informed Consent / Additional Comments:<br/><br/>
    <input type="text" onChange={props.descriptionchange} placeholder="Description..." className="description"/><br/></p><br/>
    </b>
    </div>
    );
}


export default Section4;