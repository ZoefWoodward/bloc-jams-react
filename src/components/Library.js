import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import albumData from './../data/albums';

class Library extends Component {
    constructor(props) {
        super(props);
        this.state = { albums: albumData };
    }
    
    render() {
        return (
            <section className="library-header">
            <div>
            <h2 className="library-header-title"> ALBUMS </h2>
                <p className="library-header-text"> Discover a new sound. Out now worldwide. </p>
            </div>
           
            <section className='library-list'>
            
                <img src= {this.state.albums.albumCover} alt={this.state.albums.title} />
            
                <h2 id="album-title">{this.state.albums.title} </h2>
                <h3 id="album-artist">{this.state.albums.artist} </h3>
                <h4 id="album-albumNumber">{this.state.albums.albumNumber} </h4>
            {
            this.state.albums.map( (album, index) =>
        <Link style={{textDecoration: 'none', color: '#8E8D8E'}} to={`/album/${album.slug}`} key={index}>
            <img src={album.albumCover} alt={album.title} />
        </Link>
)
}
        </section>
        </section>

        );
    }
}
 export default Library;