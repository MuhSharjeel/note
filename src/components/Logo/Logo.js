import React from 'react'
import notelogo from '../../assests/images/logo.png'
import './Logo.css'

const Logo = (props) => {

    return(
    <div className="App">
        <img src={notelogo} alt= "logo" className="App-logo"/>
    </div>
    );
}


export default Logo;



