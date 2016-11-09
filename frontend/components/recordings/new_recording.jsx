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
      isRecording: false,
      recordingComplete: false,
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
    this.setState({isRecording: true})
    recorder.record();
    console.log("recorder started");
  }

  stopRecord() {
    let recorder = this.recorder;
    recorder.stop();
    console.log("recorder stopped");
    recorder.exportWAV((blob)=> {
      this.recording = blob;
      const audioURL = window.URL.createObjectURL(blob);

      const clipContainer = document.createElement('article');
      const audio = document.createElement('audio');
      const deleteButton = document.createElement('button');

      clipContainer.classList.add('clip');
      audio.setAttribute('controls', '');
      deleteButton.innerHTML = "Delete";

      const soundClips = document.querySelector('.sound-clips');
      clipContainer.appendChild(audio);
      clipContainer.appendChild(deleteButton);
      soundClips.appendChild(clipContainer);
      audio.src = audioURL;
      deleteButton.onclick = (e) => {
        const eTarget = e.target;
        eTarget.parentNode.parentNode.removeChild(eTarget.parentNode);
        recorder.clear();
        this.setState({isRecording: false, recordingComplete: false});
      }
      this.setState({isRecording: false, recordingComplete: true});
    });
  }


  render() {
    let form = null;
    let circle = null;
    if (this.state.isRecording) {
      circle = <div id="circle"></div>;
    }
    let recordingUI = <div className="recording-ui">
      {circle}
      <button onClick={this.startRecord} disabled={this.state.isRecording} className='record'>
        Record
      </button>
      <button onClick={this.stopRecord} disabled={!this.state.isRecording} className='stop'>
        Stop
      </button>
    </div>

    if(this.state.showForm) {
      form = <RecordingForm formType={'new'} currentRecording={{title: '', publicity: 'public', categoryId: 1}} processForm={this.props.createRecording} errors={this.props.errors} closeForm={this.closeForm} recording={this.recording}/>;
    }

    if(this.state.recordingComplete) {
      recordingUI = null;
    }

    return(
      <div className='new-recording'>
        <h2>New Recording</h2>
          {recordingUI}
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
