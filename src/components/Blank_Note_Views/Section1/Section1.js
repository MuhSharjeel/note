import React from 'react'
import './Section1.css'
import { Input } from 'antd';

const Section1 = (props) => {


    return(
        
    <div className="section1">

    <h2><b>BLANK NOTE</b></h2>
    <b>
    <p>Name:<br/>
    <Input size="large" onChange={props.namechange} value={props.name} className="input" />
    </p>
      
    <p>Date of Session:<br/>
    <input type="date" onChange={props.datechange} placeholder="" className="input" value={props.date}/>
    </p>

    <p>Session Duration:<br/>
    <input type="text" onChange={props.birthdatechange} placeholder="" className="input" />
    </p>
    
    <p>Session Fee:<br/>
    <input type="text" onChange={props.numberchange} placeholder="" className="input" />
    </p>

    <p style={{float:"right"}}><b>[Continued next section:]</b></p>
    </b>
    </div>
    );
}


export default Section1;