import React, { Component } from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Promotion from './Promotion.js'
import Article from './Article.js'
var Carousel = require('nuka-carousel');

class Crousel extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentWillMount () {

  }

  render() {
    return (
      <div>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          <div className="item active">
            <img src="https://iso.500px.com/wp-content/uploads/2016/03/pedroquintela.jpg" alt="Los Angeles" />
          </div>

          <div className="item">
            <img src="https://cdn.fstoppers.com/styles/full/s3/media/2015/11/irina_action-beautydish.jpg" alt="Chicago" />
          </div>

          <div className="item">
            <img  src="https://airbornemedia.uk/wp-content/uploads/2017/02/virtual-tour-360-dundonald-links-golf-course-01.jpg" alt="New York" />
          </div>
        </div>
      </div>

      <div className="test">
        <div className="col-md-4 test2">
          <div className="col-md-4 test3">
            <div className="buttonNew">
              <button className="button">New</button>
            </div>
            <img className="imageCamra" src="https://shop.canon.co.nz/media/catalog/product/cache/2/thumbnail/x430/17f82f742ffe127f42dca9de82fb58b1/e/o/eos_m6_body_black_front.png" alt="New York" />
            <p>Canon EOS E6 Compact</p>
          </div>
        </div>
        <div className="col-md-4 test2">
          <div className="col-md-4 test4">
          <img className="imageCamra" src="https://store.canon.com.au/media/catalog/product/cache/1/thumbnail/x430/17f82f742ffe127f42dca9de82fb58b1/e/o/eos_m6_single_kit_silver_front_1.png" alt="New York" />
          <p>Canon PowerShoot G9X</p>
          </div>
        </div>
        <div className="col-md-4 test2">
          <div className="col-md-4 test4">
          <img className="imageCamra" src="http://smashingdrones.com/wp-content/uploads/2016/09/HUAJUN-U-FLY-W606-drone-730x430.png" alt="New York" />
          <p>Camera Drone</p>
          </div>
        </div>
      </div>

      <Promotion />
      <Article />
      </div>
    );
  }
}

export default Crousel;
