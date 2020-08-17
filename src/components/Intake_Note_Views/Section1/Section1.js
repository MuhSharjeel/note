import React from 'react'
import './Section1.css'
import { Input } from 'antd';

const Section1 = (props) => {


    return(
        
    <div className="section1">

    <h2>INTAKE NOTE</h2>
    <b>
    <p>Name:<br/>
    <Input size="large" onChange={props.namechange} value={props.name} className="input" />
    </p>

    <p>Home Address:<br/>
    <Input size="large" className="input" onChange={props.addresschange} value={props.address}/>
    </p>
        
    <p>Date of Intake Session(s):<br/>
    <input type="date" onChange={props.datechange} placeholder="" className="input" value={props.date}/>
    </p>
            
    <p>Telephone Number(s):<br/>
    <Input size="large" className="input" onChange={props.numberchange}/>
    </p>
                
    <p>Date of Birth:<br/>
    <input type="date" onChange={props.birthdatechange} placeholder="" className="input" />  
    </p>
 
    <p>OK to leave message?<br/>
    <Input size="large" onChange={props.leavemessagechange} className="input"/>
    </p>
 
    <p>Marital Status:<br/>
    <Input size="large"  onChange={props.statuschange} className="input"/> 
    </p>
 
    <p>Emergency Contact and Number:<br/>
    <Input size="large" onChange={props.emergencychange} className="input"/>
    </p>
 
    <p>Living Arrangement:<br/>
    <Input size="large" onChange={props.livingchange} className="input"/>
    </p>
 
    <p>Referral Source:<br/>
    <Input size="large" onChange={props.referralchange} className="input"/>
    </p>
 
    <p>Occupation:<br/>
    <Input size="large" className="input" onChange={props.occupationchange}/>
    </p>

    <p style={{float:"right"}}><b>[Continued next section:]</b></p>
    </b>
    </div>
    );
}


export default Section1;