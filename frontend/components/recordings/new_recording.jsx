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
      showForm: false,
      micAllowed: true
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

  componentWillUnmount() {
    if(this.state.micAllowed) {
      this.audioCtx.close();
      this.stream.getTracks()[0].stop();
    }
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
    if(this.state.micAllowed){
      let recorder = this.recorder;
      this.setState({isRecording: true})
      recorder.record();
    } else {
      alert("How are you doing this??")
    }
  }

  stopRecord() {
    let recorder = this.recorder;
    recorder.stop();
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
    let micError = null;
    if(!this.state.micAllowed) {
      micError = <div className="mic-error">Error: You did not allow this site to access your microphone.</div>;
      }
    if (this.state.isRecording) {
      circle = <div id="circle"></div>;
    }
    let recordingUI = <div className="recording-ui">
      <button id="start-record" onClick={this.startRecord} disabled={this.state.isRecording || !this.state.micAllowed} className='record'>
        Record
        {circle}
      </button>
      <button onClick={this.stopRecord} disabled={!this.state.isRecording || !this.state.micAllowed} className='stop'>
        Stop
      </button>
    </div>

    if(this.state.showForm) {
      form = <RecordingForm formType={'new'} currentRecording={{title: '', publicity: 'public', category_name: "Meeting"}} processForm={this.props.createRecording} errors={this.props.errors} closeForm={this.closeForm} recording={this.recording} clearRecordingErrors={this.props.clearRecordingErrors}/>;
    }

    if(this.state.recordingComplete) {
      recordingUI = null;
    }

    return(
      <div className='new-recording'>
        <h2>New Recording</h2>
          {micError}
          {recordingUI}
        <div className='sound-clips'>
        </div>
        <button onClick={this.showForm} disabled={!this.state.recordingComplete}>Save</button>
        <button onClick={this.cancel}>Cancel</button>
        {form}
      </div>
    )
  }
}

export default NewRecording;
