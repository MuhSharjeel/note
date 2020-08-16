import React from 'react'
import './Section1.css'

const Section1 = (props) => {


    return(
        
    <div className="section1">
    <h2>INTAKE NOTE</h2>
    <b>
    <p>Name:</p>
    <input type="text" onChange={props.namechange} placeholder="Name:" className="" value={props.name} autocomplete="off"/><br/>

    <p>Home Address:</p>
    <input type="text" onChange={props.addresschange} placeholder="address" className="" value={props.address}/><br/>

        
    <p>Date of Intake Session(s):</p>
    <input type="date" onChange={props.datechange} placeholder="" className="" value={props.date}/>
            
    <p>Telephone Number(s):</p>
    <input type="text"  onChange={props.numberchange} placeholder="address" className="" />
                
    <p>Date of Birth:</p>
    <input type="date" onChange={props.birthdatechange} placeholder="address" className="" />  

    <p>OK to leave message?:</p>
    <input type="text" onChange={props.leavemessagechange} placeholder="address" className=""/>  

    <p>Marital Status:</p>
    <input type="text" onChange={props.statuschange} placeholder="address" className="" />  

    <p>Emergency Contact and Number:</p>
    <input type="text" onChange={props.emergencychange} placeholder="address" className="" />

    <p>Living Arrangement:</p>
    <input type="text" onChange={props.livingchange} placeholder="address" className="" />

    <p>Referral Source:</p>
    <input type="text" onChange={props.referralchange} placeholder="address" className=""/>

    <p>Occupation:</p>
    <input type="text" onChange={props.occupationchange} placeholder="address" className="" />

    <p style={{float:"right"}}><b>[Continued next section:]</b></p>
    </b>
    </div>
    );
}


export default Section1;