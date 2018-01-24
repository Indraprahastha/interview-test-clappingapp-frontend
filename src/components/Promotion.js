import React, { Component } from 'react';
import '../css/Promotion.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
var Carousel = require('nuka-carousel');

class Promotion extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentWillMount () {

  }

  render() {
    return (
      <div className="promosi">
        <div className="borderPromosi1">
        </div>

        <div className="borderPromosi">

          <div className="borderPromosiPicture">
            <div className="buttonPromotion">
              <button className="buttonPromotionClick">Promotion</button>
              <img className="imageCamraPromotion" src="https://www.cliftoncameras.co.uk/uploads/products/CanonXA11VideoCameraImage3.png" alt="New York" />
            </div>
          </div>

          <div className="borderPromosiUlasan">
            <h1>CANON XAII Mark II</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button className="buttonViewProduct">View Product</button>
          </div>

        </div>

        <div className="borderPromosi1">
        </div>

        <div className="borderTombol">
          <button className="buttonAllproductClick">View all product    ></button>
        </div>

      </div>
    );
  }
}

export default Promotion;
