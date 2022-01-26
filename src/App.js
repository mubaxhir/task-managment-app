import React, { Component } from "react";
import Box from './components/Box';
import './App.css';


class App extends Component {
  render(){
    return(
      <div>
        <h1>Task Management</h1>
        <div className='App'>
          <Box></Box>
        </div>
        
      </div>
    )
  }
}

export default App;