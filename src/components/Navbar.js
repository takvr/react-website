import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <Link class="navbar-brand" to="/">Navbar</Link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>              
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/about">About</Link>
                  </li>                
                </ul>
              </div>
            </div>
          </nav>
        );
    }
}

export default Navbar;