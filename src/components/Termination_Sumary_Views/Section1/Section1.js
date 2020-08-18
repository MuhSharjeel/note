import React from 'react'
import './Section1.css'
import { Input } from 'antd';
import { AiOutlineClose } from 'react-icons/ai';

const Section1 = (props) => {


    return(
        
    <div className="section1">

    <h2><b>TERMINATION SUMMARY</b></h2>
    <b>
    <p>Name:<br/>
    <Input size="large" onChange={props.namechange} value={props.name} className="input"  />
    </p>
      
    <p>Date of Termination Summary:<br/>
    <input type="date" onChange={props.datechange} placeholder="" className="input" value={props.date}/>
    </p>

    <p>Date of First Consultation:<br/>
    <input type="date" onChange={props.numberchange} placeholder="" className="input" value={props.date}/>
    </p>

    <p>Date of Last Consultation:<br/>
    <input type="date" onChange={props.birthdatechange} placeholder="" className="input" />
    </p>
    
    <p>Duration of the Treatment:<br/>
    <Input size="large" className="input" onChange={props.leavemessagechange}/>
    </p>

    <p style={{float:"right"}}><b>[Continued next section:]</b></p>
    </b>
    </div>
    );
}


export default Section1;