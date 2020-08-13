import React, {Component} from 'react'
import './Intake_Note.css'
import General_Info from '../../components/Tabs/Tabs'
import Prescription from '../Second/Prescription/Prescription'
import {Route} from 'react-router-dom'
import Header from '../../components/Header/Header'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class Intake_Note extends Component{

    state = {

        name: "",
        Init_comment:"",
        Final_comment:"",
        Date:"",
        new_note : false,
        blank_note: true,

    }
    
    newnoteHandler = () => {
        this.setState({new_note: true});
    }

    removenewnoteHandler = () => {
        this.setState({new_note: false});
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
            
            const Tabs_ = () => (
                <Tabs>
                  <TabList>
                    <Tab>Headings +</Tab>
                    <Tab>Section 1</Tab>
                    <Tab>Section 2</Tab>
                    <Tab>Section 3</Tab>
                    <Tab>Section 4</Tab>
                    <Tab>Section 5</Tab>
                  </TabList>
              
                  <TabPanel>
                    <h2>Any content 1</h2>
                  </TabPanel>
                  <TabPanel>
                    <h2>Any content 2</h2>
                  </TabPanel>
                  <TabPanel>
                    <h2>Any content 3</h2>
                  </TabPanel>
                  <TabPanel>
                    <h2>Any content 4</h2>
                  </TabPanel>
                  <TabPanel>
                    <h2>Any content 5</h2>
                  </TabPanel>
                  <TabPanel>
                    <h2>Any content 6</h2>
                  </TabPanel>
                </Tabs>
              );

            return (
                
                <div>            
                        
                    {/*<Header/>*/}
                    <Tabs_/>
                        <General_Info 
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