const Recorder = (that) => {
  navigator.mediaDevices.getUserMedia ({audio: true}).then((stream) => {
      that.mediaRecorder = new MediaRecorder(stream);
      let chunks = [];
      that.mediaRecorder.ondataavailable = function(e) {
        chunks.push(e.data);
      }

      that.mediaRecorder.onstop = function(e) {
        console.log("recorder stopped");

        var clipContainer = document.createElement('article');
        var audio = document.createElement('audio');
        var deleteButton = document.createElement('button');

        clipContainer.classList.add('clip');
        audio.setAttribute('controls', '');
        deleteButton.innerHTML = "Delete";

        const soundClips = document.querySelector('.sound-clips');
        clipContainer.appendChild(audio);
        clipContainer.appendChild(deleteButton);
        soundClips.appendChild(clipContainer);

        var blob = new Blob(chunks, { 'type' : 'audio/wav; codecs=opus' });
        chunks = [];
        var audioURL = window.URL.createObjectURL(blob);
        audio.src = audioURL;
        console.log(audioURL);
        deleteButton.onclick = function(e) {
        evtTgt = e.target;
        evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
        }
      }

        }
      ).catch(function(err) {
         console.log('The following gUM error occured: ' + err);
      }
    );
  }

export default Recorder;
