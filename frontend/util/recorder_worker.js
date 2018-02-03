
export default function (self) {

  let NUM_CH = 2, // constant
      sampleRate = 44100,
      options = undefined,
      maxBuffers = undefined,
      recBuffers = undefined,
      bufferCount = 0;

  function error(message) {
    self.postMessage({ command: "error", message: "mp3: " + message });
  }

  function init(data) {
    if (data.config.numChannels === NUM_CH) {
      sampleRate = data.config.sampleRate;
      options = data.options;
    } else
      error("numChannels must be " + NUM_CH);
  };

  function setOptions(opt) {
    if (recBuffers)
      error("cannot set options during recording");
    else
      options = opt;
  }

  function start(bufferSize) {
    maxBuffers = Math.ceil(options.timeLimit * sampleRate / bufferSize);
    if (options.encodeAfterRecord)
      recBuffers = [];
  }

  function record(buffer) {
    if (bufferCount++ < maxBuffers)
      recBuffers.push(buffer);
    else
      self.postMessage({ command: "timeout" });
  };

  function postProgress(progress) {
    self.postMessage({ command: "progress", progress: progress });
  };

  function finish() {
    self.postMessage({
      command: "complete",
      recBuffers,
      bufferCount
    });
    cleanup();
  };

  function cleanup() {
    recBuffers = undefined;
    bufferCount = 0;
  }

  self.onmessage = function(event) {
    let data = event.data;
    switch (data.command) {
      case "init":    init(data);                 break;
      case "options": setOptions(data.options);   break;
      case "start":   start(data.bufferSize);     break;
      case "record":  record(data.buffer);        break;
      case "finish":  finish();                   break;
      case "cancel":  cleanup();
    }
  };

  self.postMessage({ command: "loaded" });

}
