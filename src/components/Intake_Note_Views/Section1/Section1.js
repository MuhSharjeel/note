import React from 'react'
import './Section1.css'

const Section1 = (props) => {


    return(
        
    <div>
 
    <p>Name:</p><br/>
    <input type="text" className=""/>
    
    <p>Home Address:</p><br/>
    <input type="text" className=""/>
        
    <p>Date of Intake Session(s):</p><br/>
    <input type="date" className=""/>
            
    <p>Telephone Number(s):</p><br/>
    <input type="text" className=""/>
                
    <p>Date of Birth:</p><br/>
    <input type="date" className=""/>  

    <p>OK to leave message?:</p><br/>
    <input type="text" className=""/>  

    <p>Marital Status:</p><br/>
    <input type="text" className=""/>  

    <p>Emergency Contact and Number:</p><br/>
    <input type="text" className=""/>

    <p>Living Arrangement:</p><br/>
    <input type="text" className=""/>

    <p>Referral Source:</p><br/>
    <input type="text" className=""/>

    <p>Occupation:</p><br/>
    <input type="text" className=""/>

    <p>[Continued next section:]</p>

    </div>
    );
}


export default Section1;