json.array! @recordings do |recording|
  json.partial! 'api/recordings/recording', recording: recording, is_favorite: recording.is_favorite?(current_user)
end
