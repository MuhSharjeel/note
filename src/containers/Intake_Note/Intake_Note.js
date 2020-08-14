import React, {Component} from 'react'
import './Intake_Note.css'
import General_Info from '../../components/Tabs/Tabs'
import Prescription from '../Second/Prescription/Prescription'
import {Route} from 'react-router-dom'
import Header from '../../components/Header/Header'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Section_1 from '../../components/Intake_Note_Views/Section1/Section1'
import Section_2 from '../../components/Intake_Note_Views/Section2/Section2'
import Section_3 from '../../components/Intake_Note_Views/Section3/Section3'
import Section_4 from '../../components/Intake_Note_Views/Section4/Section4'
import Headings from '../../components/Intake_Note_Views/Headings/Headings'

class Intake_Note extends Component{

    state = {

        name: "",
        address:"",
        date:"",
        number:"",
        birthdate:"",
        leavemessage:"",
        status:"",
        emergency:"",
        living:"",
        referral:"",
        occupation:""

    }
    
    newnameHandler = (event) => {    
        this.setState({name: event.target.value});
       }
    
    addressHandler = (event) => {    
        this.setState({address: event.target.value});
       }
    

    dateHandler = (event) => {    
        this.setState({date: event.target.value});
       }

    newnumberHandler = (event) => {    
        this.setState({number: event.target.value});
       }
    
       birthdateHandler = (event) => {    
        this.setState({birthdate: event.target.value});
       }       
    
    leavemessageHandler = (event) => {    
        this.setState({leavemessage: event.target.value});
       }


    statusHandler = (event) => {    
        this.setState({status: event.target.value});
       }


    emergencyHandler = (event) => {    
        this.setState({emergency: event.target.value});
       }


    livingHandler = (event) => {    
        this.setState({living: event.target.value});
       }


    referralHandler = (event) => {    
        this.setState({referral: event.target.value});
       }
   
    occupationHandler = (event) => {    
        this.setState({occupation: event.target.value});
       }
   
       
        render () {

          return (
                
            <div>            
            <div className="intake_note">  
                        
              {/*<Header/>*/}
              <Tabs>
                <TabList>
                <Tab>Section 1</Tab>
                <Tab>Section 2</Tab>
                <Tab>Section 3</Tab>
                <Tab>Section 4</Tab>
                </TabList>

                <TabPanel>
              <Section_1  namechange={this.newnameHandler}
                          addresschange={this.addressHandler}
                          datechange   ={this.dateHandler}
                          numberchange={this.newnumberHandler}
                          birthdatechange={this.birthdateHandler}
                          leavemessagechange   ={this.leavemessageHandler}
                          statuschange={this.statusHandler}
                          emergencychange={this.emergencyHandler}
                          livingchange   ={this.livingHandler}
                          referralchange={this.referralHandler}
                          occupationchange={this.occupationHandler}

                          address={this.state.address}
                          name={this.state.name}
                          date={this.state.date}
                          number={this.state.number}
                          birthdate={this.state.birthdate}
                          leavemessage={this.state.leavemessage}
                          status={this.state.status}
                          emergency={this.state.emergency}
                          living={this.state.living}
                          referral={this.state.referral}
                          occupation={this.state.occupation}/>  

              </TabPanel>
              <TabPanel>
                <Section_2 />
              </TabPanel>

              <TabPanel>
                <Section_3 />
              </TabPanel>
              
              <TabPanel>
                <Section_4 />
              </TabPanel>
              
              </Tabs>
              
              
              </div>
              <Prescription
              address={this.state.address}
              name={this.state.name}
              date={this.state.date}
              number={this.state.number}
              birthdate={this.state.birthdate}
              leavemessage={this.state.leavemessage}
              status={this.state.status}
              emergency={this.state.emergency}
              living={this.state.living}
              referral={this.state.referral}
              occupation={this.state.occupation}               
                />

              </div>
            );
        }
    }
    
export default Intake_Note;