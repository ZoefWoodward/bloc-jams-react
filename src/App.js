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
        <img id="Background" src="http://i64.tinypic.com/vgle1s.png" border="0" alt="Background of futuristic woman"></img>
        
    <section className="nav-bar">
        <div className="soundfusion">
          <nav>
            <Link to='/'>SoundFusion</Link></nav>
        </div>
        <div className="library">
          <nav>
               <Link to='/library'>Library</Link>
          </nav>
         </div>
     </section>
        
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
