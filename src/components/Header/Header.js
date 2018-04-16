import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {



  render() {
    return (
      <div className="Header">
        
        <header>
          <div className="datecorner">
              <p>Saturday, 14 April, 2018</p>
          </div>
          <div className="logo">
            <img alt="NewsMagnet" src="/assets/logo.png"></img>
          </div>
        
    
          <nav>
            <div className="clearfix">
                <div className="logoes">
                    <Link to="/" ><i className="fas fa-home"></i></Link>
                </div>
                <div className="filter">
                    <a href="#"><i className="fas fa-filter"></i></a>
                </div>
            </div>
               
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;