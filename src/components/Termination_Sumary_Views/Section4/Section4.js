import React from 'react'
import './Section4.css'
import { Input } from 'antd';

const { TextArea } = Input;

const Section4 = (props) => {


    return(
        
    <div className="section4">

    <h2><b>TERMINATION SUMMARY (continued)</b></h2>
    <b>
    <p>Additional Comments:<br/>
    <TextArea rows={4} onChange={props.descriptionchange} placeholder="Comments..." className="description"/>
    </p>
    
    </b>
    </div>
    );
}


export default Section4;