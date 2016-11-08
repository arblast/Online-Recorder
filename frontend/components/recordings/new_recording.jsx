import React from 'react';
import { hashHistory } from 'react-router';
import RecordingForm from './recording_form';
import Recorder from '../../util/recorder';
import cloudinary from 'cloudinary-core';

class NewRecording extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRecording: "false",
      recordingComplete: "false",
      showForm: false
    }
    this.showForm = this.showForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.startRecord = this.startRecord.bind(this);
    this.stopRecord = this.stopRecord.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentDidMount() {
    Recorder(this);
  }

  cancel(e) {
    e.preventDefault();
    this.mediaStream.getTracks()[0].stop();
    hashHistory.push('/home');
  }

  showForm(e) {
    e.preventDefault();
    this.setState({showForm: true});
  }

  closeForm(e) {
    e.preventDefault();
    if(e.target.className === 'modal-background' || e.target.className === 'close'){
          this.setState({showForm: false});
    }
  }

  startRecord() {
    let mediaRecorder = this.mediaRecorder;
    mediaRecorder.start();
    console.log(mediaRecorder.state);
    console.log("recorder started");
  }

  stopRecord() {
    let mediaRecorder = this.mediaRecorder;
    mediaRecorder.stop();
    console.log(mediaRecorder.state);
    console.log("recorder stopped");
  }

  render() {
    let form = null;

    if(this.state.showForm) {
      form = <RecordingForm currentRecording={{}} processForm={this.props.createRecording} errors={[]} closeForm={this.closeForm}/>;
    }

    return(
      <div>
        <h2>New Recording</h2>
          <button onClick={this.startRecord} className='record'>
            Record
          </button>
          <button onClick={this.stopRecord} className='stop'>
            Stop
          </button>
          <div className='sound-clips'>
          </div>
        <button onClick={this.showForm}>Save</button>
        <button onClick={this.cancel}>Cancel</button>
        {form}
      </div>
    )
  }
}

export default NewRecording;
