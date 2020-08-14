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
        occupation:"",
        difficulties:"",
        history:"",
        background:"",
        medical:"",
        observation:"",
        impressions:"",
        recommendation:"",
        formulation:"",
        description:"",

    }
    
    backgroundHandler = (event) => {    
      this.setState({background: event.target.value});
     }

    medicalHandler = (event) => {    
      this.setState({medical: event.target.value});
     }
    
    formulationHandler = (event) => {    
      this.setState({formulation: event.target.value});
     }
    
    recommendationHandler = (event) => {    
      this.setState({recommendation: event.target.value});
     }
    
    impressionsHandler = (event) => {    
      this.setState({impressions: event.target.value});
     }
    
    observationHandler = (event) => {    
      this.setState({observation: event.target.value});
     }
    
    descriptionHandler = (event) => {    
      this.setState({difficulties: event.target.value});
     }

    difficultiesHandler = (event) => {    
      this.setState({difficulties: event.target.value});
     }
    
    historyHandler = (event) => {    
       this.setState({history: event.target.value});
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
                <Section_2 difficultychange={this.difficultiesHandler}
                          backgroundchange={this.backgroundHandler}
                          medicalchange   ={this.medicalHandler}
                          historychange={this.historyHandler}
                
                />
              </TabPanel>

              <TabPanel>
                <Section_3  observationchange={this.observationHandler}
                impressionchange={this.impressionsHandler}
                recommendationchange   ={this.recommendationHandler}
                formulationchange={this.formulationHandler}

        
      />
              </TabPanel>
              
              <TabPanel>
                <Section_4 descriptionchange={this.descriptionHandler}/>
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
              emergency={this.state.emergency}
              living={this.state.living}
              referral={this.state.referral}
              occupation={this.state.occupation}
              difficulty={this.state.difficulties}
              history={this.state.history}
              background={this.state.background}
              medical={this.state.medical}                
              observation={this.state.observation}
              impression={this.state.impressions}
              recommendation={this.state.recommendation}
              formulation={this.state.formulation}
              description={this.state.description}
                         
                />

              </div>
            );
        }
    }
    
export default Intake_Note;