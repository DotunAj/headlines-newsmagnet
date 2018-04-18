import React, { Component } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Country from './components/Country/Country';
import './App.css';
import { Route } from 'react-router-dom';


class App extends Component {


  render() {


    return (
      <div className="App">
        
        < Home  />

          <Route exact={true} path="/" component={Home} />
          <Route path="/country" component={Country} />
       
      </div>
    );
  }
}

export default App;
