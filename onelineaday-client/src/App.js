import React from 'react';
import RegForm from './Components/Register';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
    <Route path='/Register' component={RegForm} />
    </div>
    </Router>
  );
}

export default App;
