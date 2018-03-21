import React, { Component } from 'react';
import albumData from './../data/albums';
import Ionicon from 'react-ionicons';
import PlayerBar from './PlayerBar';
import './../App.js';
import './../App.css';

 class Album extends Component {
   constructor(props) {
     super(props);
 
     const album = albumData.find( album => {
       return album.slug === this.props.match.params.slug
     });
 
     this.state = {
       album: album,
         currentSong: album.songs[0],
         currentTime: 0,
         currentVolume: 0.5,
         volumePercent: 100,
         duration: album.songs[0].duration,
         isPlaying: false,
         isHovered: false,
     };
       
    this.audioElement = document.createElement('audio');
     this.audioElement.src = album.songs[0].audioSrc;
   }
     
     componentDidMount(){
         this.eventListeners = {
             timeupdate: e => {
                 this.setState({ currentTime: this.audioElement.currentTime });
             },
             durationchange: e => {
                 this.setState({ duration: this.audioElement.duration });
             },
             volumechange: e => {
                 this.setState({ currentVolume: this.audioElement.volume });
             }
         };
         this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
         this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
         this.audioElement.addEventListener('volumechange', this.eventListeners.volumechange);
        
     }
     
     componentWillUnmount(){
         this.audioElement.src = null;
         this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
         this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
         this.audioElement.removeEventListener('volumechange', this.eventListeners.volumechange);
     }
     
    play() {
         this.audioElement.play();
         this.setState({ isPlaying: true });
     }
     
     pause() {
         this.audioElement.pause();
         this.setState({ isPlaying: false })
     }
       
       setSong(song) {
           this.audioElement.src = song.audioSrc;
           this.setState({ currentSong: song });
       }
     
       handleSongClick(song){
           const isSameSong = this.state.currentSong === song; 
           if (this.state.isPlaying && isSameSong) {
               this.pause();
           } else {
               if (!isSameSong) { this.setSong(song); }
               this.play();
           }
           }
     
     handlePrevClick(){
         const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
         const newIndex = Math.max(0, currentIndex -1);
         const newSong = this.state.album.songs[newIndex];
         this.setSong (newSong);
         this.play(newSong);
     }
     
     handleNextClick(){
         const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
         const newIndex = Math.min(currentIndex +1, this.state.album.songs.length -1);
         const newSong = this.state.album.songs[newIndex];
         this.setSong (newSong);
         this.play(newSong);
         
     }
     
     handleTimeChange(e){
         const newTime=this.audioElement.duration * e.target.value;
         this.audioElement.currentTime= newTime;
         this.setState({ currentTime: newTime });
     }
     
     handleVolumeChange(e){
         const newVolume=(e.target.value);
         const newVolumePercent= Math.round((e.target.value)*100);
         this.audioElement.volume= newVolume;
         this.setState({ currentVolume: newVolume });
         this.setState({ volumePercent: newVolumePercent });
     }
     
     formatTime(time){
         if (time){
             const newTime = Math.floor(time / 60) + ":" + (((time%60) < 10) ? ("0" + (Math.floor(time % 60))) : (Math.floor(time % 60)));
            return newTime;
         } else {
             return"-:--";
         }
     }
    
   
  render() {
     return (
         
     <section className="album">
         <section id="album-info">
         <img id="album-cover-art" style={{width: '100%', height: '100%'}} alt="Album cover art" src={this.state.album.albumPageCover} />
        
         
         <section className="playerbar-wrapper">
         <table id="song-list">
         <colgroup>
         <col id="song-number-column" />
         <col id="song-title-column" />
         <col id="song-duration-column" />
         </colgroup>
         
         <tbody>
         {
        this.state.album.songs.map( (song, index) => 

        <tr className="song" key={index} onClick={() => this.handleSongClick(song)}
            onMouseEnter={() => this.setState({isHovered: index +1})}
            onMouseLeave={() => this.setState({isHovered: false })}>
    
            <td className="song-actions">
                {(this.state.isPlaying) ?
                 <span> {(this.state.currentSong.title === song.title) ? 
                 <Ionicon icon= "ios-pause"/> 
                 :<span>{index + 1 + "."}</span> }</span>
                :
                 (this.state.isHovered === index+1) ?
                     <span><Ionicon icon="ios-play"/></span>
                 : <span className="song-number">{index + 1 + "."}</span>
                }
                </td>
         <td className="song-title">{song.title}</td>
         <td className="song-duration">{song.duration}
        </td>
        </tr>
      
     )}
          </tbody>
         </table>
         <PlayerBar
           isPlaying={this.state.isPlaying}
            currentSong={this.state.currentSong}
            currentTime={this.audioElement.currentTime}
            currentVolume={this.audioElement.currentVolume}
            volumePercent={this.state.volumePercent}
            duration={this.audioElement.duration}
            handleSongClick={() => this.handleSongClick(this.state.currentSong)}
            handlePrevClick={() => this.handlePrevClick()}
            handleNextClick={() => this.handleNextClick()}
            handleTimeChange={(e)=> this.handleTimeChange(e)}
            handleVolumeChange={(e) => this.handleVolumeChange(e)}
            formatTime={this.formatTime(this.state.currentTime)}
            formatDuration={this.formatTime(this.state.duration - this.state.currentTime)}
         />
       </section>
</section>
</section>
     );
   }
 }
 
  export default Album;