import React from 'react';
import { hashHistory } from 'react-router';
import RecordingForm from './recording_form';
import Recorder from '../../util/recorder';

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
  }

  componentDidMount() {
    // navigator.mediaDevices.getUserMedia ({audio: true}).then((stream) => {
    //   this.mediaRecorder = new MediaRecorder(stream);
    //   let chunks = [];
    //   this.mediaRecorder.ondataavailable = function(e) {
    //     chunks.push(e.data);
    //   }
    //
    //   this.mediaRecorder.onstop = function(e) {
    //     console.log("recorder stopped");
    //
    //     var clipContainer = document.createElement('article');
    //     var audio = document.createElement('audio');
    //     var deleteButton = document.createElement('button');
    //
    //     clipContainer.classList.add('clip');
    //     audio.setAttribute('controls', '');
    //     deleteButton.innerHTML = "Delete";
    //
    //     const soundClips = document.querySelector('.sound-clips');
    //     clipContainer.appendChild(audio);
    //     clipContainer.appendChild(deleteButton);
    //     soundClips.appendChild(clipContainer);
    //
    //     var blob = new Blob(chunks, { 'type' : 'audio/wav; codecs=opus' });
    //     chunks = [];
    //     var audioURL = window.URL.createObjectURL(blob);
    //     audio.src = audioURL;
    //     console.log(audioURL);
    //     deleteButton.onclick = function(e) {
    //     evtTgt = e.target;
    //     evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
    //     }
    //   }
    //
    //     }
    //   ).catch(function(err) {
    //      console.log('The following gUM error occured: ' + err);
    //   }
    // );
    Recorder(this);
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
