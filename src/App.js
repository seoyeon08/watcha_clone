import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import BeforeLoginScreen from './screens/BeforeLoginScreen';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';

class App extends Component{
  render() {
    return (
      <div >
        {/* <Router>
          <Router path='/' exact Component={BeforeLoginScreen} />
          <Router path='/login' Component={LoginScreen} />
        </Router> */}
        <div className="App">
          <BeforeLoginScreen/>
        </div>
      </div>
    );
  }
}

export default App;
