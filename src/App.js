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
            <div className="topleft">
              <Link style={{color: (255,255,255,0.87)}} to ="/">SoundFusion</Link></div>
            <div className="topright">
              <Link style={{color: (255,255,255,0.87)}} to ="/library">Library</Link></div>
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


