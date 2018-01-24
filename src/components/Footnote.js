import React, { Component } from 'react';
import '../css/Footnote.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
var Carousel = require('nuka-carousel');

class Footnote extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentWillMount () {

  }

  render() {
    return (
      <div className="foot">

        <hr/>
        <div className="menuFoot">
          <div className="menuDeret">
            <h3>Company</h3>
            <br/>
            <p>About Us</p>
            <p>Press Room</p>
            <p>Terms Of Use</p>
            <p>Privacy Policy</p>
            <p>Carrers</p>
            <p>FAQ</p>
          </div>
          <div className="menuDeret">
            <h3>Products</h3>
            <br/>
            <p>Support & Downloads</p>
            <p>Where To Buy</p>
          </div>
          <div className="menuDeret">
            <h3>Services</h3>
            <br/>
            <p>Service & Repair</p>
            <p>EOS 1 Club</p>
            <p>Canon Professional Services</p>
          </div>
          <div className="menuDeret">
            <h3>Warranty</h3>
            <br/>
            <p>Registration</p>
            <p>Product Warranty</p>
            <p>Information For Tourist</p>
          </div>
          <div className="menuDeret">
            <h3>Rellated Websites</h3>
            <br/>
            <p>Microsites</p>
          </div>
          <div className="menuDeret">
            <h3>Subscribe</h3>
          </div>
        </div>

        <div className="menuDeret2">
          <div className="menuDeret3">
            <hr className="tebal"/>
            <div className="footBagian">
              <p>Coppyright © 2007 Canon. All right reserved.</p>
            </div>
            <div className="footBagian2">

              <div className="foodBag">
                <img className="imageIcon" src="https://rubenerd.com/files/uploads/blog.icon.singapore.140px.png" alt="" />
              </div>

              <div className="foodBag">
                <p>Singapore&nbsp;&nbsp;&nbsp;</p>
              </div>


            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Footnote;
