import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header> 
          <nav id="nav-bar">
            <div className= "top-left"> 
            <Link to="/" style={{ textDecoration:'none', color: '#8E8D8E'}}>SoundFusion</Link></div>
            <div className="top-right">
        <Link to="/library" style={{textDecoration: 'none',  color: '#8E8D8E'}}>Library</Link></div>
          </nav>

       <main>
        <Route exact path="/" component={Landing} />
        <Route path="/library" component={Library} />
        <Route path="/album/:slug" component={Album} />
        </main>
       </header>
      </div>
    );
  }
}

export default App;