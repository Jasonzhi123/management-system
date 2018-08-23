import React, { Component } from 'react';
import './App.css';
import {
  message,
  Button
} from 'antd';

const info = () => {
  message.info('This is a normal message');
};


class App extends Component {
  render() {
    return (
      <div className="App">
  
         <Button type = "primary"
         onClick = {
         info
         } > Display normal message </Button>,
         );
      </div>
    );
  }
}

export default App;
