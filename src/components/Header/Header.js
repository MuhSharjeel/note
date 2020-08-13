import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'

const Header = (props) => {

    return(
    <div className="header">
    <Link to="/">
    <button className="backtohome" >Note</button>
    </Link>
    <br/>
    </div>

    );
}


export default Header;