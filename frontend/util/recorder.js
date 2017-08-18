import Recorder from './recorder_worker';

const Rec = (that) => {
  navigator.mediaDevices.getUserMedia ({audio: true}).then((stream) => {
    const audioCtx = new AudioContext();
    const source = audioCtx.createMediaStreamSource(stream);
    that.stream = stream;
    that.recorder = new Recorder(source);
    that.audioCtx = audioCtx;
  }).catch(function(err) {
      that.setState({micAllowed: false})
      alert('The following gUM error occured: ' + err);
      }
  );
}

export default Rec;
