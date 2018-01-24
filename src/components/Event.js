import React, { Component } from 'react';
import '../css/Event.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
var Carousel = require('nuka-carousel');

class Event extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentWillMount () {

  }

  render() {
    return (
      <div className="event">
        <div className="judul">
          <h1>Upcoming Events</h1>
        </div>

        <div className="isi">
          <div className="borderEvent">
          </div>

          <div className="borderEventIsi">
            <div className="borderEventIsiBackground">
              <div className="buttonEvent">
                <button className="buttonEventClick">Event</button>
              </div>
            </div>
            <div className="borderEventIsiNonBackground">
              <div className="textEvent">
                <h1>Canon Signature Zoo Photo Walk With Julian W</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button className="buttonViewProduct">Read More</button>
              </div>
            </div>
          </div>

        </div>

        <div className="borderArtikel">
          <div className="EventBox">
            <div className="blankSpace">
            </div>
            <div className="konten">
            <h3>Canon Hunting Photo Tour</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>

          <div className="EventBox2">
            <div className="blankSpace">
            </div>
            <div className="konten">
              <h4>Buy Adobe Photoshop CC Verry Good Tools</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>

        <div className="borderTombol">
          <button className="buttonAllproductClick">View all event    ></button>
        </div>

      </div>
    );
  }
}

export default Event;
