import React from 'react';

class AudioPlayer extends React.Component{

  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }

  play() {
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }

  render() {
    return(
      <div className='audio-player'>
        <button onClick={this.play}>Play</button>
        <button onClick={this.pause}>Pause</button>
        <audio ref={(audio) => {this.audio = audio}}><source src={this.props.recordingUrl} type='audio/wav'/></audio>
      </div>
    )
  }



}

export default AudioPlayer;
