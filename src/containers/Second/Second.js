import React, {Component} from 'react'
import './Second.css'
import Header from '../../components/Top/Top'
import Prescription from './Prescription/Prescription'

class Second extends Component{

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

                <Header 
                    namechange={this.newnameHandler}
                    addresschange={this.init_commentHandler}
                    typechange={this.Final_commentHandler}
                    datechange={this.newdateHandler}
                    
                    />
                
                <span className="pres">
                
                <Prescription 
                    name = {this.state.name}
                    init_comment = {this.state.Init_comment}
                    final_comment = {this.state.Final_comment}
                    date = {this.state.Date}               
                    />
                </span>
                    </div>
            );
        }
    }
    
export default Second;