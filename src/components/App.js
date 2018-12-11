import React, { Component } from 'react';
import { Router } from '@reach/router';
import Status from './Status';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Status path="/" />
          <Status path="/signal" canChange />
        </Router>
      </div>
    );
  }
}

export default App;
