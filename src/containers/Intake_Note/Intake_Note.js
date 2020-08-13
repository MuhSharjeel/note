import React, {Component} from 'react'
import './Intake_Note.css'
import Tabs from '../../components/Tabs/Tabs'
import Prescription from '../Second/Prescription/Prescription'
import {Route} from 'react-router-dom'
import Header from '../../components/Header/Header'

class Intake_Note extends Component{

    state = {

        name: "",
        Init_comment:"",
        Final_comment:"",
        Date:""

    }
    
    newnameHandler = (event) => {    
        this.setState({name: event.target.value});
       }
    
    init_commentHandler = (event) => {    
        this.setState({Init_comment: event.target.value});
       }
    
    Final_commentHandler = (event) => {    
        this.setState({Final_comment: event.target.value});
       }
       
       
    newdateHandler = (event) => {    
        this.setState({Date: event.target.value});
       }
       
        render () {
            
            return (
                
                <div>
            
            <Header />
                <Tabs 
                    namechange={this.newnameHandler}
                    addresschange={this.init_commentHandler}
                    typechange={this.Final_commentHandler}
                    datechange={this.newdateHandler}
                    
                    />
                
                <span className="parent">
                <span className="child">
                <Prescription 
                    name = {this.state.name}
                    init_comment = {this.state.Init_comment}
                    final_comment = {this.state.Final_comment}
                    date = {this.state.Date}               
                    />
                    </span>
                </span>
                    </div>
            );
        }
    }
    
export default Intake_Note;