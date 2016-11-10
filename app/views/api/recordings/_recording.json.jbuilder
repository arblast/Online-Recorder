json.extract! recording, :id, :title, :description, :publicity, :plays, :image_url, :recording_url
json.category_name recording.category.name
json.uploader recording.uploader.username
