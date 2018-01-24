import React, { Component } from 'react';
import '../css/Article.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
var Carousel = require('nuka-carousel');

class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentWillMount () {

  }

  render() {
    return (
      <div className="artikel">
        <div className="borderPromosi1">
        </div>

        <div className="borderPromosi">

          <div className="borderPromosiPicture">
            <div className="buttonPromotion">
              <button className="buttonProductClick">Product</button>
              <img className="imageCamraPromotion" src="http://condorlargeformat.co.uk/wp-content/uploads/2015/11/product-hero-canon-ipf830-1.png" alt="New York" />
            </div>
          </div>

          <div className="borderPromosiUlasan">
            <h1>Canon iPF780 from Tonas Graphics</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button className="buttonViewProduct">Read More</button>
          </div>

        </div>

        <div className="borderPromosi1">
        </div>

        <div className="borderArtikel">
          <div className="artikelBox">
            <div className="blankSpace">
            </div>
            <div className="konten">
            <h4>Canon Photo Marathon: 2017</h4>
            <p><b>5 September 2017</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>

          <div className="artikelBox2">
            <div className="blankSpace">
            </div>
            <div className="konten">
              <h4>The Difference Between <br/>Vibrance and Saturation</h4>
              <p><b>13 September 2017</b></p>
            </div>
          </div>
        </div>

        <div className="borderTombol">
          <button className="buttonAllproductClick">View all article    ></button>
        </div>

      </div>
    );
  }
}

export default Article;
