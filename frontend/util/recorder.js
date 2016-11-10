// const parseWav = function(wav) {
//   debugger
//   var readInt = function(i, bytes) {
//     var ret = 0,
//       shft = 0;
//
//     while (bytes) {
//       ret += wav[i] << shft;
//       shft += 8;
//       i++;
//       bytes--;
//     }
//     return ret;
//   };
//   if (readInt(20, 2) != 1) throw 'Invalid compression code, not PCM';
//   if (readInt(22, 2) != 1) throw 'Invalid number of channels, not 1';
//   return {
//     sampleRate: readInt(24, 4),
//     bitsPerSample: readInt(34, 2),
//     samples: wav.subarray(44)
//   };
// };
//
// const convertToMP3 = function(encoderWorker, blob) {
//   var arrayBuffer;
//   var fileReader = new FileReader();
//   var convertedFile;
//   fileReader.onload = function() {
//     arrayBuffer = this.result;
//     var buffer = new Uint8Array(arrayBuffer),
//       data = parseWav(buffer);
//
//     __log("Converting to Mp3");
//
//     encoderWorker.postMessage({
//       cmd: 'init',
//       config: {
//         mode: 3,
//         channels: 1,
//         samplerate: data.sampleRate,
//         bitrate: data.bitsPerSample
//       }
//     });

//     encoderWorker.postMessage({
//       cmd: 'encode',
//       buf: Uint8ArrayToFloat32Array(data.samples)
//     });
//     encoderWorker.postMessage({
//       cmd: 'finish'
//     });
//     encoderWorker.onmessage = function(e) {
//       if (e.data.cmd == 'data') {
//
//         __log("Done converting to Mp3");
//
//         var mp3Blob = new Blob([new Uint8Array(e.data.buf)], {
//           type: 'audio/mp3'
//         });
//         convertedFile = mp3Blob;
//
//       }
//     };
//   };
//   fileReader.readAsArrayBuffer(blob);
//   return convertedFile;
// };

// const Recorder = (that) => {
//   navigator.mediaDevices.getUserMedia ({audio: true}).then((stream) => {
//     that.mediaRecorder = new MediaRecorder(stream);
//     that.mediaStream = stream;
//     let chunks = [];
//     that.mediaRecorder.ondataavailable = function(e) {
//       chunks.push(e.data);
//     }
//
//     that.mediaRecorder.onstop = function(e) {
//       console.log("recorder stopped");
//
//       const clipContainer = document.createElement('article');
//       const audio = document.createElement('audio');
//       const deleteButton = document.createElement('button');
//
//       clipContainer.classList.add('clip');
//       audio.setAttribute('controls', '');
//       deleteButton.innerHTML = "Delete";
//
//       const soundClips = document.querySelector('.sound-clips');
//       clipContainer.appendChild(audio);
//       clipContainer.appendChild(deleteButton);
//       soundClips.appendChild(clipContainer);
//
//       const blob = new Blob(chunks, { 'type' : 'audio/webm; codecs=opus' });
//       chunks = [];
//       const audioURL = window.URL.createObjectURL(blob);
//       console.log(audioURL);
//       audio.src = audioURL;
//       that.blob = blob;
//       deleteButton.onclick = function(e) {
//       const eTarget = e.target;
//       eTarget.parentNode.parentNode.removeChild(eTarget.parentNode);
//         }
//       }
//
//     }).catch(function(err) {
//         console.log('The following gUM error occured: ' + err);
//       }
//     );
//   }
import Recorder from './recorder_new';

const Rec = (that) => {
  navigator.mediaDevices.getUserMedia ({audio: true}).then((stream) => {
    const audioCtx = new AudioContext();
    const source = audioCtx.createMediaStreamSource(stream);
    that.stream = stream;
    that.recorder = new Recorder(source);
    that.audioCtx = audioCtx;
  }).catch(function(err) {
      alert('The following gUM error occured: ' + err);
      }
  );
}

export default Rec;
