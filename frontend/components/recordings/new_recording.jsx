import React from 'react';
import { hashHistory } from 'react-router';
import RecordingForm from './recording_form';
import Recorder from '../../util/recorder';
import cloudinary from 'cloudinary-core';
import { uploadRecording } from '../../util/recordings_api_util';
import AudioPlayer from '../audio_player';

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
    this.deleteClip = this.deleteClip.bind(this);
  }

  componentDidMount() {
    this.props.setTab('new');
    this.createAudioContext();
  }

  createAudioContext() {
    navigator.mediaDevices.getUserMedia ({audio: true}).then((stream) => {
      this.audioCtx = new AudioContext();
      this.source = this.audioCtx.createMediaStreamSource(stream);
      this.stream = stream;
      this.recorder = new Recorder(this.source);
    }).catch((err) => {
        this.setState({micAllowed: false})
        alert('The following gUM error occured: ' + err);
        }
    );
  }

  cancel(e) {
    e.preventDefault();
    hashHistory.push('/my-recordings');
  }

  componentWillUnmount() {
    if(this.state.micAllowed) {
      this.recorder.onTimeout = () => {};
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
      this.setState({isRecording: true})
      this.recorder.startRecording();
      this.recorder.onComplete = this.completeRecord;
    } else {
      alert("Illegal action");
    }
  }

  stopRecord() {
    this.recorder.finishRecording();
  }

  completeRecord(_, blob) {
    let recorder = this.recorder;
    this.recording = blob;
    const audioURL = window.URL.createObjectURL(blob);
    this.soundClips = <div className="sound-clips">
      <article className="clip">
        <AudioPlayer recordingUrl={audioURL} />
        <button className="delete-clip" onClick={this.deleteClip}>Delete</button>
      </article>
    </div>

    this.setState({isRecording: false, recordingComplete: true});
  }

  deleteClip(e) {
    const eTarget = e.target;
    this.soundClips = null;
    this.recording = null;
    this.setState({isRecording: false, recordingComplete: false});
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
        <h2 className='title'>New Recording</h2>
          {micError}
          {recordingUI}
        {this.soundClips}
        <button onClick={this.showForm} disabled={!this.state.recordingComplete}>Save</button>
        <button onClick={this.cancel}>Cancel</button>
        {form}
      </div>
    )
  }
}

export default NewRecording;
