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
      micAllowed: true,
      timeElapsed: 0
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
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
      this.source = this.audioCtx.createMediaStreamSource(stream);
      this.stream = stream;
      this.recorder = new Recorder(this.source);
      this.recorder.onComplete = this.completeEncode.bind(this);
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
    if(this.recTimer) {
      clearInterval(this.recTimer)
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
      this.setState({isRecording: true, timeElapsed: 0}, () => {
        this.startTimer();
      });
      this.recorder.startRecording();
    } else {
      alert("Illegal action");
    }
  }

  startTimer() {
    this.recTimer = setInterval(() => {
      this.setState(
        prevState => {
          return {timeElapsed: prevState.timeElapsed + 1};
        }
      )
    }, 1000);
  }

  stopRecord() {
    this.setState({isRecording: false, encodingProgress: true}, () => {
      setTimeout(() => this.recorder.finishRecording(), 300);
    });
    if(this.recTimer) {
      clearInterval(this.recTimer);
    }
  }

  completeEncode(_, blob) {
    let recorder = this.recorder;
    this.recording = blob;
    this.audioURL = window.URL.createObjectURL(blob);
    this.setState({isRecording: false, recordingComplete: true, encodingProgress: false});
  }

  deleteClip(e) {
    const eTarget = e.target;
    this.audioURL = null;
    this.recording = null;
    this.setState({isRecording: false, recordingComplete: false, encodingProgress: false});
  }

  displayTime(seconds) {
    let sec = seconds%60;
    let min = parseInt(seconds/60);
    sec = (sec < 10) ? "0" + sec : sec;
    min = (min < 10) ? "0" + min : min;
    return min + ":" + sec;
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
    if(this.state.recordingComplete || this.state.encodingProgress) return null;
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
    let micError = null;
    if(!this.state.micAllowed) {
      micError = <div className="mic-error">Error: You did not allow this site to access your microphone.</div>;
      }
    if(this.state.showForm) {
      form = <RecordingForm formType={'new'} currentRecording={{title: '', publicity: 'public', category_name: "Memo"}} processForm={this.props.createRecording} errors={this.props.errors} closeForm={this.closeForm} recording={this.recording} clearRecordingErrors={this.props.clearRecordingErrors} categories={this.props.categories}/>;
    }
    return(
      <div className='new-recording'>
        <h2 className='title'>New Recording</h2>
        {micError}
        {this.state.isRecording ?
          <div className="progress">{this.displayTime(this.state.timeElapsed)}</div>
          : null
        }
        {this.state.encodingProgress ?
          <div className="progress">Encoding in progress...</div>
          : null
        }
        {this.recordingUI()}
        {this.audioURL ? this.soundClip() : null}
        <button onClick={this.showForm} disabled={!this.state.recordingComplete}>Save</button>
        <button onClick={this.cancel}>Cancel</button>
        {form}
      </div>
    )
  }
}

export default NewRecording;
