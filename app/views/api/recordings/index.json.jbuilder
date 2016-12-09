json.array! @recordings do |recording|
  json.partial! 'api/recordings/recording', recording: recording
end
