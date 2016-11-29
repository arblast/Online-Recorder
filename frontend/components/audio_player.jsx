import React from 'react';

class AudioPlayer extends React.Component{

  constructor(props) {
    super(props);
    this.state = {playing: false, currTime: 0, seeking: false};
    this.playPause = this.playPause.bind(this);
    this.seek = this.seek.bind(this);
    this.seeking = this.seeking.bind(this);
    this.stopSeeking = this.stopSeeking.bind(this);
    this.setTime = this.setTime.bind(this);
  }

  componentWillUnmount() {
    clearInterval(this.moveInterval);
  }

  componentWillReceiveProps(nextProps) {
    this.audioTag = <audio ref={(audio) => {this.audio = audio;}}><source src={nextProps.recordingUrl} type='audio/wav'/></audio>;
  }

  playPause() {
    if (this.state.playing) {
      this.audio.pause();
      this.setState({playing: false});
      clearInterval(this.moveInterval);
    } else {
      this.audio.play();
      this.moveInterval = setInterval(this.moveTime.bind(this), 500);
      this.setState({playing: true})
    }
  }

  seeking(e) {
    e.stopPropagation();
    this.setState({seeking: true});
  }

  stopSeeking(e) {
    e.stopPropagation();
    this.setState({seeking: false});
  }

  moveTime() {
    const newTime = this.audio.currentTime/this.audio.duration;
    if(newTime >= 1) {
      clearInterval(this.moveInterval);
      this.setState({playing: false});
    } else {
      this.setState({currTime: newTime});
    }
  }

  seek(e) {
    let newTime;
    if(e.target.className === 'time-ball') {
      newTime = (e.nativeEvent.offsetX + e.target.offsetLeft - e.target.offsetWidth/2)/e.currentTarget.offsetWidth;
      if (newTime > 1) {
        newTime = 1;
      } else if (newTime < 0) {
        newTime = 0;
      }

    } else if (e.target.className === 'timeline') {
      newTime = e.nativeEvent.offsetX/e.currentTarget.offsetWidth;
    }
    this.setState({currTime: newTime});
    this.audio.currentTime = newTime*this.audio.duration;
  }

  setTime(e) {
    if(e.target.className === 'timeline') {
      const newTime = e.nativeEvent.offsetX/e.currentTarget.offsetWidth;
      this.setState({currTime: newTime});
      this.audio.currentTime = newTime*this.audio.duration;
    }
  }

  playPauseButtonStyle() {
    if (this.state.playing) {
      return {backgroundImage: 'url(http://res.cloudinary.com/record-cloud/image/upload/v1480237751/pause.png)'};
    } else {
      return {backgroundImage: 'url(https://res.cloudinary.com/record-cloud/image/upload/v1480237753/play.png)'};
    }
  }

  render() {
    const ballLoc = {left: `${this.state.currTime*100}%`};
    let seek = null;
    if (this.state.seeking) {
      seek = this.seek;
    }
    return(
      <div className='audio-player'>
        <button id='play-pause-button' style={this.playPauseButtonStyle()} onClick={this.playPause}></button>
        {this.audioTag}
        <div className='timeline' onClick={this.setTime} onMouseUp={this.stopSeeking} onMouseMove={seek}>
          <div className='time-ball' style={ballLoc} onMouseDown={this.seeking} onMouseUp={this.stopSeeking}></div>
        </div>
      </div>
    )
  }

}

export default AudioPlayer;
