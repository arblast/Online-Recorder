export const newRecording = (recordingParams, success, error) => {
  $.ajax({
    type: 'POST',
    url: '/api/recordings',
    data: recordingParams,
    success,
    error
  });
}

export const updateRecording = (recordingParams, success, error) => {
  $.ajax({
    type: 'PATCH',
    url: `/api/recordings/${recordingParams.id}`,
    data: recordingParams,
    success,
    error
  });
}

export const deleteRecording = (recordingId, success, error) => {
  $.ajax({
    type: 'DELETE',
    url: `/api/recordings/${recordingId}`,
    success,
    error
  });
}
