export const newRecording = (recordingParams, success, error) => {
  $.ajax({
    type: 'POST',
    url: '/api/recordings',
    data: recordingParams,
    success,
    error
  });
};

export const updateRecording = (recordingParams, success, error) => {
  $.ajax({
    type: 'PATCH',
    url: `/api/recordings/${recordingParams.recording.id}`,
    data: recordingParams,
    success,
    error
  });
};

export const deleteRecording = (recordingId, success, error) => {
  $.ajax({
    type: 'DELETE',
    url: `/api/recordings/${recordingId}`,
    success,
    error
  });
};

export const fetchRecordings = (requestParams, success, error) => {
  $.ajax({
    type: 'GET',
    url: '/api/recordings',
    data: requestParams,
    success,
    error
  });
};

export const fetchRecording = (recordingId, success, error) => {
  $.ajax({
    type: 'GET',
    url: `/api/recordings/${recordingId}`,
    success,
    error
  });
};
