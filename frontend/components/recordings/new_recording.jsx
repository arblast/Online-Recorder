import React from 'react';
import { hashHistory } from 'react-router';
import RecordingForm from './recording_form';
import Rec from '../../util/recorder';
import cloudinary from 'cloudinary-core';
import { uploadRecording } from '../../util/recordings_api_util';

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
    Rec(this);
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
    let recorder = this.recorder;
    recorder.record();
    console.log("recorder started");
  }

  stopRecord() {
    let recorder = this.recorder;
    recorder.stop();
    console.log("recorder stopped");
  }

  test() {
    let recorder = this.recorder;
    recorder.exportWAV((blob)=> {
      this.recordingURL = URL.createObjectURL(blob);
      console.log(this.recordingURL);
    });
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
          <button onClick={this.test.bind(this)} className='test'>
            Test
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
