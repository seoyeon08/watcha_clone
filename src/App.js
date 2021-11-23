import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import BeforeLoginScreen from './screens/BeforeLoginScreen';

class App extends Component{
  render() {
    return (
      <div >
        <div className="App">
          <BeforeLoginScreen/>
        </div>
      </div>
    );
  }
}

export default App;
