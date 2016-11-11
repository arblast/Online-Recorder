class Favorite < ActiveRecord::Base

    validates :user_id, uniqueness: {scope: :recording_id}

    belongs_to :recording
    belongs_to :user
end
