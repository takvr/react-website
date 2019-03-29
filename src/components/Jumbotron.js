import React, { Component } from 'react';

class Jumbotron extends Component {
    render() {
        return (
         <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h2 className="display-3">{this.props.title}</h2>
                <p className="lead">{this.props.subtitle}</p>
            </div>
        </div>
        );        
    }
}

export default Jumbotron;