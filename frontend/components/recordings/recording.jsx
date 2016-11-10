import React from 'react';

class Recording extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    const recording = this.props.recording;
    return(
      <div className="recording-detail">
        <h2>{recording.title}</h2>
        <h3>Recorded by {recording.uploader}</h3>
        <audio controls src={recording.recording_url}></audio>
        <br/>
        <label>Description
          <p>{recording.description}</p>
        </label>
        <br/>
        <label>Category
          <p>{recording.category}</p>
        </label>
      </div>
    );
  }


}

export default Recording;
