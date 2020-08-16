import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Main from './containers/Main/Main'
import Intake_Note from './containers/Intake_Note/Intake_Note'
import Dashboard from './containers/Dashboard/Dashboard'

function App() {
  return (
    <div>
      <div>


    <BrowserRouter>
      <Route path="/" exact component={Main}/>
      <Route path="/intake-note" component={Intake_Note}/>
      <Route path="/dashboard" component={Dashboard}/>
    </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
