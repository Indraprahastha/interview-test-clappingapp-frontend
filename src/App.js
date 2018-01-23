import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentWillMount () {

  }

  render() {
    return (
      <Router>
        <div className="App">
          <p>Tester</p>
        </div>
      </Router>
    );
  }
}

export default App;
