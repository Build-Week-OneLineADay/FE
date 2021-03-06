import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import ProtectedRoute from './Components/ProtectedRoute'
import RegForm from './Components/Register'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import EditEntry from './Components/EditEntry'



function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/Register' component={RegForm} />
        <Route exact path='/' component={Login}/>
        <Route path='/EditEntry/:entryId' component={EditEntry}/>
        <ProtectedRoute exact path='/dashboard' component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
