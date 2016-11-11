class AddIndexToCommentsAndFavorites < ActiveRecord::Migration
  def change
    add_index :favorites, :user_id
    add_index :favorites, :recording_id
    add_index :favorites, [:user_id, :recording_id], unique: true
    add_index :comments, :recording_id
  end
end
