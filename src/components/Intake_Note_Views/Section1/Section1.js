import React from 'react'
import './Section1.css'

const Section1 = (props) => {


    return(
        
    <div>
    <h2>INTAKE NOTE</h2>
    <p>Name:</p><br/>
    <input type="text" onChange={props.namechange} placeholder="Name:" className="" value={props.name}/><br/>

    <p>Home Address:</p><br/>
    <input type="text" onChange={props.addresschange} placeholder="address" className="" value={props.address}/><br/>

        
    <p>Date of Intake Session(s):</p><br/>
    <input type="date" onChange={props.datechange} placeholder="" className="" value={props.date}/>
            
    <p>Telephone Number(s):</p><br/>
    <input type="text"  onChange={props.numberchange} placeholder="address" className="" />
                
    <p>Date of Birth:</p><br/>
    <input type="date" onChange={props.birthdatechange} placeholder="address" className="" />  

    <p>OK to leave message?:</p><br/>
    <input type="text" onChange={props.leavemessagechange} placeholder="address" className=""/>  

    <p>Marital Status:</p><br/>
    <input type="text" onChange={props.statuschange} placeholder="address" className="" />  

    <p>Emergency Contact and Number:</p><br/>
    <input type="text" onChange={props.emergencychange} placeholder="address" className="" />

    <p>Living Arrangement:</p><br/>
    <input type="text" onChange={props.livingchange} placeholder="address" className="" />

    <p>Referral Source:</p><br/>
    <input type="text" onChange={props.referralchange} placeholder="address" className=""/>

    <p>Occupation:</p><br/>
    <input type="text" onChange={props.occupationchange} placeholder="address" className="" />

    <p>[Continued next section:]</p>

    </div>
    );
}


export default Section1;