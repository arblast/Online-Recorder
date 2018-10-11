json.extract! recording, :id, :title, :description, :publicity, :plays, :image_url, :recording_url
json.uploader recording.uploader.username
json.upload_date recording.created_at.to_s
