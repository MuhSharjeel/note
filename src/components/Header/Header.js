import React ,{Component} from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import { FaHome, FaRegQuestionCircle,FaPlus } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import {BsPersonFill} from 'react-icons/bs'
import Menu from '../../components/Face_Options/UI_Options/Header_UI_Options'
import SignIn from '../../components/Face_Options/UI_Options/Header_signin'
import Help from '../../components/Face_Options/UI_Options/Header_help'
import Preferences from '../../components/Face_Options/UI_Options/Header_preferences'


class Header extends Component {

    state = {
        help:false,
        new_note : false,
        preferences:false,
        sign:false        
    }

    newnoteHandler = () => {
        this.setState({new_note: true});
    
      }
  
    removenewnoteHandler = () => {
        this.setState({new_note: false});
    
      }

    helpHandler = () => {
        this.setState({help: true});
    
      }
  
    removehelpHandler = () => {
        this.setState({help: false});
    
      }

    prefernceHandler = () => {
        this.setState({preferences: true});
    
      }
  
    removeprefernceHandler = () => {
        this.setState({preferences: false});
    
      }

    signinHandler = () => {
        this.setState({sign: true});
    
      }
  
    removesigninHandler = () => {
        this.setState({sign: false});
    
      }

    render() {

    return(
    <div className="root">

    <Link to="/">
    <span className=""><FaHome /> Note Designer</span>
    </Link>
    <button onClick={this.newnoteHandler}> + New Note</button>
    <button onClick={this.signinHandler} className="help"> Sign In</button>
    <button onClick={this.prefernceHandler} className="help">Preferences</button>
    <button onClick={this.helpHandler} className="help"> ? Help</button>    

    <Menu   show= {this.state.new_note} 
    remove = {this.removenewnoteHandler}/>
    
    <SignIn   show= {this.state.sign} 
    remove = {this.removesigninHandler}/>
    
    <Help   show= {this.state.help} 
    remove = {this.removehelpHandler}/>
    
    <Preferences   show= {this.state.preferences} 
    remove = {this.removeprefernceHandler}/>

 
    </div>

    );
    }
}

export default Header;