class AddImageToUser < ActiveRecord::Migration
  def change
    add_column :users, :image_url, :string, null: false, default: "http://res.cloudinary.com/record-cloud/image/upload/v1478421823/profile.svg"
  end
end
