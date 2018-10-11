json.extract! recording, :id, :title, :description, :publicity, :plays, :image_url, :recording_url
json.category_name recording.category.name
json.uploader recording.uploader.username
json.is_favorite is_favorite
json.upload_date recording.created_at.to_s
json.comments do
  recording.comments.each do |comment|
    json.set! comment.id do
      json.content comment.content
      json.author_name comment.author.username
      json.author_image comment.author.image_url
      json.day comment.created_at.day
      json.month Date::MONTHNAMES[comment.created_at.month]
      json.year comment.created_at.year
    end
  end
end
