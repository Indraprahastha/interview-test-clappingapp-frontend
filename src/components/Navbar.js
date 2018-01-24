import React, { Component } from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayMobile: 'hilangkan'
    }
  }

  componentWillMount () {
  }

  tombolNavMenu () {
    // alert('aman')
    if (this.state.displayMobile == 'hilangkan') {
      this.setState({displayMobile: ''})
    } else {
      this.setState({displayMobile: 'hilangkan'})
    }
  }

  render() {
    return (
      <div className="countainerNav">

        <div className="NavBag1">
          <div className="imageCont">
            <img className="imageLogo" src="http://fallforthebook.org/wp-content/uploads/2013/02/Canon-Logo.png" alt="Mountain View" />
          </div>
          <div className="imageCont2">
            <img onClick={() => this.tombolNavMenu()} className="imageLogo2" src="https://icon-icons.com/icons2/1123/PNG/512/menucircularbutton_79584.png" alt="Mountain View" />
          </div>
        </div>

        <div className={this.state.displayMobile}>
        <div className="NavBag2">
          <ul>
            <li><a className= "fontMenu" href="#home">Product</a></li>
            <li><a className= "fontMenu"  href="#news">Articles</a></li>
            <li><a className= "fontMenu"  href="#contact">Events</a></li>
            <li><a className= "fontMenu"  href="#about">Courses</a></li>
            <li><a className= "fontMenu"  href="#about">Contact</a></li>
            <li><a className= "fontMenu"  href="#about">Promotions</a></li>
            <li><a className= "fontMenu"  href="#about">Search</a></li>
          </ul>
        </div>

        <div className="NavBag3">
          <ul>
            <li className="liAkhir"><a className= "liAkhir cust"  href="#about">Consumer</a></li>
            <li className="liAkhir"><a className= "liAkhir fontMenu"  href="#about">|</a></li>
            <li className="liAkhir"><a className= "liAkhir abt"  href="#about">Business</a></li>
          </ul>
        </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
