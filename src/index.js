import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';

import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// your code goes here
class Home extends Component{
  render(){
    return(
      <Router>
      <div>
        <nav>
        <ul>
          <li> <a href = "/"> Home </a> </li>
          <li> <a href = "/happy"> Happy </a> </li>
          <li> <a href = "/guilty"> Guilty </a> </li>
          <li> <a href = "/sleepy"> Sleepy </a> </li>
        </ul>
      </nav>


     {/* <Route exact path="/" component={Home} /> */}
     <Route path="/happy" component={Happy} />
     <Route path="/guilty" component={Guilty} />
     <Route path="/sleepy" component={Sleepy} />

      </div>
    </Router>
    )
  }
}

ReactDOM.render( <Home />, document.getElementById('root') );
