import React from 'react'
import notelogo from '../../assests/images/logo.png'
import './Logo.css'

const Logo = (props) => {

    return(
    <div className="container">
        <div className="center">
            <img src={notelogo} alt= "logo" className="App-logo"/>
        </div>
        </div>
    );
}


export default Logo;



