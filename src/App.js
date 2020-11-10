import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import lottery from './lottery';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contract from './components/Contract.jsx';

class App extends Component {



  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => <Home /> } />
            <Route path="/about" exact component={() => <About /> } />
            <Route path="/lottery" exact component={() => <Contract /> } />
          </Switch>
          
        </Router>
      </div>
    );
  }
}

export default App;