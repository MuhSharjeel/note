import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import { FaHome, FaRegQuestionCircle,FaPlus } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import {BsPersonFill} from 'react-icons/bs'

const Header = (props) => {

    return(
    <div>

    <Link to="/">
    <span className="backtohome"><FaHome /> Note Designer</span>
    </Link>
    <span className="addnewnote"><FaPlus /> New Note</span>
    <span className="help"><FaRegQuestionCircle /> Help</span>
    <span className="help"><AiFillSetting /> Preferences</span>
    <span className="help"><BsPersonFill /> Sign In</span>    


    </div>

    );
}


export default Header;