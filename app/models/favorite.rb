class Favorite < ActiveRecord::Base

    validates :user_id, uniqueness: {scope: :recording_id}
    validates :user_id, :recording_id, presence: true

    belongs_to :recording
    belongs_to :user
end
