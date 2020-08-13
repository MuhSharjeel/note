import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'

const Header = (props) => {

    return(
    <div className="header">

    <Link to="/">
    <span className="backtohome">Home</span>
    </Link>
    <button className="newnote">+ New Note</button>
    <br/>
    </div>

    );
}


export default Header;