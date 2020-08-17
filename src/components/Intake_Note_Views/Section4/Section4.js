import React from 'react'
import './Section4.css'
import { Input } from 'antd';

const { TextArea } = Input;

const Section4 = (props) => {


    return(
        
    <div className="section4">

    <h2>INTAKE NOTE (continued)</h2>
    <b>
    <p>Description of Treatment Contract and Informed Consent / Additional Comments:<br/><br/>
    <TextArea rows={4} onChange={props.descriptionchange} placeholder="Description..." className="description"/>
    </p>
    </b>
    </div>
    );
}


export default Section4;