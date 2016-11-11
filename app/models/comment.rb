class Comment < ActiveRecord::Base

  validates :content, :author_id, :recording_id, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :recording

end
