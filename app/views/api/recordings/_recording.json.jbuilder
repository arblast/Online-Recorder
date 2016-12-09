json.extract! recording, :id, :title, :description, :publicity, :plays, :image_url, :recording_url
json.uploader recording.uploader.username
json.set! "upload_date" do
  json.day recording.created_at.day
  json.month Date::MONTHNAMES[recording.created_at.month]
  json.year recording.created_at.year
end
