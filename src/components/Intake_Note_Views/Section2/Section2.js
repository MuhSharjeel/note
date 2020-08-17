import React from 'react'
import './Section2.css'
import { Input } from 'antd';

const { TextArea } = Input;

const Section2 = (props) => {


    return(
        
    <div className="section2">
    
    <h2>INTAKE NOTE (continued)</h2>
    <b>
    <p>Presenting Difficulties:<br/>
    <TextArea rows={3} onChange={props.difficultychange} className="input"/>
    </p>
    <p>History of the Presenting Difficulties:<br/>
    <TextArea rows={3} onChange={props.historychange} className="input"/>
    </p>
    <p>Significant Life History and Background Information:<br/>
    <TextArea rows={3} onChange={props.backgroundchange} className="input"/>
    </p>
    <p>Significant Medical History:<br/>
    <TextArea rows={3} onChange={props.medicalchange} className="input"/>
    </p>
    <p style={{float:"right"}}><b>[Continued next section:]</b></p>
    </b>
    </div>
    );
}


export default Section2;