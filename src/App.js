import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Main from './containers/Main/Main'
import Second from './containers/Second/Second'

function App() {
  return (
    <div>
      <div>
    <BrowserRouter>
    <Route path="/" exact component={Main}/>
    <Route path="/intake-note" component={Second}/>
    </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
