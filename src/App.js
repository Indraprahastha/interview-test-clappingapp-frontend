import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Crousel from './components/Crousel'
import Event from './components/Event'
import Footnote from './components/Footnote'

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
          <Navbar />
          <Crousel />
          <Event />
          <Footnote />
        </div>
      </Router>
    );
  }
}

export default App;
