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
      encodingProgress: false,
      showForm: false,
      micAllowed: true
    }
    this.showForm = this.showForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.startRecord = this.startRecord.bind(this);
    this.stopRecord = this.stopRecord.bind(this);
    this.cancel = this.cancel.bind(this);
    this.deleteClip = this.deleteClip.bind(this);
    this.recordingUI = this.recordingUI.bind(this);
    this.soundClip = this.soundClip.bind(this);
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
      this.recorder.onComplete = this.completeEncode.bind(this);
      this.recorder.onEncodingProgress = this.updateProgress.bind(this);
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
    if(this.state.encodingProgress) {
      this.recorder.cancelEncoding();
    }
    if(this.state.isRecording) {
      this.recorder.cancelRecording();
    }
    if(this.state.micAllowed) {
      this.recorder = undefined;
      this.recording = undefined;
      this.audioURL = undefined;
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
    if(this.state.micAllowed && !this.state.isRecording){
      this.setState({isRecording: true});
      this.recorder.startRecording();
    } else {
      alert("Illegal action");
    }
  }

  stopRecord() {
    this.recorder.finishRecording();
    this.setState({recordingComplete: true});
  }

  completeEncode(_, blob) {
    let recorder = this.recorder;
    this.recording = blob;
    this.audioURL = window.URL.createObjectURL(blob);
    this.setState({isRecording: false, recordingComplete: true, encodingProgress: false});
  }

  updateProgress(_, progress) {
    this.setState({encodingProgress: progress});
  }

  progressBar() {
    return (
      <div className="progress-outer">
        <div className="progress-inner" style={{width: `${this.state.encodingProgress}%`}}>
          {this.state.encodingProgress}%
        </div>
      </div>
    )
  }

  deleteClip(e) {
    const eTarget = e.target;
    this.audioURL = null;
    this.recording = null;
    this.setState({isRecording: false, recordingComplete: false});
  }

  soundClip() {
    return (
      <div className="sound-clips">
        <article className="clip">
          <AudioPlayer recordingUrl={this.audioURL} />
          <button className="delete-clip" onClick={this.deleteClip}>Delete</button>
        </article>
      </div>
    );
  }

  recordingUI() {
    if(this.state.recordingComplete) return null;
    else return (
      <div className="recording-ui">
        <button id="start-record" onClick={this.startRecord} disabled={this.state.isRecording || !this.state.micAllowed} className='record'>
          Record
          {this.state.isRecording ? <div id="circle"></div> : null}
        </button>
        <button onClick={this.stopRecord} disabled={!this.state.isRecording || !this.state.micAllowed} className='stop'>
          Stop
        </button>
      </div>
    );
  }


  render() {
    let form = null;
    let circle = null;
    let micError = null;
    if(!this.state.micAllowed) {
      micError = <div className="mic-error">Error: You did not allow this site to access your microphone.</div>;
      }
    if(this.state.showForm) {
      form = <RecordingForm formType={'new'} currentRecording={{title: '', publicity: 'public', category_name: "Meeting"}} processForm={this.props.createRecording} errors={this.props.errors} closeForm={this.closeForm} recording={this.recording} clearRecordingErrors={this.props.clearRecordingErrors}/>;
    }

    return(
      <div className='new-recording'>
        <h2 className='title'>New Recording</h2>
        {micError}
        {this.recordingUI}
        {this.audioURL ? this.soundClip() : null}
        {this.state.encodingProgress ? this.progressBar() : null}
        <button onClick={this.showForm} disabled={!this.state.recordingComplete}>Save</button>
        <button onClick={this.cancel}>Cancel</button>
        {form}
      </div>
    )
  }
}

export default NewRecording;
