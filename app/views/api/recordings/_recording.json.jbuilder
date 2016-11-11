json.extract! recording, :id, :title, :description, :publicity, :plays, :image_url, :recording_url
json.category_name recording.category.name
json.uploader recording.uploader.username
json.is_favorite is_favorite
json.comments do
  recording.comments.each do |comment|
    json.set! comment.id do
      json.content comment.content
      json.author_name comment.author.username
    end
  end
end
