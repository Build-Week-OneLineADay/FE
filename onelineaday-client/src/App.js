import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import ProtectedRoute from './Components/ProtectedRoute'
import RegForm from './Components/Register'
import Login from './Components/Login'



function App() {
  return (
    <Router>
    <div className="App">
    <Route path='/Register' component={RegForm} />
    <Route exact path='/' component={Login}/>

    </div>
    </Router>
  );
}

export default App;
