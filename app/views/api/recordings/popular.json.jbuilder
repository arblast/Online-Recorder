@recordings.each do |cat, top10|
  json.set! cat do
    json.array! top10 do |recording|
      json.partial! 'api/recordings/recording', recording: recording
    end
  end
end
