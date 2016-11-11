class ChangeDefaultImageUrl < ActiveRecord::Migration
  def change
    change_column :users, :image_url, :string, null: false, default: "https://res.cloudinary.com/record-cloud/image/upload/v1478421823/profile.svg"
  end
end
